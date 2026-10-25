# Chương 5. Dữ liệu thực nghiệm, thiết kế nghiên cứu và kiểm định mô hình cây trồng

> **Trạng thái:** Chương 5 đang biên soạn; hiện mới hoàn thành **mục 5.1**. Các mục 5.2 trở đi **chưa được viết**. Đây là giáo trình nghiên cứu, không phải chứng nhận rằng ứng dụng hay một tập dữ liệu đã được kiểm định độc lập.
>
> **Cầu nối từ Chương 4:** mô hình sinh lý–cơ chế chỉ có ý nghĩa thực tiễn khi biến trạng thái, thông lượng và tham số có thể đối chiếu với phép đo, đơn vị, thiết kế thí nghiệm, xuất xứ và độ không chắc chắn.

---

## 5.1. Nền tảng dữ liệu thực nghiệm có khả năng truy xuất và kiểm định

### 5.1.1. Mục tiêu học thuật và năng lực cần đạt

Kết thúc mục 5.1, người học phải có khả năng:

1. Phân biệt **đơn vị thí nghiệm**, **đơn vị quan sát**, **đơn vị lấy mẫu** và **đơn vị phân tích thống kê**; nhận biết giả lặp (*pseudoreplication*).
2. Mô tả được chuỗi **thí nghiệm → nghiệm thức → ô/đơn vị thí nghiệm → mẫu → biến đo → quan trắc → dữ liệu xử lý → đầu ra mô hình**.
3. Thiết lập hồ sơ metadata phản ánh đúng cây–giống, địa điểm, mùa vụ, thiết kế, thiết bị, phương pháp, đơn vị, thời gian và các điều kiện biên.
4. Ghi nhận dữ liệu khuyết, sai số, độ không chắc chắn và nguồn tham khảo mà **không tự tạo quan trắc chưa đo**.
5. Tách tập dữ liệu dùng để **hiệu chỉnh**, **lựa chọn mô hình** và **kiểm định độc lập**, tránh rò rỉ thông tin.
6. Thiết kế chuỗi truy xuất *raw → QC → processed → model input → prediction → validation result*.
7. Xác định được các kiểm tra chất lượng tối thiểu trước khi giải thích kết quả sinh lý hoặc khuyến nghị canh tác.

**Phạm vi:** phương pháp quản trị và đánh giá tính sử dụng được của dữ liệu trong thực nghiệm nông nghiệp. **Không** thay thế lý thuyết bố trí thí nghiệm đầy đủ, phân tích ANOVA/mixed model, chuẩn phòng thử nghiệm, hoặc kiểm định độ chính xác thiết bị. Những chủ đề này sẽ được phát triển ở mục sau.

### 5.1.2. Từ cơ chế sinh lý đến phép đo — phân biệt các đối tượng

Trong Chương 1–4, VECrop sử dụng các đại lượng như thế nước, vận tốc dòng, thông lượng carbon, nồng độ dinh dưỡng, diện tích lá và năng suất. Để dùng một đại lượng vào nghiên cứu, bắt buộc phân biệt:

| Đối tượng | Định nghĩa | Ví dụ đúng | Lỗi thường gặp |
| --- | --- | --- | --- |
| **Trạng thái** (*state*) | Đại lượng mô tả hệ tại một thời điểm | Hàm lượng nước đất theo thể tích, m³/m³ | Gọi EC là trực tiếp hàm lượng NPK |
| **Thông lượng** (*flux*) | Lượng đi qua một ranh giới theo thời gian | Thoát hơi, mm/ngày | Trộn với lượng nước tích lũy, mm |
| **Biến được đo** (*measurand*) | Đại lượng mà phép đo nhằm xác định | pH mẫu đất đo bằng phương pháp đã định | Coi pH nước và pH KCl tương đương |
| **Quan trắc** (*observation*) | Giá trị gắn với mẫu, thời gian, thiết bị, phương pháp, đơn vị | EC dịch chiết đất của mẫu X tại ngày Y | Chỉ lưu số 1,6 mà không ghi đơn vị |
| **Tham số mô hình** | Đại lượng điều khiển phương trình | Hệ số đáp ứng khí khổng; tham số giữ nước | Coi tham số suy từ bài báo khác là phép đo tại ruộng |
| **Dữ liệu tham khảo** | Bằng chứng từ công bố độc lập | DOI và bảng số liệu trích từ nghiên cứu khác | Sao chép vào cột quan trắc hiện trường |
| **Đầu ra mô hình** | Giá trị được tính từ giả định và đầu vào | Sinh khối mô phỏng, kg chất khô/ha | Coi mô phỏng là năng suất đã thu hoạch |

Một số đại lượng có thể vừa là *state* mô hình vừa được đo bằng *proxy*. Khi đó phải lưu cách biến phép đo thành ước lượng trạng thái và độ không chắc chắn của phép chuyển đổi.

### 5.1.3. Cấu trúc phân cấp: trial, study, experimental unit, sample, observation

Cần đặt khóa định danh ngay từ thiết kế, không chờ đến khi nhập liệu:

**Research programme → Trial → Study (site × season × protocol) → Experimental unit → Sample → Observation.**

Đây là **cấu trúc triển khai đề xuất cho VECrop**, tương thích về mặt ý tưởng với MIAPPE/BrAPI; không phải tuyên bố rằng tất cả trường và quan hệ của hai chuẩn đã được hỗ trợ trong phần mềm.

- **trial_id:** chương trình/đợt thử nghiệm có thể bao gồm nhiều study.
- **study_id:** tổ hợp bối cảnh có thiết kế và quy trình xác định.
- **experimental_unit_id:** ô đất, chậu, bồn thủy canh hoặc đơn vị thực sự được áp dụng nghiệm thức độc lập.
- **treatment_id:** nhãn nghiệm thức và thành phần xử lý chi tiết, không chỉ tên viết tắt.
- **block_id / replicate_id:** mã khối và lần lặp theo sơ đồ ngẫu nhiên hóa.
- **sample_id:** mẫu lá, đất, rễ, nước, sinh khối… lấy từ experimental unit.
- **observation_id:** duy nhất cho biến đo × mẫu/đơn vị × thời gian × lần đo × phương pháp.
- **source_id:** định danh dữ liệu/thiết bị/tài liệu gốc; không dùng DOI để thay khóa mẫu.

**Phân biệt quyết định:** số lá đo trên cùng một cây không phải là số ô thí nghiệm độc lập. Nếu nghiệm thức được cấp ở mức bồn thủy canh, nhiều cây trong cùng một bồn có thể là **mẫu phụ**, không phải các lần lặp thí nghiệm độc lập. Phân tích sai đơn vị độc lập sẽ làm độ tự do và sai số ước lượng sai lệch.

### 5.1.4. Xác định đơn vị ngẫu nhiên hóa trước khi đo

Một thiết kế thí nghiệm cần trả lời bốn câu hỏi:

1. **Yếu tố nào bị thao tác?** Phân bón, chế độ tưới, giống, mức che sáng, công thức dung dịch…
2. **Đơn vị nào nhận xử lý?** Ô, chậu, bồn, khối nhà màng, lô sản xuất…
3. **Ngẫu nhiên hóa thực sự diễn ra ở cấp nào?** Cây, ô, khối, hay buồng môi trường?
4. **Giả thuyết được kiểm định ở cấp nào?** Phải khớp với đơn vị độc lập và cấu trúc tương quan.

Ví dụ **minh họa về cấu trúc, không phải kết quả thí nghiệm thực**: nếu bốn bồn thủy canh độc lập, mỗi bồn chứa nhiều cây, và mỗi bồn nhận một công thức dinh dưỡng, thì **bồn** mới là đơn vị nhận xử lý. Số cây bên trong bồn không tự tăng số lần lặp độc lập của nghiệm thức. Cần ghi nhận phân nhóm bồn→cây, phương pháp bố trí và ảnh hưởng vị trí.

Nếu không có ngẫu nhiên hóa, phải ghi rõ nghiên cứu quan sát hoặc thiết kế bán thực nghiệm; không đổi nhãn sang RCBD để phần mềm ngừng cảnh báo.

### 5.1.5. Mô hình đo lường và nguồn sai số

Ký hiệu đại lượng thực sự cần đánh giá của đơn vị \(i\) tại thời điểm \(t\) là \(x_{i,t}\). Số được ghi nhận:

$$
y_{i,t}=h(x_{i,t},\boldsymbol\phi)+b_{i,t}+\varepsilon_{i,t}
$$

Trong đó:

- \(h\): **hàm quan sát**, có thể là phép chuyển đổi của cảm biến hoặc phương pháp phân tích;
- \(\boldsymbol\phi\): tham số hiệu chuẩn của công cụ đo;
- \(b_{i,t}\): độ chệch có hệ thống (nếu tồn tại);
- \(\varepsilon_{i,t}\): phần sai số ngẫu nhiên hoặc nhiễu chưa mô tả.

Đây là **khung phương trình đo tổng quát**, không phải khẳng định mọi lỗi đo đều cộng tuyến tính hay có phân phối chuẩn. Trường hợp cảm biến có sai lệch tỷ lệ, không tuyến tính, bão hòa, trôi chuẩn hoặc tự tương quan, phải thay \(h\) và mô hình nhiễu cho phù hợp.

**Ví dụ chuẩn hóa đo:** EC phụ thuộc nhiệt độ và cách hiệu chỉnh của máy; pH đất phụ thuộc môi trường chiết, tỷ lệ đất:dung dịch, thời gian cân bằng và thiết bị. Do đó chỉ được gộp các phép đo thành một biến thống nhất sau khi đã xác định tính tương thích của phương pháp. Quy đổi đơn vị không đủ để bảo đảm cùng một *measurand*.

### 5.1.6. Trường dữ liệu tối thiểu cần lưu

| Nhóm metadata | Các trường quan trọng | Hệ quả khi thiếu |
| --- | --- | --- |
| Nhận dạng | experiment_id, study_id, protocol_version, người/đơn vị ghi nhận | Không tái tạo được lịch sử nghiên cứu |
| Cây trồng | Tên khoa học, giống, mã lô giống, tuổi cây, giai đoạn sinh trưởng | Không kiểm soát được biến giống/giai đoạn |
| Không gian | Tỉnh, vùng, site_id, vị trí ô, độ sâu mẫu, tọa độ nếu được phép lưu | Sai tính đại diện môi trường |
| Thời gian | start/end, timestamp có múi giờ, thời điểm xử lý, thời điểm đo | Không thể ghép đúng weather–soil–crop |
| Thiết kế | Kiểu bố trí, đơn vị xử lý, block, replicate, randomization record | Giả lặp, sai mô hình sai số |
| Quản lý | Nước tưới, phân bón, liều, lịch áp dụng, hệ thống canh tác | Không giải thích được nguyên nhân thay đổi |
| Phương pháp | Biến, định nghĩa, mô/độ sâu, thiết bị, calibration log, đơn vị | Không so sánh được phép đo |
| Giá trị | observed_value, missing_reason, detection_limit, qc_flag | Nhầm giá trị thiếu với 0 |
| Nguồn | raw_file_id, checksum, version, author, DOI (nếu là literature) | Không truy xuất và tái lập |
| Quyền & an toàn | Giấy phép, quyền truy cập, mức nhạy cảm vị trí/dữ liệu | Phát tán dữ liệu riêng tư |

MIAPPE cung cấp mô hình metadata cho thí nghiệm kiểu hình thực vật; BrAPI cung cấp giao diện trao đổi thực thể nghiên cứu cây trồng. **Đây là cơ sở tham chiếu thiết kế dữ liệu**; VECrop hiện chưa cam kết tuân thủ toàn bộ MIAPPE 1.2 hoặc mọi endpoint BrAPI.

### 5.1.7. Dữ liệu thiếu và giới hạn phát hiện

Phải tách ba trường hợp:

- **Không đo:** thí nghiệm không thực hiện phép đo; ghi *not_measured*.
- **Đã đo nhưng máy/qui trình lỗi:** ghi *measurement_failed* và biên bản.
- **Đã đo, nhỏ hơn giới hạn định lượng/phát hiện:** ghi *below_LOQ* hoặc *below_LOD*, kèm giới hạn và quy trình xử lý; không đặt bằng 0 nếu không được biện minh.

Các nhãn trên là **quy ước triển khai đề xuất** cho VECrop, không phải bộ mã bắt buộc của MIAPPE.

Có thể mô tả tính thiếu dữ liệu theo mặt nạ:

$$
M_{i,j}=
\begin{cases}
1,&\text{nếu giá trị của đơn vị }i,\text{ biến }j\text{ đã quan sát hợp lệ;}\\
0,&\text{nếu không có giá trị có thể sử dụng.}
\end{cases}
$$

Trường hợp \(M_{i,j}=0\), **không được kết luận \(x_{i,j}=0\)**. Phân biệt MCAR, MAR, MNAR cần mô hình hoặc giả định có cơ sở; không thể xác định cơ chế thiếu chỉ bằng nhìn vào tỷ lệ ô trống. Bất kỳ cách điền khuyết nào cũng là một bước **xử lý có phiên bản**, không làm thay đổi bản raw.

### 5.1.8. Độ không chắc chắn: số đo và suy luận

Nếu \(z=f(x_1,\ldots,x_p)\), sai số đầu vào đủ nhỏ, \(f\) khả vi và biết ma trận hiệp phương sai \(\mathbf\Sigma_x\), thì gần đúng tuyến tính bậc một:

$$
u^2(z)\approx \mathbf J\,\mathbf\Sigma_x\,\mathbf J^T,
\qquad
\mathbf J=\left[\frac{\partial f}{\partial x_1},\ldots,\frac{\partial f}{\partial x_p}\right]
$$

- \(u(z)\) là **độ không chắc chắn chuẩn** của kết quả suy ra (cùng đơn vị với \(z\)).
- \(\mathbf J\) là vector đạo hàm riêng tại giá trị ước lượng.
- \(\mathbf\Sigma_x\) chứa cả phương sai và hiệp phương sai đầu vào; **không tự giả định các phép đo độc lập**.

Với phép lấy trung bình của \(n\) giá trị độc lập, đồng phân phối và có phương sai hữu hạn, sai số chuẩn ước lượng có thể là:

$$
SE(\bar y)=\frac{s}{\sqrt n}.
$$

Nhưng dùng tổng số cây làm \(n\) khi nghiệm thức áp dụng theo bồn/ô là **không đúng đơn vị thống kê**. Nếu dữ liệu có cấu trúc lồng, lặp theo thời gian hoặc tương quan không gian, phải dùng mô hình phù hợp; công thức đơn giản trên không còn tự động áp dụng.

**Không đánh đồng:** độ lệch chuẩn giữa ô, sai số chuẩn của trung bình, độ không chắc chắn thiết bị và khoảng dự đoán của mô hình.

### 5.1.9. Sổ dữ liệu nguyên bản — kiểm soát sửa đổi và provenance

Một quy trình khoa học cần giữ được:

    Dữ liệu gốc / nhật ký máy đo
       ↓ (hash + mã phiên + người ghi)
    Kiểm tra đơn vị, timestamp, định danh mẫu
       ↓ (báo cáo lỗi và quyết định QC)
    Bản dữ liệu chuẩn hóa có lịch sử chuyển đổi
       ↓ (tách calibration / validation)
    Mô hình + phiên bản tham số + nguồn tài liệu
       ↓ (dự đoán + bất định)
    Đối chiếu quan trắc độc lập + báo cáo kiểm định

Mọi bước chuyển đổi nên ghi **input_id, output_id, tool_version, action, timestamp, actor, reason, checksum**. Đây là thiết kế xuất xứ dữ liệu phù hợp **ý tưởng Entity–Activity–Agent** của W3C PROV-O; bản ghi của VECrop không được tự nhận đã xuất đúng định dạng RDF/PROV-O nếu chưa xây bộ chuyển đổi có kiểm thử.

Đối với số liệu có chỉnh sửa, nguyên tắc là **giữ bản gốc, tạo bản xử lý mới**. Một giá trị bị đánh dấu không hợp lệ phải có lý do và người/qui tắc quyết định; không xóa âm thầm.

### 5.1.10. Chỉ tiêu kiểm toán chất lượng dữ liệu (QC)

QC đầu vào gồm nhiều lớp:

| Lớp | Ví dụ kiểm tra | Kết luận được phép |
| --- | --- | --- |
| Schema | Có mã thí nghiệm, cấu trúc mảng, kiểu số hợp lệ | Có thể đọc dữ liệu |
| Dimensional | Đơn vị, cơ sở tươi/khô, khối lượng/diện tích, nhiệt độ hiệu chỉnh | Đơn vị phù hợp |
| Domain | pH trong miền biểu diễn; EC không âm; ngày đo hợp lệ | Chưa thấy lỗi vật lý sơ cấp |
| Consistency | Nghiệm thức/lặp khớp sơ đồ, không trùng khóa mẫu–thời gian | Ít mâu thuẫn hồ sơ hơn |
| Instrument | Log hiệu chuẩn, detection limit, nguồn logger | Có dấu vết thiết bị |
| Experimental design | Cấp ngẫu nhiên hóa, khối, mẫu phụ, độ độc lập | Có cơ sở chọn mô hình phân tích |
| Evidence | Nguồn DOI, phương pháp, giống, địa điểm, quyền tái sử dụng | Có dấu vết tài liệu để thẩm định |
| Scientific validation | Quan trắc độc lập, phân tích sai số, thử ngoài miền, kiểm tra bảo toàn | Có bằng chứng cho kết luận mô hình theo phạm vi đã kiểm |

Không được suy luận:

$$
QC_{\text{schema}}=\text{pass}
\;\not\Rightarrow\;
QC_{\text{measurement}}=\text{pass}
\;\not\Rightarrow\;
Validation_{\text{model}}=\text{pass}.
$$

Một tỷ lệ trường đã điền 100% **không** chứng minh dữ liệu đúng, đầy đủ mẫu độc lập hoặc mô hình có năng lực dự báo.

### 5.1.11. Quan hệ giữa mô hình đo và mô hình sinh lý

Đặt:

$$
\mathbf x_{t+1}=f(\mathbf x_t,\mathbf u_t,\boldsymbol\theta)+\boldsymbol\eta_t
$$

$$
\mathbf y_t=h(\mathbf x_t,\boldsymbol\phi)+\boldsymbol\varepsilon_t
$$

Trong đó:

- \(\mathbf x\): trạng thái sinh lý không nhất thiết quan sát trực tiếp;
- \(\mathbf u\): tác động/forcing có ghi nguồn (tưới, bón, bức xạ, nhiệt độ…);
- \(\boldsymbol\theta\): tham số quá trình sinh lý;
- \(\mathbf y\): phép đo có phương pháp và đơn vị;
- \(\boldsymbol\phi\): tham số phép đo;
- \(\boldsymbol\eta,\boldsymbol\varepsilon\): sai khác quá trình và phép đo, với cấu trúc thống kê **phải được kiểm tra**.

Đây là **khung state-space tổng quát do VECrop dùng để tổ chức mô hình**, không phải mô hình cây trồng hoàn chỉnh và chưa có tham số hiệu chuẩn. Trộn \(\mathbf y\) vào \(\mathbf x\) mà không mô hình hóa \(h\) có thể khiến sai số đo bị hấp thụ giả tạo vào tham số sinh lý.

### 5.1.12. Thiết kế phân tách hiệu chuẩn và kiểm định

- **Calibration:** xác định tham số trên một phần dữ liệu có nguồn rõ ràng.
- **Model selection / tuning:** lựa chọn cấu trúc và siêu tham số; không dùng dữ liệu kiểm định cuối để lựa chọn.
- **Independent validation:** đánh giá hiệu năng trên nhóm dữ liệu thực sự chưa dùng trong quá trình xây dựng/hiệu chỉnh/ra quyết định mô hình.

Với nông nghiệp, các cách tách phù hợp có thể là **theo mùa vụ, theo site, theo lô thí nghiệm độc lập hoặc theo khối được định nghĩa trước**. Cách tách ngẫu nhiên từng dòng cảm biến từ cùng bồn hoặc cùng cây thường không tạo ra kiểm định độc lập tương ứng với dự báo cho bồn/cánh đồng mới.

Cần lưu:

    model_id
    code_commit
    parameter_version
    calibration_dataset_ids
    model_selection_dataset_ids
    independent_validation_dataset_ids
    split_strategy
    applicable_domain
    uncertainty_method
    failed_validation_flags

Một mô hình có thể khớp năng suất cuối cùng nhưng vẫn sai LAI, sinh khối, trạng thái nước hoặc thành phần thu hoạch. Do đó tiêu chí kiểm định cần theo **quá trình → cơ quan → toàn cây → thành phần năng suất**, như tổng kết Chương 4.

### 5.1.13. Dữ liệu ngoại sinh: tìm nguồn theo địa điểm không đồng nghĩa đo tại chỗ

Đối với VECrop, dữ liệu ngoại sinh có thể gồm bản đồ đất, khí tượng trạm, ảnh viễn thám, thông số giống, tài liệu DOI hoặc kết quả mô hình vùng. Tính phù hợp cần kiểm tra theo:

1. **Vị trí:** mức trùng site, tỉnh, vùng sinh thái và khoảng cách; khi có thể, cần phân tích độ đại diện thay vì chỉ so địa danh.
2. **Thời điểm:** năm/ mùa vụ và điều kiện thời tiết đã được so khớp hay chưa.
3. **Loài/giống:** có đúng vật liệu sinh học hoặc có bằng chứng chuyển giao tham số không.
4. **Hệ canh tác:** đồng ruộng, chậu, nhà kính, thủy canh, đất/giá thể, mật độ và quản lý.
5. **Phương pháp:** cùng measurand, phương pháp chiết/đo, đơn vị, giới hạn phát hiện, thiết bị.
6. **Tính hợp pháp và nguồn gốc:** DOI, tổ chức phát hành, phiên bản dữ liệu, giấy phép sử dụng, cập nhật/thu hồi.

**Ưu tiên địa lý không phải tiêu chí duy nhất:** một công trình cùng tỉnh nhưng khác loài/hệ canh tác/phương pháp có thể kém phù hợp hơn nghiên cứu ngoài tỉnh nhưng trùng các điều kiện cốt lõi. Có DOI không đồng nghĩa bài đã được phản biện, chưa bị thu hồi hay có giá trị áp dụng tại ruộng.

Với giá trị ngoại sinh cần dùng trong mô hình, nên ghi:

    source_type = literature_parameter | weather_station | soil_map | sensor | simulation
    source_uri = DOI hoặc định danh dữ liệu thực sự đã truy xuất
    target_site_id = nơi cần áp dụng
    applicability = not_assessed | screened | validated_locally
    measurement_status = observed | proxy | imputed | simulated
    source_limitations = mô tả bằng chứng, giả định và bất định

**Không** chuyển bất kỳ giá trị ngoại sinh nào sang *observed* của ô thí nghiệm nếu ô đó chưa từng được đo thực tế.

### 5.1.14. Phân loại hệ DATA trong VECrop Desktop

Hiện phiên bản VECrop Desktop có một cơ sở dữ liệu SQLite cục bộ, tách khỏi file EXE. Đối với mục 5.1, áp dụng quy tắc:

| Thành phần triển khai | Vai trò thực tế hiện tại | Điều chưa được phép khẳng định |
| --- | --- | --- |
| experiments | Lưu hồ sơ thí nghiệm mới nhất | Không chứng minh bố trí thực địa |
| observations | Lưu dòng quan trắc với giá trị và đơn vị | Không chứng minh cảm biến chính xác |
| provenance | Lưu metadata tài liệu/DOI | Không kiểm tra toàn văn tự động |
| experiment_revisions | Lưu bản theo phiên bản | Không thay nhật ký thiết bị raw riêng |
| audit_log | Lưu thời điểm và checksum thay đổi | Không tương đương ký số/chuỗi chứng cứ bất biến |
| backup SQLite | Sao lưu khi ứng dụng đang chạy | Không thay chiến lược 3-2-1 hoặc backup ngoại vi |
| QC biểu mẫu | Sàng lọc cấu trúc, đơn vị và logic cơ bản | Không tương đương kiểm định khoa học |

**Nâng cấp cần có trong tương lai:** bảng study/experimental_unit/sample riêng; khóa ngoại cho ô/nghiệm thức/lần lặp; registry biến–đơn vị–phương pháp; log raw bất biến; calibration/validation partition; audit nhập từ sensor; chính sách sao lưu/khôi phục và kiểm tra tính toàn vẹn.

### 5.1.15. Bài thực hành thiết kế bộ dữ liệu — không bịa kết quả

**Tình huống giả định phục vụ giảng dạy:** một nghiên cứu so sánh chế độ phân bón cho rau xà lách trong điều kiện có mái che. Chưa có số đo thực tế.

Yêu cầu học viên:

1. Đặt mã study và mã ô độc lập; trình bày đơn vị được ngẫu nhiên hóa.
2. Xác định biến phụ thuộc: chiều cao, SPAD, khối lượng lá tươi, khối lượng lá khô, năng suất thương phẩm; nêu định nghĩa và đơn vị từng biến.
3. Ghi *soil/substrate pH*, EC, nhiệt độ, RH, PPFD, tưới và phân bón kèm phương pháp.
4. Xây biểu mẫu đo trước thí nghiệm; phân biệt số đo không có với số 0.
5. Tạo dữ liệu trống có metadata, **không sinh giá trị quan trắc giả**.
6. Chọn nguồn bài báo đúng loài, hệ canh tác và khu vực để đối chiếu thiết kế; DOI ghi ở provenance.
7. Xuất JSON từ VECrop và lưu vào DATA SQLite; kiểm tra lịch sử và bản sao lưu.
8. Chỉ chuyển sang mô hình hóa khi đã có quan trắc và kiểm toán thiết kế/đơn vị.

**Khung dữ liệu minh họa — giá trị là null, không phải số liệu khoa học:**

    {
      "schema_version": "5.1-demo-metadata",
      "experiment_id": "EXAMPLE-ONLY-001",
      "crop_name": "Lactuca sativa",
      "cultivar": null,
      "experimental_unit": "plot_id_chua_khai_bao",
      "variable": "fresh_mass",
      "value": null,
      "unit": "g/plant",
      "missing_reason": "not_measured",
      "source_type": "field_measurement_pending",
      "qc_flag": "unmeasured"
    }

**Không nhập nguyên mẫu minh họa này vào nút Nhập JSON của ứng dụng**: đây là mẫu giải thích khái niệm, không phải schema JSON nhập liệu chính thức của VECrop Desktop. Schema lưu dữ liệu ứng dụng còn đang ở thế hệ 1.0 và có cấu trúc metadata/observations riêng.

### 5.1.16. Bài tập đánh giá học thuật

1. Một nghiệm thức tưới áp dụng cho 3 bồn; mỗi bồn đo 10 cây. Đơn vị thí nghiệm nào là độc lập? Vì sao không được báo \(n=30\) để tính sai số nghiệm thức?
2. Một phòng lab đo EC đất bằng hai quy trình khác nhau. Điều kiện nào cần kiểm tra trước khi hợp nhất chuỗi thời gian?
3. Một mô hình được hiệu chỉnh bằng quan trắc tại cùng vườn, sau đó chia ngẫu nhiên 20% các dòng cảm biến làm validation. Đây có thực sự là bằng chứng dự báo cho site khác không?
4. Một bài nghiên cứu có DOI, công bố tại cùng tỉnh, nhưng sử dụng chậu thay cho đồng ruộng và giống khác. Nêu lập luận **không dùng** tham số như trị đo hiện trường.
5. Phân biệt *not_measured*, *below_LOQ*, *measurement_failed*. Khi nào trường *value = 0* có ý nghĩa thực sự?
6. Thiết kế hồ sơ provenance cho phép đối chiếu từ dòng năng suất trong báo cáo tới ô, cân, thời gian cân, bản raw và lệnh chuyển đơn vị.
7. Thiết kế quy trình kiểm chứng có thể tái lập cho dữ liệu từ hai mùa vụ với chênh lệch thiết bị và phương pháp lấy mẫu.

**Rubric đề xuất của VECrop (không phải chuẩn đánh giá pháp quy):** đạt khi người học chứng minh được (a) đơn vị độc lập, (b) metadata đủ truy xuất, (c) mô hình đo/đơn vị nhất quán, (d) nhãn missing/QC chính xác, (e) tách nguồn ngoài và raw, (f) đường đi calibration–validation không rò rỉ dữ liệu.

### 5.1.17. Tài liệu khoa học và tiêu chuẩn gốc

Các tài liệu sau được dùng để **thiết kế khung quản trị dữ liệu**, không ngụ ý mỗi trường trong VECrop đã đáp ứng hoàn toàn chuẩn.

1. **Wilkinson, M. D. et al. (2016).** The FAIR Guiding Principles for scientific data management and stewardship. *Scientific Data* **3**, 160018. DOI: https://doi.org/10.1038/sdata.2016.18 — nền tảng *Findable, Accessible, Interoperable, Reusable*.
2. **Papoutsoglou, E. A. et al. (2020).** Enabling reusability of plant phenomic datasets with MIAPPE 1.1. *New Phytologist* **227**, 260–273. DOI: https://doi.org/10.1111/nph.16544 — thông tin tối thiểu về thiết kế và kiểu hình thực vật.
3. **MIAPPE community.** Minimum Information About a Plant Phenotyping Experiment, dự án và checklist hiện được cộng đồng phát triển tiếp (bao gồm phát hành **1.2**): https://github.com/MIAPPE/MIAPPE — dùng phiên bản cụ thể khi triển khai ánh xạ.
4. **Selby, P. et al. (2019).** BrAPI—an application programming interface for plant breeding applications. *Bioinformatics* **35**, 4147–4155. DOI: https://doi.org/10.1093/bioinformatics/btz190 — cơ chế trao đổi đối tượng thí nghiệm và quan trắc.
5. **W3C (2013).** PROV-O: The PROV Ontology. *W3C Recommendation*, 30 April 2013. https://www.w3.org/TR/prov-o/ — nguyên lý Entity, Activity, Agent, dữ liệu nguồn và derivation.
6. **BrAPI documentation — MIAPPE Mapping.** https://plant-breeding-api.readthedocs.io/en/brapi-v2.1/docs/best_practices/MIAPPE.html — ví dụ ánh xạ study, observation unit, sample, treatments và metadata.

**Quy tắc liêm chính:** phần **5.1.1–5.1.16** kết hợp tri thức đã công bố với **lược đồ, nhãn và yêu cầu phần mềm được đề xuất bởi VECrop**. Không được dùng bảng mẫu, khung phương trình hay mã kiểm thử của mục này làm bằng chứng rằng một bộ số đo nông nghiệp đã tồn tại hoặc được kiểm định thực tế.

---

**Điểm dừng Chương 5 hiện tại: 5.1.** Chưa có nội dung 5.2, 5.3 hoặc các mục khác. Khi viết tiếp phải dùng dữ liệu thật, trích nguồn và tách rõ phương pháp từ chuẩn với thiết kế của VECrop.
