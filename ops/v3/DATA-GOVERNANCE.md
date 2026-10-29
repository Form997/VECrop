# VECrop — Quản trị DATA & liêm chính khoa học V3

Phải phân biệt **số đo thực địa (raw)**, **nguồn DOI/tham khảo**, **tập hiệu chuẩn**, **tập kiểm định độc lập**, và **dữ liệu TEST/synthetic**. Không được thay ô chưa đo bằng 0 hay kết quả của nghiên cứu khác. Dữ liệu TEST không dùng để kết luận nông học.

Mỗi phép đo cần có thời điểm, nghiệm thức, lặp, biến, đơn vị, phương pháp/thiết bị, cờ QC; giữ raw bất biến khi làm sạch và ghi phép đổi đơn vị. Dữ liệu tham khảo cần DOI, tác giả, phương pháp, đơn vị, bối cảnh địa lý/thời vụ, quyền sử dụng; cùng tỉnh không tự bảo đảm phù hợp.

SQLite Desktop hiện chưa mã hoá, không có phân quyền nhiều người hay đồng bộ đa thiết bị. Không đưa DATA riêng tư, GPS chính xác, ảnh cá nhân, API key hoặc hồ sơ người dùng lên GitHub public. Nên bảo vệ tài khoản Windows, mã hóa ổ đĩa khi có, sao lưu ra thiết bị khác.

**Phải kiểm tra nguồn và giấy phép** của hình, bài giảng, code và dữ liệu. Public repository không mặc nhiên cấp quyền tái sử dụng. Tên DOI hoặc nhiều trích dẫn **không chứng nhận** nghiên cứu đáng tin; phải xem toàn văn, bối cảnh, phương pháp, sai số và thông tin thu hồi.

**Chưa có biên bản đánh giá pháp lý có hiệu lực cho từng thị trường**. Không tuyên bố đạt an ninh mạng Việt Nam/toàn cầu hoặc tuân thủ pháp luật thương mại nếu chưa được kiểm tra thực tế.
