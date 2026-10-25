"""Secure, opt-in VECrop desktop content and binary update checks.

Only public docs/config get synced from an immutable GitHub commit.
The app binary is NEVER executed, downloaded or overwritten by this updater.
Experiment data remain in the separate browser/WebView2 storage profile.
"""
from __future__ import annotations

import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import tempfile
import threading
from urllib.parse import quote
from urllib.request import Request, urlopen

REPO = "Form997/VECrop"
API = f"https://api.github.com/repos/{REPO}"
RAW = f"https://raw.githubusercontent.com/{REPO}"
RELEASE = f"https://github.com/{REPO}/releases/latest"
MAX_FILES = 1200
MAX_SIZE = 3_000_000
MAX_TOTAL = 48_000_000
SUFFIXES = {".md", ".json", ".csv", ".txt"}
ALLOWED_FOLDERS = ("docs/", "config/")


def appdata_root() -> Path:
    base = os.getenv("LOCALAPPDATA")
    if not base:
        base = str(Path.home() / ".local" / "share")
    return Path(base) / "VECropDesktop"


def is_public_content(path: str) -> bool:
    """Permit only portable, science-content paths, not scripts or private files."""
    if not isinstance(path, str) or len(path) > 240:
        return False
    if "\\" in path or ":" in path or "\x00" in path:
        return False
    parts = PurePosixPath(path).parts
    if any(x in (".", "..") or x.startswith(".") for x in parts):
        return False
    return (path.startswith(ALLOWED_FOLDERS)
            and len(parts) >= 2
            and PurePosixPath(path).suffix.lower() in SUFFIXES)


def git_blob_sha(data: bytes) -> str:
    return hashlib.sha1(
        f"blob {len(data)}\x00".encode("ascii") + data
    ).hexdigest()


def get_json(url: str, timeout: int = 12) -> dict:
    request = Request(url, headers={
        "Accept": "application/vnd.github+json",
        "User-Agent": "VECropDesktopUpdater/1.0",
    })
    with urlopen(request, timeout=timeout) as response:
        raw = response.read(4_000_000 + 1)
    if len(raw) > 4_000_000:
        raise ValueError("Response from update service too large")
    return json.loads(raw.decode("utf-8"))


def fetch_blob(revision: str, path: str) -> bytes:
    if not re.fullmatch(r"[0-9a-f]{40}", revision) or not is_public_content(path):
        raise ValueError("Unsafe GitHub revision or file path")
    quoted = "/".join(quote(chunk, safe="") for chunk in path.split("/"))
    request = Request(f"{RAW}/{revision}/{quoted}",
                      headers={"User-Agent": "VECropDesktopUpdater/1.0"})
    with urlopen(request, timeout=20) as response:
        data = response.read(MAX_SIZE + 1)
    if len(data) > MAX_SIZE:
        raise ValueError(f"Source file too large: {path}")
    return data


def validate_tree(tree: dict) -> list[dict]:
    if tree.get("truncated"):
        raise ValueError("GitHub tree truncated: refusing partial update")
    eligible = []
    for item in tree.get("tree", []):
        path = item.get("path", "")
        if item.get("type") != "blob" or not is_public_content(path):
            continue
        size = item.get("size", -1)
        sha = item.get("sha", "")
        if not isinstance(size, int) or not 0 <= size <= MAX_SIZE:
            raise ValueError(f"Unexpected content size: {path}")
        if not re.fullmatch(r"[0-9a-f]{40}", str(sha)):
            raise ValueError(f"Missing GitHub content hash: {path}")
        eligible.append({"path": path, "sha": sha, "size": size})
    if len(eligible) > MAX_FILES or sum(x["size"] for x in eligible) > MAX_TOTAL:
        raise ValueError("Scientific-content update exceeds safety limits")
    if not any(item["path"] == "docs/01-chapter-1.md" for item in eligible):
        raise ValueError("No main textbook file in update manifest")
    return eligible


class Updater:
    def __init__(self, bundle_root: Path, data_root: Path | None = None):
        self.bundle_root = Path(bundle_root)
        self.root = data_root if data_root is not None else appdata_root()
        self.root.mkdir(parents=True, exist_ok=True)
        self.lock = threading.Lock()
        self.mode = "idle"
        self.error = ""
        self.message = "Bản học liệu đóng gói có thể sử dụng offline."
        self.release_state = "unchecked"
        self.release_url = RELEASE
        self.release_tag = ""
        self.release_sha = ""
        self.build = self._read_build()

    def _read_build(self) -> dict:
        try:
            data = json.loads((self.bundle_root / "desktop-build.json").read_text(encoding="utf-8"))
            return {"sha": str(data.get("sha", "")), "run_number": int(data.get("run_number", 0))}
        except (OSError, ValueError, TypeError):
            return {"sha": "", "run_number": 0}

    def _manifest(self) -> dict:
        try:
            data = json.loads((self.root / "current-content.json").read_text(encoding="utf-8"))
            rev = data.get("revision", "")
            if re.fullmatch(r"[0-9a-f]{40}", rev):
                p = self.root / "content-revisions" / rev
                if p.is_dir():
                    return data
        except (OSError, ValueError, TypeError):
            pass
        return {}

    def content_root(self) -> Path | None:
        manifest = self._manifest()
        if manifest:
            return self.root / "content-revisions" / manifest["revision"]
        return None

    def path_for(self, rel: str) -> Path | None:
        if not is_public_content(rel):
            return None
        current = self.content_root()
        if current is None:
            return None
        file = current / rel
        return file if file.is_file() else None

    def summary(self) -> dict:
        return {
            "mode": self.mode,
            "message": self.message,
            "error": self.error,
            "release_state": self.release_state,
            "release_tag": self.release_tag,
            "release_url": self.release_url,
            "current_run_number": self.build["run_number"],
            "active_content_revision": self._manifest().get("revision", ""),
        }

    def check_release(self) -> None:
        try:
            r = get_json(f"{API}/releases/latest")
            tag = str(r.get("tag_name", ""))
            release_run = int(tag.removeprefix("desktop-r")) if re.fullmatch(r"desktop-r\d+", tag) else 0
            assets = r.get("assets", [])
            has_binary = any(a.get("name") == "VECrop-Desktop.exe" for a in assets)
            if not release_run or not has_binary:
                self.release_state = "unavailable"
            elif release_run > self.build["run_number"]:
                self.release_state = "available"
            else:
                self.release_state = "current"
            url = r.get("html_url", "")
            if isinstance(url, str) and url.startswith(f"https://github.com/{REPO}/releases/"):
                self.release_url = url
            self.release_tag = tag
            self.release_sha = str(r.get("target_commitish", ""))
        except Exception as exc:
            self.release_state = "offline"
            self.error = "Không thể kiểm tra phiên bản trực tuyến: " + str(exc)[:160]

    def start_release_check(self) -> None:
        self.release_state = "checking"
        threading.Thread(target=self.check_release, daemon=True).start()

    def start_sync(self) -> bool:
        with self.lock:
            if self.mode == "syncing":
                return False
            self.mode = "syncing"
            self.error = ""
            self.message = "Đang kiểm tra và đồng bộ học liệu từ GitHub…"
        threading.Thread(target=self._sync_thread, daemon=True).start()
        return True

    def _sync_thread(self) -> None:
        try:
            new_revision, count = self.sync()
            self.mode = "ready"
            self.message = (f"Đã đồng bộ {count} tệp từ commit {new_revision[:12]}. "
                            "Tải lại trang để áp dụng học liệu mới.")
        except Exception as exc:
            self.mode = "failed"
            self.error = str(exc)[:250]
            self.message = "Cập nhật thất bại; vẫn sử dụng học liệu cũ, không mất bản nháp."

    def sync(self) -> tuple[str, int]:
        commit = get_json(f"{API}/commits/main")
        revision = str(commit.get("sha", ""))
        tree_sha = str(commit.get("commit", {}).get("tree", {}).get("sha", ""))
        if not re.fullmatch(r"[0-9a-f]{40}", revision) or not re.fullmatch(r"[0-9a-f]{40}", tree_sha):
            raise ValueError("GitHub commit signature malformed")
        result = get_json(f"{API}/git/trees/{tree_sha}?recursive=1")
        items = validate_tree(result)
        current = self._manifest()
        if current.get("revision") == revision:
            return revision, 0
        revision_dir = self.root / "content-revisions" / revision
        if revision_dir.exists():
            # Safe recovery from a prior successful staging followed by a pointer-write failure.
            complete = all((revision_dir / x["path"]).is_file() for x in items)
            if not complete:
                raise ValueError("Incomplete existing revision; cannot activate")
        else:
            folder = self.root / "content-revisions"
            folder.mkdir(parents=True, exist_ok=True)
            stage = Path(tempfile.mkdtemp(prefix="staging-", dir=folder))
            try:
                for item in items:
                    path = item["path"]
                    destination = stage / path
                    destination.parent.mkdir(parents=True, exist_ok=True)
                    old_root = self.content_root()
                    old_sha = current.get("files", {}).get(path)
                    if old_root and old_sha == item["sha"] and (old_root / path).is_file():
                        content = (old_root / path).read_bytes()
                    else:
                        content = fetch_blob(revision, path)
                    if git_blob_sha(content) != item["sha"]:
                        raise ValueError(f"Checksum mismatch: {path}")
                    destination.write_bytes(content)
                stage.replace(revision_dir)
            finally:
                if stage.exists():
                    shutil.rmtree(stage, ignore_errors=True)
        pointer = {"revision": revision, "files": {i["path"]: i["sha"] for i in items}}
        with tempfile.NamedTemporaryFile(
            mode="w", encoding="utf-8", dir=self.root, prefix="pointer-",
            suffix=".tmp", delete=False
        ) as handle:
            temp_name = handle.name
            json.dump(pointer, handle, ensure_ascii=False)
        os.replace(temp_name, self.root / "current-content.json")
        return revision, len(items)
