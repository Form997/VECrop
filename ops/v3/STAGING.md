# Thử nghiệm VECrop Staging (không đụng DATA thật)

Nhánh `staging/v3.0-readiness` → Pull Request vào `main`. Cài bản EXE staging từ artifact CI, chạy `VECrop-Desktop.exe --staging`. Bản staging dùng `127.0.0.1:47853` và `%LOCALAPPDATA%\VECropDesktop-Staging`; production dùng cổng 47852 và `VECropDesktop`.

| ID | Tình huống phải thử | Kết quả đạt |
|---|---|---|
| ST-01 | Mở GUI Windows, giáo trình | Không trắng trang |
| ST-02 | Phòng thực nghiệm 11 bước và 3D | Không mất thao tác/nhập số; tắt 3D được |
| ST-03 | Nhập hồ sơ TEST, lưu DATA | SQLite có hồ sơ, đúng dữ liệu |
| ST-04 | Mở, sửa, xem lịch sử | Revision tăng; bảo toàn giá trị |
| ST-05 | Lưu xung đột revision | 409; không ghi đè |
| ST-06 | Thiếu pH, EC, năng suất | Không tự lấp bằng số từ DOI |
| ST-07 | Nhập JSON/CSV và tiếng Việt | Không lỗi đơn vị/ký tự |
| ST-08 | Tắt Internet/DOI lỗi | Không mất dữ liệu |
| ST-09 | Sao lưu & khôi phục **trên staging** | SQLite integrity_check=ok; đếm bản ghi khớp |
| ST-10 | Chạy staging cùng production | Không trùng cổng, không thấy DATA của nhau |
| ST-11 | Khởi động lại/nâng cấp | Không xoá DATA staging |
| ST-12 | Mobile, giảm chuyển động, máy yếu | Dễ đọc và thao tác |

**Biên bản cần ghi:** ngày, người thử, SHA/bản EXE, OS/WebView2, PASS/FAIL từng mã, ảnh/log có che DATA riêng tư, kết luận và người duyệt. Ban đầu: **CHƯA THỰC HIỆN – NO-GO**.

Đừng biến một lượt GitHub Actions thành bằng chứng đã thử thực địa; cần người sử dụng thao tác.
