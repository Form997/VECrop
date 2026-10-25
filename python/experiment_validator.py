#!/usr/bin/env python3
"""Validate VECrop practical experiment JSON datasets."""
from __future__ import annotations
import json, sys
from pathlib import Path

REQUIRED=["experiment_id","title","start_date","site","production_system","crop_name",
"cultivar","design","treatment_count","replicate_count","treatments","soil_or_substrate","weather_source"]
OBS_REQUIRED=["datetime","treatment","replicate","variable","value","unit"]

def validate(d):
    errors=[]; warnings=[]
    for k in REQUIRED:
        if d.get(k) in (None,""): errors.append(f"missing:{k}")
    if d.get("soil_ec") not in (None,"") and not d.get("soil_ec_unit"):
        warnings.append("soil_ec_unit_missing")
    if d.get("yield_value") not in (None,"") and not d.get("yield_unit"):
        warnings.append("yield_unit_missing")
    for i,row in enumerate(d.get("observations",[]),1):
        for k in OBS_REQUIRED:
            if row.get(k) in (None,""): errors.append(f"observation_{i}_missing:{k}")
    if not d.get("protocol"): warnings.append("protocol_missing")
    if not d.get("instruments"): warnings.append("instruments_missing")
    return {"valid":not errors,"errors":errors,"warnings":warnings}

def main():
    if len(sys.argv)!=2:
        raise SystemExit("Usage: python python/experiment_validator.py experiment.json")
    p=Path(sys.argv[1])
    d=json.loads(p.read_text(encoding="utf-8"))
    print(json.dumps(validate(d),ensure_ascii=False,indent=2))

if __name__=="__main__": main()
