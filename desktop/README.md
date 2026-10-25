# VECrop Desktop — Windows .exe

Ứng dụng Windows 10/11 64-bit. Mở toàn bộ VECrop bằng cửa sổ riêng hoặc trình duyệt dự phòng. Không cần cài Python khi dùng bản EXE.

## Tải EXE sau khi GitHub Actions build thành công

1. Mở https://github.com/Form997/VECrop/actions/workflows/build-windows-exe.yml
2. Chọn lần chạy Build VECrop Desktop Windows EXE có dấu tích xanh.
3. Trong phần Artifacts, tải VECrop-Desktop-Windows-x64 (file ZIP).
4. Giải nén rồi chạy VECrop-Desktop.exe.

Nếu chưa có lần build thành công, **chưa có file EXE để tải**. Có thể chạy workflow thủ công bằng nút Run workflow nếu Actions đã được bật.

## Mô hình chạy

- Bản ưu tiên dùng WebView2 của Windows để hiện giao diện trong một cửa sổ ứng dụng.
- Nếu WebView2/pywebview không khởi tạo được, ứng dụng mở trình duyệt mặc định và một bảng điều khiển nhỏ; đóng bảng điều khiển để ngừng server.
- Nội dung Giáo trình, Thực nghiệm 3D, nhập/xuất JSON/CSV, QC cơ bản dùng được offline do HTML/Markdown/CSS/JS/Marked/MathJax đã được đóng gói.
- Các công cụ Crossref, GBIF, Google Scholar, AGRIS, Google Translate cần Internet.
- Máy chủ chỉ bind localhost 127.0.0.1:47852; không đưa nguồn thực nghiệm ra Internet.
- Bản nháp localStorage riêng của WebView2/Chrome, không đồng bộ với trang GitHub Pages.
- Di chuyển dữ liệu qua file JSON: Xuất JSON trên web → Nhập JSON trong ứng dụng.
- Thiết bị 4 GB RAM có thể dùng các chức năng nhẹ; đóng các phần mềm nặng khi mở chương dài hoặc công thức lớn.
- Nên có ít nhất 500 MB dung lượng trống cho EXE, file tạm giải nén PyInstaller, cache WebView2 và dữ liệu.

## Build trên Windows nếu muốn tự làm

Cài Python 3.11 x64 rồi mở PowerShell trong thư mục VECrop:

    py -3.11 -m venv .venv
    .\.venv\Scripts\Activate.ps1
    python -m pip install -r desktop/requirements-build.txt
    python desktop/prepare_web.py
    python -m PyInstaller --noconfirm --clean --onefile --windowed --name VECrop-Desktop --add-data "desktop/_bundle;web" --collect-all webview desktop/launcher.py

Tệp xuất ra: dist/VECrop-Desktop.exe

Chạy chế độ trình duyệt dự phòng:

    VECrop-Desktop.exe --browser

Kiểm thử tài nguyên offline:

    VECrop-Desktop.exe --smoke-test

## Giới hạn kiểm thử

Smoke test xác nhận đầy đủ các file đóng gói và lệnh chạy không lỗi. Việc hiển thị giao diện WebView2, tải và lưu file, DOI thật vẫn cần thử trên máy Windows thực tế.

## Liêm chính dữ liệu

Không tự bịa pH/EC/năng suất hay biến DOI của công trình khác thành phép đo tại ruộng. Việc tải EXE từ nguồn ngoài GitHub chính thức cần được kiểm tra, không chạy file lạ.
