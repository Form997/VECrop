#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""VECrop Intelligence Engine - lightweight, dependency free.

Exports crop knowledge for the GitHub Pages UI and audits configuration
completeness. It intentionally avoids universal biological thresholds:
crop/cultivar/site parameters must come from evidence or calibration.
"""
from __future__ import annotations
import json, argparse
from pathlib import Path

CORE=["root_zone","water","nutrient_uptake","hydraulics","photosynthesis",
      "respiration","phenology","biomass","senescence","yield","uncertainty"]

CROPS={
"rice":("Lúa","Oryza sativa","Ngũ cốc","C3","grain",
 ["flooding_awd","redox","aerenchyma","tillering","panicle","grain_filling","stem_nsc"]),
"maize":("Ngô","Zea mays","Ngũ cốc","C4","grain",
 ["deep_root","c4_photosynthesis","asi","ear_kernel_set","kernel_filling","post_silking"]),
"wheat":("Lúa mì","Triticum aestivum","Ngũ cốc","C3","grain",
 ["tillering","vernalization_optional","photoperiod","spike","grain_filling","grain_quality"]),
"soybean":("Đậu tương","Glycine max","Họ đậu","C3","seed",
 ["nodulation","biological_n_fixation","photoperiod","pod_set","seed_filling","oil_protein"]),
"lettuce":("Xà lách","Lactuca sativa","Rau lá","C3","leaf",
 ["shallow_root","leaf_expansion","calcium_transport","tipburn","marketability","bolting"]),
"tomato":("Cà chua","Solanum lycopersicum","Rau quả","C3","fruit",
 ["flower_set","fruit_load","fruit_growth","calcium_transport","blossom_end_rot","multi_harvest","quality"]),
"potato":("Khoai tây","Solanum tuberosum","Củ/rễ","C3","tuber",
 ["tuber_initiation","tuber_number","bulking","photoperiod","size_grading","dry_matter"]),
"cassava":("Sắn","Manihot esculenta","Củ/rễ","C3","storage_root",
 ["storage_root","long_season","drought","starch_accumulation","root_shoot_allocation"]),
"sugarcane":("Mía","Saccharum spp.","Cây đường","C4","stem",
 ["tillering","stalk_elongation","sucrose_accumulation","ratoon","lodging","quality"]),
"banana":("Chuối","Musa spp.","Cây ăn quả lâu năm","C3","fruit",
 ["perennial_carryover","leaf_emergence","bunch_initiation","hand_finger_growth","ratoon_cycle"]),
"citrus":("Cây có múi","Citrus spp.","Cây ăn quả lâu năm","C3","fruit",
 ["perennial_carryover","flower_flush","fruit_set","fruit_drop","fruit_growth","quality"]),
"grape":("Nho","Vitis vinifera","Cây ăn quả lâu năm","C3","fruit",
 ["perennial_carryover","budbreak","flowering","berry_set","veraison","sugar_acid","pruning_training"]),
"coffee":("Cà phê","Coffea spp.","Cây đồ uống","C3","fruit",
 ["perennial_carryover","flower_induction","rainfall_trigger","berry_filling","shade","biennial_bearing"]),
"tea":("Chè","Camellia sinensis","Cây đồ uống","C3","young_shoot",
 ["perennial_carryover","shoot_flush","multi_harvest","plucking_interval","shade","leaf_quality"]),
"cotton":("Bông","Gossypium spp.","Cây sợi","C3","fiber",
 ["square_flower","boll_set","boll_retention","fiber_deposition","defoliation","fiber_quality"]),
"rubber":("Cao su","Hevea brasiliensis","Cây lấy mủ","C3","latex",
 ["perennial_carryover","trunk_growth","latex_regeneration","tapping_schedule","carbon_cost","drought"])
}

def profile(cid):
    if cid not in CROPS: raise KeyError(cid)
    n,s,g,p,h,m=CROPS[cid]
    return {"crop_id":cid,"name_vi":n,"species":s,"group":g,"photosynthesis":p,
            "harvest_organ":h,"core_modules":CORE,"crop_modules":m,
            "all_modules":list(dict.fromkeys(CORE+m)),
            "readiness":"framework_only_until_parameterized_and_validated",
            "provenance_required":True}

def recommend(cid,objective=""):
    p=profile(cid); q=objective.lower(); extra=[]
    if any(k in q for k in ["nước","water","hạn","drought"]):
        extra += ["water_balance","root_distribution","hydraulic_risk"]
    if any(k in q for k in ["dinh dưỡng","nutrient","đạm","nitrogen"]):
        extra += ["nutrient_balance","source_sink"]
    if any(k in q for k in ["chất lượng","quality","thương phẩm","market"]):
        extra += ["quality","marketability"]
    if any(k in q for k in ["nhà kính","greenhouse","thủy canh","hydroponic"]):
        extra += ["controlled_environment","fertigation","rootzone_ec_ph_do"]
    return {"crop":p,"objective":objective,
            "recommended_modules":list(dict.fromkeys(p["all_modules"]+extra)),
            "warnings":["Không chuyển tham số giữa loài/giống nếu chưa có bằng chứng.",
                        "Không tự gán ngưỡng sinh học khi thiếu provenance.",
                        "Tránh double counting khi cơ chế stress đã được mô hình hóa."]}

def audit(cfg):
    req=["crop_id","cultivar","site","weather","soil_or_substrate","management"]
    miss=[k for k in req if not cfg.get(k)]
    supported=cfg.get("crop_id") in CROPS
    score=round(100*(len(req)-len(miss))/len(req))
    if not supported: score=min(score,35)
    return {"supported_crop_profile":supported,"completeness_score":score,
            "missing":miss,
            "status":"ready_for_parameterization" if supported and not miss else "incomplete",
            "note":"Completeness is not scientific validation."}

def export(path):
    data={"schema_version":"1.0","engine":"VECrop Intelligence Engine",
          "principles":["mechanistic core + crop-specific configuration",
                        "conservation before fit","parameter provenance required",
                        "uncertainty-aware predictions","no double counting"],
          "core_modules":CORE,
          "crops":{k:profile(k) for k in CROPS}}
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding="utf-8")

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--crop",choices=sorted(CROPS))
    ap.add_argument("--objective",default="")
    ap.add_argument("--export",type=Path)
    ap.add_argument("--audit",type=Path)
    a=ap.parse_args()
    if a.export: export(a.export)
    if a.crop: print(json.dumps(recommend(a.crop,a.objective),ensure_ascii=False,indent=2))
    if a.audit:
        print(json.dumps(audit(json.loads(a.audit.read_text(encoding="utf-8"))),
                         ensure_ascii=False,indent=2))
    if not (a.export or a.crop or a.audit):
        print(json.dumps({"crops":sorted(CROPS),"count":len(CROPS)},ensure_ascii=False,indent=2))

if __name__=="__main__": main()
