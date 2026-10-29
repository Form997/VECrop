# VECrop V3.0 — Vận hành, sự cố và rollback

**Người phụ trách, kênh hỗ trợ và thời gian xử lý: CHƯA CHỈ ĐỊNH**. Cần ghi vào biên bản trước khi phát hành.

Giám sát mỗi lần PR/push: unit tests, Windows staging, Pages deploy; sau phát hành theo dõi lỗi và phản hồi. Mỗi lần release cần ghi ngày, tag, commit, thay đổi, kết quả test, bản sao lưu, cách rollback.

Mức lỗi: **P0** mất/rò DATA; **P1** ứng dụng không mở, sai phiên bản, import/export mất dữ liệu; **P2** DOI lỗi, chậm hay 3D lỗi không ảnh hưởng số đo; **P3** giao diện/văn bản nhỏ.

## Khi lỗi
1. Ghi phiên bản, thời gian, bước tái hiện và mức ảnh hưởng; không đăng DATA riêng tư lên issue công khai.
2. Nếu còn an toàn, xuất JSON bản đang nhập; dừng ghi dữ liệu lỗi.
3. Sao lưu SQLite bằng nút Sao lưu khi DB đang hoạt động, không copy nóng file WAL.
4. Giữ nguyên `%LOCALAPPDATA%\VECropDesktop`; không gỡ/xoá DATA để sửa EXE.
5. Chọn bản ổn định ở [Releases](https://github.com/Form997/VECrop/releases); chỉ thay EXE sau khi đóng app.
6. Nếu schema DATA đã thay đổi, **không tự rollback EXE trực tiếp vào DATA mới**; thử với bản sao staging, đối chiếu `PRAGMA integrity_check`, số bản ghi và SHA.
7. Tạo PR vá, kiểm thử lại, phát hành, cập nhật nhật ký.

**Gắn tag `v3.0.0` chỉ sau nghiệm thu GO**. Tag Windows `desktop-rN` là lần build, không tự chứng nhận đã đạt V3.0.
