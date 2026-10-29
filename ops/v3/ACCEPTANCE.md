# Phiếu nghiệm thu VECrop V3.0

**Trạng thái ban đầu: NO-GO; chưa có người dùng và biên bản nghiệm thu.** Không tự đánh dấu PASS. Người duyệt phải ghi ngày, commit SHA và bằng chứng vào `evidence.json`.

| Mã | Tiêu chí tài liệu V3.0 | Điều kiện nghiệm thu | Ban đầu |
|---|---|---|---|
| product | Sản phẩm chạy tại môi trường mục tiêu | Thử GUI Windows/WebView2, GitHub Pages trên máy người dùng | CHỜ |
| data | Dữ liệu có nguồn và quyền sử dụng | Nguồn, DOI, bản quyền dữ liệu/hình, dữ liệu thật tách TEST | CHỜ |
| tests | Test chức năng và trường hợp lỗi | CI + GUI + offline/DOI lỗi/thiếu số đo | CHỜ |
| user_guide | Hướng dẫn cài đặt và sử dụng | Người mới thực hiện độc lập theo tài liệu | CHỜ |
| security_legal | Bảo mật/quyền/pháp lý | Rà loopback API, DATA cục bộ, quyền dữ liệu, tuân thủ cụ thể | CHỜ |
| backup_recovery | Sao lưu & khôi phục | Thử khôi phục bản sao SQLite trong staging, integrity_check, số bản ghi | CHỜ |
| operations | Nhật ký, người phụ trách, hỗ trợ | Người duyệt, phiên bản, mức sự cố, rollback, kênh liên hệ | CHỜ |

**GO** chỉ khi tất cả 7 tiêu chí đạt, có reviewer/ngày/bằng chứng thật và hoàn thành thử ST-01…ST-12; **NO-GO** trong mọi trường hợp khác. Máy kiểm tra chỉ xác minh hình thức bằng chứng, **không thay thẩm định thực chất**.
