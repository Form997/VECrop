#!/usr/bin/env python3
"""VECrop field-experiment input audit.

Read-only checks for structure, dimensions and obvious inconsistencies.
A passing result DOES NOT establish scientific validation or measurement accuracy.
Uses Python's standard library only.
"""
from __future__ import annotations

import json
import math
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

REQUIRED = (
    "experiment_id", "title", "start_date", "site", "production_system",
    "crop_name", "cultivar", "design", "treatment_count", "replicate_count",
    "treatments", "soil_or_substrate", "weather_source",
)
OBS_REQUIRED = ("datetime", "treatment", "replicate", "variable", "value", "unit")


def _filled(x: Any) -> bool:
    return x is not None and str(x).strip() != ""


def _numeric(raw: Any) -> float | None:
    if not _filled(raw):
        return None
    try:
        value = float(raw)
    except (ValueError, TypeError):
        return math.nan
    return value if math.isfinite(value) else math.nan


def _date(raw: Any) -> datetime | None:
    if not _filled(raw):
        return None
    try:
        return datetime.fromisoformat(str(raw).replace("Z", "+00:00"))
    except ValueError:
        return None


def validate(data: dict[str, Any]) -> dict[str, Any]:
    errors: list[str] = []
    warnings: list[str] = []
    for key in REQUIRED:
        if not _filled(data.get(key)):
            errors.append(f"missing:{key}")
    for key in ("treatment_count", "replicate_count"):
        n = _numeric(data.get(key))
        if n is not None and (math.isnan(n) or n < 1 or not n.is_integer()):
            errors.append(f"invalid_positive_integer:{key}")
    ranges = {
        "soil_ph": (0.0, 14.0),
        "soil_ec": (0.0, None),
        "yield_value": (0.0, None),
        "marketable_fraction": (0.0, 100.0),
        "dmf": (0.0, 1.0),
        "plot_area": (0.0, None),
        "density_value": (0.0, None),
    }
    for key, (lo, hi) in ranges.items():
        n = _numeric(data.get(key))
        if n is None:
            continue
        if math.isnan(n) or n < lo or (hi is not None and n > hi) or (
            key in {"dmf", "plot_area", "density_value"} and n == 0
        ):
            errors.append(f"invalid_range:{key}")
    for value_key, unit_key in (
        ("soil_ec", "soil_ec_unit"), ("yield_value", "yield_unit"),
        ("initial_water", "initial_water_unit"),
        ("density_value", "density_unit"), ("plot_area", "plot_area_unit"),
    ):
        if _filled(data.get(value_key)) and not _filled(data.get(unit_key)):
            warnings.append(f"unit_missing:{value_key}")
    start, end = _date(data.get("start_date")), _date(data.get("end_date"))
    if _filled(data.get("start_date")) and start is None:
        errors.append("invalid_date:start_date")
    if _filled(data.get("end_date")) and end is None:
        errors.append("invalid_date:end_date")
    if start and end and end < start:
        errors.append("end_before_start")
    if not _filled(data.get("protocol")):
        warnings.append("protocol_missing")
    if not _filled(data.get("instruments")):
        warnings.append("instruments_missing")
    if not _filled(data.get("references")):
        warnings.append("references_missing")
    if not _filled(data.get("instrument_calibration")):
        warnings.append("instrument_calibration_missing")
    if not _filled(data.get("raw_data_source")):
        warnings.append("raw_data_source_missing")

    raw_rows = data.get("observations", [])
    if not isinstance(raw_rows, list):
        errors.append("observations_not_array")
        raw_rows = []
    rows = [
        row for row in raw_rows
        if isinstance(row, dict) and any(_filled(value) for value in row.values())
    ]
    if len(rows) != len(raw_rows):
        if any(not isinstance(r, dict) for r in raw_rows):
            errors.append("malformed_observation")
    if not rows:
        warnings.append("no_observations")
    seen: set[tuple[str, ...]] = set()
    variable_units: dict[str, str] = {}
    treatments: set[str] = set()
    replicates: set[str] = set()
    for index, row in enumerate(rows, 1):
        for field in OBS_REQUIRED:
            if not _filled(row.get(field)):
                errors.append(f"observation_{index}_missing:{field}")
        key = tuple(str(row.get(k, "")).strip().lower() for k in
                    ("datetime", "treatment", "replicate", "variable"))
        if all(key):
            if key in seen:
                errors.append(f"observation_{index}_duplicate")
            seen.add(key)
        if _filled(row.get("treatment")):
            treatments.add(str(row["treatment"]).strip())
        if _filled(row.get("replicate")):
            replicates.add(str(row["replicate"]).strip())
            r = _numeric(row["replicate"])
            if r is None or math.isnan(r) or r < 1 or not r.is_integer():
                errors.append(f"observation_{index}_invalid_replicate")
        value = _numeric(row.get("value"))
        if _filled(row.get("value")) and value is not None and math.isnan(value):
            errors.append(f"observation_{index}_nonnumeric")
        var = str(row.get("variable", "")).strip().lower()
        unit = str(row.get("unit", "")).strip().lower()
        if var and unit:
            prev = variable_units.setdefault(var, unit)
            if prev != unit:
                warnings.append(f"observation_{index}_mixed_unit:{var}")
        if value is not None and math.isfinite(value):
            if var in {"ph", "soil_ph", "solution_ph"} and not 0 <= value <= 14:
                errors.append(f"observation_{index}_ph_out_of_range")
            if (var == "ec" or var.endswith("_ec") or
                "conductivity" in var) and value < 0:
                errors.append(f"observation_{index}_negative_ec")
        when = _date(row.get("datetime"))
        if _filled(row.get("datetime")) and when is None:
            errors.append(f"observation_{index}_invalid_datetime")
        elif when:
            day = when.date()
            if start and day < start.date():
                warnings.append(f"observation_{index}_before_start")
            if end and day > end.date():
                warnings.append(f"observation_{index}_after_end")
    tc = _numeric(data.get("treatment_count"))
    if tc is not None and math.isfinite(tc) and len(treatments) > tc:
        errors.append("observed_treatments_exceed_declared")
    rc = _numeric(data.get("replicate_count"))
    if rc is not None and math.isfinite(rc) and len(replicates) > rc:
        warnings.append("observed_replicates_exceed_declared")
    if data.get("dataset_role") == "independent_validation" and not data.get("reviewer"):
        warnings.append("independent_validation_without_reviewer")
    return {
        "valid": not errors,
        "status": "incomplete" if errors else (
            "structure_checked_not_scientifically_validated" if rows else "metadata_only"
        ),
        "observation_count": len(rows),
        "treatment_count_observed": len(treatments),
        "replicate_count_observed": len(replicates),
        "errors": errors,
        "warnings": list(dict.fromkeys(warnings)),
        "note": "Structure QC is not independent scientific validation. Literature is not measured data.",
    }


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python python/experiment_validator.py experiment.json", file=sys.stderr)
        return 2
    try:
        dataset = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8-sig"))
        if not isinstance(dataset, dict):
            raise ValueError("Expected a JSON object")
        report = validate(dataset)
    except (OSError, UnicodeError, ValueError) as exc:
        print(json.dumps({"valid": False, "error": str(exc)}, ensure_ascii=False))
        return 2
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if report["valid"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
