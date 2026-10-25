"""Collect local app data + pinned offline JS libraries for Windows packaging."""
from __future__ import annotations
import hashlib
import json
import os
from pathlib import Path
import shutil
import sys
import urllib.request

ROOT=Path(__file__).resolve().parents[1]
DEST=ROOT/"desktop"/"_bundle"
ASSETS={
 "marked.min.js":(
   "https://cdnjs.cloudflare.com/ajax/libs/marked/15.0.12/marked.min.js",
   "https://cdn.jsdelivr.net/npm/marked@15.0.12/marked.min.js"),
 "tex-svg-full.js":(
   "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-svg-full.js",
   "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg-full.js")
}
def download(filename,urls,folder):
    path=folder/filename
    if path.is_file() and path.stat().st_size>12000:return
    last=None
    for url in urls:
        try:
            req=urllib.request.Request(url,headers={"User-Agent":"VECropDesktopBuild/1.0"})
            with urllib.request.urlopen(req,timeout=40) as response:
                data=response.read(5_000_000)
            if len(data)<(50000 if "tex-svg" in filename else 12000) or b"<html" in data[:300].lower():
                raise ValueError("JS asset response invalid")
            path.write_bytes(data)
            print(filename,len(data),hashlib.sha256(data).hexdigest())
            return
        except Exception as ex:last=ex
    raise RuntimeError(f"Cannot bundle {filename}: {last}")
def main():
    DEST.mkdir(parents=True,exist_ok=True)
    for folder in ("js","css","partials","docs","config"):
        src=ROOT/folder
        if src.is_dir():shutil.copytree(src,DEST/folder,dirs_exist_ok=True)
    for name in ("index.html","experiment.html","README.md"):
        source=ROOT/name
        if source.is_file():shutil.copy2(source,DEST/name)
    page=DEST/"index.html"
    html=page.read_text(encoding="utf-8")
    old_marked="https://cdn.jsdelivr.net/npm/marked/marked.min.js"
    old_math="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
    if old_marked not in html or old_math not in html:
        raise ValueError("Expected CDN scripts not found; inspect index.html before packaging")
    html=html.replace(old_marked,"vendor/marked.min.js").replace(old_math,"vendor/tex-svg-full.js")
    html=html.replace("</head>",'<link rel="stylesheet" href="css/desktop-data-client.css">\n</head>')
    html=html.replace("</body>",'<script src="js/desktop-client.js"></script><script src="js/desktop-data-client.js"></script>\n</body>')
    page.write_text(html,encoding="utf-8")
    shutil.copy2(ROOT/"desktop"/"client.js",DEST/"js"/"desktop-client.js")
    shutil.copy2(ROOT/"desktop"/"data_client.js",DEST/"js"/"desktop-data-client.js")
    shutil.copy2(ROOT/"desktop"/"data_client.css",DEST/"css"/"desktop-data-client.css")
    build = {
        "sha": os.getenv("GITHUB_SHA", "local"),
        "run_number": int(os.getenv("GITHUB_RUN_NUMBER", "0")),
    }
    (DEST/"desktop-build.json").write_text(json.dumps(build), encoding="utf-8")
    vendor=DEST/"vendor";vendor.mkdir(exist_ok=True)
    for name,urls in ASSETS.items():download(name,urls,vendor)
    sys.path.insert(0,str(ROOT/"desktop"))
    from launcher import validate_bundle
    if not validate_bundle(DEST):raise RuntimeError("Missing required web resources")
    print("VECrop desktop bundle READY",DEST)
if __name__=="__main__":main()
