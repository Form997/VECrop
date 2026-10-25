# HƯỚNG DẪN SỬ DỤNG PHÒNG THỰC NGHIỆM VECrop

**Phiên bản tài liệu:** 1.0 · **Ngày cập nhật:** 25/10/2026  
**Dành cho:** người mới dùng, cán bộ nghiên cứu, kỹ thuật viên hiện trường, sinh viên và người quản lý thí nghiệm.  
**Phạm vi:** giao diện web VECrop phiên bản hợp nhất trên nhánh main.

> **Nguyên tắc quan trọng:** VECrop không tạo ra số đo thực nghiệm thay người đo. Dữ liệu tìm trên Internet là **tài liệu tham khảo**, không phải dữ liệu đo tại ô thí nghiệm. Chỉ dùng số đo, phương pháp và nguồn đã xác nhận; số chưa đo để trống và ghi chú lý do.

## 1. Mở Phòng thực nghiệm

1. Mở: **https://form997.github.io/VECrop/?view=experiment**
2. Hoặc mở trang chính **https://form997.github.io/VECrop/**, chọn **🧪 Thực nghiệm / Phòng thực nghiệm**.
3. Chờ khu **Phòng thực nghiệm VECrop** hiển thị. Khung nhập liệu chỉ được tải khi bạn mở chức năng này.
4. Ở phía trên khu thực nghiệm có thanh công cụ và **11 nút bước**. Nhấn tên bước để chuyển giữa các phần.

**Xem giáo trình:** bấm mục **Giáo trình** trên thanh điều phối.  
**Mở liên kết cũ:** đường dẫn **/VECrop/experiment.html** chuyển về Phòng thực nghiệm trong trang chính.

### Thao tác an toàn trước khi bắt đầu

- Dùng một mã riêng cho **mỗi thí nghiệm/vụ nghiên cứu**.
- Không gộp hai giống, hai vụ hoặc hai thiết kế khác nhau vào cùng bộ dữ liệu nếu chưa có cấu trúc phân biệt rõ ràng.
- Nếu đang có bản nháp, **Xuất JSON** để sao lưu **trước** khi chọn **Tạo bộ mới**.
- Khi ghi đơn vị, dùng đơn vị **thực tế của thiết bị hoặc phương pháp đo**, không tự quy đổi ngầm.

## 2. Hiểu thanh công cụ

| Chức năng | Công dụng thực tế | Lưu ý |
|---|---|---|
| **Tạo bộ mới** | Xóa bản nháp đang mở, tạo bộ nhập liệu mới | Hãy xuất JSON trước; thao tác này thay bản nháp cũ |
| **Kiểm tra dữ liệu** | Chạy kiểm toán các trường và dòng quan trắc | Kiểm tra cấu trúc, **không chứng nhận khoa học** |
| **Xuất JSON** | Lưu toàn bộ thông tin + số đo + provenance | Có thể xuất cả bộ chưa hoàn chỉnh, khi đó được đánh dấu **DRAFT** |
| **Xuất CSV** | Xuất riêng bảng quan trắc | Không chứa đầy đủ metadata của thí nghiệm; cần giữ JSON kèm theo |
| **Xuất báo cáo QC** | Lưu kết quả kiểm tra lỗi/cảnh báo dưới dạng JSON | Cần đọc lỗi, sửa và kiểm tra lại |
| **Nhập JSON** | Phục hồi bộ đã xuất trước đó | **Thay thế** bản nháp đang có, yêu cầu xác nhận |
| **Nhập CSV** | Nạp thêm các dòng quan trắc từ bảng CSV | **Thêm vào** bộ hiện tại; không thay toàn bộ metadata |
| **Mẫu CSV** | Tải tệp tiêu đề 8 cột quan trắc | Dùng làm mẫu để nhập số đo thực tế |
| **Hướng dẫn sử dụng** | Mở tài liệu này | Mở ở tab riêng để không mất tiến trình nhập |

**Lưu dữ liệu:** bản nháp được lưu bằng localStorage **trên trình duyệt và thiết bị hiện tại**, không tự đồng bộ GitHub hay tài khoản. Xóa dữ liệu trình duyệt, đổi thiết bị, dùng chế độ ẩn danh hoặc xóa bản nháp có thể khiến dữ liệu mất. Nên xuất JSON sau mỗi buổi đo.

## 3. Hướng dẫn chi tiết theo 11 bước

### Bước 1 — Nhận dạng thí nghiệm

Nhập **mã thí nghiệm**, **tên**, **người phụ trách**, **đơn vị**, **ngày bắt đầu/kết thúc**, **địa điểm** và **hệ thống sản xuất**.

Ví dụ mã chỉ để minh họa **cách đặt tên**, không phải thí nghiệm có thật: **EXP-LETTUCE-2026-A**.

Các hệ thống đang có trong danh sách:
- **field**: đồng ruộng;
- **greenhouse**: nhà kính;
- **net_house**: nhà lưới/nhà che;
- **hydroponic**: thủy canh;
- **pot**: thí nghiệm chậu;
- **vertical_farm**: canh tác theo tầng.

Ngày tháng và địa điểm phải thống nhất với nhật ký hiện trường. Không dùng vị trí ước đoán như dữ liệu GPS đã đo.

### Bước 2 — Cây trồng và giống

Ghi **tên cây**, **tên khoa học** nếu biết, **giống/cultivar** đúng nhãn giống, kiểu quang hợp (C3/C4/CAM nếu xác nhận được), ngày gieo/cấy, mật độ và **đơn vị mật độ**.

Có thể chọn cây tại **Trợ lý cây trồng** ở trang Giáo trình rồi nhấn **Chuyển cây sang thực nghiệm**; hệ thống chỉ mang **tên cây/tên khoa học/kiểu quang hợp** nếu ô nhận dạng đang trống. **Không tự thêm giống, dữ liệu môi trường hay số đo.** Nếu bản nháp đã thuộc cây khác, hệ thống sẽ cảnh báo để tránh trộn dữ liệu.

Nếu chưa xác nhận cultivar, không tự lấy giống tương tự trên mạng thay thế.

### Bước 3 — Thiết kế thí nghiệm

Chọn:
- **CRD**: bố trí hoàn toàn ngẫu nhiên;
- **RCBD**: khối hoàn toàn ngẫu nhiên;
- **split_plot**: ô lớn–ô nhỏ;
- **factorial**: thí nghiệm nhân tố;
- **on_farm**: thí nghiệm tại sản xuất;
- **observational**: quan sát, không khẳng định phân nghiệm thức ngẫu nhiên.

Điền **số nghiệm thức**, **số lần lặp**, **diện tích ô**, **đơn vị diện tích**, **ngẫu nhiên hóa**, mô tả nghiệm thức.

**Quy ước mã:** dùng nhất quán mã như NT1/NT2 hoặc T1/T2 trong **mô tả nghiệm thức** và từng dòng **Quan trắc**. Số lần lặp và số ô phải phản ánh thiết kế thực tế, không điền số để vượt kiểm tra.

Với thiết kế phức tạp (split-plot, repeated measures), biểu mẫu hiện mới lưu dữ liệu đầu vào và QC cơ bản; **chưa tự chạy đúng mô hình thống kê chuyên biệt**.

### Bước 4 — Đất, giá thể và vùng rễ ban đầu

Ghi nguồn mẫu, độ sâu lấy mẫu, loại đất/giá thể, pH, EC, độ ẩm, hữu cơ, N/P/K nếu thực sự có kết quả.

Quan trọng:
- **EC** phải có đơn vị (ví dụ dS/m hoặc µS/cm), nhiệt độ đo và phương pháp chiết khi áp dụng.
- **pH** phải gắn với phương pháp/thiết bị đo (nước, KCl, tỷ lệ đất:dung dịch… nếu có).
- **Độ ẩm** phải ghi đúng cơ sở: % khối lượng, % thể tích, m³/m³ hoặc chỉ tiêu khác; không xem các cơ sở là tương đương.
- **N, P, K tổng số** khác **N, P, K dễ tiêu/khả dụng**; không gộp nếu phương pháp phân tích khác nhau.
- Nếu thiếu giá trị đo, để trống và mô tả ở mục **Dữ liệu thiếu / loại bỏ**.

### Bước 5 — Quản lý canh tác

Nhập phương pháp tưới, lượng tưới kèm đơn vị, lịch tưới, phân bón, lịch bón, thuốc/BVTV và thao tác quản lý khác.

Nên ghi **ngày áp dụng, liều lượng, đơn vị, hàm lượng chế phẩm, cách xử lý và nghiệm thức nhận xử lý**. Hiện các mục lịch/quản lý chủ yếu là ô văn bản, **chưa tự chuẩn hóa thành event log theo từng ô**.

### Bước 6 — Môi trường và nguồn dữ liệu

Ghi nguồn thời tiết, bước thời gian, nhiệt độ, RH/VPD, mưa, bức xạ/PPFD, CO₂, ghi chú kiểm soát chất lượng.

Nên giữ:
- file dữ liệu gốc hoặc mã logger;
- tần suất lấy mẫu và múi giờ;
- vị trí cảm biến, độ cao/độ sâu đo;
- thông tin hiệu chuẩn và cách xử lý dữ liệu bất thường.

Nếu thời tiết lấy từ nguồn công cộng, ghi tên trạm/API, khoảng cách/độ đại diện, ngày truy xuất và hạn chế của phép thay thế. **Dữ liệu khí tượng lân cận không tự động là số đo tại ruộng.**

### Bước 7 — Quan trắc thực nghiệm

Nhấn **+ Thêm dòng đo** hoặc **Nhập CSV**. Một dòng đại diện một biến đo trong một nghiệm thức/lặp tại một thời điểm.

| Cột | Cách nhập |
|---|---|
| **datetime** | Ngày/giờ đo, theo giờ địa phương được ghi nhất quán |
| **treatment** | Mã nghiệm thức khớp thiết kế, ví dụ NT1 |
| **replicate** | Số lần lặp nguyên dương theo sơ đồ ô |
| **variable** | Tên biến nhất quán, ví dụ soil_ph, soil_ec, LAI, fresh_mass |
| **value** | Giá trị **đã đo thực tế**, phải là số hữu hạn |
| **unit** | Đơn vị thực của biến, ví dụ pH, dS/m, cm, kg/plot |
| **method** | Phương pháp/thiết bị/phiên bản nếu có |
| **qc** | Trạng thái đánh giá chất lượng: raw, checked, suspect… theo quy ước nhóm |

**Mẫu CSV có 8 tiêu đề cột**, đúng thứ tự như bảng trên. Bạn có thể tải bằng nút **Mẫu CSV** trên web. Không được dùng số 0 để thay giá trị **chưa đo**. Nên để trống và giải thích ở nhật ký dữ liệu thiếu; dữ liệu trống sẽ bị QC nhắc, không được tự tạo số giả để vượt lỗi.

**Lưu ý nhập CSV:** tệp CSV được **nối thêm vào bảng**. Nếu nhập hai lần, hệ thống có thể báo trùng theo bộ **datetime + treatment + replicate + variable**. Không nhập nhiều cây trong một file nếu không có schema phân biệt chúng.

### Bước 8 — Thu hoạch, năng suất và chất lượng

Nhập ngày thu hoạch, cơ quan thu hoạch, năng suất, đơn vị năng suất, cơ sở khối lượng **fresh/dry**, tỷ lệ thương phẩm, **dry matter fraction** nếu đo được, chất lượng.

Không trộn:
- **kg/cây** với **kg/m²** hay **tấn/ha**;
- **khối lượng tươi** với **khối lượng khô**;
- **sinh khối toàn cây** với **năng suất cơ quan thương phẩm**;
- **tỷ lệ thương phẩm** với tỷ lệ hạt chắc/đậu quả nếu định nghĩa khác.

Nếu cần đổi tươi ↔ khô, chỉ dùng **dry-matter fraction phù hợp của chính mẫu/hệ được khảo sát**, không dùng hằng số chung không có nguồn.

### Bước 9 — Phương pháp, nguồn và QC

Nhập:
- phương pháp chuẩn/protocol;
- thiết bị, model;
- thông tin hiệu chuẩn;
- dữ liệu thiếu, dữ liệu loại bỏ, lý do;
- người rà soát;
- tài liệu tham khảo;
- **vai trò bộ dữ liệu**: quan trắc gốc, hiệu chuẩn, kiểm định độc lập hoặc tài liệu tham khảo;
- tên/đường dẫn tệp dữ liệu gốc.

**Vai trò dữ liệu** chỉ là nhãn quản lý; ghi “kiểm định độc lập” không khiến một tập dữ liệu tự động độc lập về mặt thống kê. Muốn kiểm định độc lập phải tách nguồn dữ liệu khỏi dữ liệu dùng để fit tham số.

### Bước 10 — Tìm bằng chứng Internet khi thiếu

Mở **Trợ lý tìm bằng chứng**. Nhập biến cần tìm và bối cảnh. Hoặc nhấn **Tìm nguồn cho dữ liệu thiếu**.

Công cụ có thể:
1. tìm **metadata bài báo** qua Crossref;
2. mở Google Scholar / AGRIS để tra cứu thêm;
3. **tự điền DOI và trích dẫn** vào ô **Nguồn/tài liệu tham chiếu** khi kết quả đã sàng lọc đúng cây; lưu riêng metadata nguồn trong JSON;
4. đối chiếu GBIF và chỉ tự điền **tên khoa học** còn trống khi cây thuộc danh mục định danh không mơ hồ và GBIF trả khớp chính xác.

**Thứ tự tự tìm theo vị trí trồng:** tỉnh/thành → vùng sinh thái nông nghiệp → Việt Nam → quốc tế. Chỉ khi không có metadata phù hợp ở mức gần hơn mới mở rộng. Người dùng nhập tỉnh/thành và vùng tại Bước 1; hệ thống không gửi địa chỉ ô chi tiết hay vị trí GPS tới dịch vụ tìm kiếm. Địa danh trong tiêu đề/abstract chỉ là dấu hiệu, **không chứng minh đó là nơi bố trí thí nghiệm**.

**Phân tích DOI:** tại Bước 10, dán DOI riêng vào ô phân tích, nhấn **Phân tích DOI và cảnh báo**. Kết quả chỉ rõ thông tin thư mục, tạp chí, ISSN, tác giả, trích dẫn, abstract nếu có, mức khớp cây/chủ đề/giống/địa danh và cảnh báo về đính chính/thu hồi khi metadata cung cấp. **Không dùng số trích dẫn hay DOI làm điểm uy tín tuyệt đối; phải đọc bài gốc và xác minh thiết kế, phương pháp, kết quả.** Tự điền chỉ áp dụng **nguồn/DOI và tên khoa học đã xác minh**, tuyệt đối không điền pH, EC, năng suất, giống, thời tiết tại ô, quy trình đã dùng hoặc bất kỳ số đo chưa đo. **Crossref cung cấp thông tin thư mục, không xác thực rằng kết quả nghiên cứu phù hợp với thí nghiệm của bạn.** Trước khi sử dụng một tham số được công bố, phải đọc phương pháp, giống, thời vụ, loại đất/giá thể, dạng đơn vị, thời điểm đo, điều kiện biên và bất định.

Ví dụ:
- **Thiếu phương pháp đo:** tìm tài liệu quy trình chuẩn để *thiết kế phép đo bổ sung*.
- **Thiếu số đo pH tại ô:** phải **đo lại**, hoặc đánh dấu thiếu; không chép pH của bài báo để giả làm pH thực đo.
- **Thiếu thông số cho mô hình:** có thể lưu tham số từ literature trong **bộ tham số có nguồn**, phân biệt rõ với **raw observations**.

Việc tìm kiếm cần Internet, có thể bị mạng/CDN/dịch vụ bên ngoài hạn chế. **Không gõ dữ liệu cá nhân nhạy cảm** vào truy vấn gửi đến dịch vụ tra cứu.

### Bước 11 — Kiểm tra lỗi và lưu hồ sơ

Nhấn **Kiểm tra dữ liệu**. Hệ thống rà các trường bắt buộc, số âm không hợp lý, dữ liệu trùng, pH ngoài 0–14, EC âm, thiếu đơn vị, ngày đo trước/sau phạm vi vụ, số nghiệm thức/lặp khai báo và một số lỗi khác.

Kết quả có thể hiện:
- **Cần sửa lỗi:** có lỗi cấu trúc dữ liệu;
- **Đã kiểm cấu trúc · Chưa kiểm định:** không có lỗi bắt buộc theo bộ quy tắc hiện tại, nhưng **chưa xác minh chất lượng khoa học**;
- **Chưa có quan trắc:** mới có metadata.

**Điểm đầy đủ (%)** là điểm đầy đủ hồ sơ **theo các trường do ứng dụng quy định**, không phải xác suất kết quả đúng, độ tin cậy mô hình hoặc mức sẵn sàng công bố.

Nên xuất **hai tệp** vào cuối mỗi phiên:
- **JSON thí nghiệm:** bản lưu toàn bộ metadata, quan trắc và nguồn.
- **QC JSON:** nhật ký lỗi/cảnh báo của lần kiểm toán hiện tại.

Nếu còn lỗi, JSON được phép lưu với nhãn **DRAFT**, để dữ liệu chưa hoàn thành không bị mất.

## 4. Quy trình làm việc khuyến nghị trong thực địa

**Trước thí nghiệm:** tạo mã → xác định cây/giống → thiết kế nghiệm thức/lặp → chuẩn hóa tên biến/đơn vị → mô tả protocol.

**Khi bố trí ô:** ghi địa điểm, diện tích, sơ đồ ô, ngẫu nhiên hóa, ngày gieo/cấy, điều kiện nền và nguồn dữ liệu thời tiết.

**Mỗi buổi đo:** ghi từng dòng quan trắc → ghi thiết bị/phương pháp → đánh dấu chất lượng → kiểm tra → **Xuất JSON** sao lưu.

**Sau thu hoạch:** nhập năng suất đúng basis → ghi tỷ lệ thương phẩm nếu đo → đối chiếu tổng ô, tổng mẫu → xuất CSV quan trắc + JSON toàn bộ + QC.

**Trước khi hiệu chuẩn mô hình:** đối chiếu nguồn gốc, thống nhất unit registry, kiểm tra thời gian và độ độc lập dữ liệu, khóa bản raw và tạo bản xử lý riêng.

## 5. Cách đọc cảnh báo thường gặp

| Thông báo | Nguyên nhân có thể | Xử lý |
|---|---|---|
| Thiếu mã/tên/ngày/vị trí | Chưa khai báo bắt buộc | Điền theo hồ sơ thực tế |
| Có EC nhưng thiếu đơn vị | Không biết cơ sở của con số | Kiểm tra báo cáo thiết bị/phòng lab |
| Có năng suất nhưng thiếu fresh/dry | Không rõ cơ sở khối lượng | Ghi basis đúng lúc cân/đo |
| Quan trắc trùng | Hai dòng có cùng thời điểm–nghiệm thức–lặp–biến | Đối chiếu sổ đo; không xóa khi chưa xác minh |
| Dòng đo có nhiều đơn vị cho cùng biến | Các đợt đo khác phương pháp/unit | Chuẩn hóa **có ghi chuyển đổi** hoặc tách thành biến khác |
| Quan trắc nằm ngoài thời gian thí nghiệm | Sai đồng hồ/múi giờ hoặc mốc khai báo | Kiểm tra nhật ký thiết bị và vụ |
| Số nghiệm thức/lặp không khớp | Mã ô hoặc thiết kế nhập sai | Đối chiếu sơ đồ bố trí |
| Crossref không có kết quả | Truy vấn quá hẹp, mạng lỗi, không có DOI | Rút ngắn từ khóa, thử Google Scholar/AGRIS, ghi hạn chế |
| Dữ liệu bị mất trên máy khác | localStorage không đồng bộ | Dùng **Nhập JSON** từ file đã sao lưu |

## 6. Giới hạn hiện tại — cần hiểu trước khi dùng nghiên cứu

VECrop hiện **chưa**:
- tự thu thập số đo từ cảm biến ngoài đồng;
- tự tìm số trên Internet rồi biến thành **raw observations**;
- tự tính ANOVA, LSD, mixed model, hoặc kiểm định độc lập đầy đủ;
- tự hiệu chuẩn tất cả tham số sinh lý của mọi cây;
- tự chạy Python server-side trên GitHub Pages;
- tự tải dữ liệu thí nghiệm lên GitHub hay sao lưu đám mây;
- chứng nhận độ chính xác thiết bị, tính hợp lệ của protocol, hoặc tính nhân quả.

Các cảnh báo pH/EC/yield là kiểm tra logic/miền cơ bản, **không phải ngưỡng nông học phổ quát cho mọi cây**.

## 7. Kiểm tra lại tệp bằng Python

Dùng Python trong thư mục dự án VECrop:

    python python/experiment_validator.py du-lieu-thi-nghiem.json

Chạy bộ kiểm tra tích hợp:

    python -m unittest discover -s tests -v

Bộ kiểm tra Python có thể không hoàn toàn trùng các chi tiết giao diện JavaScript; dùng nó như **lớp QC thứ hai**, không thay kiểm định bằng chuyên gia, phòng thí nghiệm và dữ liệu độc lập.

## 8. Gợi ý quản lý hồ sơ và bảo mật

Nên lưu mỗi bộ thí nghiệm trong thư mục riêng, ví dụ:

    VECrop-data/
      MA_THI_NGHIEM/
        raw/
        metadata/
        qc/
        processed/
        calibration/
        validation/
        provenance/

Giữ bản **raw không sửa**, ghi nhật ký mọi phép làm sạch/chuyển đơn vị; dữ liệu đã làm sạch phải truy được về bản gốc.

Dữ liệu hiện lưu trong trình duyệt của chính người nhập. **Không xem localStorage là sao lưu an toàn**. Không gửi thông tin cá nhân, địa chỉ riêng tư hoặc dữ liệu mật lên Crossref/Scholar qua trường tìm kiếm.

## 9. Các liên kết chính

- **Phòng thực nghiệm:** https://form997.github.io/VECrop/?view=experiment
- **Giáo trình VECrop:** https://form997.github.io/VECrop/?view=learn&chapter=1
- **Mã nguồn:** https://github.com/Form997/VECrop
- **Tệp kiểm toán Python:** python/experiment_validator.py
- **Mã giao diện thực nghiệm:** js/experiment.js và js/experiment-pro.js

---

**Kết luận:** dữ liệu đo thật + thiết kế rõ ràng + đơn vị + phương pháp + nguồn gốc + nhật ký QC là điều kiện đầu tiên để dùng VECrop trong nghiên cứu. **Hồ sơ đủ trường không đồng nghĩa thí nghiệm chính xác, kết quả đáng tin hoặc mô hình đã được kiểm định.**


## 10. Hiệu ứng giao diện 3D

Mở **Phòng thực nghiệm** từ trang chính. Phần đầu hiển thị một **mô hình minh họa 3D** về cây, vùng rễ, cảm biến và luồng quan trắc → QC; **đây không phải mô phỏng sinh lý theo dữ liệu thực nghiệm**. Khu 11 bước, thẻ chỉ số và thẻ DOI sử dụng hiệu ứng nổi/chiều sâu để dễ phân biệt các vùng chức năng.

- Nhấn **◈ 3D: Bật/Tắt** để chủ động giảm hoặc tắt hiệu ứng. Chế độ được ghi nhớ trên trình duyệt đang dùng.
- Trên điện thoại và thiết bị dùng con trỏ cảm ứng, hiệu ứng xoay theo chuột tự tắt; giao diện vẫn có màu sắc/chiều sâu tĩnh.
- Nếu hệ điều hành bật **Giảm chuyển động (Reduce Motion)**, trình duyệt không chạy hoạt ảnh 3D tương tác.
- **Các ô dữ liệu và bảng quan trắc không xoay**. Việc bật/tắt 3D không thay đổi thí nghiệm, dữ liệu, QC, DOI hoặc phép đo.
