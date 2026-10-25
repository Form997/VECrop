"""VECrop DATA repository: durable local SQLite for scientific experiments.

The public-content updater and PyInstaller extraction cannot touch this DB.
Every save is versioned and checks expected_revision to prevent lost updates.
No observations are invented, normalized away, or silently reclassified.
"""
from __future__ import annotations

from contextlib import contextmanager, closing
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import re
import sqlite3
import tempfile
import os

SCHEMA_VERSION = 1
MAX_JSON_BYTES = 4_000_000
MAX_OBSERVATIONS = 20_000
MAX_REVISIONS_PER_EXPERIMENT = 50
ID_PATTERN = re.compile(r"^[^\x00-\x1f\x7f/\\]{1,120}$")


def now_utc() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


class DataError(ValueError):
    pass


class RevisionConflict(DataError):
    pass


class DataStore:
    def __init__(self, home: Path):
        self.home = Path(home)
        self.data_dir = self.home / "data"
        self.backup_dir = self.home / "backups"
        self.data_dir.mkdir(parents=True, exist_ok=True)
        self.db_path = self.data_dir / "vecrop.sqlite3"
        self.initialize()

    @contextmanager
    def connection(self):
        con = sqlite3.connect(str(self.db_path), timeout=20, isolation_level=None)
        con.row_factory = sqlite3.Row
        con.execute("PRAGMA busy_timeout=20000")
        con.execute("PRAGMA foreign_keys=ON")
        con.execute("PRAGMA journal_mode=WAL")
        try:
            yield con
        finally:
            con.close()

    def initialize(self) -> None:
        with self.connection() as conn:
            conn.executescript("""
                CREATE TABLE IF NOT EXISTS schema_info (
                    key TEXT PRIMARY KEY,
                    value TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS experiments (
                    id TEXT PRIMARY KEY,
                    title TEXT NOT NULL,
                    crop_name TEXT NOT NULL,
                    province TEXT NOT NULL,
                    role TEXT NOT NULL,
                    revision INTEGER NOT NULL CHECK(revision > 0),
                    payload_json TEXT NOT NULL,
                    payload_sha256 TEXT NOT NULL,
                    created_at TEXT NOT NULL,
                    updated_at TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS experiment_revisions (
                    id TEXT NOT NULL REFERENCES experiments(id) ON DELETE CASCADE,
                    revision INTEGER NOT NULL,
                    payload_sha256 TEXT NOT NULL,
                    payload_json TEXT NOT NULL,
                    changed_at TEXT NOT NULL,
                    PRIMARY KEY(id,revision)
                );
                CREATE TABLE IF NOT EXISTS observations (
                    experiment_id TEXT NOT NULL REFERENCES experiments(id)
                        ON DELETE CASCADE,
                    row_index INTEGER NOT NULL,
                    sampled_at TEXT NOT NULL,
                    treatment TEXT NOT NULL,
                    replicate TEXT NOT NULL,
                    variable TEXT NOT NULL,
                    measured_value TEXT NOT NULL,
                    unit TEXT NOT NULL,
                    method TEXT NOT NULL,
                    qc TEXT NOT NULL,
                    PRIMARY KEY(experiment_id,row_index)
                );
                CREATE INDEX IF NOT EXISTS observations_by_variable
                    ON observations(experiment_id,variable,sampled_at);
                CREATE TABLE IF NOT EXISTS provenance (
                    experiment_id TEXT NOT NULL REFERENCES experiments(id)
                        ON DELETE CASCADE,
                    row_index INTEGER NOT NULL,
                    kind TEXT NOT NULL,
                    doi TEXT NOT NULL,
                    source TEXT NOT NULL,
                    source_json TEXT NOT NULL,
                    PRIMARY KEY(experiment_id,row_index)
                );
                CREATE TABLE IF NOT EXISTS audit_log (
                    event_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    experiment_id TEXT NOT NULL,
                    revision INTEGER NOT NULL,
                    action TEXT NOT NULL,
                    payload_sha256 TEXT NOT NULL,
                    created_at TEXT NOT NULL
                );
            """)
            current = conn.execute(
                "SELECT value FROM schema_info WHERE key='schema_version'"
            ).fetchone()
            if current is None:
                conn.execute("INSERT INTO schema_info(key,value) VALUES (?,?)",
                             ("schema_version", str(SCHEMA_VERSION)))
            elif int(current["value"]) > SCHEMA_VERSION:
                raise DataError("DATA was created by a newer app; refusing downgrade")

    @staticmethod
    def encode_payload(payload: dict) -> tuple[str, str, str, list, list]:
        if not isinstance(payload, dict):
            raise DataError("Hồ sơ phải là JSON object.")
        identifier = payload.get("experiment_id", "")
        if not isinstance(identifier, str) or not ID_PATTERN.fullmatch(identifier.strip()):
            raise DataError("Cần mã thí nghiệm từ 1–120 ký tự, không chứa dấu / hoặc \\.")
        identifier = identifier.strip()
        rows = payload.get("observations", [])
        if not isinstance(rows, list) or len(rows) > MAX_OBSERVATIONS:
            raise DataError("Quan trắc phải là mảng không quá 20.000 dòng.")
        if not all(isinstance(row, dict) for row in rows):
            raise DataError("Có dòng quan trắc không phải object.")
        sources = payload.get("literature_sources", [])
        if not isinstance(sources, list) or len(sources) > 2000:
            raise DataError("Nguồn tham khảo phải là mảng không quá 2.000 mục.")
        if not all(isinstance(source, dict) for source in sources):
            raise DataError("Nguồn tham khảo chứa mục không hợp lệ.")
        # Preserve actual recorded strings and numeric values (including missing data);
        # metadata are not inferred or filled automatically.
        try:
            encoded = json.dumps(payload, ensure_ascii=False, sort_keys=True,
                                 separators=(",", ":"), allow_nan=False)
        except (TypeError, ValueError) as exc:
            raise DataError("Hồ sơ JSON chứa giá trị không hợp lệ.") from exc
        if len(encoded.encode("utf-8")) > MAX_JSON_BYTES:
            raise DataError("Bộ thí nghiệm vượt 4 MB; hãy chia theo vụ/ô.")
        return identifier, encoded, hashlib.sha256(encoded.encode("utf-8")).hexdigest(), rows, sources

    def list_experiments(self, limit: int = 100) -> list[dict]:
        limit = max(1, min(500, int(limit)))
        with self.connection() as conn:
            items = conn.execute("""
                SELECT id,title,crop_name,province,role,revision,
                       payload_sha256,created_at,updated_at,
                       (SELECT count(*) FROM observations WHERE experiment_id = experiments.id) AS observations
                FROM experiments ORDER BY updated_at DESC LIMIT ?
            """, (limit,)).fetchall()
            return [dict(x) for x in items]

    def get_experiment(self, identifier: str) -> dict:
        with self.connection() as conn:
            item = conn.execute(
                "SELECT id,revision,payload_json,payload_sha256,updated_at FROM experiments WHERE id=?",
                (identifier,)
            ).fetchone()
        if item is None:
            raise DataError("Không tìm thấy mã thí nghiệm trong DATA.")
        return {"id": item["id"], "revision": item["revision"],
                "payload": json.loads(item["payload_json"]),
                "sha256": item["payload_sha256"],
                "updated_at": item["updated_at"]}

    def save_experiment(self, payload: dict, expected_revision: int) -> dict:
        if type(expected_revision) is not int or expected_revision < 0:
            raise DataError("Phải có expected_revision là số nguyên không âm.")
        identifier, encoded, checksum, rows, sources = self.encode_payload(payload)
        timestamp = now_utc()
        with self.connection() as conn:
            conn.execute("BEGIN IMMEDIATE")
            try:
                previous = conn.execute(
                    "SELECT revision,payload_sha256,created_at FROM experiments WHERE id=?",
                    (identifier,)
                ).fetchone()
                actual = previous["revision"] if previous else 0
                if actual != expected_revision:
                    raise RevisionConflict(
                        f"Xung đột phiên bản: bộ DATA đang ở #{actual}, trình nhập ở #{expected_revision}. "
                        "Hãy mở bản đã lưu trước khi sửa; không ghi đè tự động."
                    )
                if previous and previous["payload_sha256"] == checksum:
                    conn.commit()
                    return {"id": identifier, "revision": actual,
                            "sha256": checksum, "unchanged": True}
                revision = actual + 1
                title = str(payload.get("title") or "").strip()[:240]
                crop = str(payload.get("crop_name") or "").strip()[:140]
                province = str(payload.get("site_province") or "").strip()[:140]
                role = str(payload.get("dataset_role") or "raw_observations")[:60]
                if previous is None:
                    conn.execute("""
                        INSERT INTO experiments
                        (id,title,crop_name,province,role,revision,payload_json,
                        payload_sha256,created_at,updated_at)
                        VALUES (?,?,?,?,?,?,?,?,?,?)
                    """, (identifier,title,crop,province,role,revision,encoded,
                          checksum,timestamp,timestamp))
                else:
                    conn.execute("""
                        UPDATE experiments SET title=?,crop_name=?,province=?,role=?,
                        revision=?,payload_json=?,payload_sha256=?,updated_at=? WHERE id=?
                    """, (title,crop,province,role,revision,encoded,checksum,timestamp,
                          identifier))
                conn.execute("""
                    INSERT INTO experiment_revisions
                        (id,revision,payload_sha256,payload_json,changed_at)
                        VALUES (?,?,?,?,?)
                """, (identifier,revision,checksum,encoded,timestamp))
                conn.execute("DELETE FROM observations WHERE experiment_id=?", (identifier,))
                for index,row in enumerate(rows):
                    if not any(str(v).strip() for v in row.values() if v is not None):
                        continue
                    conn.execute("""
                        INSERT INTO observations
                        (experiment_id,row_index,sampled_at,treatment,replicate,
                        variable,measured_value,unit,method,qc)
                        VALUES (?,?,?,?,?,?,?,?,?,?)
                    """, (identifier,index,
                          str(row.get("datetime") or "")[:60],
                          str(row.get("treatment") or "")[:140],
                          str(row.get("replicate") or "")[:40],
                          str(row.get("variable") or "")[:140],
                          str(row.get("value") if row.get("value") is not None else "")[:150],
                          str(row.get("unit") or "")[:80],
                          str(row.get("method") or "")[:500],
                          str(row.get("qc") or "")[:160]))
                conn.execute("DELETE FROM provenance WHERE experiment_id=?", (identifier,))
                for index,src in enumerate(sources):
                    conn.execute("""
                        INSERT INTO provenance
                        (experiment_id,row_index,kind,doi,source,source_json)
                        VALUES (?,?,?,?,?,?)
                    """, (identifier,index,str(src.get("kind") or "")[:80],
                          str(src.get("doi") or "")[:220],
                          str(src.get("source") or "")[:220],
                          json.dumps(src,ensure_ascii=False,sort_keys=True,
                                     separators=(",", ":"))))
                conn.execute("""
                    INSERT INTO audit_log
                    (experiment_id,revision,action,payload_sha256,created_at)
                    VALUES (?,?,?,?,?)
                """, (identifier,revision,"save",checksum,timestamp))
                # Keep a bounded edit-history; snapshots are never fabricated.
                conn.execute("""
                    DELETE FROM experiment_revisions
                    WHERE id=? AND revision<=?
                """, (identifier,revision-MAX_REVISIONS_PER_EXPERIMENT))
                conn.commit()
            except Exception:
                conn.rollback()
                raise
        return {"id": identifier, "revision": revision,
                "sha256": checksum, "unchanged": False}

    def list_revisions(self, identifier: str) -> list[dict]:
        with self.connection() as conn:
            rows = conn.execute("""
                SELECT revision,payload_sha256,changed_at FROM experiment_revisions
                WHERE id=? ORDER BY revision DESC LIMIT ?
            """, (identifier, MAX_REVISIONS_PER_EXPERIMENT)).fetchall()
        return [dict(r) for r in rows]

    def get_revision(self, identifier: str, revision: int) -> dict:
        if type(revision) is not int or revision < 1:
            raise DataError("Phiên bản không hợp lệ.")
        with self.connection() as conn:
            row = conn.execute("""
                SELECT payload_json,payload_sha256,changed_at FROM experiment_revisions
                WHERE id=? AND revision=?
            """, (identifier,revision)).fetchone()
        if not row:
            raise DataError("Không tìm thấy phiên bản đã lưu.")
        return {"id": identifier,"revision":revision,
                "payload":json.loads(row["payload_json"]),
                "sha256":row["payload_sha256"],"changed_at":row["changed_at"]}

    def backup(self, destination: Path | None = None) -> Path:
        self.backup_dir.mkdir(parents=True, exist_ok=True)
        if destination is None:
            name = datetime.now(timezone.utc).strftime("VECrop-DATA-%Y%m%d-%H%M%S-%f.sqlite3")
            destination = self.backup_dir / name
        destination = Path(destination)
        destination.parent.mkdir(parents=True, exist_ok=True)
        # Standard SQLite online backup API; safe with WAL and active readers/writers.
        with self.connection() as src:
            with closing(sqlite3.connect(str(destination))) as dst:
                src.backup(dst, pages=128, sleep=0.05)
                dst.commit()
        return destination

    def counts(self) -> dict:
        with self.connection() as conn:
            datasets = conn.execute("SELECT count(*) FROM experiments").fetchone()[0]
            observations = conn.execute("SELECT count(*) FROM observations").fetchone()[0]
            sources = conn.execute("SELECT count(*) FROM provenance").fetchone()[0]
        return {"experiments": datasets,"observations": observations,
                "sources": sources,"schema_version": SCHEMA_VERSION,
                "database_path": str(self.db_path)}
