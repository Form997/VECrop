"""VECrop Desktop Windows GUI + loopback HTTP server."""
from __future__ import annotations
import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import os
from pathlib import Path
import sys
import threading
import urllib.request
import webbrowser

PORT=47852
HEALTH=b"VECropDesktop/v1"
ALLOWED={".html",".css",".js",".json",".md",".png",".jpg",".jpeg",".webp",".svg",".ico",".txt",".woff",".woff2"}

def resource_dir():
    root=Path(getattr(sys,"_MEIPASS",Path(__file__).resolve().parents[1]))
    if (root/"web").is_dir():return (root/"web").resolve()
    return (Path(__file__).resolve().parent/"_bundle").resolve()

def validate_bundle(root):
    files=["index.html","docs/01-chapter-1.md","docs/02-chapter-2.md",
      "docs/03-chapter-3.md","docs/04-chapter-4.md",
      "docs/data/vecrop_intelligence.json","partials/experiment.html",
      "js/app-router.js","js/experiment.js","js/experiment-pro.js",
      "js/evidence-autofill.js","js/experiment-3d.js",
      "vendor/marked.min.js","vendor/tex-svg-full.js"]
    return all((root/path).is_file() for path in files)

class Handler(SimpleHTTPRequestHandler):
    def __init__(self,*args,directory,**kwargs):
        super().__init__(*args,directory=directory,**kwargs)
    def log_message(self,fmt,*args):pass
    def do_GET(self):
        from urllib.parse import unquote,urlsplit
        if self.headers.get("Host","") not in (f"127.0.0.1:{PORT}",f"localhost:{PORT}"):
            return self.send_error(403)
        p=unquote(urlsplit(self.path).path).replace("\\","/")
        if p=="/__vecrop_health":
            self.send_response(200)
            self.send_header("Content-Type","text/plain")
            self.send_header("Content-Length",str(len(HEALTH)))
            self.end_headers();self.wfile.write(HEALTH);return
        rel=p.lstrip("/") or "index.html"
        if any(x.startswith(".") for x in rel.split("/")) or Path(rel).suffix.lower() not in ALLOWED:
            return self.send_error(403)
        return super().do_GET()
    def do_POST(self):self.send_error(405)
    def end_headers(self):
        self.send_header("Cache-Control","no-store")
        self.send_header("X-Content-Type-Options","nosniff")
        self.send_header("Referrer-Policy","no-referrer")
        super().end_headers()

def already_running():
    try:
        with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/__vecrop_health",timeout=1) as r:
            return r.read(64)==HEALTH
    except Exception:return False

def browser_controls(url):
    import tkinter as tk
    from tkinter import ttk
    w=tk.Tk();w.title("VECrop Desktop - Điều khiển")
    w.geometry("430x235");w.minsize(390,220);w.configure(bg="#eaf4ee")
    tk.Label(w,text="VECrop Desktop",font=("Segoe UI",20,"bold"),
             fg="#0d774c",bg="#eaf4ee").pack(pady=(24,8))
    tk.Label(w,text="Ứng dụng đang chạy trên máy này.",bg="#eaf4ee").pack(pady=4)
    ttk.Button(w,text="Mở lại Phòng thực nghiệm",command=lambda:webbrowser.open(url)).pack(pady=10)
    ttk.Button(w,text="Đóng ứng dụng",command=w.destroy).pack()
    webbrowser.open(url);w.mainloop()

def main():
    root=resource_dir()
    if "--smoke-test" in sys.argv:return 0 if validate_bundle(root) else 2
    if not validate_bundle(root):
        from tkinter import messagebox
        messagebox.showerror("VECrop Desktop","Bộ cài thiếu tài nguyên; hãy tải lại EXE.")
        return 2
    url=f"http://127.0.0.1:{PORT}/index.html?view=experiment"
    if already_running():
        webbrowser.open(url);return 0
    handler=functools.partial(Handler,directory=str(root))
    try:server=ThreadingHTTPServer(("127.0.0.1",PORT),handler)
    except OSError as ex:
        from tkinter import messagebox
        messagebox.showerror("VECrop Desktop",f"Không mở được cổng {PORT}: {ex}")
        return 3
    threading.Thread(target=server.serve_forever,daemon=True).start()
    try:
        if "--browser" in sys.argv:browser_controls(url)
        else:
            try:
                import webview
                profile=Path(os.getenv("LOCALAPPDATA") or Path.home())/"VECropDesktop"/"webview-profile"
                profile.mkdir(parents=True,exist_ok=True)
                webview.create_window("VECrop - Thực nghiệm và Giáo trình",url,
                      width=1250,height=840,min_size=(790,550),text_select=True,
                      background_color="#ecf5ef")
                webview.start(private_mode=False,storage_path=str(profile),debug=False)
            except Exception:
                browser_controls(url)
    finally:
        server.shutdown();server.server_close()
    return 0

if __name__=="__main__":
    raise SystemExit(main())
