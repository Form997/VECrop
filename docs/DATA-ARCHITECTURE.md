# VECrop DATA — Kho dữ liệu khoa học trên máy

Phiên bản DATA V1, dành cho ứng dụng Windows VECrop Desktop.

## Nguyên tắc kiến trúc

DATA được tách khỏi ứng dụng EXE:
- Học liệu công khai: docs/ và config/; cập nhật từ GitHub có kiểm tra checksum.
- Dữ liệu thực nghiệm riêng: %LOCALAPPDATA%/VECropDesktop/data/vecrop.sqlite3.
- Bản sao lưu: %LOCALAPPDATA%/VECropDesktop/backups/ và file được tải về.
- Bản nháp: localStorage của WebView2/trình duyệt, không thay thế kho DATA chính.

Việc tải EXE mới không tự xóa DATA. Không xóa thư mục VECropDesktop trong AppData khi nâng cấp.

## Sử dụng trong Phòng thực nghiệm

1. Mở VECrop Desktop → Phòng thực nghiệm.
2. Tại Bước 1 nhập Mã thí nghiệm duy nhất, ví dụ EXP-2026-001.
3. Nhập cây trồng, vị trí, nghiệm thức, lần lặp, số đo, đơn vị và nguồn gốc.
4. Nhấn **Lưu vào DATA** trong khung 🗄️ DATA để lưu lần đầu.
5. Sau đó, khi tiếp tục sửa cùng mã, hệ thống tự lưu vào SQLite sau vài giây và tăng số phiên bản.
6. Nhấn **Danh sách thí nghiệm** để mở lại hồ sơ.
7. Nhấn **Lịch sử → Xuất JSON** để xuất bản cũ theo số revision.
8. Nhấn **Sao lưu SQLite** để sao lưu toàn kho vào file có thể mang sang ổ USB.

### Xung đột phiên bản

Nếu cùng Mã thí nghiệm đã có phiên bản mới hơn trong SQLite, ứng dụng báo xung đột và KHÔNG ghi đè. Hãy xuất JSON bản đang nhập, mở hồ sơ mới nhất, đối chiếu rồi chọn thay đổi cần giữ. Đây là cơ chế bảo vệ khỏi mất dữ liệu.

### Dữ liệu thiếu

Nếu chưa đo EC, pH, năng suất hoặc chỉ tiêu khác: để trống, ghi lý do. Giá trị trống không được biến thành 0. DOI là tài liệu tham khảo, không phải số đo tại hiện trường. Trong SQLite, provenance và phép đo được giữ ở các bảng khác nhau.

## Cấu trúc SQLite

| Bảng | Mục đích |
| --- | --- |
| schema_info | Phiên bản cấu trúc |
| experiments | Bản mới nhất theo mã |
| experiment_revisions | Bản JSON theo lần lưu (tối đa 50 bản gần nhất mỗi mã) |
| observations | Dòng quan trắc để truy vấn |
| provenance | DOI và nguồn tham khảo có cấu trúc |
| audit_log | Nhật ký lần lưu với thời gian và SHA-256 |

Một lần lưu chạy trong transaction SQLite, kiểm tra expected_revision. Dữ liệu đầu vào gốc trong hồ sơ JSON được giữ nguyên; không tự suy diễn số đo.

## Sao lưu/khôi phục toàn bộ

Để sao lưu: nhấn **Sao lưu SQLite**, ứng dụng sử dụng SQLite online backup, tạo file tên VECrop-DATA-...sqlite3 và đưa file đó vào thư mục Downloads của trình duyệt.

Để khôi phục toàn bộ (chưa có nút restore tự động):
1. Thoát hoàn toàn VECrop Desktop.
2. Sao lưu file vecrop.sqlite3 hiện tại dưới tên khác.
3. Đối chiếu file sao lưu SQLite và thay bản tại đường dẫn AppData nêu trên.
4. Mở lại VECrop Desktop và kiểm tra danh sách thí nghiệm.

Khôi phục toàn bộ sẽ thay thế kho DATA hiện tại; để khôi phục một bộ dữ liệu riêng hãy dùng **Nhập JSON** và **Lưu vào DATA**, không sao chép đè database nếu không cần.

## Bảo mật và hạn chế

- SQLite local hiện KHÔNG mã hóa, không có tài khoản đa người dùng, đồng bộ đa máy hay backup cloud.
- Nếu có dữ liệu nhạy cảm: sử dụng bảo vệ tài khoản Windows và mã hóa ổ đĩa khi phù hợp.
- Dữ liệu đo thực địa không tự gửi GitHub/Crossref. Truy vấn DOI chỉ gửi từ khóa cây và bối cảnh người dùng cung cấp.
- Không nhầm mức đầy đủ của form với chất lượng khoa học hay kiểm định độc lập.
- Không đổi mã thí nghiệm để gộp hai vụ khác nhau.
- Tệp đính kèm ảnh/video hiện chưa được lưu như BLOB trong database; lưu đường dẫn nguồn khi cần.

## Kiểm thử

Bộ kiểm thử tích hợp được chạy bằng Python trên GitHub Actions Windows:

    python -m unittest discover -s tests -v

Các trường hợp kiểm thử: lưu/mở lại, không đổi giá trị thiếu thành 0, lịch sử phiên bản, chống ghi đè xung đột và sao lưu SQLite không khóa file Windows.

Mã nguồn chính: desktop/data_store.py, desktop/launcher.py, desktop/data_client.js, desktop/data_client.css, tests/test_data_store.py.
