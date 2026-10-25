# VECrop

**VECrop** là dự án mô hình hóa sinh lý cây trồng và môi trường theo hướng **cơ chế – bảo toàn vật chất – đa cây trồng – có kiểm định**, kết hợp giáo trình khoa học, giao diện web động và các công cụ Python nhẹ để tổ chức tri thức, phân tích cấu hình cây trồng và hỗ trợ phát triển mô hình.

> **Trạng thái hiện tại:** giáo trình đã hoàn thành **Chương 1 → Chương 4, mục 4.20**.  
> **Phạm vi:** từ vùng rễ, thủy lực, hấp thu dinh dưỡng, quang hợp, source–sink, tín hiệu tế bào, phenology, sinh khối, senescence, hình thành năng suất đến kiểm định đa cây trồng.

## Truy cập nhanh

- Website: https://form997.github.io/VECrop/
- Repository: https://github.com/Form997/VECrop
- Bản giáo trình gộp: `docs/VECrop-full.md`
- Lõi cấu hình Python: `python/vecrop_engine.py`
- Agent nội dung: `smart_agent.py`
- Bộ phân tích website: `crop_analyzer.py`

---

## 1. Mục tiêu dự án

VECrop hướng tới một kiến trúc có thể mô tả cây trồng theo chuỗi:

```text
Môi trường
→ vùng rễ
→ hấp thu nước và ion
→ xylem
→ lá và khí khổng
→ quang hợp
→ phloem
→ source–sink
→ sinh trưởng
→ phenology
→ senescence/remobilization
→ sinh khối
→ năng suất
```

Dự án không cố xây dựng một “cây trồng trung bình”. Thay vào đó:

```text
Lõi cơ chế chung
+ cấu hình theo cây
+ tham số theo giống
+ điều kiện đất/giá thể
+ thời tiết
+ quản lý
+ hiệu chuẩn
+ kiểm định
= mô phỏng VECrop
```

---

## 2. Nguyên tắc khoa học

VECrop sử dụng một số nguyên tắc bắt buộc:

1. **Bảo toàn trước độ khớp.** Mô hình không được hy sinh cân bằng nước, carbon hoặc dinh dưỡng chỉ để fit dữ liệu đẹp hơn.
2. **Không trộn đại lượng khác thứ nguyên.**
3. **Mechanistic, reduced và diagnostic phải được tách rõ.**
4. **Không double counting stress.**
5. **Không dùng tham số sinh học như hằng số phổ quát.**
6. **Không suy nutrient uptake trực tiếp từ tổng dinh dưỡng đất.**
7. **EC không đồng nghĩa với N, P hoặc K.**
8. **Growth không đồng nghĩa với development.**
9. **Một crop chỉ được coi là được hỗ trợ thực sự khi có đủ:**

```text
Config + Parameters + Calibration + Validation
```

10. **Dự báo phải đi kèm uncertainty và validity domain khi có thể.**

---

## 3. Cấu trúc giáo trình

### Chương 1 — Cơ sở sinh lý, vật lý và toán học
- hệ cây trồng như một hệ mở;
- state vector;
- bảo toàn vật chất;
- concentration, activity và flux;
- water potential;
- pF;
- van Genuchten;
- Darcy–Buckingham/Richards;
- total vs available nutrient;
- mass flow và diffusion;
- electrochemical potential;
- Nernst;
- H+-ATPase;
- HATS/LATS;
- Liebig và Shelford;
- normalization;
- HSY như diagnostic framework;
- dimensional consistency;
- uncertainty và provenance.

File: `docs/01-chapter-1.md`

### Chương 2 — Môi trường vùng rễ
- soil/substrate water;
- retention curve;
- hydraulic conductivity;
- root water uptake;
- nutrient transport;
- sorption và buffering;
- EC/pH;
- mineral N transformations;
- O₂ và Eh;
- ngập, aerenchyma, radial oxygen loss;
- nhiệt độ vùng rễ;
- organic matter;
- rhizosphere, microbiome, mycorrhiza;
- salinity;
- hydroponics;
- sensor/data QC;
- data assimilation.

File: `docs/02-chapter-2.md`

### Chương 3 — HSY cấp tế bào
- cấu trúc và tính toàn vẹn mô;
- cell wall;
- aquaporin;
- gene–protein–enzyme;
- transporter capacity;
- ATP và năng lượng;
- hormone;
- ABA;
- Ca²⁺;
- ROS;
- MAPK;
- growth–defense tradeoff;
- sugar signaling;
- SnRK1/TOR;
- stress memory;
- identifiability;
- uncertainty;
- kiểm định multi-scale.

File: `docs/03-chapter-3.md`

### Chương 4 — Thủy lực, mạch dẫn và tích hợp toàn cây

Chương 4 hiện kết thúc tại **4.20**.

Các khối lớn:

- 4.1 SPAC và water potential;
- 4.2 thủy lực rễ;
- 4.3 hấp thu khoáng và xylem loading;
- 4.4 xylem, cavitation và embolism;
- 4.5 phloem và source–sink;
- 4.6 stomata, photosynthesis và canopy;
- 4.7 cân bằng C–N–P–K;
- 4.8 respiration và ATP;
- 4.9 O₂, hypoxia, anoxia và fermentation;
- 4.10 ion homeostasis và salinity;
- 4.11 ROS và redox;
- 4.12 hormone–Ca²⁺–ROS–MAPK;
- 4.13 sugar–T6P–SnRK1–TOR;
- 4.14 meristem, cell division, organ development và phenology;
- 4.15 senescence, PCD và remobilization;
- 4.16 sinh khối và phân bổ cơ quan;
- 4.17 hình thành năng suất và Harvest Index;
- 4.18 tích hợp toàn cây và conservation audit;
- 4.19 sensitivity, uncertainty, identifiability, calibration và validation;
- 4.20 khung kiểm định đa cây trồng.

File: `docs/04-chapter-4.md`

---

## 4. Phạm vi cây trồng

VECrop sử dụng một **mechanistic core** chung nhưng cấu hình khác nhau theo cây.

Khung 4.20 hiện bao phủ:
- ngũ cốc;
- cây họ đậu;
- cây lấy dầu;
- cây củ/rễ;
- rau lá;
- rau quả;
- cây ăn quả lâu năm;
- cây đường;
- cây sợi;
- cây đồ uống;
- cây gia vị và dược liệu;
- cây thức ăn gia súc;
- cây công nghiệp lâu năm;
- cây lấy mủ;
- cây hoa/cảnh;
- cây sinh khối/năng lượng;
- cây trồng nhà kính;
- thủy canh;
- vertical farming;
- C3, C4 và CAM;
- annual, ratoon và perennial crops.

### Hồ sơ Python hiện có

`python/vecrop_engine.py` hiện có cấu hình nền cho một số cây đại diện:

- lúa;
- ngô;
- lúa mì;
- đậu tương;
- xà lách;
- cà chua;
- khoai tây;
- sắn;
- mía;
- chuối;
- cây có múi;
- nho;
- cà phê;
- chè;
- bông;
- cao su.

Đây là **hồ sơ framework**, không đồng nghĩa đã có bộ tham số được kiểm định cho mọi giống, vùng và hệ thống canh tác.

---

## 5. Python Intelligence Engine

File chính:

`python/vecrop_engine.py`

Lõi này hiện:
- lưu catalog cây trồng;
- phân biệt C3/C4;
- định nghĩa cơ quan thu hoạch;
- gợi ý core modules;
- gợi ý crop-specific modules;
- thêm module theo mục tiêu như nước, hạn, dinh dưỡng, chất lượng, nhà kính hoặc thủy canh;
- audit độ đầy đủ của một cấu hình đầu vào;
- xuất JSON cho giao diện web.

Engine được thiết kế **nhẹ và dependency-free** ở trạng thái hiện tại.

### Liệt kê cây trong engine

```bash
python python/vecrop_engine.py
```

### Xem cấu hình một cây

```bash
python python/vecrop_engine.py --crop rice
```

### Phân tích theo mục tiêu

```bash
python python/vecrop_engine.py --crop lettuce --objective "thủy canh, chất lượng và dinh dưỡng"
```

### Xuất JSON cho web

```bash
python python/vecrop_engine.py --export docs/data/vecrop_intelligence.json
```

### Audit một cấu hình

Ví dụ `config.json`:

```json
{
  "crop_id": "rice",
  "cultivar": "example",
  "site": "example",
  "weather": "weather.csv",
  "soil_or_substrate": "soil.json",
  "management": "management.json"
}
```

Chạy:

```bash
python python/vecrop_engine.py --audit config.json
```

> Điểm completeness không phải là scientific validation.

---

## 6. Smart Agent

File: `smart_agent.py`

Agent hiện tại là công cụ Python nhẹ để:
- đọc nội dung website;
- trích xuất văn bản;
- lập chỉ mục từ khóa;
- tìm nội dung liên quan;
- nhận biết một số nhóm chủ đề;
- tạo câu trả lời dựa trên nội dung repo.

Đây chưa phải một large language model chạy cục bộ. Nó là **retrieval/rule-based agent** phục vụ việc phát triển hệ thống nhẹ.

---

## 7. Crop Analyzer

File: `crop_analyzer.py`

Công cụ này đọc `index.html` và trả về:
- title;
- số từ;
- các nhóm nội dung được phát hiện;
- một số kiểm tra nhanh về nội dung website.

Chạy:

```bash
python crop_analyzer.py
```

---

## 8. Website động

File: `index.html`

Website hiện:
- tải Markdown trực tiếp từ `docs/`;
- render bằng Marked;
- hiển thị công thức bằng MathJax;
- tạo mục lục động;
- cho chọn từng chương;
- tìm kiếm nội dung;
- dark mode;
- responsive desktop/mobile;
- có panel VECrop Intelligence;
- đọc knowledge JSON sinh từ Python.

Luồng hiện tại:

```text
Python engine
→ docs/data/vecrop_intelligence.json
→ index.html
→ GitHub Pages
```

GitHub Pages không chạy Python server-side. Vì vậy Python hiện được dùng để **tạo knowledge/configuration**, còn browser đọc dữ liệu tĩnh sinh ra từ Python.

---

## 9. Cấu trúc repository

```text
VECrop/
├── README.md
├── index.html
├── crop_analyzer.py
├── smart_agent.py
├── python/
│   └── vecrop_engine.py
└── docs/
    ├── 01-chapter-1.md
    ├── 02-chapter-2.md
    ├── 03-chapter-3.md
    ├── 04-chapter-4.md
    ├── VECrop-full.md
    └── data/
        └── vecrop_intelligence.json
```

---

## 10. Chạy local

### Yêu cầu
- Python 3.10 hoặc 3.11;
- không cần GPU;
- không cần thư viện Python ngoài cho engine hiện tại;
- trình duyệt hiện đại.

### Chạy web local

```bash
python -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000/
```

Không nên mở trực tiếp `index.html` bằng `file://` nếu browser chặn `fetch()` tới Markdown/JSON.

---

## 11. Kiến trúc mô hình dự kiến

### Lớp môi trường
```text
Weather
Soil / substrate
Irrigation
Fertilizer
CO2
Management
```

### Lớp vùng rễ
```text
Water
EC
pH
O2
Eh
N/P/K/Ca/Mg...
Root distribution
```

### Lớp thủy lực và vận chuyển
```text
Root uptake
Xylem
Leaf water status
Stomata
Phloem
```

### Lớp chuyển hóa
```text
Photosynthesis
Respiration
ATP / energy
Sugar signaling
Nutrient assimilation
```

### Lớp phát triển
```text
Meristem
Cell division
Cell expansion
Phenology
Senescence
Remobilization
```

### Lớp sản xuất
```text
Biomass allocation
Sink establishment
Filling
Harvest index
Marketable yield
Quality
```

---

## 12. Conservation audit

Một phiên bản VECrop cơ chế phải kiểm tối thiểu:
- water balance;
- carbon balance;
- nitrogen balance;
- phosphorus balance;
- potassium balance.

Các internal transfers như remobilization phải triệt tiêu khi cộng toàn hệ.

Ví dụ:

```text
Leaf N → Grain N
```

không làm tăng tổng N của cây.

---

## 13. Mechanistic vs Reduced vs Diagnostic

### Mechanistic
Ưu tiên:
- state;
- pool;
- flux;
- conservation;
- feedback.

### Reduced
Dùng khi thiếu dữ liệu:
- empirical stress factors;
- reduced allocation;
- simplified phenology.

### Diagnostic
Ví dụ:
- HSY;
- H_env;
- risk score;
- confidence score.

Diagnostic score không tự động được coi là một lực sinh lý.

---

## 14. Crop Readiness Level

| Level | Ý nghĩa |
|---|---|
| R0 | Concept / config skeleton |
| R1 | Có tham số có nguồn |
| R2 | Đã calibration |
| R3 | Đã validation độc lập |
| R4 | Đã validation nhiều mùa/site |
| R5 | Đủ uncertainty, failure flags và validation cho decision support |

Một cây chỉ có tên trong catalog không đồng nghĩa đạt R3–R5.

---

## 15. Kiểm định mô hình

Một crop configuration nên được kiểm theo thứ tự:

```text
Process
→ organ
→ whole plant
→ yield components
→ final yield
→ multi-environment
→ uncertainty
```

Không nên hiệu chỉnh toàn bộ mô hình chỉ bằng final yield.

Các biến nên ưu tiên:
- soil/root-zone state;
- water use;
- LAI;
- biomass;
- organ biomass;
- phenology;
- nutrient accumulation;
- yield components;
- final yield;
- marketable fraction.

---

## 16. Những điều VECrop không nên làm

Không nên:
- dùng EC thay nồng độ NPK;
- dùng RH thay pF;
- dùng một pH optimum cho mọi nutrient;
- dùng cùng `P50` cho mọi loài;
- coi hormone là lực cơ học;
- coi root pressure là cơ chế duy nhất đưa nước lên cây;
- nói phloem luôn đi xuống;
- cộng ATP với water potential;
- nhân RUE × WUE × NUE như một định luật vật lý;
- nhân nhiều stress factor nếu cùng một cơ chế đã được mô hình hóa;
- dùng một bộ parameter cho mọi cultivar;
- gọi crop config là production-ready khi chưa validation;
- tạo parameter không có nguồn rồi trình bày như giá trị khoa học.

---

## 17. Trạng thái kiểm định khoa học

Giáo trình đang được tiếp tục rà soát về:
- dimensional consistency;
- sign convention;
- mass balance;
- boundary conditions;
- equation domains;
- parameter provenance;
- empirical vs mechanistic separation;
- double counting;
- numerical stability;
- crop-specific applicability.

Các phần được gắn nhãn **VECrop proposed**, **reduced**, **diagnostic** hoặc **calibration parameter** không nên được hiểu là các định luật sinh học đã được thiết lập.

---

## 18. Nguồn học thuật nền

VECrop ưu tiên các nguồn chuyên ngành và tài liệu gốc/uy tín về:
- mineral nutrition;
- plant water relations;
- soil hydraulic properties;
- xylem/phloem transport;
- photosynthesis;
- stomatal conductance;
- hypoxia/flooding;
- salinity;
- ROS/redox;
- hormone signaling;
- phenology;
- crop growth;
- yield formation;
- sensitivity and uncertainty analysis.

Một số tài liệu nền đang được sử dụng:
- *Marschner's Mineral Nutrition of Plants*, 4th ed.;
- van Genuchten (1980);
- Mualem (1976);
- Kramer & Boyer;
- Nobel;
- Taiz et al.;
- Buchanan, Gruissem & Jones;
- Tyree & Zimmermann;
- Farquhar, von Caemmerer & Berry;
- von Caemmerer;
- Medlyn et al.

Mục tiêu tiếp theo là chuẩn hóa toàn bộ tài liệu tham khảo về citation đầy đủ, DOI hoặc nguồn xuất bản chính thức khi có.

---

## 19. Lộ trình phát triển

- sửa và khóa các công thức sau audit khoa học;
- chuẩn hóa toàn bộ MathJax;
- xây parameter registry;
- thêm provenance database;
- mở rộng catalog cây;
- thêm crop/cultivar config files;
- tạo conservation unit tests;
- xây simulation core thực sự bằng Python;
- thêm solver ODE;
- thêm calibration/sensitivity tools;
- kết nối FastAPI nếu cần backend online;
- xây validation datasets;
- thêm uncertainty-aware prediction;
- tạo dashboard mô phỏng và kiểm định.

---

## 20. Định hướng kỹ thuật

VECrop ưu tiên chạy được trên máy phổ thông:
- CPU-first;
- Python nhẹ;
- không yêu cầu GPU cho core model;
- tách module;
- có thể bật/tắt module;
- dùng JSON/YAML cho cấu hình;
- GitHub Pages cho giao diện đọc và tra cứu;
- backend Python chỉ thêm khi cần tính toán động thực sự.

---

## 21. Đóng góp

Khi bổ sung kiến thức hoặc công thức, nên cung cấp:
1. mô tả cơ chế;
2. phương trình;
3. đơn vị;
4. phạm vi áp dụng;
5. loài/giống/cơ quan/giai đoạn;
6. nguồn;
7. trạng thái: established / empirical / reduced / proposed;
8. dữ liệu calibration nếu có;
9. validation độc lập nếu có.

Không merge một tham số chỉ vì “thường thấy hợp lý” mà không có provenance.

---

## 22. Cảnh báo khoa học

VECrop hiện là một dự án nghiên cứu và phát triển mô hình.

Nội dung trong repository không tự động thay thế:
- thí nghiệm thực địa;
- phân tích phòng thí nghiệm;
- khuyến cáo nông học địa phương;
- đánh giá chuyên gia;
- quy trình kỹ thuật chính thức.

Kết quả mô phỏng chỉ có giá trị trong phạm vi dữ liệu, giả định và mức validation tương ứng.

---

## 23. Tóm tắt

VECrop hướng tới:

```text
Sinh lý cây
+ vật lý đất–nước
+ dinh dưỡng
+ thủy lực
+ source–sink
+ phát triển
+ năng suất
+ uncertainty
+ kiểm định
```

với nguyên tắc:

> **Một lõi cơ chế — nhiều cấu hình cây trồng — không bịa tham số — không bỏ qua bảo toàn — không overclaim mức kiểm định.**
