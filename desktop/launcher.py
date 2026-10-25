"""VECrop Desktop: native Windows window, safe local content updater."""
from __future__ import annotations

import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import shutil
import os
from pathlib import Path
import secrets
import sys
import threading
from urllib.parse import unquote, urlsplit
import urllib.request
import webbrowser

try:
    from updates import Updater, appdata_root
    from data_store import DataStore, DataError, RevisionConflict
except ImportError:
    from desktop.updates import Updater, appdata_root
    from desktop.data_store import DataStore, DataError, RevisionConflict

PORT = 47852
HEALTH = b"VECropDesktop/v2"
ALLOWED = {".html", ".css", ".js", ".json", ".md", ".png", ".jpg",
           ".jpeg", ".webp", ".svg", ".ico", ".txt", ".woff", ".woff2"}


def resource_dir() -> Path:
    root = Path(getattr(sys, "_MEIPASS", Path(__file__).resolve().parents[1]))
    if (root / "web").is_dir():
        return (root / "web").resolve()
    return (Path(__file__).resolve().parent / "_bundle").resolve()


def validate_bundle(root: Path) -> bool:
    files = [
        "index.html", "docs/01-chapter-1.md", "docs/02-chapter-2.md",
        "docs/03-chapter-3.md", "docs/04-chapter-4.md",
        "docs/data/vecrop_intelligence.json",
        "partials/experiment.html", "js/app-router.js", "js/experiment.js",
        "js/experiment-pro.js", "js/evidence-autofill.js",
        "js/experiment-3d.js", "js/desktop-client.js",
        "js/desktop-data-client.js", "css/desktop-data-client.css",
        "desktop-build.json", "vendor/marked.min.js", "vendor/tex-svg-full.js",
    ]
    return all((root / p).is_file() for p in files)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, directory, **kwargs):
        super().__init__(*args, directory=directory, **kwargs)

    def log_message(self, fmt: str, *args) -> None:
        pass

    def allowed_host(self) -> bool:
        return self.headers.get("Host", "") in {
            f"127.0.0.1:{PORT}", f"localhost:{PORT}"
        }

    def json_response(self, result: dict, status: int = 200) -> None:
        data = json.dumps(result, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def translate_path(self, path: str) -> str:
        rel = unquote(urlsplit(path).path).lstrip("/")
        if not rel:
            rel = "index.html"
        if rel.startswith(("docs/", "config/")):
            override = self.server.updater.path_for(rel)
            if override is not None:
                return str(override)
        return super().translate_path(path)

    def do_GET(self) -> None:
        if not self.allowed_host():
            self.send_error(403)
            return
        path = unquote(urlsplit(self.path).path).replace("\\", "/")
        if path == "/__vecrop_health":
            self.send_response(200)
            self.send_header("Content-Type", "text/plain")
            self.send_header("Content-Length", str(len(HEALTH)))
            self.end_headers()
            self.wfile.write(HEALTH)
            return
        if path == "/__vecrop_status":
            state = self.server.updater.summary()
            state["token"] = self.server.action_token
            state["data"] = self.server.data_store.counts()
            return self.json_response(state)
        if path == "/__vecrop_data":
            from urllib.parse import parse_qs
            args = parse_qs(urlsplit(self.path).query, keep_blank_values=True)
            identifier = args.get("id", [""])[0]
            try:
                if identifier:
                    if "revision" in args:
                        revision = int(args["revision"][0])
                        return self.json_response(
                            self.server.data_store.get_revision(identifier, revision))
                    return self.json_response(
                        self.server.data_store.get_experiment(identifier))
                return self.json_response({
                    "items": self.server.data_store.list_experiments(),
                    "counts": self.server.data_store.counts()
                })
            except (DataError, ValueError) as exc:
                return self.json_response({"error": str(exc)}, 400)
        if path == "/__vecrop_data_history":
            from urllib.parse import parse_qs
            args = parse_qs(urlsplit(self.path).query)
            identifier = args.get("id", [""])[0]
            if not identifier:
                return self.json_response({"error": "Missing experiment ID"}, 400)
            return self.json_response({
                "items": self.server.data_store.list_revisions(identifier)
            })
        rel = path.lstrip("/") or "index.html"
        if any(part.startswith(".") for part in rel.split("/")):
            self.send_error(403)
            return
        if Path(rel).suffix.lower() not in ALLOWED:
            self.send_error(403)
            return
        return super().do_GET()

    def do_POST(self) -> None:
        if not self.allowed_host():
            self.send_error(403)
            return
        if self.headers.get("Origin") not in {
            f"http://127.0.0.1:{PORT}", f"http://localhost:{PORT}"
        } or self.headers.get("X-VECrop-Token") != self.server.action_token:
            self.send_error(403)
            return
        path = urlsplit(self.path).path
        if path == "/__vecrop_data_save":
            try:
                length = int(self.headers.get("Content-Length", "-1"))
            except ValueError:
                return self.json_response({"error": "Invalid Content-Length"}, 400)
            if length < 2 or length > 4_400_000:
                return self.json_response({"error": "Hồ sơ không hợp lệ hoặc vượt 4 MB"}, 413)
            try:
                raw = self.rfile.read(length)
                data = json.loads(raw.decode("utf-8"))
                if not isinstance(data, dict):
                    raise DataError("Request body must be an object")
                result = self.server.data_store.save_experiment(
                    data.get("payload"), data.get("expected_revision"))
                return self.json_response(result)
            except RevisionConflict as exc:
                return self.json_response({"error": str(exc), "conflict": True}, 409)
            except (DataError, UnicodeError, ValueError, TypeError) as exc:
                return self.json_response({"error": str(exc)}, 400)
        if path == "/__vecrop_data_backup":
            if self.headers.get("Content-Length", "0") not in ("0", ""):
                return self.json_response({"error": "Body not allowed"}, 413)
            backup = self.server.data_store.backup()
            self.send_response(200)
            self.send_header("Content-Type", "application/vnd.sqlite3")
            self.send_header("Content-Disposition",
                             f'attachment; filename="{backup.name}"')
            self.send_header("Content-Length", str(backup.stat().st_size))
            self.end_headers()
            with backup.open("rb") as src:
                shutil.copyfileobj(src, self.wfile, length=1024*1024)
            return
        if self.headers.get("Content-Length", "0") not in ("0", ""):
            self.send_error(413)
            return
        if path == "/__vecrop_sync":
            started = self.server.updater.start_sync()
            return self.json_response({"started": started})
        if path == "/__vecrop_check":
            self.server.updater.release_state = "checking"
            self.server.updater.start_release_check()
            return self.json_response({"started": True})
        if path == "/__vecrop_open_release":
            # Always open a known official GitHub page, never an arbitrary URL.
            url = self.server.updater.release_url
            if not url.startswith("https://github.com/Form997/VECrop/releases/"):
                return self.json_response({"error": "Invalid release URL"}, 400)
            webbrowser.open(url)
            return self.json_response({"opened": True})
        self.send_error(404)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        super().end_headers()


def already_running() -> bool:
    try:
        with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/__vecrop_health",
                                    timeout=1) as r:
            return r.read(64) == HEALTH
    except Exception:
        return False


def browser_controls(url: str) -> None:
    import tkinter as tk
    from tkinter import ttk
    w = tk.Tk()
    w.title("VECrop Desktop - Điều khiển")
    w.geometry("430x235")
    w.minsize(390, 220)
    w.configure(bg="#eaf4ee")
    tk.Label(w, text="VECrop Desktop", font=("Segoe UI", 20, "bold"),
             fg="#0d774c", bg="#eaf4ee").pack(pady=(24, 8))
    tk.Label(w, text="Đang chạy trên máy này. Kiểm tra cập nhật bên trong ứng dụng.",
             bg="#eaf4ee", wraplength=380).pack(pady=4)
    ttk.Button(w, text="Mở lại VECrop",
               command=lambda: webbrowser.open(url)).pack(pady=10)
    ttk.Button(w, text="Đóng ứng dụng", command=w.destroy).pack()
    webbrowser.open(url)
    w.mainloop()


def main() -> int:
    root = resource_dir()
    if "--smoke-test" in sys.argv:
        return 0 if validate_bundle(root) else 2
    if not validate_bundle(root):
        from tkinter import messagebox
        messagebox.showerror("VECrop Desktop", "Thiếu file hệ thống. Hãy tải lại EXE.")
        return 2
    url = f"http://127.0.0.1:{PORT}/index.html?view=experiment"
    if already_running():
        webbrowser.open(url)
        return 0

    updater = Updater(root, appdata_root())
    data_store = DataStore(appdata_root())
    handler = functools.partial(Handler, directory=str(root))
    try:
        server = ThreadingHTTPServer(("127.0.0.1", PORT), handler)
    except OSError as exc:
        from tkinter import messagebox
        messagebox.showerror("VECrop Desktop",
                             f"Không mở được cổng nội bộ {PORT}: {exc}")
        return 3

    server.updater = updater
    server.data_store = data_store
    server.action_token = secrets.token_urlsafe(32)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    updater.start_release_check()

    try:
        if "--browser" in sys.argv:
            browser_controls(url)
        else:
            try:
                import webview
                profile = appdata_root() / "webview-profile"
                profile.mkdir(parents=True, exist_ok=True)
                webview.create_window(
                    "VECrop - Thực nghiệm và Giáo trình", url,
                    width=1250, height=840, min_size=(790, 550),
                    text_select=True, background_color="#ecf5ef"
                )
                webview.start(private_mode=False, storage_path=str(profile), debug=False)
            except Exception:
                browser_controls(url)
    finally:
        server.shutdown()
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
