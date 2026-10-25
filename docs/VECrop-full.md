# VECrop — Giáo trình tổng hợp

> **Phạm vi hiện tại:** đã hoàn thành Chương 1, Chương 2, Chương 3 và Chương 4 đến hết mục **4.15**.

---

# Chương 1. Cơ sở sinh lý – vật lý – toán học của hấp thu dinh dưỡng trong VECrop

> **Trạng thái học thuật:** Chương này tổng hợp kiến thức nền đã được thiết lập trong sinh lý thực vật, dinh dưỡng cây trồng, vật lý đất–nước và nhiệt động học. Các cấu trúc mang tên **VECrop** hoặc **HSY** được ghi rõ là *mô hình/khung đề xuất* và không được xem là định luật sinh học cho đến khi được hiệu chỉnh và kiểm định.

---

## 1.1. Mục tiêu của Chương 1

Chương 1 xây dựng nền tảng để các chương sau có thể mô hình hóa cây trồng mà không trộn lẫn giữa:

- đại lượng vật lý;
- trạng thái sinh lý;
- thông lượng;
- tham số thực nghiệm;
- chỉ số tổng hợp;
- biến quản lý;
- năng suất cuối cùng.

Chuỗi khái niệm tổng quát:

<div class="flow-chain">
<strong>Môi trường vùng rễ</strong> → <strong>Nước và ion</strong> → <strong>Rễ</strong> → <strong>Mạch dẫn</strong> → <strong>Lá</strong> → <strong>Quang hợp</strong> → <strong>Source–sink</strong> → <strong>Sinh khối</strong> → <strong>Năng suất</strong>
</div>

Mọi module VECrop phải thỏa bốn yêu cầu:

1. có ý nghĩa sinh lý;
2. nhất quán về đơn vị;
3. bảo toàn vật chất/năng lượng khi thích hợp;
4. có thể hiệu chỉnh và kiểm định bằng dữ liệu.

---

## 1.2. Hệ cây trồng là một hệ mở

Cây trao đổi liên tục:

- nước;
- CO₂ và O₂;
- ion khoáng;
- nhiệt;
- bức xạ;
- carbon hữu cơ;
- tín hiệu hóa học.

Ta ký hiệu trạng thái tổng quát:

$$
\mathbf X(t)=
[\mathbf X_{env},\mathbf X_{root},\mathbf X_{vascular},\mathbf X_{leaf},\mathbf X_{met},\mathbf X_{growth}]^T
$$

và động lực:

$$
\frac{d\mathbf X}{dt}
=
\mathbf f(\mathbf X,\mathbf U,\boldsymbol\theta,t)
$$

trong đó:

- \(\mathbf U\): tác động ngoại sinh/quản lý;
- \(\boldsymbol\theta\): tập tham số;
- \(t\): thời gian.

---

## 1.3. Vector môi trường đầu vào

Một tập biến môi trường cơ bản:

$$
\mathbf X_{env}
=
[EC,pH,\theta,pF,\Psi_{soil},T,I,CO_2,O_2,Eh,OM,N,P,K,\ldots]^T
$$

Không phải mọi biến đều bắt buộc trong mọi mô hình. Chỉ giữ biến khi:

- có cơ chế rõ ràng;
- có dữ liệu đo hoặc có thể suy ra;
- tránh trùng thông tin với biến khác.

---

## 1.4. Bảo toàn vật chất

Với một chất \(i\):

$$
\frac{dM_i}{dt}
=
\sum F_{i,in}
-
\sum F_{i,out}
+
P_i
-
C_i
$$

Trong đó:

- \(M_i\): lượng chất tích trữ;
- \(F_{i,in}\): dòng vào;
- \(F_{i,out}\): dòng ra;
- \(P_i\): quá trình tạo;
- \(C_i\): quá trình tiêu thụ.

Với một nguyên tố như N, P hoặc K trong toàn cây:

$$
\frac{dM_i}{dt}=U_i-L_i
$$

vì chuyển từ lá sang hạt chỉ là **tái phân bố nội bộ**, không phải tạo hay mất nguyên tố.

---

## 1.5. Bảo toàn carbon

Carbon được bổ sung chủ yếu qua quang hợp và mất chủ yếu qua hô hấp.

$$
\frac{dM_C}{dt}
=
A_C-R_C-L_C
$$

Trong đó:

- \(A_C\): carbon đồng hóa;
- \(R_C\): carbon hô hấp;
- \(L_C\): các tổn thất khác nếu có.

Đây là nền tảng để nối quang hợp với sinh khối.

---

## 1.6. Phân biệt lượng, nồng độ, hoạt độ và thông lượng

### Lượng chất

$$
M_i
$$

đơn vị: mol, mmol, g, kg,...

### Nồng độ

$$
C_i=\frac{M_i}{V}
$$

### Hoạt độ

$$
a_i=\gamma_iC_i
$$

### Thông lượng

$$
J_i
=
\frac{\text{lượng chất}}
{\text{diện tích}\times\text{thời gian}}
$$

Không được cộng trực tiếp:

$$
M_i+C_i+J_i
$$

vì chúng không cùng thứ nguyên.

---

## 1.7. Kiểm tra thứ nguyên

Một phương trình chỉ hợp lệ khi hai vế có cùng đơn vị.

Ví dụ:

$$
J_w=-K_h\nabla\Psi_w
$$

phải thỏa:

$$
[K_h][\nabla\Psi_w]=[J_w]
$$

Một biểu thức kiểu:

$$
v=G+HSY
$$

không hợp lệ nếu \(v\) có đơn vị vận tốc còn \(HSY\) không thứ nguyên.

Nếu HSY điều chỉnh vận tốc:

$$
v=v_0HSY
$$

là hợp lý về thứ nguyên hơn, nhưng vẫn cần kiểm định sinh học.

---

## 1.8. Thế nước

Thế nước tổng:

$$
\Psi_w
=
\Psi_p+\Psi_s+\Psi_m+\Psi_g
$$

Trong đó:

- \(\Psi_p\): thế áp suất;
- \(\Psi_s\): thế thẩm thấu;
- \(\Psi_m\): thế ma trận;
- \(\Psi_g\): thế trọng trường.

Đơn vị thường dùng:

$$
MPa
$$

---

## 1.9. Thế thẩm thấu

Ở mức lý tưởng:

$$
\Psi_s=-iCRT
$$

Trong hệ nhiều ion:

$$
\Psi_s
\approx
-RT\sum_i\phi_iC_i
$$

Với dung dịch không lý tưởng:

$$
a_i=\gamma_iC_i
$$

nên cần phân biệt nồng độ với hoạt độ.

---

## 1.10. Dòng nước theo gradient thế nước

Dạng liên tục:

$$
\vec J_w=-K_h\nabla\Psi_w
$$

Dạng hai nút:

$$
Q_w=K(\Psi_1-\Psi_2)
$$

Dòng nước không được mô tả bằng cách cộng hormone, root pressure và transpiration thành một “lực tổng hợp” nếu các đại lượng không cùng đơn vị.

---

## 1.11. Hệ SPAC

SPAC là chuỗi đất–cây–khí quyển.

Trong nhiều trạng thái cây đang thoát hơi:

$$
\Psi_{soil}>\Psi_{root}>\Psi_{stem}>\Psi_{leaf}
$$

Điều này không có nghĩa gradient luôn cố định ở mọi thời điểm.

Ban đêm, sau tưới, khi root pressure xuất hiện hoặc khi hydraulic redistribution xảy ra, trạng thái có thể khác.

---

## 1.12. pF và trạng thái nước đất

Định nghĩa:

$$
pF=\log_{10}|h|
$$

với \(h\) là pressure head tính bằng cm nước.

Do đó:

$$
h=10^{pF}
$$

pF không phải relative humidity và không được thay thế bằng RH không khí.

---

## 1.13. Đường cong giữ nước van Genuchten

Một mô hình phổ biến:

$$
S_e=
\frac{\theta-\theta_r}
{\theta_s-\theta_r}
=
\left[
1+(\alpha |h|)^n
\right]^{-m}
$$

thường:

$$
m=1-\frac1n
$$

trong đó:

- \(\theta_r\): water content dư;
- \(\theta_s\): water content bão hòa;
- \(\alpha,n,m\): tham số đất.

Các tham số này phải được hiệu chỉnh theo đất/giá thể.

---

## 1.14. Dòng nước trong đất

Một biểu diễn Darcy–Buckingham:

$$
\mathbf q
=
-K(\theta)\nabla(\Psi_m+\Psi_g)
$$

Ở dạng động có thể dẫn tới Richards equation:

$$
\frac{\partial\theta}{\partial t}
=
\nabla\cdot
[
K(\theta)
\nabla(\Psi_m+\Psi_g)
]
-
S_{root}
$$

Trong đó \(S_{root}\) là sink do rễ hút nước.

---

## 1.15. Tổng dinh dưỡng không bằng dinh dưỡng khả dụng

Cần phân biệt:

$$
M_{total}
=
M_{unavailable}
+
M_{potential}
+
M_{solution}
$$

Tính khả dụng phụ thuộc:

- pH;
- nước;
- redox;
- sorption;
- precipitation;
- microbial mineralization;
- root exudation;
- mass flow;
- diffusion.

Không suy trực tiếp từ total nutrient sang uptake.

---

## 1.16. Mass flow và diffusion

Dòng ion trong vùng rễ có thể viết:

$$
J_i^{soil}
=
q_wC_i
-
D_{eff,i}\nabla C_i
$$

Thành phần đầu là mass flow, thành phần sau là diffusion.

Mức đóng góp của hai cơ chế phụ thuộc:

- độ linh động ion;
- water flux;
- soil buffering;
- root demand;
- geometry vùng rễ.

---

## 1.17. Depletion zone quanh rễ

Rễ hấp thu có thể tạo gradient nồng độ:

$$
\frac{\partial C_i}{\partial t}
=
D_{eff,i}\nabla^2C_i
-
R_{uptake,i}
+
R_{source,i}
$$

Đây là lý do nồng độ bulk soil không luôn phản ánh nồng độ thực tại bề mặt rễ.

---

## 1.18. Thế điện hóa của ion

Chemical potential mở rộng:

$$
\widetilde\mu_i
=
\mu_i^0
+
RT\ln a_i
+
z_iF\psi
$$

Chênh lệch qua màng:

$$
\Delta\widetilde\mu_i
=
RT\ln
\frac{a_{i,in}}{a_{i,out}}
+
z_iF(\psi_{in}-\psi_{out})
$$

Ion transport vì thế phụ thuộc cả:

- concentration/activity gradient;
- membrane potential.

---

## 1.19. Điện thế Nernst

$$
E_i=
\frac{RT}{z_iF}
\ln
\frac{a_{i,out}}{a_{i,in}}
$$

Với một channel:

$$
I_i=g_i(V_m-E_i)
$$

Dấu và độ lớn của \(V_m-E_i\) quyết định driving force điện hóa theo quy ước dòng đã chọn.

---

## 1.20. H+-ATPase và proton motive force

H+-ATPase dùng ATP để bơm proton ra ngoài tế bào.

Nó tạo:

- điện thế màng;
- gradient pH;
- proton motive force.

Một biểu diễn:

$$
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
$$

Nhiều transporter hấp thu dinh dưỡng sử dụng gradient H+ này.

**H+-ATPase không bơm nước trực tiếp.**

---

## 1.21. Động học transporter

Một dạng Michaelis–Menten:

$$
J_i
=
V_{\max,i}
\frac{C_i}{K_{m,i}+C_i}
$$

Nhưng uptake thực có thể gồm:

$$
J_i
=
J_{HATS,i}
+
J_{LATS,i}
-
J_{efflux,i}
$$

HATS:

$$
J_{HATS,i}
=
V_{\max,H,i}
\frac{C_i}{K_{m,H,i}+C_i}
$$

LATS có thể gần tuyến tính trong một miền:

$$
J_{LATS,i}\approx k_LC_i
$$

chỉ khi dữ liệu hỗ trợ.

---

## 1.22. Tham số uptake không phải hằng số phổ quát

\(K_m\) và \(V_{\max}\) có thể thay đổi theo:

- species;
- cultivar;
- root age;
- root zone;
- nutrient history;
- pH;
- temperature;
- O₂;
- transporter expression.

VECrop bắt buộc lưu metadata của tham số.

---

## 1.23. EC không phải nồng độ từng nutrient

Bắt buộc phân biệt:

$$
EC\neq C_N
$$

$$
EC\neq C_P
$$

$$
EC\neq C_K
$$

Hai dung dịch cùng EC vẫn có thể có thành phần ion hoàn toàn khác nhau.

Do đó:

$$
EC
\rightarrow
\text{ionic environment / salinity information}
$$

còn:

$$
C_i
\rightarrow
\text{uptake của ion }i
$$

---

## 1.24. Vai trò của pH

pH ảnh hưởng:

- ion speciation;
- adsorption/desorption;
- precipitation/dissolution;
- proton-coupled transport;
- microbial transformations.

Một dạng reduced model:

$$
J_i^{eff}
=
J_iF_{pH,i}
$$

nhưng:

$$
F_{pH,N}\neq F_{pH,P}\neq F_{pH,K}
$$

Nếu speciation được mô hình cơ chế đầy đủ, không nên nhân thêm một \(F_{pH}\) tổng quát.

---

## 1.25. Nhiệt độ

Một dạng Arrhenius:

$$
k(T)
=
k_{ref}
\exp
\left[
-\frac{E_a}{R}
\left(
\frac1T-\frac1{T_{ref}}
\right)
\right]
$$

Nhiệt độ tác động đồng thời lên:

- diffusion;
- water viscosity;
- membrane transport;
- respiration;
- enzyme activity;
- root growth.

---

## 1.26. Oxy và năng lượng rễ

Một saturation function:

$$
R_{O_2}
=
R_{O_2,\max}
\frac{C_{O_2}}{K_{O_2}+C_{O_2}}
$$

Chuỗi cơ chế:

$$
O_2
\rightarrow
respiration
\rightarrow
ATP
\rightarrow
H^+\text{-ATPase}
\rightarrow
ion\ transport
$$

Một index cung–cầu năng lượng:

$$
H_E
=
\min
\left(
1,
\frac{ATP_{sup}}
{ATP_{dem}+\varepsilon}
\right)
$$

được xem là **VECrop reduced diagnostic formulation** nếu chưa mô hình ATP trực tiếp.

---

## 1.27. Liebig và yếu tố giới hạn

Một dạng giảm lược:

$$
H_{Liebig}
=
\min(R_1,R_2,\ldots,R_m)
$$

với:

$$
0\le R_j\le1
$$

Đây là rule mô hình hóa giới hạn, không có nghĩa sinh trưởng thực tế luôn được quyết định bởi đúng một biến.

---

## 1.28. Đáp ứng kiểu Shelford

Một response hai phía có thể mô tả bằng Gaussian:

$$
R_j(x)
=
\exp
\left[
-\frac{(x-\mu_j)^2}
{2\sigma_j^2}
\right]
$$

Trong thực tế có thể cần hàm bất đối xứng vì stress phía thấp và phía cao không giống nhau.

Các \(\mu_j,\sigma_j\) phải được hiệu chỉnh.

---

## 1.29. Chuẩn hóa biến

Không được cộng:

$$
EC+pH+T+N
$$

một cách trực tiếp.

Min–max:

$$
x^*
=
\frac{x-x_{min}}{x_{max}-x_{min}}
$$

Sigmoid:

$$
x^*
=
\frac{1}
{1+\exp[-k(x-x_{50})]}
$$

Optimum response:

$$
R(x)
=
\exp
\left[
-\frac{(x-\mu)^2}
{2\sigma^2}
\right]
$$

Việc chọn hàm phải dựa trên cơ chế và dữ liệu.

---

## 1.30. HSY trong VECrop

HSY được định nghĩa là **khung tổng hợp trạng thái**, không phải lực hay năng lượng mới.

Ba thành phần:

$$
\Phi_1
=
\text{structure / vascular integrity}
$$

$$
\Phi_2
=
\text{gene–protein–enzyme–transport–energy}
$$

$$
\Phi_3
=
\text{hormone–signaling–development}
$$

Một dạng chuẩn hóa:

$$
H_{cell}
=
w_1\Phi_1+w_2\Phi_2+w_3\Phi_3
$$

với:

$$
w_i\ge0
$$

$$
\sum_iw_i=1
$$

và:

$$
0\le\Phi_i\le1
$$

---

## 1.31. Quá trình 1: cấu trúc

\(\Phi_1\) có thể bao gồm:

- cell wall integrity;
- cellulose/hemicellulose/lignin;
- vascular anatomy;
- pit properties;
- active root area.

Một dạng:

$$
\Phi_1
=
\sum_kw_{1k}S_k^*
$$

Không được double count một trait vừa tính trực tiếp trong hydraulic conductance vừa đưa lại vào \(\Phi_1\).

---

## 1.32. Quá trình 2: gene–protein–enzyme–transport

Khung đề xuất:

$$
\Phi_{2,i}
=
\operatorname{clip}
\left[
s_i(Q)
(S_{4,i}^*+S_{5,i}^*-S_{6,i}^*),
0,1
\right]
$$

Regulatory function:

$$
s_i(Q)
=
\frac1
{1+\exp[-(\beta_{0i}+\sum_j\beta_{ji}Q_j^*)]}
$$

Nối với capacity:

$$
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
s_i(Q)
F_{stage,i}
F_{T,i}
F_{O_2,i}
$$

Gene/protein điều chỉnh capacity; không được gọi là “lực vận chuyển”.

---

## 1.33. Quá trình 3: hormone và phát triển

Khung đề xuất:

$$
\Phi_{3,o}
=
\operatorname{clip}
\left[
y_o(Q,t)
(S_{7,o}^*+S_{8,o}^*-S_{9,o}^*),
0,1
\right]
$$

với:

$$
y_o(t)
=
\sigma
\left[
\beta_{0,o,g}
+
\sum_h\beta_{h,o,g}H_h^*(t)
\right]
$$

Không dùng biểu thức cứng:

$$
Auxin+GA+CK-ABA-Ethylene
$$

vì vai trò hormone phụ thuộc cơ quan, giai đoạn và điều kiện.

---

## 1.34. Phân biệt HSY với Harvest Index

Harvest Index:

$$
HI_{harvest}
=
\frac{Y_{economic}}
{B_{aboveground}}
$$

Nếu dùng health index, nên ký hiệu:

$$
H_{crop}
$$

để không trùng với \(HI_{harvest}\).

---

## 1.35. Không nhân RUE × WUE × NUE trực tiếp

RUE, WUE và NUE có đơn vị/định nghĩa khác nhau.

Do đó:

$$
RUE\times WUE\times NUE
$$

không tự động tạo ra một chỉ số vật lý hợp lệ.

Nếu cần kết hợp:

$$
RUE^*,WUE^*,NUE^*\in[0,1]
$$

và phải kiểm tra double counting.

---

## 1.36. Mật độ cây

Một dạng empirical:

$$
Y(D)
=
\alpha De^{-\beta D}
$$

cho:

$$
D_{opt}
=
\frac1\beta
$$

Đây chỉ là hệ quả của hàm đã chọn.

Nếu HSY phụ thuộc mật độ:

$$
\frac{d\ln Y}{dD}
=
\frac1D-\beta
+
\frac{\partial\ln HSY}{\partial D}
=
0
$$

---

## 1.37. Tổng, tích phân và miền liên tục

Với lớp rời rạc:

$$
\sum_{i=1}^{n}F_i
$$

Với chiều cao liên tục:

$$
\int_0^HF(z)\,dz
$$

Theo không gian và thời gian:

$$
\int_0^T
\int_0^H
F(z,t)\,dz\,dt
$$

Không dùng tích phân nhiều chiều nếu không xác định biến tích phân tương ứng.

---

## 1.38. Mô hình cơ chế và mô hình rút gọn

### Mechanistic model

$$
Y
=
f(
water,
ions,
photosynthesis,
respiration,
allocation,
growth
)
$$

### Reduced model

Một dạng có thể dùng:

$$
Y_{reduced}
=
Y_{pot}
C_D(D)
\overline{HSY}
$$

Nếu mô hình đã giải stress trực tiếp thì không được:

$$
Y_{mechanistic}
\times
HSY_{diag}
$$

một lần nữa.

---

## 1.39. Khung sáu lớp VECrop

### Lớp 1 — Environment/root zone

$$
\mathbf X_{env}
$$

### Lớp 2 — Cell/metabolism

$$
H_{cell}
$$

### Lớp 3 — Hydraulics/vascular transport

$$
J_w,\ K_{root},\ K_x,\ \Psi
$$

### Lớp 4 — Population/canopy

$$
D,\ LAI,\ competition
$$

### Lớp 5 — Photosynthesis/source–sink/biomass

$$
A_n,\ A_{can},\ F_C,\ B,\ Y
$$

### Lớp 6 — Management/economics

$$
\mathbf u
=
\{N,P,K,irrigation,D,light,CO_2,\ldots\}
$$

---

## 1.40. Lợi nhuận và tối ưu quản lý

Một objective:

$$
\Pi
=
P_YY
-
C_{fert}
-
C_{water}
-
C_{energy}
-
C_{labor}
-
C_{other}
$$

Mục tiêu:

$$
\max_{\mathbf u}\Pi
$$

nhưng không được tối ưu kinh tế khi mô hình sinh lý chưa được kiểm định.

---

## 1.41. Nhận dạng tham số

Tập tham số:

$$
\boldsymbol\theta
=
[K_m,V_{\max},K_h,V_{cmax},J_{max},k_{rem},\ldots]^T
$$

Hiệu chỉnh least squares:

$$
\hat{\boldsymbol\theta}
=
\arg\min_{\boldsymbol\theta}
\sum_t
[
y_{obs}(t)
-
y_{model}(t;\boldsymbol\theta)
]^2
$$

Cần phân biệt:

- structural identifiability;
- practical identifiability;
- parameter correlation.

---

## 1.42. Độ bất định

$$
Y=f(\mathbf X,\boldsymbol\theta)
$$

Nguồn bất định:

- sensor error;
- spatial variability;
- parameter uncertainty;
- model structural error;
- cultivar variability;
- weather uncertainty.

Monte Carlo:

$$
\mathbf X^{(k)},\boldsymbol\theta^{(k)}
\rightarrow
Y^{(k)}
$$

Nên báo cáo phân bố, quantile hoặc interval thay vì chỉ một con số.

---

## 1.43. Kiểm tra cân bằng

Nước:

$$
Water_{in}
-
Water_{out}
-
\Delta Storage
\approx0
$$

Nitrogen:

$$
N_{uptake}
-
N_{loss}
-
\Delta N_{plant}
\approx0
$$

Carbon:

$$
C_{assimilation}
-
C_{respiration}
-
\Delta C_{biomass}
\approx0
$$

Nếu balance error lớn, đầu ra yield không đáng tin để diễn giải.

---

## 1.44. Phân cấp dữ liệu

### Cấp A — quan sát trực tiếp

- EC;
- pH;
- soil water;
- temperature;
- gas exchange;
- biomass;
- tissue nutrient.

### Cấp B — tham số suy ra

- \(K_h\);
- \(K_m\);
- \(V_{\max}\);
- \(V_{cmax}\);
- \(J_{max}\).

### Cấp C — chỉ số tổng hợp

- \(H_{env}\);
- \(H_{cell}\);
- \(HSY_{diag}\).

Càng lên cấp cao càng phải báo uncertainty và provenance.

---

## 1.45. Metadata bắt buộc cho tham số

| Trường | Nội dung |
|---|---|
| parameter | tên tham số |
| symbol | ký hiệu |
| species | loài |
| cultivar | giống |
| organ | cơ quan |
| stage | giai đoạn |
| environment | điều kiện |
| treatment | nghiệm thức |
| value | giá trị |
| unit | đơn vị |
| method | phương pháp |
| source | DOI/URL |
| role | calibration/validation/context |
| uncertainty | SD/SE/CI nếu có |

---

## 1.46. Ba cây kiểm định ban đầu

### Lúa

- C3;
- ngập/AWD;
- root-zone redox;
- aerenchyma;
- NH4+/NO3− balance;
- grain sink.

### Ngô

- C4;
- deep rooting;
- drought/VPD hydraulics;
- strong reproductive sink;
- post-silking nutrient dynamics.

### Xà lách

- C3;
- shallow roots;
- root-zone temperature;
- EC/pH/DO;
- Ca transport;
- tipburn;
- marketable leaf biomass.

Một phương trình chỉ được coi có tính tổng quát khi được kiểm tra giữa nhiều hệ sinh lý/môi trường.

---

## 1.47. Kiến thức nền và phần VECrop đề xuất

### Kiến thức nền đã được thiết lập

- mass conservation;
- water potential;
- Darcy-type flow;
- soil-water retention;
- electrochemical potential;
- Nernst relation;
- transporter saturation kinetics;
- proton motive force;
- xylem/phloem transport;
- source–sink;
- plant mineral nutrition.

### Thành phần VECrop đề xuất

- cấu trúc sáu lớp;
- \(\Phi_1,\Phi_2,\Phi_3\);
- HSY diagnostic framework;
- logistic regulation cho \(s_i\) và \(y_o\);
- cách coupling giữa các module.

Các phần này phải được ghi:

**proposed framework / calibration required / validation required**

cho tới khi có bằng chứng đầy đủ.

---

## 1.48. Những khẳng định không được phép dùng

Không viết:

- “HSY là định luật mới”.
- “một bộ tham số đúng cho mọi cây”.
- “EC bằng nồng độ dinh dưỡng”.
- “root pressure là lực chính cho toàn bộ xylem”.
- “mọi dòng mạch đều hướng lên”.
- “RUE × WUE × NUE là một đại lượng vật lý”.
- “một giá trị từ một nghiên cứu là hằng số sinh học”.
- “hormone cộng trừ trực tiếp tạo ra lực vận chuyển”.

---

## 1.49. Tiêu chí kiểm định VECrop

Một phiên bản VECrop chỉ nên được xem là tiến bộ nếu:

1. bảo toàn vật chất tốt;
2. có dimensional consistency;
3. tham số có ý nghĩa sinh lý;
4. dự báo tốt hơn baseline;
5. validation độc lập;
6. uncertainty được báo cáo;
7. không tăng phức tạp vô ích;
8. tạo được giả thuyết thực nghiệm kiểm chứng được.

---

## 1.50. Kết luận Chương 1

Chương 1 thiết lập chuỗi nền:

<div class="flow-chain">
<strong>Môi trường</strong> → <strong>gradient vật lý</strong> → <strong>vận chuyển sinh học</strong> → <strong>chuyển hóa</strong> → <strong>phân bổ</strong> → <strong>sinh khối</strong> → <strong>năng suất</strong>
</div>

Mọi phần VECrop phải giữ bốn nguyên tắc:

$$
\boxed{
\text{Mass balance}
+
\text{Dimensional consistency}
+
\text{Physiological meaning}
+
\text{Experimental testability}
}
$$

HSY không phải lực hoặc năng lượng mới. Trong mô hình cơ chế đầy đủ, vai trò phù hợp nhất của HSY là **chỉ số chẩn đoán trạng thái tích hợp**.

---

# Tài liệu nền tảng

1. Rengel Z., Cakmak I., White P.J. (eds.). **Marschner's Mineral Nutrition of Plants. 4th ed.** Academic Press, 2023. DOI: 10.1016/C2019-0-00491-8.
2. Coskun D., White P.J. **Ion-uptake mechanisms of individual cells and roots: short-distance transport.** In *Marschner's Mineral Nutrition of Plants*, 4th ed., 2023.
3. White P.J., Ding G. **Long-distance transport in the xylem and phloem.** In *Marschner's Mineral Nutrition of Plants*, 4th ed., 2023.
4. van Genuchten M.Th. (1980). **A Closed-form Equation for Predicting the Hydraulic Conductivity of Unsaturated Soils.** *Soil Science Society of America Journal* 44. DOI: 10.2136/sssaj1980.03615995004400050002x.
5. Kramer P.J., Boyer J.S. **Water Relations of Plants and Soils.** Academic Press, 1995.
6. Nobel P.S. **Physicochemical and Environmental Plant Physiology. 4th ed.** Academic Press, 2009.
7. Taiz L. et al. **Plant Physiology and Development.** Oxford University Press/Sinauer.

> **Quy tắc nguồn của VECrop:** mọi tham số số học đưa vào mô hình phải có provenance theo species/cultivar/organ/stage/environment/method/unit; nếu chưa có nguồn hoặc chưa hiệu chỉnh phải ghi rõ là *example*, *study-specific*, *calibration parameter* hoặc *proposed*.


---

# Chương 2. Môi trường vùng rễ và điều kiện biên của VECrop

> **Mục tiêu:** Chương 2 mô tả các biến vật lý, hóa học và sinh học của vùng rễ tạo nên điều kiện biên cho hấp thu nước, ion, hô hấp rễ và trao đổi chất. Các đại lượng môi trường được giữ riêng theo cơ chế; chỉ số tổng hợp chỉ dùng trong mô hình rút gọn.

---

## 2.1. Khái niệm vùng rễ trong VECrop

Vùng rễ không chỉ là “đất quanh rễ”. Trong VECrop, vùng rễ gồm:

- đất hoặc giá thể;
- dung dịch đất/dung dịch dinh dưỡng;
- rhizosphere;
- bề mặt rễ;
- khí trong lỗ rỗng;
- vi sinh vật liên quan;
- nguồn nước và phân bón đi vào hệ.

Vector trạng thái:

$$
\mathbf X_{env}
=
[EC,pH,\theta,pF,\Psi_{soil},T_{root},O_2,Eh,OM,N,P,K,Ca,Mg,S,Na,Cl,\ldots]^T
$$

---

## 2.2. Điều kiện biên và trạng thái

Cần phân biệt:

- **state variable**: giá trị bên trong hệ tại một thời điểm;
- **boundary condition**: tác động từ bên ngoài hệ;
- **forcing variable**: đầu vào thay đổi theo thời gian.

Ví dụ:

$$
Irrigation(t)
$$

là forcing, còn:

$$
\theta(z,t)
$$

là state variable.

---

## 2.3. Không gian và chiều sâu đất

Vùng rễ nên được mô tả theo chiều sâu:

$$
z\in[0,Z_r]
$$

Trong đó \(Z_r\) là chiều sâu vùng rễ hiệu dụng.

Một profile có thể viết:

$$
X(z,t)
$$

với \(X\) là nước, nhiệt độ, nồng độ ion hoặc O₂.

---

## 2.4. Hàm lượng nước thể tích

Hàm lượng nước thể tích:

$$
\theta
=
\frac{V_w}{V_{soil}}
$$

đơn vị thường:

$$
m^3m^{-3}
$$

Không nên trộn \(\theta\) với phần trăm khối lượng nước nếu chưa chuyển đổi theo bulk density.

---

## 2.5. Bão hòa và độ rỗng

Porosity:

$$
\phi
=
1-\frac{\rho_b}{\rho_s}
$$

Trong điều kiện bão hòa:

$$
\theta_s\approx\phi
$$

nhưng thực tế có thể sai khác do trapped air và cấu trúc đất.

---

## 2.6. Thế nước đất

$$
\Psi_{soil}
=
\Psi_m+\Psi_s+\Psi_g+\Psi_p
$$

Trong đất không bão hòa, \(\Psi_m\) thường quan trọng.

Trong dung dịch thủy canh không có ma trận đất, \(\Psi_m\) gần như không còn ý nghĩa tương tự đất khoáng.

---

## 2.7. pF

$$
pF=\log_{10}|h|
$$

với \(h\) là pressure head theo cm nước.

pF là cách biểu diễn trạng thái giữ nước của đất và không phải humidity của không khí.

---

## 2.8. Quan hệ giữa pressure head và water potential

Một gần đúng:

$$
\Psi
=
\rho_wgh
$$

Khi dùng MPa:

$$
\Psi\approx 9.81\times10^{-6}h
$$

nếu \(h\) tính bằng m và \(\Psi\) bằng MPa.

Cần thống nhất dấu theo quy ước sử dụng.

---

## 2.9. Đường cong giữ nước van Genuchten

$$
S_e
=
\frac{\theta-\theta_r}
{\theta_s-\theta_r}
$$

và:

$$
S_e
=
\left[
1+(\alpha|h|)^n
\right]^{-m}
$$

thường:

$$
m=1-\frac1n
$$

Trong đó:
- \(\theta_r\): residual water content;
- \(\theta_s\): saturated water content;
- \(\alpha\): tham số scale;
- \(n,m\): tham số shape.

---

## 2.10. Độ dẫn thủy lực đất

Độ dẫn thủy lực phụ thuộc water content:

$$
K=K(\theta)
$$

Một dạng van Genuchten–Mualem:

$$
K(S_e)
=
K_s
S_e^l
\left[
1-
(1-S_e^{1/m})^m
\right]^2
$$

Trong đó \(K_s\) là saturated hydraulic conductivity.

---

## 2.11. Darcy–Buckingham

Dòng nước:

$$
\mathbf q
=
-K(\theta)
\nabla
(\Psi_m+\Psi_g)
$$

Dấu âm thể hiện dòng theo gradient potential.

---

## 2.12. Richards equation

Một dạng tổng quát:

$$
\frac{\partial\theta}{\partial t}
=
\nabla\cdot
[
K(\theta)\nabla(\Psi_m+\Psi_g)
]
-
S_{root}
$$

Trong đó \(S_{root}\) là sink do cây hút nước.

---

## 2.13. Root water uptake sink

Một mô hình đơn giản:

$$
S_{root}(z,t)
=
\beta(z)
T_p(t)
F_{\Psi}(z,t)
$$

trong đó:
- \(\beta(z)\): phân bố rễ;
- \(T_p\): transpiration potential;
- \(F_{\Psi}\): stress response.

Đây là reduced formulation.

---

## 2.14. Root length density

$$
RLD(z)
=
\frac{L_{root}(z)}
{V_{soil}(z)}
$$

Một dạng profile thực nghiệm:

$$
RLD(z)=RLD_0e^{-k_zz}
$$

không phải quy luật phổ quát; cần fit theo crop và đất.

---

## 2.15. Dòng khối dinh dưỡng

$$
J_{mass,i}
=
q_wC_i
$$

Mass flow phụ thuộc:
- water flux;
- concentration;
- root water uptake;
- transpiration.

---

## 2.16. Khuếch tán dinh dưỡng

Fick:

$$
J_{diff,i}
=
-D_{eff,i}\nabla C_i
$$

Với đất:

$$
D_{eff,i}
=
D_{0,i}
f(\theta,\tau,sorption)
$$

trong đó \(\tau\) biểu thị tortuosity.

---

## 2.17. Tổng dòng ion tới rễ

$$
J_i^{soil}
=
q_wC_i
-
D_{eff,i}\nabla C_i
$$

Ở mức nâng cao có thể thêm:
- reaction;
- sorption;
- mineralization;
- root exudation.

---

## 2.18. Depletion zone

Hấp thu rễ tạo gradient:

$$
\frac{\partial C_i}{\partial t}
=
D_{eff,i}\nabla^2C_i
-
R_{uptake,i}
+
R_{source,i}
$$

Nồng độ bulk soil không nhất thiết bằng nồng độ ngay tại root surface.

---

## 2.19. Buffer capacity của đất

Một dạng linear buffer:

$$
S_i=K_{d,i}C_i
$$

Tổng lượng:

$$
M_i
=
\theta C_i+\rho_bS_i
$$

Với P và một số micronutrient, sorption có thể làm diffusion tới rễ trở thành giới hạn chính.

---

## 2.20. Sorption phi tuyến

Freundlich:

$$
S_i=K_FC_i^n
$$

Langmuir:

$$
S_i=
\frac{Q_{max}K_LC_i}
{1+K_LC_i}
$$

Chọn mô hình theo dữ liệu; không dùng một mô hình sorption cho mọi ion.

---

## 2.21. EC

EC là độ dẫn điện của dung dịch.

EC tăng khi tổng lượng ion hòa tan tăng, nhưng:

$$
EC\neq C_N
$$

$$
EC\neq C_P
$$

$$
EC\neq C_K
$$

Vì các ion có mobility và charge khác nhau.

---

## 2.22. EC và nhiệt độ

EC phụ thuộc nhiệt độ đo.

Do đó cần:
- ghi nhiệt độ;
- dùng temperature compensation nếu thiết bị hỗ trợ;
- không so EC từ hai nhiệt độ khác nhau mà không hiệu chỉnh.

---

## 2.23. EC và osmotic stress

Một mô hình thẩm thấu tổng quát:

$$
\Psi_s
\approx
-RT\sum_i\phi_iC_i
$$

EC có thể dùng như proxy của salinity nhưng không thay thế thành phần ion khi cần mô hình Na+, Cl−, K+ hay Ca2+.

---

## 2.24. pH và speciation

pH điều khiển dạng hóa học của nhiều chất.

Ví dụ phosphate tồn tại theo tỷ lệ giữa:

$$
H_2PO_4^-
$$

và:

$$
HPO_4^{2-}
$$

tùy pH.

Điều này ảnh hưởng:
- uptake;
- sorption;
- precipitation.

---

## 2.25. pH và micronutrient

Khả dụng của Fe, Mn, Zn, Cu thường thay đổi mạnh theo pH.

Do đó không được dùng một “pH optimum” chung cho mọi nutrient.

---

## 2.26. pH vùng rễ do cây điều chỉnh

Root proton balance có thể làm thay đổi rhizosphere pH.

Ví dụ uptake cation và anion không cân bằng có thể làm thay đổi H+ flux.

Một biểu diễn:

$$
J_H
=
f(
J_{cation},
J_{anion},
N\ form
)
$$

---

## 2.27. Nitrate và ammonium

Hai dạng N chính:

$$
NO_3^-
$$

và:

$$
NH_4^+
$$

có:
- transporter khác nhau;
- yêu cầu assimilation khác nhau;
- tác động khác lên rhizosphere pH;
- ưu thế khác nhau theo redox và crop.

---

## 2.28. Mineralization của N

Một reduced first-order model:

$$
\frac{dN_{org}}{dt}
=
-k_{min}N_{org}
$$

$$
R_{min,N}
=
k_{min}N_{org}
f(T,\theta,pH,O_2)
$$

Đây là mô hình rút gọn; soil organic matter dynamics thực tế phức tạp hơn.

---

## 2.29. Nitrification

Sơ đồ:

$$
NH_4^+
\rightarrow
NO_2^-
\rightarrow
NO_3^-
$$

Quá trình phụ thuộc mạnh O₂, temperature, pH và microbial activity.

---

## 2.30. Denitrification

Trong điều kiện thiếu O₂:

$$
NO_3^-
\rightarrow
NO_2^-
\rightarrow
NO
\rightarrow
N_2O
\rightarrow
N_2
$$

Không dùng Eh đơn lẻ như proxy tuyệt đối cho tốc độ denitrification.

---

## 2.31. O₂ vùng rễ

O₂ gas trong đất và dissolved oxygen trong dung dịch ảnh hưởng respiration rễ.

Một saturation function:

$$
R_{O_2}
=
R_{O_2,\max}
\frac{C_{O_2}}
{K_{O_2}+C_{O_2}}
$$

---

## 2.32. Diffusion O₂

$$
J_{O_2}
=
-D_{O_2,eff}\nabla C_{O_2}
$$

Trong đất ngập, gas diffusion giảm mạnh so với đất thoáng khí.

---

## 2.33. Eh

Redox potential:

$$
E_h
=
E^0
+
\frac{RT}{nF}
\ln\frac{a_{Ox}}{a_{Red}}
$$

Eh là một chỉ báo trạng thái oxy hóa–khử nhưng không đồng nhất với:

$$
C_{O_2}
$$

---

## 2.34. Chuỗi khử trong đất ngập

Khi O₂ cạn, electron acceptor có thể chuyển dần qua:

$$
O_2
\rightarrow
NO_3^-
\rightarrow
Mn(IV)
\rightarrow
Fe(III)
\rightarrow
SO_4^{2-}
\rightarrow
CO_2
$$

Thứ tự là nguyên lý tổng quát; threshold Eh cụ thể phụ thuộc hệ đất.

---

## 2.35. Fe và Mn trong đất ngập

Reduction có thể làm tăng tính hòa tan của Fe và Mn.

Điều này đặc biệt quan trọng trong mô hình lúa vì:
- toxicity;
- nutrient interaction;
- root oxidation;
- iron plaque.

---

## 2.36. Radial oxygen loss

Với cây có aerenchyma:

$$
J_{ROL}
=
P_{ROL}
(C_{O_2,root}-C_{O_2,soil})
$$

ROL làm thay đổi chemistry sát bề mặt rễ.

---

## 2.37. Aerenchyma

Aerenchyma fraction:

$$
\phi_{aer}
=
\frac{A_{gas}}{A_{root}}
$$

Đây là trait quan trọng của lúa trong đất ngập.

---

## 2.38. Nhiệt độ vùng rễ

Root-zone temperature khác air temperature.

Nó ảnh hưởng:
- hydraulic conductivity;
- respiration;
- nutrient uptake;
- root growth;
- enzyme kinetics;
- microbial activity.

---

## 2.39. Arrhenius response

$$
k(T)
=
k_{ref}
\exp
\left[
-\frac{E_a}{R}
\left(
\frac1T-\frac1{T_{ref}}
\right)
\right]
$$

Dạng này phù hợp trong miền nhiệt độ không gây damage mạnh.

---

## 2.40. Q10

Một empirical response:

$$
R(T)
=
R_{ref}
Q_{10}^{(T-T_{ref})/10}
$$

Không mặc định:

$$
Q_{10}=2
$$

cho mọi process.

---

## 2.41. Chất hữu cơ

Một pool đơn giản:

$$
\frac{dOM_{labile}}{dt}
=
Input
-
k_{dec}OM_{labile}
$$

Decomposition phụ thuộc:
- T;
- water;
- O₂;
- substrate quality;
- microbial activity.

---

## 2.42. C:N:P stoichiometry đất

Không nên mô hình mineralization mà bỏ qua tỷ lệ C:N:P.

Một khung microbial demand:

$$
Demand_N
=
\frac{C_{assimilated}}
{CN_{microbe}}
$$

Nếu substrate N thấp hơn demand, immobilization có thể tăng.

---

## 2.43. Root exudation

Rễ giải phóng:
- sugars;
- amino acids;
- organic acids;
- mucilage;
- secondary metabolites.

Một flux:

$$
J_{exu}
=
f(
C_{status},
P_{status},
root\ age,
stress
)
$$

Exudation có chi phí carbon.

---

## 2.44. Rhizosphere pH

Root exudates và proton flux có thể làm:

$$
pH_{rhizo}\neq pH_{bulk}
$$

Do đó sampling bulk soil có thể bỏ sót trạng thái thực sát rễ.

---

## 2.45. Rhizosphere redox

Tương tự:

$$
Eh_{rhizo}\neq Eh_{bulk}
$$

đặc biệt quanh rễ lúa có ROL.

---

## 2.46. Microbiome

Ở mức cơ chế, microbiome có thể ảnh hưởng:
- mineralization;
- immobilization;
- N fixation;
- P mobilization;
- pathogen suppression;
- hormone-like signaling.

Một reduced microbial pool:

$$
\frac{dM_{mic}}{dt}
=
Growth_{mic}
-
Death_{mic}
$$

---

## 2.47. Mycorrhiza

Phosphate uptake có thể tách:

$$
U_P
=
U_{P,root}
+
U_{P,myc}
$$

Nhưng cần accounting carbon cost:

$$
C_{cost,myc}
=
f(U_{P,myc},colonization)
$$

---

## 2.48. Tương tác K–Na

Competition có thể mô tả bằng một interaction factor:

$$
U_K^{eff}
=
U_KF_{K,Na}
$$

với:

$$
0\le F_{K,Na}\le1
$$

nếu dữ liệu hỗ trợ.

Không dùng một threshold K/Na phổ quát.

---

## 2.49. Tương tác Ca–Na

Na cao có thể ảnh hưởng:
- membrane integrity;
- Ca signaling;
- cell wall;
- selectivity.

VECrop nên tách osmotic stress khỏi ion-specific toxicity.

---

## 2.50. Phosphate precipitation

P có thể bị cố định qua:
- Ca compounds ở pH cao;
- Fe/Al interactions ở pH thấp;
- sorption bề mặt khoáng.

Do đó total P không bằng solution Pi.

---

## 2.51. Salinity: hai cơ chế chính

Phải tách:

$$
osmotic\ stress
$$

và:

$$
ion\ toxicity/imbalance
$$

Không dùng một scalar EC duy nhất nếu mục tiêu là mechanistic salinity module.

---

## 2.52. Na và Cl

Các ion salinity chính thường gồm:

$$
Na^+,\ Cl^-
$$

nhưng phản ứng cây phụ thuộc:
- exclusion;
- sequestration;
- tissue tolerance;
- K retention;
- Ca status.

---

## 2.53. Bicarbonate và alkalinity

Trong thủy canh và irrigation water, bicarbonate ảnh hưởng:
- pH stability;
- nutrient availability;
- acid requirement.

Không nên dùng EC để đại diện alkalinity.

---

## 2.54. Dung dịch dinh dưỡng

Một nutrient solution phải được mô tả bằng vector ion:

$$
\mathbf C_{sol}
=
[C_{NO_3},C_{NH_4},C_{K},C_{Ca},C_{Mg},C_{P},C_{S},\ldots]^T
$$

EC chỉ là một observation tổng hợp.

---

## 2.55. Cân bằng tank thủy canh

Với ion \(i\):

$$
\frac{dM_{i,tank}}{dt}
=
F_{i,in}
-
U_i
-
F_{i,drain}
+
F_{i,return}
$$

Nếu volume thay đổi:

$$
C_i=\frac{M_i}{V}
$$

phải cập nhật đồng thời.

---

## 2.56. Dissolved oxygen trong hydroponics

DO phụ thuộc:
- temperature;
- aeration;
- root respiration;
- microbial demand;
- water movement.

Root-zone hypoxia vẫn có thể xảy ra trong hệ giàu nước.

---

## 2.57. Root-zone temperature trong hydroponics

Nhiệt độ dung dịch ảnh hưởng:
- DO saturation;
- respiration;
- uptake;
- root disease risk.

Do đó cần đo riêng với air temperature.

---

## 2.58. Lúa

Trong lúa:
- flooded soil;
- low redox;
- NH4+ thường có vai trò lớn;
- aerenchyma và ROL quan trọng;
- Fe/Mn chemistry cần theo dõi;
- AWD tạo dao động redox.

---

## 2.59. Ngô

Trong ngô:
- root depth lớn hơn;
- soil drying quan trọng;
- nitrate transport thường đáng kể;
- coupling soil water–VPD mạnh;
- hypoxia do waterlogging gây stress rõ.

---

## 2.60. Xà lách

Trong xà lách:
- hệ rễ nông;
- root-zone temperature rất quan trọng;
- hydroponic EC/pH/DO có thể là input chính;
- Ca delivery liên quan mạnh tới transpiration và tipburn.

---

## 2.61. Dữ liệu tối thiểu cho đất

Nên có:
- texture;
- bulk density;
- water retention curve;
- saturated hydraulic conductivity;
- EC;
- pH;
- soil water;
- temperature;
- available N/P/K;
- irrigation/fertilization history.

---

## 2.62. Dữ liệu tối thiểu cho hydroponics

Nên có:
- volume tank;
- EC;
- pH;
- DO;
- root-zone temperature;
- ion composition nếu có;
- irrigation/flow rate;
- drainage;
- nutrient addition history.

---

## 2.63. Sensor QC

Mỗi sensor cần:
- calibration date;
- range check;
- drift check;
- missing-data flag;
- timestamp;
- spatial location/depth.

---

## 2.64. Mô hình sai số cảm biến

Một observation model:

$$
y_{obs}=y_{true}+\epsilon
$$

Nếu giả định Gaussian phù hợp:

$$
\epsilon\sim\mathcal N(0,\sigma_{sensor}^2)
$$

Không mặc định Gaussian nếu dữ liệu có outlier hoặc bias.

---

## 2.65. Spatial variability

Với đất không đồng nhất:

$$
X=X(x,y,z,t)
$$

Không nên dùng một cảm biến duy nhất đại diện cả ruộng nếu spatial variability lớn.

---

## 2.66. Temporal resolution

Sampling interval phải phù hợp process.

Ví dụ:
- soil water: phút–giờ;
- EC/pH hydroponic: phút–giờ;
- tissue nutrient: ngày–tuần;
- biomass: destructive interval.

---

## 2.67. Missing data

Không tự động nội suy dài nếu process thay đổi nhanh.

Có thể dùng:
- linear interpolation cho gap ngắn;
- state-space filtering;
- model-based imputation.

Phải giữ flag dữ liệu gốc và dữ liệu suy ra.

---

## 2.68. Data assimilation

Một dạng state-space:

$$
x_{t+1}
=
f(x_t,u_t,\theta)
+
\omega_t
$$

$$
y_t
=
h(x_t)
+
\nu_t
$$

Có thể dùng Kalman/EnKF/particle filter tùy cấu trúc mô hình.

---

## 2.69. Boundary conditions cho VECrop

Đầu ra Chương 2 nên chuyển thành:

$$
\{\Psi_{soil},C_i,T_{root},O_2,Eh\}
$$

để cấp cho:
- root hydraulics;
- nutrient uptake;
- respiration;
- ion homeostasis;
- redox.

---

## 2.70. H_env chỉ là reduced diagnostic

Nếu cần một index môi trường:

$$
H_{env}
=
G_{critical}
\left(
\prod_{j=1}^{m}R_j
\right)^{1/m}
$$

với:

$$
R_j\in[0,1]
$$

Đây là **VECrop proposed reduced formulation**.

Không dùng \(H_{env}\) để thay thế các module cơ chế khi đã có dữ liệu đủ.

---

## 2.71. Không double counting

Nếu salinity đã tác động qua:

$$
\Psi_s
$$

và ion-specific toxicity đã tác động qua:

$$
Na^+,\ Cl^-,K^+
$$

thì không nên nhân thêm một \(F_{EC}\) tổng quát ở cuối.

Tương tự với:
- pH;
- temperature;
- O₂;
- water stress.

---

## 2.72. Kiểm tra dimensional consistency

Ví dụ:

$$
J_i^{soil}
=
q_wC_i
-
D_{eff,i}\nabla C_i
$$

Hai vế phải có cùng đơn vị flux.

Nếu:
- \(q_w\): m s−1;
- \(C_i\): mol m−3;

thì:

$$
q_wC_i
$$

có đơn vị:

$$
mol\ m^{-2}\ s^{-1}
$$

---

## 2.73. Kiểm tra mass balance vùng rễ

Nước:

$$
Input_{water}
-
Output_{water}
-
Uptake_{water}
-
\Delta Storage
\approx0
$$

Ion:

$$
Input_i
-
Drain_i
-
Uptake_i
-
Loss_i
-
\Delta Storage_i
\approx0
$$

---

## 2.74. Calibration của soil/root-zone module

Ưu tiên hiệu chỉnh:
1. water retention;
2. hydraulic conductivity;
3. root distribution;
4. nutrient diffusion/sorption;
5. mineralization;
6. gas/redox parameters.

Không fit tất cả cùng lúc chỉ bằng yield.

---

## 2.75. Validation

Nên dùng dữ liệu độc lập về:
- soil water profile;
- EC;
- pH;
- nutrient concentration;
- root-zone temperature;
- DO/O₂;
- drainage;
- uptake.

---

## 2.76. Sensitivity analysis

Một local sensitivity:

$$
S_i
=
\frac{\partial Y}
{\partial\theta_i}
$$

Global analysis có thể dùng Morris hoặc Sobol khi cần.

---

## 2.77. Phân biệt kiến thức nền và VECrop đề xuất

### Kiến thức nền
- van Genuchten;
- Darcy–Buckingham;
- Richards equation;
- Fick diffusion;
- sorption;
- Nernst/redox;
- mineralization;
- nitrification/denitrification;
- root-zone oxygen processes.

### VECrop đề xuất
- cách chuẩn hóa \(H_{env}\);
- cách coupling root-zone states với HSY;
- lựa chọn response factors;
- cách đơn giản hóa module theo dữ liệu.

---

## 2.78. Các lỗi cần tránh

Không:
- dùng EC như nồng độ NPK;
- dùng RH thay pF;
- dùng một pH optimum cho mọi nutrient;
- dùng một Eh threshold cho mọi đất;
- lấy root-zone temperature bằng air temperature;
- dùng total nutrient như available nutrient;
- bỏ qua unit conversion;
- double count salinity/water/pH stress.

---

## 2.79. Kết luận Chương 2

Chuỗi điều kiện biên:

<div class="flow-chain">
<strong>Nước đất / dung dịch</strong> → <strong>EC – pH – nhiệt độ – O₂ – Eh – ion</strong> → <strong>Rhizosphere</strong> → <strong>Bề mặt rễ</strong> → <strong>Điều kiện cho uptake và hydraulics</strong>
</div>

Đầu ra chính của Chương 2:

$$
\boxed{
\mathbf B_{root}
=
[\Psi_{soil},C_i,T_{root},O_2,Eh,pH]^T
}
$$

được dùng làm điều kiện biên cho mô hình rễ và mạch dẫn ở các chương tiếp theo.

---

# Tài liệu nền tảng

1. Rengel Z., Cakmak I., White P.J. (eds.). **Marschner's Mineral Nutrition of Plants. 4th ed.** Academic Press, 2023.
2. van Genuchten M.Th. (1980). **A Closed-form Equation for Predicting the Hydraulic Conductivity of Unsaturated Soils.** *Soil Science Society of America Journal* 44.
3. Mualem Y. (1976). **A new model for predicting the hydraulic conductivity of unsaturated porous media.** *Water Resources Research* 12.
4. Hillel D. **Introduction to Environmental Soil Physics.** Academic Press.
5. Jury W.A., Horton R. **Soil Physics.** Wiley.
6. Marschner P., Rengel Z. **Nutrient availability in soils.** In *Marschner's Mineral Nutrition of Plants*.
7. Colmer T.D., Greenway H. Reviews on plant responses to waterlogging and root aeration.
8. Hinsinger P. Reviews on rhizosphere processes and nutrient acquisition.

> **Quy tắc VECrop:** mọi tham số vùng rễ phải có provenance theo loại đất/giá thể, crop, cultivar, depth, temperature, treatment, measurement method và unit; các giá trị chưa kiểm định phải được đánh dấu là *study-specific* hoặc *calibration parameter*.


---

# Chương 3. HSY cấp tế bào – cấu trúc, chuyển hóa, tín hiệu và điều hòa

> **Mục tiêu:** Chương 3 xây dựng lớp tích hợp cấp tế bào–mô–cơ quan cho VECrop. HSY được dùng như một **khung chẩn đoán trạng thái**, không phải lực, năng lượng hay định luật sinh học mới. Những cơ chế sinh học nền như H+-ATPase, aquaporin, Ca2+, ROS, MAPK và hormone được mô tả theo kiến thức đã thiết lập; các hàm chuẩn hóa và tích hợp HSY được ghi rõ là **VECrop proposed formulations**.

---

## 3.1. Vì sao cần một lớp tích hợp cấp tế bào

Các quá trình môi trường từ Chương 2 chỉ mô tả điều kiện biên.

Để giải thích phản ứng của cây, cần một lớp nối:

<div class="flow-chain">
<strong>Môi trường</strong> → <strong>Màng tế bào</strong> → <strong>Protein vận chuyển</strong> → <strong>Enzyme và năng lượng</strong> → <strong>Tín hiệu</strong> → <strong>Gene expression</strong> → <strong>Phản ứng cơ quan</strong>
</div>

---

## 3.2. HSY là gì

HSY trong VECrop là một **framework tích hợp**.

Nó không phải:
- lực;
- năng lượng;
- áp suất;
- thông lượng;
- định luật sinh học phổ quát.

HSY chỉ nên dùng khi:
- các biến đã được chuẩn hóa;
- không trộn đơn vị;
- không double count;
- có dữ liệu calibration/validation.

---

## 3.3. Ba trụ cột của HSY

VECrop tách ba nhóm cơ chế:

$$
\Phi_1
=
\text{Structure / vascular integrity}
$$

$$
\Phi_2
=
\text{Gene–protein–enzyme–transport–energy}
$$

$$
\Phi_3
=
\text{Hormone–Ca^{2+}–ROS–MAPK–development}
$$

---

## 3.4. Chỉ số tổng hợp cấp tế bào

Một dạng đề xuất:

$$
H_{cell}
=
w_1\Phi_1+w_2\Phi_2+w_3\Phi_3
$$

với:

$$
w_i\ge0
$$

$$
\sum_iw_i=1
$$

và:

$$
0\le\Phi_i\le1
$$

Các trọng số phải được hiệu chỉnh.

---

## 3.5. Nguyên tắc chuẩn hóa

Không được cộng trực tiếp:

$$
gene\ expression
+
ATP
+
ABA
+
K_x
$$

vì các đại lượng khác đơn vị và khác ý nghĩa.

Cần chuyển về response dimensionless trước.

---

## 3.6. Min–max normalization

$$
x^*
=
\frac{x-x_{min}}
{x_{max}-x_{min}}
$$

Chỉ phù hợp khi:
- miền hợp lý đã biết;
- dữ liệu không có outlier cực lớn;
- response gần đơn điệu.

---

## 3.7. Logistic normalization

$$
x^*
=
\frac{1}
{1+\exp[-k(x-x_{50})]}
$$

Phù hợp khi response có dạng threshold/saturation.

---

## 3.8. Gaussian optimum

$$
R(x)
=
\exp
\left[
-\frac{(x-\mu)^2}
{2\sigma^2}
\right]
$$

Phù hợp khi có vùng tối ưu và stress ở cả hai phía.

Không dùng Gaussian chỉ vì tiện tính.

---

## 3.9. Hàm bất đối xứng

Nhiều stress có response không đối xứng.

Một dạng piecewise:

$$
R(x)=
\begin{cases}
\exp[-((x-\mu)/\sigma_L)^2],&x<\mu\\
\exp[-((x-\mu)/\sigma_R)^2],&x\ge\mu
\end{cases}
$$

với:

$$
\sigma_L\neq\sigma_R
$$

---

## 3.10. Clipping

Khi một score cần nằm trong [0,1]:

$$
\operatorname{clip}(x,0,1)
=
\min(1,\max(0,x))
$$

Clipping chỉ là thao tác số học, không phải cơ chế sinh lý.

---

## 3.11. Phi_1: cấu trúc

\(\Phi_1\) có thể bao gồm:
- cell-wall integrity;
- cellulose;
- hemicellulose;
- lignin;
- membrane integrity;
- vascular anatomy;
- pit structure;
- active root area.

Một dạng:

$$
\Phi_1
=
\sum_k
w_{1k}S_k^*
$$

---

## 3.12. Thành tế bào

Thành tế bào ảnh hưởng:
- strength;
- extensibility;
- hydraulic properties;
- xylem resistance;
- growth capacity.

Không được xem lignin cao luôn tốt.

Lignification quá mức có thể giảm extensibility của mô tăng trưởng.

---

## 3.13. Cell-wall extensibility

Một khung Lockhart-type:

$$
\frac{dV}{dt}
=
\phi
(P-Y)
$$

khi:

$$
P>Y
$$

Trong đó:
- \(\phi\): wall extensibility;
- \(P\): turgor;
- \(Y\): yield threshold.

---

## 3.14. Turgor

Turgor liên hệ với thế nước:

$$
\Psi_w
=
\Psi_p+\Psi_s
$$

ở mức tế bào giản lược.

Tăng trưởng giãn tế bào cần:
- water uptake;
- turgor;
- wall extensibility.

---

## 3.15. Membrane integrity

Membrane damage có thể ảnh hưởng:
- ion selectivity;
- proton gradient;
- signaling;
- leakage.

Một diagnostic index:

$$
H_{mem}
=
e^{-\lambda_LD_L-\lambda_PD_P}
$$

trong đó \(D_L,D_P\) là damage variables.

Đây là VECrop reduced formulation.

---

## 3.16. Aquaporin

Aquaporin điều chỉnh water permeability của màng.

Một dạng:

$$
L_{pr,eff}
=
L_{pr,0}
F_{AQP}
F_{anat}
F_{env}
$$

Trong đó \(F_{AQP}\) có thể liên hệ với:
- abundance;
- phosphorylation;
- gating;
- pH;
- Ca2+;
- ROS.

---

## 3.17. Aquaporin không phải “máy bơm nước”

Aquaporin không tạo năng lượng.

Dòng nước vẫn phụ thuộc gradient:

$$
J_w
=
L_p\Delta\Psi
$$

Aquaporin chủ yếu điều chỉnh conductance.

---

## 3.18. Phi_2: gene–protein–enzyme–transport–energy

Một dạng khung đề xuất:

$$
\Phi_{2,i}
=
\operatorname{clip}
\left[
s_i(Q)
(S_{4,i}^*+S_{5,i}^*-S_{6,i}^*),
0,1
\right]
$$

Trong đó:
- \(S_4\): gene/protein activation;
- \(S_5\): transporter/enzyme capacity;
- \(S_6\): inhibition/damage.

---

## 3.19. Regulatory function s_i

$$
s_i(Q)
=
\frac1
{1+\exp[-(\beta_{0i}+\sum_j\beta_{ji}Q_j^*)]}
$$

Đây là một **statistical/regulatory mapping**, không phải phương trình phân tử cơ bản.

---

## 3.20. Gene expression

Một mô hình động đơn giản:

$$
\frac{dG_j}{dt}
=
k_{tr,j}F_j
-
k_{deg,j}G_j
$$

Trong đó:
- \(G_j\): transcript/protein proxy;
- \(k_{tr,j}\): production/transcription rate;
- \(k_{deg,j}\): degradation rate.

---

## 3.21. Protein abundance

Nếu cần tách mRNA và protein:

$$
\frac{dP_j}{dt}
=
k_{tl,j}G_j
-
k_{pdeg,j}P_j
$$

Không giả định mRNA tỷ lệ tức thời 1:1 với protein activity.

---

## 3.22. Enzyme capacity

Một enzyme-mediated process:

$$
v
=
V_{\max}
\frac{S}{K_m+S}
$$

Trong VECrop:

$$
V_{\max}^{eff}
=
V_{\max}^{ref}
F_{protein}
F_T
F_{pH}
F_E
$$

---

## 3.23. Transporter capacity

Tương tự:

$$
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
s_i(Q)
F_{stage,i}
F_{T,i}
F_{O_2,i}
$$

Gene expression điều chỉnh capacity, không tạo “lực hút ion”.

---

## 3.24. H+-ATPase

H+-ATPase dùng ATP để bơm proton.

Chuỗi:

$$
ATP
\rightarrow
H^+\ pumping
\rightarrow
\Delta pH+\Delta\psi
\rightarrow
proton\ motive\ force
$$

---

## 3.25. Proton motive force

$$
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
$$

Proton motive force hỗ trợ:
- symport;
- antiport;
- secondary active transport.

---

## 3.26. H+-ATPase và nutrient uptake

Một conceptual coupling:

$$
ATP
\rightarrow
PMA
\rightarrow
\Delta\widetilde{\mu}_{H^+}
\rightarrow
Transporter_i
\rightarrow
J_i
$$

Không mô hình bằng cách cộng ATP trực tiếp vào flux ion.

---

## 3.27. ATP supply

Một reduced balance:

$$
ATP_{net}
=
ATP_{prod}
-
ATP_{cons}
$$

ATP production phụ thuộc:
- respiration;
- photosynthesis;
- O₂;
- substrate supply.

---

## 3.28. ATP demand

$$
ATP_{dem}
=
ATP_G
+
ATP_M
+
ATP_U
+
ATP_A
+
ATP_T
$$

Các nhóm:
- growth;
- maintenance;
- uptake;
- assimilation;
- transport.

---

## 3.29. Energy diagnostic

$$
H_E
=
\min
\left(
1,
\frac{ATP_{sup}}
{ATP_{dem}+\varepsilon}
\right)
$$

Đây là **VECrop reduced diagnostic**.

---

## 3.30. O₂ và Phi_2

Thiếu oxy tác động:

$$
O_2\downarrow
\rightarrow
oxidative\ phosphorylation\downarrow
\rightarrow
ATP\downarrow
\rightarrow
active\ transport\downarrow
$$

Do đó không nên dùng một \(F_{O_2}\) riêng nếu ATP đã được mô hình hóa đầy đủ và gây double counting.

---

## 3.31. Temperature và enzyme activity

Một dạng Arrhenius:

$$
k(T)
=
k_{ref}
\exp
\left[
-\frac{E_a}{R}
\left(
\frac1T-\frac1{T_{ref}}
\right)
\right]
$$

Không dùng một \(Q_{10}\) duy nhất cho mọi enzyme.

---

## 3.32. Phi_3: hormone–Ca2+–ROS–MAPK–development

Một dạng đề xuất:

$$
\Phi_{3,o}
=
\operatorname{clip}
\left[
y_o(Q,t)
(S_{7,o}^*+S_{8,o}^*-S_{9,o}^*),
0,1
\right]
$$

Trong đó:
- \(S_7\): developmental activation;
- \(S_8\): adaptive signaling;
- \(S_9\): inhibition/damage.

---

## 3.33. Hormone vector

$$
\mathbf H
=
[IAA,CK,GA,ABA,ET,BR,JA,SA,SL]^T
$$

Các hormone phải được giữ riêng trước khi tổng hợp.

---

## 3.34. Không chia hormone thành “tốt” và “xấu”

Không dùng biểu thức:

$$
Auxin+GA+CK-ABA-Ethylene
$$

cho mọi tình huống.

ABA hoặc ethylene có thể:
- hạn chế tăng trưởng;
- nhưng đồng thời tăng khả năng sống sót khi stress.

---

## 3.35. Hormone balance

$$
\frac{dH_{h,o}}{dt}
=
B_{h,o}
-
D_{h,o}
+
T_{h,in,o}
-
T_{h,out,o}
$$

Trong đó:
- \(B\): biosynthesis;
- \(D\): degradation/conjugation;
- \(T\): transport.

---

## 3.36. Auxin

Auxin liên quan:
- cell elongation;
- apical dominance;
- root initiation;
- tropism;
- vascular differentiation.

Một response phải phụ thuộc:
- concentration;
- tissue;
- developmental stage.

---

## 3.37. Cytokinin

Cytokinin liên quan:
- cell division;
- shoot signaling;
- nutrient status;
- senescence regulation.

Không xem cytokinin chỉ là “hormone tăng trưởng”.

---

## 3.38. Gibberellin

GA liên quan:
- stem elongation;
- germination;
- reproductive development.

Response phụ thuộc mạnh genotype và developmental stage.

---

## 3.39. ABA

ABA là tín hiệu quan trọng của water stress.

Chuỗi khí khổng:

$$
ABA
\rightarrow
PYR/PYL
\rightarrow
PP2C\downarrow
\rightarrow
SnRK2/OST1
$$

Sau đó:

$$
RBOH
\rightarrow
ROS
\rightarrow
Ca^{2+}
\rightarrow
ion\ channels
$$

---

## 3.40. Ethylene

Ethylene liên quan:
- senescence;
- flooding response;
- root architecture;
- stress signaling;
- fruit processes.

Trong hypoxia, ethylene signaling có vai trò thích nghi.

---

## 3.41. Brassinosteroid

BR liên quan:
- cell expansion;
- vascular development;
- growth signaling;
- stress interaction.

BR không nên được đưa vào một score tuyến tính cứng.

---

## 3.42. Jasmonate và salicylate

JA và SA liên quan mạnh đến:
- defense;
- wound response;
- pathogen signaling;
- growth-defense tradeoff.

---

## 3.43. Strigolactone

SL liên quan:
- branching;
- root architecture;
- nutrient response;
- mycorrhizal signaling.

---

## 3.44. Ca2+ signaling

Calcium cytosolic baseline thấp nhưng có transient/spike khi nhận tín hiệu.

Một transient:

$$
Ca(t)
=
Ca_0
+
\sum_k
A_ke^{-(t-t_k)/\tau_k}
$$

---

## 3.45. Calcium activation function

$$
S_{Ca}
=
\frac{[Ca^{2+}]^n}
{K_{Ca}^n+[Ca^{2+}]^n}
$$

\(n\) có thể đại diện cooperativity trong reduced model.

---

## 3.46. Calcium signature

Không chỉ amplitude quan trọng.

Tín hiệu Ca2+ còn có thể mã hóa qua:
- frequency;
- duration;
- spatial localization.

Do đó một scalar \(S_{Ca}\) chỉ là approximation.

---

## 3.47. ROS vector

$$
\mathbf R_{ROS}
=
\{
O_2^{\bullet-},
H_2O_2,
{}^1O_2,
{}^\bullet OH
\}
$$

Không gộp mọi ROS thành một chất duy nhất nếu cần cơ chế.

---

## 3.48. Nguồn ROS

$$
P_{ROS}
=
P_{chl}
+
P_{mit}
+
P_{per}
+
P_{RBOH}
+
P_{other}
$$

Các nguồn gồm:
- chloroplast;
- mitochondria;
- peroxisome;
- NADPH oxidase;
- apoplast.

---

## 3.49. ROS không chỉ là damage

ROS ở mức thích hợp là signaling molecule.

Vì vậy:

$$
ROS=0
$$

không mặc định là tối ưu sinh lý.

---

## 3.50. H2O2 balance

$$
\frac{d[H_2O_2]}{dt}
=
P_{H_2O_2}
+
\frac12v_{SOD}
-
v_{CAT}
-
v_{APX}
-
v_{PRX}
-
J_{H_2O_2}
$$

---

## 3.51. SOD

$$
2O_2^{\bullet-}
+
2H^+
\rightarrow
H_2O_2+O_2
$$

SOD chuyển superoxide thành H2O2.

---

## 3.52. Catalase

$$
2H_2O_2
\rightarrow
2H_2O+O_2
$$

---

## 3.53. Ascorbate–glutathione network

Ở mức nâng cao cần theo dõi:
- APX;
- AsA;
- DHA;
- GSH;
- GSSG;
- GR.

Không nên biến antioxidant capacity thành một scalar duy nhất nếu nghiên cứu redox mechanism.

---

## 3.54. Fenton reaction

$$
Fe^{2+}
+
H_2O_2
\rightarrow
Fe^{3+}
+
OH^-
+
{}^\bullet OH
$$

Hydroxyl radical có khả năng gây damage mạnh.

---

## 3.55. ROS signaling index

Một reduced signal index:

$$
S_{ROS}
=
\frac{H_2O_2}
{K_{sig}+H_2O_2}
$$

---

## 3.56. ROS damage index

$$
D_{ROS}
=
\frac{(H_2O_2/K_D)^n}
{1+(H_2O_2/K_D)^n}
$$

Nên tách signal và damage.

---

## 3.57. MAPK cascade

Canonical structure:

$$
MAPKKK
\rightarrow
MAPKK
\rightarrow
MAPK
\rightarrow
TF/substrate
$$

---

## 3.58. Dynamic MAPK model

$$
\frac{dM_3^*}{dt}
=
k_{a3}S(1-M_3^*)
-
k_{d3}M_3^*
$$

$$
\frac{dM_2^*}{dt}
=
k_{a2}M_3^*(1-M_2^*)
-
k_{d2}M_2^*
$$

$$
\frac{dM_1^*}{dt}
=
k_{a1}M_2^*(1-M_1^*)
-
k_{d1}M_1^*
$$

---

## 3.59. Transcription factor

Một TF activity:

$$
TF^*
=
f(MAPK,H,Ca,ROS)
$$

Gene regulation:

$$
\frac{dG_j}{dt}
=
k_{tr,j}F_j(TF^*)
-
k_{deg,j}G_j
$$

---

## 3.60. Crosstalk

Hormone, Ca2+, ROS và MAPK không hoạt động độc lập.

Ví dụ ABA drought signaling có thể nối:

$$
ABA
\rightarrow
ROS
\leftrightarrow
Ca^{2+}
\rightarrow
kinase
\rightarrow
ion\ channel
$$

---

## 3.61. Regulatory function y_o

Một VECrop reduced formulation:

$$
y_o
=
\sigma
\left[
\beta_0
+
\sum_i\beta_iH_i^*
+
\sum_{i<j}\beta_{ij}H_i^*H_j^*
+
\beta_{Ca}S_{Ca}
+
\beta_RS_{ROS}
+
\beta_MM^*
\right]
$$

Các coefficient phải được fit.

---

## 3.62. Interaction term

Ví dụ:

$$
\beta_{ABA,Ca}
ABA^*S_{Ca}
$$

có thể mô tả synergy/antagonism.

Không tự đặt dấu dương/âm nếu chưa có dữ liệu.

---

## 3.63. State-space molecular layer

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(\mathbf x,\mathbf u,\boldsymbol\theta)
$$

với:

$$
\mathbf x
=
[IAA,CK,GA,ABA,ET,Ca,H_2O_2,MAPK,TF,Gene]^T
$$

---

## 3.64. Input vector molecular layer

$$
\mathbf u
=
[\Psi,EC,Na,N,P,T,VPD,O_2,light]^T
$$

---

## 3.65. Output regulatory layer

$$
\mathbf r
=
[
g_s,
root\ growth,
cell\ elongation,
xylem\ differentiation,
senescence,
sink\ strength
]^T
$$

---

## 3.66. Nối Phi_2 và Phi_3

Transport capacity có thể chịu điều hòa:

$$
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
\Phi_2
\Phi_3
$$

chỉ khi không double count cùng regulator trong hai lớp.

---

## 3.67. Organ specificity

Cùng hormone có thể gây response khác ở:
- root;
- leaf;
- stem;
- reproductive organ.

Do đó:

$$
y_o\neq y_{o'}
$$

cho hai cơ quan khác nhau.

---

## 3.68. Stage specificity

Parameter phụ thuộc giai đoạn:

$$
\theta=\theta(stage)
$$

Ví dụ:
- seedling;
- vegetative;
- reproductive;
- senescence.

---

## 3.69. Genotype specificity

$$
\boldsymbol\theta_G
\neq
\boldsymbol\theta_{G'}
$$

Không chuyển parameter regulator giữa cultivar nếu chưa kiểm định.

---

## 3.70. Stress history

Response hiện tại có thể phụ thuộc quá khứ:

$$
R(t)
=
f(
X(t),
\int_{t-\tau}^{t}Stress(s)\,ds
)
$$

đây là memory/hysteresis.

---

## 3.71. Hysteresis

Ví dụ recovery sau drought có thể không quay về cùng trajectory khi water potential trở lại.

Do đó:

$$
Response_{drying}
\neq
Response_{rewetting}
$$

---

## 3.72. Priming

Stress nhẹ trước đó có thể thay đổi response sau.

Một state variable:

$$
P_{memory}(t)
$$

có thể được thêm khi có dữ liệu.

---

## 3.73. Growth–defense tradeoff

Một conceptual allocation:

$$
C_{avail}
=
C_{growth}
+
C_{defense}
+
C_{storage}
$$

Nếu defense tăng, growth có thể giảm dù survival tăng.

---

## 3.74. Carbon–energy coupling

Không nên đánh giá hormone hoặc defense tách khỏi carbon status.

Một energy constraint:

$$
R_{process}^{eff}
=
R_{process}
H_E
$$

chỉ dùng nếu energy limitation chưa được giải trực tiếp bên trong process.

---

## 3.75. Sugar signaling

Sucrose/glucose/T6P có thể đóng vai trò:
- substrate;
- status signal;
- source–sink regulator.

Không đồng nhất sugar concentration với carbon flux.

---

## 3.76. SnRK1 và TOR

Một conceptual relation:

$$
Low\ energy
\rightarrow
SnRK1\uparrow
$$

$$
High\ carbon/nutrient
\rightarrow
TOR\uparrow
$$

Đây là kiến thức signaling nền; mô hình định lượng cần calibration.

---

## 3.77. Sugar–HSY coupling

Một reduced sugar status:

$$
S_C
=
\frac{C_{sugar}}
{K_C+C_{sugar}}
$$

Có thể đi vào regulatory function:

$$
y_o
=
f(H,Ca,ROS,MAPK,S_C)
$$

---

## 3.78. Không double count carbon status

Nếu source–sink model đã dùng sucrose flux trực tiếp, không nhân lại \(S_C\) vào growth nếu nó mô tả cùng limitation.

---

## 3.79. Phi_3 theo cơ quan

Một VECrop formulation:

$$
\Phi_{3,o}
=
\operatorname{clip}
[
y_o
(
S_{dev,o}
+
S_{adapt,o}
-
S_{damage,o}
),
0,1
]
$$

---

## 3.80. Diagnostic HSY

Một dạng tổng hợp toàn cây:

$$
HSY_{diag}
=
\left[
H_{env}^{w_e}
H_{cell}^{w_c}
H_{hyd}^{w_h}
H_{ion}^{w_i}
H_E^{w_a}
H_{redox}^{w_r}
H_{photo}^{w_p}
H_{sink}^{w_s}
\right]^{1/\sum w}
$$

Đây là **diagnostic index**, không phải yield equation.

---

## 3.81. Không nhân HSY vào yield hai lần

Nếu:

$$
Y_{mechanistic}
=
f(
water,
nutrient,
photosynthesis,
respiration,
sink
)
$$

thì không nên:

$$
Y
=
Y_{mechanistic}
\times
HSY_{diag}
$$

nếu các stress đã có trong \(Y_{mechanistic}\).

---

## 3.82. Reduced HSY model

Chỉ trong mô hình rút gọn:

$$
Y_{red}
=
Y_{pot}
C_D
HSY_{red}
$$

và phải chứng minh \(HSY_{red}\) không chứa lại cùng response đã có trong \(C_D\).

---

## 3.83. Weight estimation

Có thể fit weight:

$$
\hat{\mathbf w}
=
\arg\min_{\mathbf w}
Loss(\mathbf w)
$$

với constraint:

$$
w_i\ge0,\qquad\sum_iw_i=1
$$

---

## 3.84. Regularization

Để tránh overfitting:

$$
Loss_{reg}
=
Loss
+
\lambda\|\mathbf w\|_2^2
$$

hoặc sparsity penalty khi phù hợp.

---

## 3.85. Identifiability

Nếu hai state luôn biến đổi cùng nhau, có thể không phân biệt được coefficient riêng.

Cần kiểm tra:
- parameter correlation;
- profile likelihood;
- posterior uncertainty;
- sensitivity.

---

## 3.86. Sensitivity

Local:

$$
S_i
=
\frac{\partial H_{cell}}
{\partial\theta_i}
$$

Global:
- Morris;
- Sobol;
- variance decomposition.

---

## 3.87. Uncertainty propagation

$$
\mathbf X^{(k)},
\boldsymbol\theta^{(k)}
\rightarrow
H_{cell}^{(k)}
$$

Nên báo:
- median;
- quantile;
- credible/confidence interval.

---

## 3.88. Measurement layer

Các dữ liệu có thể dùng:
- qPCR/RNA;
- proteomics;
- enzyme activity;
- ATP/ADP;
- hormone assay;
- Ca imaging;
- ROS/redox probes;
- membrane leakage;
- antioxidant activity.

---

## 3.89. Không đồng nhất omics với flux

Gene expression cao không đảm bảo flux cao.

Flux còn phụ thuộc:
- substrate;
- enzyme activation;
- energy;
- membrane gradient;
- product inhibition.

---

## 3.90. Fluxomics

Một flux \(v_i\) có thể cần được suy từ:
- isotope labeling;
- mass balance;
- kinetic model.

Không suy flux chỉ từ transcript abundance.

---

## 3.91. Temporal scale

Signal:
- giây–phút.

Gene expression:
- phút–giờ.

Protein:
- giờ–ngày.

Growth:
- giờ–ngày.

Yield:
- tuần–tháng.

VECrop cần tránh dùng cùng timestep cho mọi lớp nếu không phù hợp.

---

## 3.92. Multi-rate integration

Có thể dùng:
- fast signaling timestep;
- slower metabolism timestep;
- daily growth timestep.

Một coupling:

$$
\mathbf x_{fast}
\rightarrow
\overline{\mathbf r}_{day}
\rightarrow
Growth_{day}
$$

---

## 3.93. Numerical stability

Nếu dynamic model stiff:

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(\mathbf x)
$$

có thể cần implicit solver hoặc adaptive timestep.

---

## 3.94. Positivity constraints

Các pool vật chất:

$$
M_i\ge0
$$

Hormone concentration:

$$
H_i\ge0
$$

ROS concentration:

$$
[ROS]\ge0
$$

Solver tạo giá trị âm phải được kiểm tra.

---

## 3.95. Bound constraints cho score

$$
0\le\Phi_i\le1
$$

$$
0\le H_{cell}\le1
$$

nếu định nghĩa score theo miền này.

---

## 3.96. Test case baseline

Trong điều kiện reference:

$$
\Phi_1\approx1
$$

$$
\Phi_2\approx1
$$

$$
\Phi_3\approx1
$$

không có nghĩa mọi pathway hoạt động tối đa; chỉ có nghĩa trạng thái gần reference optimum của model.

---

## 3.97. Test case hypoxia

Kỳ vọng:
- ATP supply giảm;
- PMA capacity giảm;
- active uptake giảm;
- ROS/redox thay đổi;
- ethylene signaling thay đổi.

Không nên chỉ giảm một scalar \(H_{cell}\).

---

## 3.98. Test case salinity

Kỳ vọng:
- osmotic effect;
- Na/K imbalance;
- membrane potential change;
- ROS;
- ABA;
- Ca signaling.

Cần tránh phạt EC + Na + ROS + ABA nhiều lần cho cùng effect.

---

## 3.99. Test case drought

Kỳ vọng:
- water potential giảm;
- ABA tăng;
- Ca/ROS signaling;
- stomatal response;
- growth inhibition;
- source–sink change.

---

## 3.100. Test case nutrient deficiency

Ví dụ N deficiency:
- uptake limitation;
- amino acid/protein status;
- photosynthetic capacity;
- hormone/sugar signaling;
- senescence.

Không chỉ giảm “N score”.

---

## 3.101. Lúa

Các điểm cần chú ý:
- hypoxia tolerance;
- aerenchyma;
- ethylene;
- ROS/redox;
- NH4+ metabolism;
- tillering signal.

---

## 3.102. Ngô

Các điểm:
- C4 energy demand;
- drought signaling;
- deep root regulation;
- strong reproductive sink;
- ABA–stomata coupling.

---

## 3.103. Xà lách

Các điểm:
- shallow roots;
- high leaf expansion;
- Ca delivery;
- tipburn;
- root-zone hypoxia;
- temperature sensitivity.

---

## 3.104. Parameter provenance

Mỗi parameter cần:
- species;
- cultivar;
- tissue;
- stage;
- treatment;
- measurement method;
- unit;
- source;
- uncertainty.

---

## 3.105. Calibration hierarchy

Không fit mọi thứ bằng yield.

Thứ tự nên là:
1. molecular/signaling observable;
2. enzyme/transporter activity;
3. organ response;
4. whole-plant response;
5. yield.

---

## 3.106. Validation

Một HSY model cần validation độc lập với:
- stress treatment;
- cultivar;
- environment;
- time series.

---

## 3.107. Ablation test

Tắt từng thành phần:

$$
\Delta E_k
=
Error_{without\ k}
-
Error_{full}
$$

Nếu bỏ module mà error không tăng, module có thể chưa cần thiết hoặc không identifiable.

---

## 3.108. Causal caution

Một correlation:

$$
corr(X,Y)\neq0
$$

không chứng minh:

$$
X\rightarrow Y
$$

Cần dùng:
- perturbation;
- intervention;
- mechanistic evidence;
- temporal ordering.

---

## 3.109. Phân biệt signal và state

Ví dụ:
- ABA concentration: state;
- ABA receptor activation: signaling state;
- stomatal closure: response.

Không gộp cả ba thành một biến duy nhất nếu cần cơ chế.

---

## 3.110. Phân biệt capacity và flux

$$
V_{\max}
$$

là capacity.

$$
J
$$

là flux.

Có thể:

$$
V_{\max}\uparrow
$$

nhưng:

$$
J\downarrow
$$

nếu substrate hoặc energy thấp.

---

## 3.111. Phân biệt damage và adaptation

Cùng một stress có thể làm:
- adaptation tăng;
- damage tăng.

Do đó:

$$
S_{adapt}
\neq
1-D_{damage}
$$

trong mọi trường hợp.

---

## 3.112. Không gán chiều hướng tuyệt đối cho hormone

Không mặc định:
- ABA luôn âm;
- auxin luôn dương;
- ethylene luôn âm.

Dấu phải phụ thuộc process cụ thể.

---

## 3.113. Không gán “lực” cho gene/hormone

Không viết:

$$
Force
=
Gene
+
Hormone
+
ATP
$$

vì sai về vật lý.

Đúng hơn là:

$$
Regulatory\ state
\rightarrow
parameter/capacity
\rightarrow
physical\ flux
$$

---

## 3.114. Cầu nối từ Chương 3 sang Chương 4

Đầu ra Chương 3 nên là các regulator/capacity:

$$
\mathbf R_{cell}
=
[
L_{pr,eff},
V_{\max,i}^{eff},
g_{channel},
H_E,
S_{ROS},
S_{Ca},
y_o
]^T
$$

Các biến này sẽ được đưa vào mô hình:
- root hydraulics;
- ion uptake;
- xylem/phloem;
- stomata;
- source–sink.

---

## 3.115. Kết luận Chương 3

Chuỗi tích hợp:

<div class="flow-chain">
<strong>Môi trường</strong> → <strong>Màng & cấu trúc</strong> → <strong>Protein/Enzyme</strong> → <strong>Năng lượng</strong> → <strong>Hormone–Ca²⁺–ROS–MAPK</strong> → <strong>Gene regulation</strong> → <strong>Capacity/response cơ quan</strong>
</div>

HSY cấp tế bào chỉ có giá trị khi:
- dimensionless;
- có provenance;
- không double count;
- có uncertainty;
- có validation.

---

# Tài liệu nền tảng

1. Taiz L. et al. **Plant Physiology and Development.** Oxford University Press / Sinauer.
2. Buchanan B.B., Gruissem W., Jones R.L. **Biochemistry & Molecular Biology of Plants.** Wiley.
3. Rengel Z., Cakmak I., White P.J. (eds.). **Marschner's Mineral Nutrition of Plants. 4th ed.** Academic Press, 2023.
4. Maurel C. et al. Reviews on plant aquaporins and root water transport.
5. Palmgren M.G. Reviews on plasma membrane H+-ATPases in plants.
6. Zhu J.K. Reviews on abiotic stress signaling.
7. Mittler R. Reviews on ROS signaling and oxidative stress in plants.
8. Waszczak C., Carmody M., Kangasjärvi J. Reviews on ROS signaling.
9. Boudsocq M., Sheen J. Reviews on Ca2+-dependent protein kinases.
10. Xu J., Zhang S. Reviews on MAPK cascades in plant stress signaling.
11. Cutler S.R. et al. Reviews on ABA signaling.
12. Li G.S., Zhao Y. Reviews on HXK/SnRK1/TOR sugar signaling.

> **Quy tắc VECrop:** các coefficient logistic, weighting factor, threshold, interaction term và score function trong Chương 3 chỉ được xem là **proposed/calibration parameters** cho đến khi được kiểm định bằng dữ liệu độc lập.


---

# Chương 4. Thủy lực, mạch dẫn và tích hợp toàn cây

> **Phạm vi:** Chương 4 được giới hạn đúng từ **4.1 đến 4.12**. Chương này nối điều kiện vùng rễ và lớp điều hòa tế bào với vận chuyển dài hạn, quang hợp, phân bổ carbon–dinh dưỡng, năng lượng, redox và tín hiệu toàn cây. Các phương trình cơ chế nền được giữ riêng với các hàm VECrop đề xuất.

---

## 4.1. Thế nước và hệ đất–cây–khí quyển (SPAC)

Thế nước là biến trung tâm để mô tả chuyển động của nước trong hệ đất–cây–khí quyển.

Tổng thế nước:

$$
\Psi_w
=
\Psi_p+\Psi_s+\Psi_m+\Psi_g
$$

Trong đó:

- \(\Psi_p\): thế áp suất;
- \(\Psi_s\): thế thẩm thấu;
- \(\Psi_m\): thế ma trận;
- \(\Psi_g\): thế trọng trường.

### 4.1.1. Gradient thế nước

Dòng nước tổng quát:

$$
\vec J_w
=
-K_h\nabla\Psi_w
$$

Dạng lumped:

$$
Q_w
=
K_{plant}
(\Psi_{soil}-\Psi_{leaf})
$$

Tổng resistance:

$$
R_{tot}
=
R_{soil}
+
R_{root}
+
R_{xylem}
+
R_{leaf}
$$

và:

$$
K_{plant}
=
\frac1{R_{tot}}
$$

Trong nhiều điều kiện cây đang thoát hơi:

$$
\Psi_{soil}
>
\Psi_{root}
>
\Psi_{stem}
>
\Psi_{leaf}
$$

Đây không phải trật tự tuyệt đối cho mọi thời điểm.

### 4.1.2. Root pressure và transpiration

Root pressure có thể xuất hiện khi:

- transpiration thấp;
- ion accumulation tạo osmotic driving force;
- root hydraulic conductance đủ cao.

Nhưng không được xem root pressure là cơ chế phổ quát duy nhất của vận chuyển xylem.

Trong phần lớn cây đang thoát hơi mạnh, gradient thế nước do transpiration là thành phần rất quan trọng.

### 4.1.3. Trọng lực

$$
\Psi_g
=
\rho_wgz
$$

Độ lớn gần đúng:

$$
0.00981\ MPa\ m^{-1}
$$

theo chiều cao.

### 4.1.4. Hydraulic segmentation

Không phải mọi cơ quan có resistance bằng nhau.

Có thể mô tả:

$$
R_{plant}
=
R_{root}
+
R_{stem}
+
R_{petiole}
+
R_{leaf}
$$

và mỗi phần có thể thay đổi theo:
- tuổi;
- embolism;
- nhiệt độ;
- anatomy;
- aquaporin state.

### 4.1.5. Water storage

Mô thực vật có capacitance:

$$
C_h
=
\frac{dV_w}{d\Psi}
$$

Một dạng động:

$$
C_h
\frac{d\Psi}{dt}
=
Q_{in}-Q_{out}
$$

Water storage giúp giảm dao động ngắn hạn giữa uptake và transpiration.

### 4.1.6. Kiểm tra đơn vị

Nếu:

$$
Q_w=K\Delta\Psi
$$

thì \(K\) phải có đơn vị phù hợp để \(Q_w\) là lưu lượng.

Không được cộng trực tiếp:

$$
\Psi + ABA + ATP
$$

vì sai thứ nguyên.

---

## 4.2. Thủy lực rễ – apoplast – symplast – aquaporin

Rễ là interface giữa môi trường vùng rễ và xylem.

### 4.2.1. Ba đường vận chuyển

Nước có thể đi qua:

- apoplast;
- symplast;
- transcellular.

Các đường này có resistance khác nhau.

### 4.2.2. Root hydraulic flux

$$
J_{w,r}
=
L_{pr,eff}
(\Psi_{soil}-\Psi_{xyl})
$$

Tổng lưu lượng:

$$
Q_r
=
A_rL_{pr,eff}
(\Psi_{soil}-\Psi_{xyl})
$$

Trong đó:
- \(A_r\): active root area;
- \(L_{pr,eff}\): effective root hydraulic conductivity.

### 4.2.3. Aquaporin factor

Một dạng VECrop:

$$
L_{pr,eff}
=
L_{pr,0}
F_{anat}
F_{AQP}
F_T
F_{pH}
F_{O_2}
$$

Không dùng nếu các yếu tố trên đã được mô hình hóa trực tiếp bên trong \(L_{pr}\).

### 4.2.4. Aquaporin gating

Aquaporin có thể bị điều hòa bởi:

- phosphorylation;
- cytosolic pH;
- Ca2+;
- ROS;
- membrane trafficking.

Aquaporin thay đổi permeability, không tạo năng lượng.

### 4.2.5. Endodermis và Casparian strip

Endodermis làm tăng selectivity của radial transport.

Apoplastic flow bị hạn chế qua Casparian strip nên nước và ion thường phải đi qua màng trước khi vào stele.

### 4.2.6. Root age

Hydraulic conductance thay đổi theo:
- suberization;
- secondary growth;
- root hair abundance;
- lateral root formation.

Do đó:

$$
L_{pr}=L_{pr}(age,z,t)
$$

### 4.2.7. Root distribution

Tổng uptake:

$$
Q_{root}
=
\int_0^{Z_r}
A_r(z)
L_{pr}(z)
[
\Psi_{soil}(z)-\Psi_x
]
\,dz
$$

### 4.2.8. Hydraulic redistribution

Trong một số cây, rễ có thể vận chuyển nước từ lớp ẩm sang lớp khô khi transpiration thấp.

Do đó:

$$
Q_r(z)
$$

có thể đổi dấu theo lớp đất.

---

## 4.3. Hấp thu khoáng, điện hóa màng và xylem loading

### 4.3.1. Uptake tổng

$$
U_i
=
A_rJ_{i,net}
$$

### 4.3.2. HATS và LATS

$$
J_i
=
J_{HATS,i}
+
J_{LATS,i}
-
J_{efflux,i}
$$

High-affinity component:

$$
J_{HATS,i}
=
V_{\max,H,i}
\frac{C_i}
{K_{m,H,i}+C_i}
$$

Một reduced LATS:

$$
J_{LATS,i}
\approx
k_{L,i}C_i
$$

chỉ khi dữ liệu hỗ trợ.

### 4.3.3. Điện thế điện hóa

$$
\Delta\widetilde\mu_i
=
RT\ln
\frac{a_{i,in}}{a_{i,out}}
+
z_iF
(V_{in}-V_{out})
$$

Transporter và channel phản ứng với driving force này.

### 4.3.4. Nernst potential

$$
E_i
=
\frac{RT}{z_iF}
\ln
\frac{a_{i,out}}
{a_{i,in}}
$$

Channel current:

$$
I_i
=
g_i(V_m-E_i)
$$

### 4.3.5. H+-ATPase

H+-ATPase tạo proton motive force:

$$
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
$$

Nó hỗ trợ secondary active uptake.

### 4.3.6. Phosphate uptake

$$
J_P
=
V_{\max,P}
\frac{C_{Pi}}
{K_{m,P}+C_{Pi}}
F_{H+}
F_{PHT1}
$$

### 4.3.7. Potassium uptake

Transporter form:

$$
J_{K,HAK}
=
V_{\max,K}
\frac{[K^+]}
{K_{m,K}+[K^+]}
$$

Channel form:

$$
I_K
=
g_K(V_m-E_K)
$$

### 4.3.8. Nitrate và ammonium

Cần tách:

$$
U_N
=
U_{NO_3}
+
U_{NH_4}
$$

vì hai dạng N có:
- transporter;
- assimilation cost;
- effect lên pH;
- environmental preference khác nhau.

### 4.3.9. Xylem loading

Một balance tại stele:

$$
J_{i,xyl}
=
J_{load,i}
-
J_{retrieve,i}
$$

Ion đi vào xylem sau đó được vận chuyển với water flux.

### 4.3.10. Long-distance ion flux

$$
Q_{i,xyl}
=
Q_wC_{i,xyl}
-
A_xD_i
\frac{\partial C_i}{\partial z}
$$

Trong nhiều trường hợp advection chiếm ưu thế, nhưng không mặc định cho mọi ion.

### 4.3.11. Calcium

$$
Q_{Ca,x}
=
Q_wC_{Ca,x}
+
Q_{Ca,load}
$$

Ca có phloem mobility hạn chế tương đối so với nhiều nutrient khác, nên delivery tới mô non phụ thuộc mạnh transpiration và xylem connectivity.

### 4.3.12. Mass balance nutrient

$$
\frac{dM_i}{dt}
=
U_i-E_i-L_i
$$

Remobilization nội bộ không phải input mới.

---

## 4.4. Xylem – conductance – cavitation – embolism

### 4.4.1. Poiseuille idealization

$$
Q
=
\frac{\pi r^4}
{8\eta l}
\Delta P
$$

Hydraulic conductance:

$$
K_v
=
\frac{\pi r^4}
{8\eta l}
$$

Radius có ảnh hưởng bậc bốn trong ống lý tưởng.

### 4.4.2. Xylem thực

Xylem thực còn có:
- pit resistance;
- vessel connectivity;
- tapering;
- conduit length distribution;
- embolism.

Do đó:

$$
K_{x,real}
<
K_{Poiseuille,ideal}
$$

trong nhiều trường hợp.

### 4.4.3. Dòng xylem

$$
J_x
=
-K_x
\frac{\partial\Psi_x}{\partial z}
$$

### 4.4.4. Conductance hữu hiệu

$$
K_{x,eff}
=
K_{x,pot}
F_{pit}
F_{emb}
F_T
F_{age}
$$

### 4.4.5. PLC

$$
PLC
=
100
\left(
1-\frac{K_x}{K_{x,max}}
\right)
$$

và:

$$
F_{emb}
=
1-\frac{PLC}{100}
$$

### 4.4.6. Vulnerability curve

Một dạng Weibull:

$$
PLC(x)
=
100
\left[
1-\exp\left(-(x/b)^c\right)
\right]
$$

với:

$$
x=|\Psi_x|
$$

### 4.4.7. P50

$$
P_{50}
=
-b(\ln2)^{1/c}
$$

Không dùng một P50 chung cho:
- species;
- cultivar;
- organ;
- developmental stage.

### 4.4.8. Cavitation risk

Cavitation risk phụ thuộc:
- xylem tension;
- anatomy;
- pit membrane;
- dehydration history;
- freeze/thaw ở hệ phù hợp.

### 4.4.9. Embolism recovery

Recovery không được giả định tự động.

Cần phân biệt:
- refilling;
- new xylem growth;
- rehydration artifact;
- measurement method.

### 4.4.10. Hydraulic safety margin

Một diagnostic:

$$
HSM
=
\Psi_{min}-P_{50}
$$

Phải thống nhất quy ước dấu trước khi diễn giải.

### 4.4.11. Hydraulic failure

Ở mức reduced model:

$$
Risk_{hyd}
=
f(PLC,\Psi_{leaf},K_{plant})
$$

Không biến thành threshold tử vong phổ quát nếu chưa kiểm định.

---

## 4.5. Phloem – loading – pressure flow – source–sink

Phloem là con đường vận chuyển dài hạn chủ yếu của assimilates từ source tới sink. Mô hình pressure-flow/Münch xem gradient áp suất thủy tĩnh, hình thành nhờ loading và unloading chất tan, là driving force chính của bulk flow.

### 4.5.1. Source

Source có thể là:
- mature photosynthetic leaf;
- storage organ đang remobilize.

### 4.5.2. Sink

Sink có thể là:
- root tip;
- young leaf;
- meristem;
- grain;
- fruit;
- storage organ.

### 4.5.3. Sink strength

$$
SS_o
=
M_oq_o
$$

Trong đó:
- \(M_o\): sink size/capacity;
- \(q_o\): sink activity.

### 4.5.4. Pressure flow

$$
Q_{ph}
=
K_{ph}
(P_{source}-P_{sink})
$$

### 4.5.5. Sugar flux

$$
F_C
=
C_{Suc}Q_{ph}
$$

### 4.5.6. Phloem loading

Một saturating form:

$$
J_{load}
=
V_{\max,Suc}^{eff}
\frac{C_{Suc,apo}}
{K_{m,Suc}+C_{Suc,apo}}
$$

Tùy species, loading có thể có active/apoplastic hoặc symplastic components.

### 4.5.7. Phloem unloading

$$
J_{unload,o}
=
f(
C_{ph},
sink\ demand,
transporters,
stage
)
$$

### 4.5.8. Xylem–phloem water exchange

$$
J_{xp}
=
L_{xp}
(\Psi_x-\Psi_{ph})
$$

Pressure flow inherently liên kết water và carbon transport.

### 4.5.9. Effective sink strength

Một VECrop formulation:

$$
SS_o^{eff}
=
M_oq_oy_oH_{CN,o}
$$

### 4.5.10. Allocation fraction

$$
a_o
=
\frac{SS_o^{eff}}
{\sum_jSS_j^{eff}}
$$

$$
F_{C,o}
=
a_oF_C
$$

### 4.5.11. Organ carbon balance

$$
\frac{dC_o}{dt}
=
F_{C,o}
-
R_{growth,o}
-
R_{maint,o}
-
F_{export,o}
$$

### 4.5.12. Hướng vận chuyển

Phloem source→sink có thể hướng lên hoặc xuống tùy vị trí source–sink.

Không nói:
- “phloem luôn đi xuống”;
- “mọi mạch dẫn đều đi lên”.

---

## 4.6. Ghép xylem – khí khổng – quang hợp – tán lá

### 4.6.1. Leaf water balance

$$
C_L
\frac{d\Psi_L}{dt}
=
K_L(\Psi_{soil}-\Psi_L)
-
E
$$

### 4.6.2. Total conductance

$$
g_{tw}
=
\left(
\frac1{g_{sw}}
+
\frac1{g_{bw}}
\right)^{-1}
$$

### 4.6.3. Transpiration

Một dạng gần đúng:

$$
E
\approx
g_{tw}
\frac{D}{P_{atm}}
$$

Trong đó \(D\) là VPD.

### 4.6.4. Medlyn stomatal model

Một dạng:

$$
g_{sw}
=
g_0
+
1.6
\left(
1+\frac{g_1}{\sqrt D}
\right)
\frac{A_n}{C_s}
$$

Medlyn-type models liên kết stomatal conductance với assimilation và VPD; tham số \(g_0,g_1\) phụ thuộc plant functional type/crop và không phải hằng số phổ quát.

### 4.6.5. Hydraulic limitation

Một factor đề xuất:

$$
F_{hyd}(\Psi_L)
=
\frac1
{1+\exp[
k_h(|\Psi_L|-|\Psi_{gs50}|)
]}
$$

Lưu ý:

$$
\Psi_{gs50}
\neq
P_{50}
$$

vì stomatal sensitivity và xylem vulnerability là hai response khác nhau.

### 4.6.6. C3 photosynthesis

Cho lúa và xà lách:

$$
A_n
=
\min(A_c,A_j,A_p)-R_d
$$

Rubisco limitation:

$$
A_c
=
V_{cmax}
\frac{C_c-\Gamma^*}
{C_c+K_c(1+O/K_o)}
$$

Electron transport limitation:

$$
A_j
=
J
\frac{C_c-\Gamma^*}
{4(C_c+2\Gamma^*)}
$$

TPU approximation:

$$
A_p\approx3TPU
$$

### 4.6.7. C4 specificity cho ngô

Ngô không được dùng FvCB C3 nguyên xi.

PEP carboxylase:

$$
V_p
=
V_{pmax}
\frac{C_m}
{C_m+K_p}
$$

Module đầy đủ cần tách:
- mesophyll;
- bundle sheath;
- PEPCase;
- Rubisco;
- leakiness.

### 4.6.8. Electron transport

Một non-rectangular hyperbola:

$$
\theta_JJ^2
-
(\alpha I+J_{max})J
+
\alpha IJ_{max}
=
0
$$

### 4.6.9. Canopy radiation

Beer–Lambert:

$$
I(L)
=
I_0e^{-k_LL}
$$

### 4.6.10. Canopy photosynthesis

$$
A_{can}
=
\int_0^{LAI}
A_n(L,t)\,dL
$$

### 4.6.11. Canopy transpiration

$$
E_{can}
=
\int_0^{LAI}
E(L,t)\,dL
$$

### 4.6.12. Sunlit/shaded leaves

Ở mức nâng cao nên tách:

$$
A_{can}
=
A_{sunlit}
+
A_{shaded}
$$

thay vì dùng một lá đại diện cho toàn canopy.

### 4.6.13. Carbon balance

$$
\frac{dC_{plant}}{dt}
=
A_{can}
-
R_{maint}
-
R_{growth}
-
L_C
$$

---

## 4.7. Cân bằng động C–N–P–K, demand và remobilization

### 4.7.1. Tổng pool

$$
M_i
=
\sum_oM_{i,o}
$$

### 4.7.2. Nồng độ cơ quan

$$
c_{i,o}
=
\frac{M_{i,o}}{B_o}
$$

### 4.7.3. Organ mass balance

$$
\frac{dM_{i,o}}{dt}
=
I_{i,o}
+
\sum_{j\ne o}F_{i,j\to o}
-
\sum_{j\ne o}F_{i,o\to j}
-
L_{i,o}
$$

### 4.7.4. Carbon balance

$$
\frac{dM_C}{dt}
=
A_C-R_m-R_g-L_C
$$

### 4.7.5. Mobile và fixed pool

$$
M_{i,o}
=
M_{i,o}^{mob}
+
M_{i,o}^{fix}
$$

### 4.7.6. Remobilization

$$
F_{rem,i,o}
=
k_{rem,i,o}(t)
M_{i,o}^{mob}
$$

### 4.7.7. Demand

$$
Req_{i,o}
=
q_{i,o}^{*}(stage)
\frac{dB_o}{dt}
$$

Tổng:

$$
Req_i
=
\sum_oReq_{i,o}
$$

### 4.7.8. Supply

$$
Sup_i
=
U_i
+
F_{rem,i}
$$

### 4.7.9. Satisfaction

$$
L_i
=
\min
\left(
1,
\frac{Sup_i}
{Req_i+\varepsilon}
\right)
$$

### 4.7.10. Liebig reduced term

$$
L_{nut}
=
\min(L_N,L_P,L_K)
$$

chỉ dùng trong reduced model.

### 4.7.11. Nutrient interaction

Không giả định N/P/K độc lập hoàn toàn.

Có thể thêm:

$$
Req_{N,o}
=
f(
growth,
P\ status,
K\ status
)
$$

khi có dữ liệu.

### 4.7.12. Harvest indices

Biomass harvest index:

$$
HI_B
=
\frac{B_H}
{B_{shoot}}
$$

Nitrogen harvest index:

$$
NHI
=
\frac{M_{N,H}}
{M_{N,shoot}}
$$

Có thể xây PHI và KHI tương tự.

### 4.7.13. Apparent remobilization

Không đồng nhất apparent remobilization tính từ concentration difference với tracer-confirmed remobilization.

---

## 4.8. Hô hấp – ATP – chi phí tăng trưởng và duy trì

### 4.8.1. Hai cách biểu diễn

Reduced:

$$
R_{tot}
=
R_G+R_M
$$

Mechanistic:

$$
R_{tot}
=
R_{biosyn}
+
R_{turnover}
+
R_{ion}
+
R_{Nassim}
+
R_{transport}
+
R_{other}
$$

Không dùng cả hai để trừ lặp.

### 4.8.2. Growth respiration

$$
R_{G,o}
=
G_o
\left(
\frac1{Y_{G,o}}-1
\right)
$$

### 4.8.3. Maintenance respiration

$$
R_{M,o}
=
m_o(T)M_{met,o}
$$

### 4.8.4. Temperature response

Q10 form:

$$
m_o(T)
=
m_{o,ref}
Q_{10,o}^{(T-T_{ref})/10}
$$

Không mặc định:

$$
Q_{10}=2
$$

### 4.8.5. Electrochemical work

$$
\Delta\widetilde\mu_i
=
RT\ln
\frac{a_{i,in}}{a_{i,out}}
+
z_iF\Delta\psi
$$

Một energetic cost:

$$
P_i
=
U_i
\max(
0,
\Delta\widetilde\mu_i
)
$$

### 4.8.6. ATP demand

$$
ATP_{dem}
=
ATP_G
+
ATP_M
+
ATP_U
+
ATP_A
+
ATP_T
$$

### 4.8.7. ATP supply

$$
ATP_{sup}
=
ATP_{photo}
+
ATP_{resp}
$$

tùy tissue.

### 4.8.8. Energy diagnostic

$$
H_E
=
\min
\left(
1,
\frac{ATP_{sup}}
{ATP_{dem}+\varepsilon}
\right)
$$

Đây là reduced diagnostic, không thay thế ATP model cơ chế.

### 4.8.9. Không hard-code ATP/ion

Không giả định:
- 1 ATP/ion;
- một stoichiometry duy nhất cho mọi transporter;
- cùng energetic cost ở mọi membrane potential.

### 4.8.10. Carbon cost

Hô hấp là carbon cost thực, nên phải liên kết với carbon balance thay vì chỉ dùng một scalar penalty.

---

## 4.9. O₂ – hypoxia – anoxia – fermentation – aerenchyma – Eh

Các phản ứng low-O₂ bao gồm thay đổi sử dụng carbohydrate, fermentation, hình thành aerenchyma và radial oxygen loss barrier ở các loài thích nghi ngập.

### 4.9.1. O₂ concentration và Eh khác nhau

$$
Eh_{soil}
\neq
O_{2,root}
$$

Eh là trạng thái redox tổng hợp; O₂ là concentration cụ thể.

### 4.9.2. O₂ transport

$$
\frac{\partial C_{O_2}}{\partial t}
=
D_{O_2,eff}\nabla^2C_{O_2}
+
S_{O_2}
-
R_{O_2}
$$

### 4.9.3. O₂ consumption

$$
R_{O_2}
=
R_{O_2,max}
\frac{C_{O_2}}
{K_{O_2}+C_{O_2}}
$$

### 4.9.4. Hypoxia cascade

$$
O_2\downarrow
\rightarrow
oxidative\ phosphorylation\downarrow
\rightarrow
ATP\downarrow
\rightarrow
active\ transport\downarrow
$$

### 4.9.5. Fermentation

Pyruvate decarboxylase:

$$
Pyruvate
\rightarrow
Acetaldehyde
+
CO_2
$$

Alcohol dehydrogenase:

$$
Acetaldehyde
+
NADH
\rightarrow
Ethanol
+
NAD^+
$$

Fermentation giúp regenerate NAD+.

### 4.9.6. ATP yield

Fermentation không tạo ATP ngoài ATP đã hình thành trong glycolysis.

Không hard-code “38 ATP/glucose” như một chuẩn duy nhất.

### 4.9.7. Aerenchyma

$$
\phi_{aer}
=
\frac{A_{gas}}
{A_{root}}
$$

Aerenchyma làm tăng internal gas transport.

### 4.9.8. Radial oxygen loss

$$
J_{ROL}
=
P_{ROL}
(C_{O_2,root}-C_{O_2,soil})
$$

Đặc biệt quan trọng ở lúa.

### 4.9.9. ROL barrier

Một số loài có thể hình thành barrier hạn chế oxygen leakage ở phần basal root, giúp oxygen đi sâu hơn tới root tip.

### 4.9.10. Redox sequence

Trong đất ngập:

$$
O_2
\rightarrow
NO_3^-
\rightarrow
Mn(IV)
\rightarrow
Fe(III)
\rightarrow
SO_4^{2-}
\rightarrow
CO_2
$$

Threshold cụ thể phụ thuộc đất và không được hard-code.

### 4.9.11. Reoxygenation

Sau ngập, reoxygenation có thể tăng ROS nhanh.

Do đó recovery cần xem:
- O₂;
- antioxidant capacity;
- membrane damage;
- hydraulic recovery.

---

## 4.10. Ion homeostasis – điện thế màng – pH – salinity

### 4.10.1. EC không phải ion cụ thể

$$
EC
\neq
[Na^+]
$$

$$
EC
\neq
[K^+]
$$

$$
EC
\neq
[NO_3^-]
$$

### 4.10.2. Activity

$$
a_i
=
\gamma_iC_i
$$

### 4.10.3. Osmotic potential

$$
\Psi_s
=
-RT\sum_i\phi_iC_i
$$

### 4.10.4. Membrane potential equation

$$
C_m
\frac{dV_m}{dt}
=
-
\left(
I_{HATPase}
+
I_K
+
I_{Na}
+
I_{Ca}
+
I_{Cl}
+
\cdots
\right)
$$

### 4.10.5. Electroneutrality

Một gần đúng bulk solution:

$$
\sum_i
z_iC_i
+
C_{fixed}
\approx0
$$

### 4.10.6. K/Na ratio

Một diagnostic:

$$
R_{KNa}
=
\frac{a_K}
{a_{Na}+\varepsilon}
$$

Không đặt threshold phổ quát.

### 4.10.7. SOS pathway

SOS1 là Na+/H+ exchanger.

Không mô tả SOS1 như ATP-driven Na pump trực tiếp.

### 4.10.8. Na sequestration

Tonoplast transport giúp cô lập Na trong vacuole.

Một pool model:

$$
\frac{dNa_{vac}}{dt}
=
J_{sequest}
-
J_{release}
$$

### 4.10.9. Osmotic và ionic stress

Phải tách:

$$
Stress_{salt}
=
Stress_{osmotic}
+
Stress_{ionic}
$$

ở mức khái niệm.

Không nhân hai scalar này nếu chúng đã cùng tác động lên một process cụ thể.

### 4.10.10. pH homeostasis

Cytosolic pH ảnh hưởng:
- enzyme;
- transporter;
- aquaporin;
- metabolism.

Một balance:

$$
\frac{dH^+}{dt}
=
J_{H,in}
-
J_{H,out}
+
P_H
-
C_H
$$

### 4.10.11. Maas–Hoffman validation

Một empirical yield relationship:

$$
Y_r
=
\begin{cases}
1,&EC_e\le EC_t\\
1-\frac{b}{100}(EC_e-EC_t),&EC_e>EC_t
\end{cases}
$$

Nó có thể dùng benchmark/validation empirical, không thay thế ion-homeostasis model.

### 4.10.12. Ca và salinity

Ca có thể hỗ trợ membrane/selectivity dưới salinity, nhưng không dùng như universal antidote factor.

---

## 4.11. ROS – redox – antioxidant – signaling – damage

### 4.11.1. ROS vector

$$
\mathbf R_{ROS}
=
\{
O_2^{\bullet-},
H_2O_2,
{}^1O_2,
{}^\bullet OH
\}
$$

### 4.11.2. Nguồn ROS

$$
P_{ROS}
=
P_{chl}
+
P_{mit}
+
P_{per}
+
P_{RBOH}
+
P_{other}
$$

### 4.11.3. ROS dual role

ROS có hai vai trò:
- signaling;
- oxidative damage.

Do đó:

$$
ROS=0
$$

không mặc định là tối ưu.

### 4.11.4. SOD

$$
2O_2^{\bullet-}
+
2H^+
\rightarrow
H_2O_2
+
O_2
$$

### 4.11.5. Catalase

$$
2H_2O_2
\rightarrow
2H_2O
+
O_2
$$

### 4.11.6. H₂O₂ balance

$$
\frac{d[H_2O_2]}{dt}
=
P_{H_2O_2}
+
\frac12v_{SOD}
-
v_{CAT}
-
v_{APX}
-
v_{PRX}
-
J_{H_2O_2}
$$

### 4.11.7. Ascorbate–glutathione

Ở mức chi tiết có thể theo dõi:
- AsA;
- DHA;
- GSH;
- GSSG;
- APX;
- GR.

### 4.11.8. Fenton chemistry

$$
Fe^{2+}
+
H_2O_2
\rightarrow
Fe^{3+}
+
OH^-
+
{}^\bullet OH
$$

### 4.11.9. ROS signaling index

Reduced:

$$
S_{ROS}
=
\frac{H_2O_2}
{K_{sig}+H_2O_2}
$$

### 4.11.10. ROS damage

$$
D_{ROS}
=
\frac{(H_2O_2/K_D)^n}
{1+(H_2O_2/K_D)^n}
$$

### 4.11.11. Membrane damage

$$
H_{mem}
=
e^{-\lambda_LD_L-\lambda_PD_P}
$$

Đây là VECrop reduced diagnostic.

### 4.11.12. Redox couples

Có thể dùng:
- GSH/GSSG;
- AsA/DHA;
- NADPH/NADP+.

Không gộp tất cả thành một scalar nếu nghiên cứu cơ chế redox chi tiết.

### 4.11.13. Reoxygenation ROS

Sau hypoxia:

$$
O_2\uparrow
\rightarrow
ROS\ burst
$$

nên recovery module phải tính ROS dynamics.

---

## 4.12. Hormone – Ca²⁺ – ROS – MAPK và điều hòa cấp cơ quan

### 4.12.1. Regulatory function tổng quát

$$
y_o(t)
=
\mathcal F
[
\mathbf H_o(t),
\mathbf{Ca}_o(t),
\mathbf{ROS}_o(t),
\mathbf{MAPK}_o(t),
\mathbf G_o(t),
stage
]
$$

### 4.12.2. Hormone vector

$$
\mathbf H
=
[IAA,CK,GA,ABA,ET,BR,JA,SA,SL]^T
$$

### 4.12.3. Hormone balance

$$
\frac{dH_{h,o}}{dt}
=
B_{h,o}
-
D_{h,o}
+
T_{h,in,o}
-
T_{h,out,o}
$$

### 4.12.4. Hormone normalization

Một saturating function:

$$
H_h^*
=
\frac{H_h}
{K_h+H_h}
$$

Chỉ là reduced representation.

### 4.12.5. ABA–stomata pathway

Một chuỗi khái niệm:

$$
ABA
\rightarrow
PYR/PYL
\rightarrow
PP2C\downarrow
\rightarrow
SnRK2/OST1
$$

sau đó:

$$
SnRK2/OST1
\rightarrow
RBOH
\rightarrow
ROS
$$

và:

$$
ROS
\rightarrow
Ca^{2+}_{cyt}\uparrow
$$

tiếp theo:

$$
Ca^{2+}
\rightarrow
CPK/CBL-CIPK
\rightarrow
ion\ channels
$$

kết quả:

$$
K^+,\ anion\ efflux
\rightarrow
turgor_{guard}\downarrow
\rightarrow
g_s\downarrow
$$

### 4.12.6. Calcium transient

$$
Ca_o(t)
=
Ca_0
+
\sum_k
A_k
e^{-(t-t_k)/\tau_k}
$$

### 4.12.7. Calcium activation

$$
S_{Ca}
=
\frac{[Ca^{2+}]^n}
{K_{Ca}^n+[Ca^{2+}]^n}
$$

### 4.12.8. Calcium signature

Tín hiệu Ca2+ còn phụ thuộc:
- amplitude;
- frequency;
- duration;
- spatial pattern.

Một scalar chỉ là approximation.

### 4.12.9. MAPK cascade

$$
MAPKKK
\rightarrow
MAPKK
\rightarrow
MAPK
\rightarrow
TF
$$

### 4.12.10. MAPK dynamics

$$
\frac{dM_3^*}{dt}
=
k_{a3}S(1-M_3^*)
-
k_{d3}M_3^*
$$

$$
\frac{dM_2^*}{dt}
=
k_{a2}M_3^*(1-M_2^*)
-
k_{d2}M_2^*
$$

$$
\frac{dM_1^*}{dt}
=
k_{a1}M_2^*(1-M_1^*)
-
k_{d1}M_1^*
$$

### 4.12.11. Gene expression

$$
\frac{dG_j}{dt}
=
k_{tr,j}F_j(TF,H,Ca,ROS)
-
k_{deg,j}G_j
$$

### 4.12.12. Regulatory integration

Một VECrop formulation:

$$
y_o
=
\sigma
\left[
\beta_0
+
\sum_i\beta_iH_i^*
+
\sum_{i<j}\beta_{ij}H_i^*H_j^*
+
\beta_{Ca}S_{Ca}
+
\beta_RS_{ROS}
+
\beta_MM^*
\right]
$$

Các coefficient phải được hiệu chỉnh.

### 4.12.13. Process 3 update

$$
\Phi_{3,o}
=
\operatorname{clip}
[
y_o
(
S_{7,o}^*
+
S_{8,o}^*
-
S_{9,o}^*
),
0,1
]
$$

Trong đó:
- \(S_7^*\): developmental activation;
- \(S_8^*\): adaptive signaling;
- \(S_9^*\): growth inhibition/damage.

### 4.12.14. State-space

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(
\mathbf x,
\mathbf u,
\boldsymbol\theta
)
$$

với:

$$
\mathbf x
=
[IAA,CK,GA,ABA,ET,Ca,H_2O_2,MAPK,TF,Gene]^T
$$

và:

$$
\mathbf u
=
[\Psi,EC,Na,N,P,T,VPD,O_2,light]^T
$$

### 4.12.15. Output regulatory state

$$
\mathbf r
=
[
g_s,
root\ growth,
cell\ elongation,
xylem\ differentiation,
senescence,
sink\ strength
]^T
$$

### 4.12.16. Không gọi hormone là lực

Hormone không phải lực cơ học.

Đúng hơn:

$$
Hormone/signaling
\rightarrow
capacity
\rightarrow
physical\ flux/organ\ response
$$

### 4.12.17. Organ specificity

$$
y_o
\neq
y_{o'}
$$

cho hai cơ quan khác nhau.

### 4.12.18. Stage specificity

$$
\theta
=
\theta(stage)
$$

### 4.12.19. Genotype specificity

$$
\boldsymbol\theta_G
\neq
\boldsymbol\theta_{G'}
$$

### 4.12.20. Không double counting

Nếu ABA đã làm giảm \(g_s\), và \(g_s\) đã đi vào transpiration/photosynthesis, không nên nhân thêm một \(F_{ABA}\) vào yield.

Tương tự với:
- ROS;
- salinity;
- O₂;
- water stress.

---


## 4.13. Cảm nhận carbon – đường – T6P – SnRK1 – TOR và điều hòa tăng trưởng

### 4.13.1. Vai trò của sugar sensing

Đường trong cây không chỉ là substrate trao đổi chất mà còn là tín hiệu trạng thái carbon.

Các tín hiệu chính cần phân biệt:

- glucose;
- sucrose;
- glucose-6-phosphate;
- trehalose-6-phosphate (T6P);
- trạng thái ATP/AMP;
- carbon skeleton cho đồng hóa N.

Không được đồng nhất:

$
Sugar\ concentration
=
Carbon\ flux
$

vì concentration là state, còn flux là tốc độ vận chuyển/chuyển hóa.

### 4.13.2. Hexokinase như cảm biến glucose

Hexokinase (HXK) vừa xúc tác:

$
Glucose
+
ATP
\rightarrow
Glucose\text{-}6\text{-}phosphate
+
ADP
$

vừa tham gia sugar signaling.

Một reduced signal:

$
S_{HXK}
=
\frac{Glu}
{K_{HXK}+Glu}
$

chỉ là biểu diễn VECrop đề xuất khi không mô hình pathway HXK chi tiết.

### 4.13.3. Sucrose status

Sucrose là:
- dạng vận chuyển carbon chính trong phloem ở nhiều loài;
- substrate cho sink;
- tín hiệu trạng thái source–sink.

Một biến trạng thái:

$
C_{Suc,o}
$

nên được giữ theo cơ quan khi dữ liệu cho phép.

### 4.13.4. Trehalose-6-phosphate

T6P là một tín hiệu quan trọng liên hệ sucrose availability với tăng trưởng và phát triển.

Một reduced coupling:

$
S_{T6P}
=
\frac{T6P}
{K_{T6P}+T6P}
$

Không dùng T6P như đại diện trực tiếp cho lượng carbon dự trữ.

### 4.13.5. T6P–sucrose relationship

Ở mức khái niệm:

$
Sucrose\uparrow
\Rightarrow
T6P\uparrow
$

trong nhiều mô và điều kiện, nhưng slope và dynamics phụ thuộc:
- tissue;
- species;
- developmental stage;
- light;
- nutrient status.

Do đó không hard-code quan hệ tuyến tính phổ quát.

### 4.13.6. SnRK1

SnRK1 là kinase cảm nhận trạng thái năng lượng/carbon.

Khi thiếu năng lượng:

$
Energy\ deficit
\rightarrow
SnRK1\uparrow
$

SnRK1 có xu hướng:
- ức chế anabolism;
- thúc đẩy catabolism;
- tăng khả năng sống sót khi thiếu carbon;
- điều chỉnh gene expression liên quan stress và metabolism.

### 4.13.7. TOR

TOR là kinase tích hợp:
- carbon;
- nutrient;
- energy;
- growth signals.

Khi điều kiện thuận lợi:

$
Carbon/Nutrient/Energy\uparrow
\rightarrow
TOR\uparrow
$

TOR thường liên quan:
- translation;
- ribosome biogenesis;
- cell growth;
- cell proliferation;
- anabolic metabolism.

### 4.13.8. Trục SnRK1–TOR

Một conceptual antagonism:

$
SnRK1
\dashv
Growth/Anabolism
$

$
TOR
\rightarrow
Growth/Anabolism
$

Nhưng không nên xem SnRK1 và TOR là hai biến luôn đối xứng hoàn toàn.

### 4.13.9. T6P–SnRK1

Một conceptual link:

$
T6P\uparrow
\Rightarrow
SnRK1\ activity\downarrow
$

trong nhiều bối cảnh mô thực vật.

Không mặc định cùng độ nhạy ở mọi tissue/crop.

### 4.13.10. Carbon status index

Một reduced carbon status:

$
S_C
=
\frac{C_{sugar}}
{K_C+C_{sugar}}
$

Nếu tách nhiều pool:

$
\mathbf C_{sugar}
=
[Sucrose,Glucose,Fructose,Starch,T6P]^T
$

### 4.13.11. Energy status

Một reduced energy state:

$
S_E
=
\frac{ATP}
{K_E+ATP}
$

Ở mức cơ chế sâu hơn có thể dùng:
- ATP/ADP;
- adenylate energy charge;
- NADH/NAD+;
- NADPH/NADP+.

### 4.13.12. TOR reduced formulation

Một VECrop proposal:

$
A_{TOR}
=
\sigma
(
\beta_0
+
\beta_CS_C
+
\beta_NS_N
+
\beta_ES_E
-
\beta_SS_{stress}
)
$

Các coefficient phải được calibration.

### 4.13.13. SnRK1 reduced formulation

Một VECrop proposal:

$
A_{SnRK1}
=
\sigma
(
\gamma_0
-
\gamma_CS_C
-
\gamma_ES_E
+
\gamma_SS_{stress}
)
$

Không xem phương trình này là pathway sinh học chính xác.

### 4.13.14. Sugar–hormone crosstalk

Sugar signaling tương tác với:
- ABA;
- auxin;
- cytokinin;
- GA;
- ethylene.

Một regulator:

$
y_o
=
f(
Sugar,
Hormone,
Ca,
ROS,
MAPK,
stage
)
$

### 4.13.15. Carbon–nitrogen coupling

Tăng trưởng cần đồng thời:
- carbon skeleton;
- nitrogen;
- energy.

Một stoichiometric constraint:

$
Growth_o
\le
\min
(
C_{avail,o}/q_{C,o},
N_{avail,o}/q_{N,o}
)
$

Đây là reduced Liebig-style formulation.

### 4.13.16. N assimilation và carbon skeleton

Nitrate/ammonium assimilation cần carbon skeleton và reducing power.

Một conceptual link:

$
N\ assimilation
\rightarrow
C\ skeleton\ demand
+
ATP/NAD(P)H\ demand
$

Do đó N uptake cao không bảo đảm growth nếu carbon/energy giới hạn.

### 4.13.17. Source–sink feedback

Khi sink demand thấp:

$
Sucrose_{leaf}\uparrow
\rightarrow
feedback\ regulation
\rightarrow
photosynthetic\ capacity\ change
$

Khi sink demand cao:

$
Export\uparrow
\rightarrow
source\ utilization\uparrow
$

Mức độ phụ thuộc crop/stage.

### 4.13.18. Sink strength coupling

Từ 4.5:

$
SS_o=M_oq_o
$

Bổ sung carbon-energy regulation:

$
SS_o^{eff}
=
SS_o
F_{sugar,o}
F_{energy,o}
F_{stage,o}
$

Các factor này chỉ dùng nếu chưa được giải trực tiếp trong \(q_o\).

### 4.13.19. Growth capacity

Một reduced capacity:

$
G_o^{cap}
=
G_{o,max}
A_{TOR}
(1-A_{SnRK1}^{eff})
$

Đây là VECrop proposal, cần validation.

### 4.13.20. Starch dynamics

Một balance:

$
\frac{dC_{starch}}{dt}
=
P_{starch}
-
D_{starch}
$

Ban ngày:

$
P_{starch}>0
$

thường tăng.

Ban đêm:

$
D_{starch}>0
$

cung carbon cho respiration và growth.

### 4.13.21. Night carbon starvation

Nếu starch reserve không đủ:

$
C_{starch}\downarrow
\rightarrow
Sugar\downarrow
\rightarrow
SnRK1\uparrow
$

có thể làm:
- growth giảm;
- catabolism tăng;
- gene stress response thay đổi.

### 4.13.22. Diurnal carbon balance

Một day-night balance:

$
C_{net,day}
=
A_{day}
-
R_{day}
-
Export_{day}
-
Storage_{day}
$

$
C_{net,night}
=
Mobilization_{starch}
-
R_{night}
-
Growth_{night}
$

### 4.13.23. Carbon starvation diagnostic

Một reduced index:

$
H_C
=
\min
\left(
1,
\frac{C_{available}}
{C_{demand}+\varepsilon}
\right)
$

Không dùng nếu carbon balance đã được mô hình hóa đầy đủ.

### 4.13.24. Growth–survival tradeoff

Under stress:

$
Growth\downarrow
$

có thể đồng thời:

$
Survival\ capacity\uparrow
$

Do đó HSY không được định nghĩa đơn giản là “growth càng cao càng khỏe”.

### 4.13.25. Cấu trúc state-space

Có thể mở rộng state vector:

$
\mathbf x_C
=
[
Sucrose,
Glucose,
Starch,
T6P,
SnRK1,
TOR,
ATP
]^T
$

Dynamics:

$
\frac{d\mathbf x_C}{dt}
=
\mathbf f_C(
\mathbf x_C,
A_{can},
F_C,
N,
Hormone,
Stress,
stage
)
$

### 4.13.26. Coupling với Chương 4.5

Phloem đưa sucrose tới sink:

$
F_C=C_{Suc}Q_{ph}
$

4.13 chuyển flux này thành trạng thái carbon–energy điều khiển growth capacity.

### 4.13.27. Coupling với 4.8

Từ ATP balance:

$
ATP_{sup}
\leftrightarrow
S_E
$

Không được vừa dùng \(H_E\) vừa dùng lại cùng ATP limitation trong \(A_{TOR}\) nếu dẫn đến double counting.

### 4.13.28. Coupling với 4.12

Một regulatory function mở rộng:

$
y_o
=
f(
Hormone,
Ca,
ROS,
MAPK,
Sugar,
SnRK1,
TOR,
stage
)
$

### 4.13.29. Lúa

Ở lúa, carbon signaling cần gắn với:
- tillering;
- panicle development;
- grain filling;
- source–sink balance;
- nighttime starch turnover.

### 4.13.30. Ngô

Ở ngô:
- C4 assimilation cao;
- reproductive sink mạnh;
- kernel set và grain filling nhạy với carbon supply;
- drought có thể làm thay đổi source–sink và SnRK1/TOR signaling.

### 4.13.31. Xà lách

Ở xà lách:
- marketable organ là leaf;
- sink là vegetative tissue;
- sugar status ảnh hưởng leaf expansion;
- carbon excess/deficit tương tác mạnh với light và root-zone temperature.

### 4.13.32. Parameter provenance

Các tham số cần provenance:
- \(K_C\);
- \(K_E\);
- \(\beta_i\);
- \(\gamma_i\);
- \(K_{T6P}\);
- starch turnover rates.

Không dùng một bộ chung cho mọi crop.

### 4.13.33. Experimental observables

Có thể đo:
- sucrose;
- glucose;
- starch;
- T6P;
- ATP/ADP;
- SnRK1 activity;
- TOR activity/phosphorylation proxies;
- growth rate;
- sink biomass.

### 4.13.34. Calibration hierarchy

Ưu tiên:
1. sugar pools;
2. starch turnover;
3. T6P;
4. SnRK1/TOR proxies;
5. organ growth;
6. whole-plant biomass.

Không fit toàn bộ chỉ bằng final yield.

### 4.13.35. Validation

Một model 4.13 tốt phải tái hiện:
- day/night sugar dynamics;
- starvation response;
- source–sink perturbation;
- stress-induced growth slowdown;
- recovery sau stress.

### 4.13.36. Không double counting

Nếu sink strength đã dùng \(F_{sugar}\) và \(F_{energy}\), không nhân lại \(H_C\) vào growth.

Nếu TOR đã phụ thuộc ATP, không nhân thêm \(H_E\) lần nữa nếu cùng mechanism.

### 4.13.37. Vai trò của 4.13 trong VECrop

4.13 tạo cầu nối:

<div class="flow-chain">
<strong>Quang hợp</strong> → <strong>Sucrose/Starch</strong> → <strong>T6P/HXK</strong> → <strong>SnRK1/TOR</strong> → <strong>Gene/Enzyme</strong> → <strong>Sink strength & Growth capacity</strong>
</div>

### 4.13.38. Kết luận 4.13

Sugar sensing không thay thế carbon balance.

Đúng hơn:

$
Carbon\ balance
\rightarrow
Sugar\ status
\rightarrow
T6P/SnRK1/TOR
\rightarrow
Regulation
\rightarrow
Growth\ capacity
$

Trong VECrop, T6P–SnRK1–TOR nên được dùng như **regulatory layer**, còn carbon flux và biomass vẫn phải tuân theo conservation.

---


## 4.14. Meristem – phân chia tế bào – giãn tế bào – phát triển cơ quan và phenology

### 4.14.1. Vai trò của meristem

Sinh trưởng vô hạn của cây phụ thuộc các vùng meristem duy trì quần thể tế bào phân chia.

Hai hệ chính:
- shoot apical meristem (SAM);
- root apical meristem (RAM).

Meristem cung cấp tế bào mới cho:
- lá;
- thân;
- rễ;
- mô dẫn;
- cơ quan sinh sản.

### 4.14.2. Organogenesis là quá trình hậu phôi chủ đạo

Ở cây, phần lớn cơ quan mới được hình thành sau nảy mầm.

Do đó:

$
Organ\ growth
=
Cell\ production
+
Cell\ expansion
+
Differentiation
$

Không nên mô tả tăng trưởng cơ quan chỉ bằng biomass accumulation.

### 4.14.3. Phân rã tăng trưởng cơ quan

Một decomposition:

$
B_o
=
N_{cell,o}
m_{cell,o}
$

Suy ra:

$
\frac{dB_o}{dt}
=
N_{cell,o}
\frac{dm_{cell,o}}{dt}
+
m_{cell,o}
\frac{dN_{cell,o}}{dt}
$

Trong đó:
- \(N_{cell,o}\): số tế bào;
- \(m_{cell,o}\): khối lượng trung bình mỗi tế bào.

Đây là decomposition khái niệm, không phải mô hình duy nhất.

### 4.14.4. Cell proliferation rate

Một dạng:

$
\frac{dN_{cell}}{dt}
=
r_{div}
N_{cycling}
$

trong đó:
- \(r_{div}\): division rate;
- \(N_{cycling}\): số tế bào đang trong cell cycle.

### 4.14.5. Cell-cycle duration

Nếu chu kỳ tế bào trung bình là:

$
T_c
$

thì một approximation:

$
r_{div}
\approx
\frac{\ln 2}{T_c}
$

chỉ hợp lý khi population tăng gần exponential.

### 4.14.6. Cell-cycle phases

Cell cycle gồm:
- G1;
- S;
- G2;
- M.

Một state vector:

$
\mathbf N_{cycle}
=
[N_{G1},N_S,N_{G2},N_M]^T
$

Ở mô hình sâu có thể dùng transition rates giữa các pha.

### 4.14.7. Cyclin–CDK control

Cell cycle được điều hòa bởi:
- cyclins;
- CDKs;
- inhibitors;
- checkpoint signals.

VECrop không cần mô hình chi tiết protein nếu dữ liệu không đủ; có thể dùng:

$
r_{div}^{eff}
=
r_{div}^{ref}
F_{C}
F_{N}
F_{TOR}
F_{Hormone}
F_T
$

đây là reduced formulation.

### 4.14.8. TOR và meristem activation

Từ 4.13:

$
Carbon/Nutrient/Energy
\rightarrow
TOR
\rightarrow
Meristem\ activation
$

TOR có thể điều phối:
- cell-cycle entry;
- ribosome biogenesis;
- protein synthesis;
- meristem activity.

### 4.14.9. SnRK1 và cell proliferation

Khi năng lượng thiếu:

$
SnRK1\uparrow
\rightarrow
Anabolism\downarrow
\rightarrow
Cell\ proliferation\downarrow
$

Đây là directional biological relation; quantitative strength cần calibration.

### 4.14.10. Cell expansion

Từ Lockhart-type framework:

$
\frac{dV}{dt}
=
\phi
(P-Y)
$

khi:

$
P>Y
$

Cell expansion phụ thuộc:
- turgor;
- wall extensibility;
- osmotic status;
- hormone;
- temperature.

### 4.14.11. Relative expansion rate

$
RER
=
\frac1V
\frac{dV}{dt}
$

Một reduced formulation:

$
RER
=
RER_{max}
F_{\Psi}
F_{wall}
F_{auxin}
F_{TOR}
$

### 4.14.12. Turgor–growth coupling

$
\Psi_w
=
\Psi_p+\Psi_s
$

Ở cấp tế bào, giảm water potential ngoài có thể làm:

$
P\downarrow
\rightarrow
Cell\ expansion\downarrow
$

trước khi photosynthesis giảm mạnh.

### 4.14.13. Wall loosening

Cell expansion liên quan đến:
- expansin;
- XTH;
- pectin remodeling;
- proton-mediated wall acidification.

Một conceptual chain:

$
H^+\ export
\rightarrow
Wall\ acidification
\rightarrow
Wall\ loosening
\rightarrow
Expansion
$

Không nên biến acid growth thành cơ chế duy nhất cho mọi mô.

### 4.14.14. Auxin và expansion

Auxin có thể tăng cell expansion trong một số mô qua:
- proton pump activation;
- wall loosening;
- gene regulation.

Một reduced response:

$
F_{IAA}
=
f(IAA,organ,stage)
$

Không dùng cùng hàm cho root và shoot.

### 4.14.15. Cytokinin và meristem

Cytokinin liên quan:
- cell division;
- SAM maintenance;
- shoot growth;
- nutrient signaling.

Một organ-specific regulator:

$
F_{CK,o}
=
f(CK_o,stage)
$

### 4.14.16. GA và elongation

GA thường liên quan:
- stem elongation;
- seed germination;
- floral development.

Một reduced elongation factor:

$
F_{GA}
=
\frac{GA}
{K_{GA}+GA}
$

chỉ dùng khi có calibration.

### 4.14.17. BR và growth

Brassinosteroid ảnh hưởng:
- cell expansion;
- vascular differentiation;
- growth signaling.

BR response cần được tích hợp với auxin/TOR, tránh cộng tuyến tính thô.

### 4.14.18. Differentiation

Tế bào rời meristem phải chuyển từ:
- proliferation;
- expansion;
- differentiation.

Một conceptual transition:

$
Meristematic
\rightarrow
Expansion
\rightarrow
Differentiated
$

### 4.14.19. Root developmental zones

RAM có thể tách:
- stem-cell niche;
- meristematic zone;
- transition zone;
- elongation zone;
- differentiation zone.

Điều này giúp nối cell cycle với root architecture.

### 4.14.20. Root elongation rate

Một balance:

$
\frac{dL_r}{dt}
=
v_{cell\ production}
+
v_{elongation}
$

Trong reduced form:

$
RGR_{root}
=
RGR_{root,max}
F_TF_{\Psi}F_NF_{O_2}F_{TOR}
$

### 4.14.21. Shoot apical meristem

SAM tạo:
- leaf primordia;
- axillary meristem;
- reproductive structures.

Meristem state cần liên kết với phenology.

### 4.14.22. Leaf initiation rate

Một phyllochron-type framework:

$
N_{leaf}(t)
=
N_0
+
\frac{TT(t)}
{Phyllochron}
$

chỉ dùng trong miền phát triển phù hợp.

Phyllochron phụ thuộc genotype và temperature regime.

### 4.14.23. Thermal time

Một dạng đơn giản:

$
TT
=
\sum_d
\max
(
0,
T_{mean,d}-T_b
)
$

Trong đó \(T_b\) là base temperature.

Không dùng một \(T_b\) chung cho mọi crop/giai đoạn.

### 4.14.24. Cardinal temperatures

Một process có thể có:
- \(T_b\): base;
- \(T_{opt}\): optimum;
- \(T_{max}\): maximum.

Một triangular response:

$
f_T(T)
=
\begin{cases}
0,&T\le T_b\\
\frac{T-T_b}{T_{opt}-T_b},&T_b<T<T_{opt}\\
\frac{T_{max}-T}{T_{max}-T_{opt}},&T_{opt}\le T<T_{max}\\
0,&T\ge T_{max}
\end{cases}
$

Đây là reduced phenology function.

### 4.14.25. Nonlinear thermal time

Khi temperature response phi tuyến mạnh:

$
TT_{eff}
=
\sum_t
f_T(T_t)\Delta t
$

có ý nghĩa hơn linear degree-day.

### 4.14.26. Photoperiod

Một developmental modifier:

$
F_P
=
f(Daylength,genotype,stage)
$

Không giả định mọi cultivar cùng photoperiod sensitivity.

### 4.14.27. Photoperiod classes

Cây có thể:
- short-day;
- long-day;
- day-neutral;
- quantitative/qualitative response.

Lúa thường có genotype-specific short-day sensitivity; nhiều giống hiện đại giảm sensitivity.

### 4.14.28. Vernalization

Vernalization là đáp ứng phát triển với prolonged low temperature ở các loài/giống cần cold exposure.

Một reduced state:

$
V(t)
=
\min
\left(
1,
V(t-\Delta t)
+
r_V(T)\Delta t
\right)
$

Chỉ áp dụng với crop có vernalization requirement.

### 4.14.29. Không ép vernalization cho lúa/ngô/xà lách

VECrop không được mặc định cả ba crop đều có vernalization requirement.

Module chỉ bật khi:
- species;
- cultivar;
- production context
có bằng chứng phù hợp.

### 4.14.30. Development rate

Một reduced formulation:

$
D_{dev}
=
D_{max}
F_T
F_P
F_V
F_G
$

Trong đó:
- \(F_T\): temperature;
- \(F_P\): photoperiod;
- \(F_V\): vernalization;
- \(F_G\): genotype.

### 4.14.31. Developmental stage state

Một state:

$
0\le DVS\le2
$

ví dụ:
- \(DVS=0\): emergence;
- \(DVS=1\): flowering;
- \(DVS=2\): maturity.

Đây chỉ là convention mô hình; mapping phải crop-specific.

### 4.14.32. Stage transition

Một threshold:

$
DVS(t+\Delta t)
=
DVS(t)
+
r_{dev}\Delta t
$

Khi vượt threshold thì chuyển stage.

### 4.14.33. Developmental timing không chỉ là “đồng hồ nhiệt”

Plant developmental timing còn phụ thuộc:
- growth status;
- circadian system;
- light;
- carbon;
- hormones;
- stress.

Do đó thermal time chỉ là reduced layer.

### 4.14.34. Circadian coupling

Một signal:

$
C_{circ}(t)
=
A\sin
\left(
\frac{2\pi t}{24}
+\phi
\right)
$

chỉ là mathematical proxy.

Circadian regulation có thể ảnh hưởng:
- starch turnover;
- flowering;
- hormone timing;
- growth rhythms.

### 4.14.35. Thermomorphogenesis

Nhiệt độ ấm nhưng chưa gây heat stress có thể thay đổi:
- elongation;
- leaf angle;
- architecture;
- flowering timing.

Không đồng nhất thermomorphogenesis với heat damage.

### 4.14.36. Development vs growth

Phân biệt:

$
Development
\neq
Growth
$

Growth: tăng kích thước/biomass.

Development: chuyển trạng thái/identity.

Một cây có thể phát triển nhanh về stage nhưng biomass thấp.

### 4.14.37. Organ initiation

Một organ number model:

$
\frac{dN_o}{dt}
=
r_{init,o}
$

với:

$
r_{init,o}
=
f(T,photoperiod,meristem,genotype)
$

### 4.14.38. Leaf area expansion

$
\frac{dA_L}{dt}
=
N_L
\frac{dA_{cell}}{dt}
+
A_{cell}
\frac{dN_{cell}}{dt}
$

Tương tự decomposition biomass.

### 4.14.39. Specific leaf area

$
SLA
=
\frac{Leaf\ area}
{Leaf\ dry\ mass}
$

SLA có thể thay đổi theo:
- light;
- N;
- temperature;
- age.

Không giữ cố định cả vụ nếu cần mechanistic accuracy.

### 4.14.40. LAI formation

$
LAI
=
\frac{Leaf\ area}{Ground\ area}
$

Dynamics:

$
\frac{dLAI}{dt}
=
LAI_{growth}
-
LAI_{senescence}
$

### 4.14.41. Root–shoot coordination

Một allocation balance:

$
C_{growth}
=
C_{root}
+
C_{shoot}
+
C_{reproductive}
$

Meristem demand cạnh tranh carbon theo source–sink status.

### 4.14.42. Meristem demand

Một sink demand:

$
Demand_{meristem}
=
M_{meristem}
q_{meristem}
F_{TOR}
F_{stage}
$

Đây là VECrop proposed formulation.

### 4.14.43. Cell-number limitation

Nếu carbon đủ nhưng division thấp:

$
Growth
\approx
Cell\ number\ limited
$

Nếu division đủ nhưng water/turgor thấp:

$
Growth
\approx
Cell\ expansion\ limited
$

### 4.14.44. Multiplicative limitation caution

Không mặc định:

$
Growth
=
F_{division}
F_{expansion}
F_{differentiation}
$

vì các process có coupling và compensation.

### 4.14.45. Stress effect on meristem

Stress có thể:
- arrest cell cycle;
- reduce meristem size;
- shift differentiation;
- alter hormone gradients.

Một reduced modifier:

$
r_{div}^{stress}
=
r_{div}^{ref}
F_{stress}
$

### 4.14.46. Drought

Drought thường làm giảm:
- turgor;
- cell expansion;
- meristem activity;
- leaf appearance rate.

Expansion có thể phản ứng trước photosynthesis.

### 4.14.47. Hypoxia

Hypoxia:

$
ATP\downarrow
\rightarrow
Cell\ cycle/expansion\downarrow
$

nhưng rice roots có adaptation đặc thù.

### 4.14.48. Salinity

Salinity ảnh hưởng:
- osmotic expansion;
- ion homeostasis;
- ROS;
- hormone signaling;
- meristem activity.

Không chỉ giảm một “salinity growth factor”.

### 4.14.49. Nutrient deficiency

N/P/K deficiency có thể thay đổi:
- meristem activity;
- organ initiation;
- leaf expansion;
- root/shoot allocation.

Response phụ thuộc nutrient.

### 4.14.50. Phenology × source–sink

Developmental stage quyết định:
- active sinks;
- sink strength;
- nutrient demand;
- allocation priorities.

Do đó:

$
SS_o
=
SS_o(stage)
$

### 4.14.51. Phenology × respiration

Maintenance/growth respiration thay đổi theo:
- organ age;
- active tissue fraction;
- stage.

Không dùng một hệ số duy nhất cho cả vòng đời.

### 4.14.52. Phenology × nutrient demand

$
q_{i,o}^{*}
=
q_{i,o}^{*}(stage)
$

Nutrient target concentration thay đổi theo stage và organ.

### 4.14.53. Lúa: phenology

Các stage chính có thể gồm:
- emergence;
- tillering;
- panicle initiation;
- booting;
- heading/flowering;
- grain filling;
- maturity.

VECrop cần map stage theo cultivar.

### 4.14.54. Lúa: tiller dynamics

Một reduced tiller balance:

$
\frac{dN_{tiller}}{dt}
=
Initiation
-
Mortality
$

Initiation phụ thuộc:
- carbon;
- N;
- light;
- cytokinin/strigolactone;
- density.

### 4.14.55. Ngô: phenology

Các stage cần phân biệt:
- emergence;
- vegetative leaf stages;
- tasseling;
- silking;
- grain filling;
- maturity.

Thermal time thường hữu ích nhưng cultivar-specific.

### 4.14.56. Ngô: anthesis–silking synchrony

Một diagnostic:

$
ASI
=
t_{silking}
-
t_{anthesis}
$

ASI tăng trong stress có thể phản ánh reproductive stress.

### 4.14.57. Xà lách: phenology

Các trạng thái chính:
- emergence;
- rosette expansion;
- marketable vegetative stage;
- bolting;
- flowering.

Với production lettuce, bolting thường là transition không mong muốn.

### 4.14.58. Xà lách: bolting

Bolting phụ thuộc:
- genotype;
- temperature;
- photoperiod;
- developmental state.

Không dùng một threshold nhiệt duy nhất cho mọi cultivar.

### 4.14.59. Organ-specific growth

Một general form:

$
\frac{dB_o}{dt}
=
G_o^{pot}
F_{source}
F_{water}
F_{nut}
F_{dev}
$

Đây là reduced form và phải tránh double counting.

### 4.14.60. Mechanistic alternative

Ở mức cơ chế hơn:

$
\frac{dB_o}{dt}
=
Carbon\ allocation_o
-
Respiration_o
-
Turnover_o
$

và meristem/cell-expansion module quyết định capacity.

### 4.14.61. Developmental capacity

Một proposed capacity:

$
G_o^{cap}
=
f(
Meristem_o,
CellCycle_o,
Expansion_o,
TOR_o,
Hormone_o,
Stage
)
$

### 4.14.62. Growth rate thực

$
G_o
=
\min
(
G_o^{source},
G_o^{cap}
)
$

Đây là conceptual supply–capacity coupling.

### 4.14.63. Sink capacity

Từ 4.5:

$
SS_o
=
M_oq_o
$

4.14 giúp giải thích \(M_o\) qua:
- cell number;
- organ number;
- meristem size.

### 4.14.64. Coupling với 4.13

Chuỗi:

$
Sugar/T6P/TOR
\rightarrow
CellCycle
\rightarrow
Meristem
\rightarrow
Organ\ growth
$

### 4.14.65. Coupling với 4.12

Hormone–Ca–ROS–MAPK có thể điều chỉnh:
- cell-cycle entry;
- wall expansion;
- differentiation;
- developmental transitions.

### 4.14.66. Coupling với 4.6

Leaf development quyết định:

$
LAI
$

và từ đó ảnh hưởng:

$
A_{can}
$

### 4.14.67. Coupling với 4.7

Phenology quyết định:

$
Req_{i,o}
$

và remobilization timing.

### 4.14.68. Parameter provenance

Cần provenance cho:
- \(T_b\);
- \(T_{opt}\);
- \(T_{max}\);
- phyllochron;
- photoperiod sensitivity;
- cell-cycle duration;
- meristem size;
- organ initiation rate;
- SLA.

### 4.14.69. Experimental observables

Có thể đo:
- meristem cell number;
- EdU/BrdU-type proliferation labeling;
- root meristem length;
- cell length profile;
- leaf appearance;
- organ number;
- LAI;
- thermal time;
- flowering/heading date.

### 4.14.70. Calibration hierarchy

Nên hiệu chỉnh:
1. temperature response;
2. leaf/root initiation;
3. cell division/expansion;
4. organ growth;
5. developmental transition;
6. whole-plant phenology.

### 4.14.71. Validation

Validation cần kiểm:
- stage dates;
- leaf number;
- root elongation;
- LAI;
- organ biomass;
- flowering/heading;
- maturity.

### 4.14.72. Không dùng yield để fit phenology duy nhất

Final yield không đủ để nhận dạng:
- \(T_b\);
- photoperiod sensitivity;
- phyllochron;
- cell-cycle rate.

Cần time-series developmental data.

### 4.14.73. Không double counting

Nếu phenology đã điều chỉnh:
- sink strength;
- nutrient demand;
- photosynthetic area;

thì không nhân thêm một “stage factor” chung vào yield.

### 4.14.74. Vai trò của 4.14

4.14 chuyển regulatory state thành cấu trúc phát triển:

<div class="flow-chain">
<strong>Carbon–TOR/Hormone</strong> → <strong>Meristem</strong> → <strong>Cell division</strong> → <strong>Cell expansion</strong> → <strong>Organ initiation</strong> → <strong>Phenology</strong> → <strong>Canopy/Root/Sink capacity</strong>
</div>

### 4.14.75. Kết luận 4.14

Phát triển cây cần tách hai trục:

$
Growth
\neq
Development
$

và mô hình VECrop nên biểu diễn:

$
Environment
\rightarrow
Developmental\ timing
\rightarrow
Organ\ capacity
$

song song với:

$
Carbon/Nutrient/Water
\rightarrow
Growth\ realization
$

Như vậy phenology xác định **khi nào và cơ quan nào có khả năng tăng trưởng**, còn source–sink, hydraulics và metabolism xác định **mức tăng trưởng thực sự đạt được**.

---


## 4.15. Lão hóa – programmed cell death – tái huy động dinh dưỡng – kết thúc vòng đời cơ quan

### 4.15.1. Senescence là một chương trình phát triển

Senescence không chỉ là “già đi” thụ động.

Ở cấp cơ quan, nó là một quá trình được điều hòa, thường bao gồm:
- suy giảm quang hợp;
- tháo dỡ chloroplast;
- proteolysis;
- lipid turnover;
- nucleic-acid degradation;
- tái huy động N, P, K và carbon;
- cuối cùng có thể dẫn tới programmed cell death.

### 4.15.2. Phân biệt senescence và programmed cell death

Không đồng nhất:

$
Senescence
=
PCD
$

Senescence có thể kéo dài nhiều ngày hoặc nhiều tuần, còn PCD là pha kết thúc của một số chương trình phát triển/stress.

### 4.15.3. Developmental senescence

Một developmental driver:

$
S_{dev}
=
f(
age,
DVS,
organ,
genotype
)
$

Senescence có thể bắt đầu ngay cả khi môi trường không stress.

### 4.15.4. Stress-induced senescence

Stress có thể thúc đẩy senescence:

$
S_{stress}
=
f(
drought,
salinity,
heat,
nutrient\ deficiency,
pathogen,
shade
)
$

Không được dùng một stress factor chung cho mọi nguyên nhân.

### 4.15.5. Senescence rate

Một reduced state:

$
\frac{dS_o}{dt}
=
r_{sen,o}
(1-S_o)
$

với:

$
0\le S_o\le1
$

Trong đó \(S_o=0\) là chưa senescent và \(S_o=1\) là senescence hoàn tất.

### 4.15.6. Rate phụ thuộc stage và stress

$
r_{sen,o}
=
r_{0,o}
F_{stage}
F_T
F_{water}
F_N
F_{hormone}
F_{ROS}
$

Đây là reduced VECrop formulation.

### 4.15.7. Chlorophyll loss

Một proxy:

$
\frac{dChl}{dt}
=
-k_{Chl}S_oChl
$

Chlorophyll decline là chỉ báo hữu ích nhưng không bằng toàn bộ senescence state.

### 4.15.8. Photosynthetic decline

Một reduced relation:

$
V_{cmax}^{eff}
=
V_{cmax}^{green}
F_{sen}
$

$
J_{max}^{eff}
=
J_{max}^{green}
F_{sen}
$

với:

$
F_{sen}=1-S_o
$

chỉ là approximation.

### 4.15.9. Chloroplast dismantling

Trong leaf senescence, chloroplast thường là nguồn lớn của N được tái huy động do Rubisco và protein quang hợp chiếm tỷ lệ N đáng kể.

### 4.15.10. Protein degradation

Một protein pool:

$
\frac{dP_o}{dt}
=
Synthesis_o
-
Degradation_o
$

Trong senescence:

$
Degradation_o\uparrow
$

### 4.15.11. Proteolysis

Proteolysis tạo:
- amino acids;
- peptides;
- N remobilizable pools.

Một flux:

$
F_{prot\rightarrow AA}
=
k_{prot}S_oP_o
$

### 4.15.12. Nitrogen remobilization

Từ 4.7:

$
F_{rem,N,o}
=
k_{rem,N,o}(t)
M_{N,o}^{mob}
$

4.15 mở rộng bằng senescence control:

$
F_{rem,N,o}^{eff}
=
k_{rem,N,o}
S_o
M_{N,o}^{mob}
$

### 4.15.13. Phosphorus remobilization

$
F_{rem,P,o}
=
k_{rem,P,o}
S_o
M_{P,o}^{mob}
$

Khả năng remobilize P phụ thuộc:
- chemical form;
- tissue;
- sink demand;
- genotype.

### 4.15.14. Potassium remobilization

K thường có mobility cao trong phloem.

Một balance:

$
F_{rem,K,o}
=
k_{rem,K,o}
S_o
M_{K,o}^{mob}
$

### 4.15.15. Mineral-specific remobilization

Không dùng:

$
F_{rem,N}
=
F_{rem,P}
=
F_{rem,K}
$

vì mobility và biochemical binding khác nhau.

### 4.15.16. Source transition

Một lá có thể chuyển:

$
Sink\ leaf
\rightarrow
Source\ leaf
\rightarrow
Senescing\ source
$

Trong giai đoạn senescing, export vẫn có thể cao dù photosynthesis đang giảm.

### 4.15.17. Sink priority

Trong reproductive stage:

$
Priority_{grain}
\uparrow
$

có thể thúc đẩy remobilization từ vegetative organs.

### 4.15.18. Carbon remobilization

Stored carbon có thể được huy động:

$
Starch/Fructan/NSC
\rightarrow
Sucrose
\rightarrow
Phloem
\rightarrow
Sink
$

### 4.15.19. NSC pool

$
NSC
=
Sucrose
+
Glucose
+
Fructose
+
Starch
$

tùy định nghĩa thực nghiệm.

### 4.15.20. Carbon remobilization flux

$
F_{rem,C,o}
=
k_{rem,C,o}
S_o
M_{C,o}^{storage}
$

### 4.15.21. Hormone control

Hormone liên quan senescence gồm:
- ethylene;
- ABA;
- cytokinin;
- JA;
- SA;
- auxin interactions.

Không gán:
- cytokinin = luôn chống lão hóa;
- ethylene = luôn gây lão hóa
một cách tuyệt đối cho mọi mô.

### 4.15.22. Cytokinin effect

Trong nhiều bối cảnh:

$
CK\uparrow
\Rightarrow
Senescence\ delay
$

nhưng magnitude phụ thuộc:
- tissue;
- stage;
- source–sink;
- genotype.

### 4.15.23. Ethylene effect

Ethylene có thể thúc đẩy senescence ở nhiều hệ:

$
ET\uparrow
\Rightarrow
r_{sen}\uparrow
$

nhưng response phải organ-specific.

### 4.15.24. ABA effect

ABA có thể tăng trong drought và phối hợp:
- stomatal closure;
- stress response;
- senescence acceleration.

Không nên phạt drought qua ABA thêm lần nữa nếu drought đã ảnh hưởng trực tiếp lên cùng process.

### 4.15.25. ROS và senescence

ROS có thể vừa là signal vừa là damage.

Một coupling:

$
r_{sen}
=
r_0
[
1+\alpha_{ROS}S_{ROS}
+\beta_{D}D_{ROS}
]
$

Đây là proposed formulation.

### 4.15.26. Autophagy

Autophagy đóng vai trò trong:
- recycling cellular components;
- nutrient remobilization;
- stress survival;
- senescence progression.

Một reduced flux:

$
F_{auto}
=
k_{auto}
A_{auto}
M_{substrate}
$

### 4.15.27. Autophagy không đồng nhất với cell death

Autophagy có thể hỗ trợ survival và recycling trước khi PCD xảy ra.

Do đó:

$
Autophagy
\neq
PCD
$

### 4.15.28. Programmed cell death state

Một PCD activation state:

$
A_{PCD}
=
\sigma
(
\beta_0
+
\beta_{ROS}D_{ROS}
+
\beta_{ET}ET^*
+
\beta_{ABA}ABA^*
+
\beta_{dev}DVS
)
$

Đây là VECrop proposed diagnostic.

### 4.15.29. Membrane integrity decline

$
H_{mem}
=
e^{-\lambda DD}
$

với \(D\) là damage state tổng hợp.

### 4.15.30. Senescence và phloem export

Một organ export:

$
F_{export,o}
=
F_{phloem,o}
+
F_{rem,C,o}
+
F_{rem,N,o}
+
F_{rem,P,o}
+
F_{rem,K,o}
$

### 4.15.31. Reproductive sink coupling

$
F_{rem,i\rightarrow grain}
=
a_{grain,i}
F_{rem,i,total}
$

Trong đó \(a_{grain,i}\) phụ thuộc sink strength.

### 4.15.32. Grain filling

Một grain nutrient balance:

$
\frac{dM_{i,grain}}{dt}
=
U_{new,i}
+
F_{rem,i\rightarrow grain}
-
Loss_i
$

### 4.15.33. New uptake và remobilization

Final grain nutrient có thể đến từ hai nguồn:

$
M_{i,grain}
=
M_{i,new\ uptake}
+
M_{i,remobilized}
$

Không được suy rằng toàn bộ grain N đến từ remobilization.

### 4.15.34. Remobilization efficiency

$
RE_i
=
\frac{M_{i,remobilized}}
{M_{i,pre-senescence}}
$

Cần định nghĩa rõ pool và thời điểm đo.

### 4.15.35. Apparent remobilization efficiency

Từ biomass/tissue concentration:

$
ARE_i
=
\frac{M_{i,pre}-M_{i,post}}
{M_{i,pre}}
$

Đây là apparent metric, không chứng minh flux đích đến.

### 4.15.36. Isotope validation

Khi cần xác định flux thực:
- \(^{15}N\);
- \(^{13}C\);
- stable isotope tracing

có thể giúp phân biệt uptake mới và remobilization.

### 4.15.37. Leaf area loss

LAI dynamics:

$
\frac{dLAI}{dt}
=
LAI_{growth}
-
LAI_{sen}
$

Một senescence loss:

$
LAI_{sen}
=
k_{LAI,sen}S_{leaf}LAI
$

### 4.15.38. Green leaf area index

$
GLAI
=
LAI(1-S_{leaf})
$

Đây là reduced canopy representation.

### 4.15.39. Canopy photosynthesis under senescence

$
A_{can}
=
\int_0^{GLAI}
A_n(L,t)\,dL
$

hoặc phải tách green/senescent fractions.

### 4.15.40. Stay-green trait

Stay-green không phải một trait duy nhất.

Cần phân biệt:
- cosmetic stay-green;
- functional stay-green.

Functional stay-green duy trì photosynthetic function lâu hơn.

### 4.15.41. Stay-green và yield

Stay-green có thể tăng yield trong một số điều kiện nếu:
- sink còn hoạt động;
- water supply đủ;
- remobilization không bị cản trở.

Không mặc định stay-green luôn tốt.

### 4.15.42. Senescence timing

Senescence quá sớm:

$
Source\ duration\downarrow
$

Senescence quá muộn có thể:

$
Remobilization\ efficiency\downarrow
$

tùy crop và mục tiêu thu hoạch.

### 4.15.43. Source duration

Một source-duration metric:

$
SAD
=
\int_{t_1}^{t_2}
GLAI(t)\,dt
$

Green leaf area duration có thể liên hệ với cumulative carbon capture.

### 4.15.44. Source–sink balance

Nếu sink nhỏ:

$
Sink\ limitation
\rightarrow
Sugar\ accumulation
\rightarrow
Feedback
\rightarrow
Senescence\ regulation
$

### 4.15.45. Sugar signaling

Từ 4.13:

$
Sucrose/T6P/SnRK1/TOR
\leftrightarrow
Senescence
$

Carbon starvation và carbon excess có thể gây response khác nhau.

### 4.15.46. SnRK1

Trong carbon deficit:

$
SnRK1\uparrow
$

có thể thúc đẩy:
- catabolism;
- survival responses;
- recycling.

### 4.15.47. TOR

Khi growth-supporting carbon/nutrient cao:

$
TOR\uparrow
$

có thể trì hoãn một số starvation-like responses.

Không dùng TOR như “anti-senescence scalar” phổ quát.

### 4.15.48. Nitrogen status

N deficiency có thể tăng senescence ở lá già:

$
N_{status}\downarrow
\rightarrow
Remobilization\uparrow
$

nhưng response phụ thuộc sink demand.

### 4.15.49. Phosphorus status

P deficiency có thể thay đổi:
- leaf longevity;
- membrane turnover;
- RNA turnover;
- P remobilization.

### 4.15.50. Potassium status

K deficiency có thể ảnh hưởng:
- phloem loading;
- osmotic regulation;
- carbohydrate export;
- senescence timing.

### 4.15.51. Water stress

Drought có thể:
- tăng ABA;
- tăng ROS;
- giảm photosynthesis;
- tăng leaf senescence.

Nhưng mild drought và terminal drought phải được tách.

### 4.15.52. Heat

Heat stress có thể tăng:
- protein damage;
- membrane damage;
- ROS;
- reproductive failure;
- accelerated senescence.

### 4.15.53. Hypoxia

Hypoxia kéo dài có thể:
- ATP deficit;
- ROS khi reoxygenation;
- root death;
- premature senescence.

### 4.15.54. Pathogen-triggered senescence

Pathogen và defense signaling có thể kích hoạt:
- SA;
- JA/ET;
- ROS;
- localized PCD.

Không gộp disease senescence vào developmental senescence.

### 4.15.55. Organ-specific senescence

$
S_{leaf}
\neq
S_{root}
\neq
S_{stem}
\neq
S_{grain}
$

Cần state riêng theo organ.

### 4.15.56. Root senescence

Root senescence ảnh hưởng:
- active root length;
- nutrient uptake;
- hydraulic conductance;
- rhizodeposition.

### 4.15.57. Root mortality

Một balance:

$
\frac{dM_{root}}{dt}
=
Growth_{root}
-
Mortality_{root}
$

Trong đó:

$
Mortality_{root}
=
k_{death}S_{root}M_{root}
$

### 4.15.58. Active root fraction

$
f_{active}
=
\frac{M_{root,active}}
{M_{root,total}}
$

Uptake nên phụ thuộc active fraction hơn total root biomass.

### 4.15.59. Stem remobilization

Stem có thể lưu:
- soluble sugars;
- fructans ở một số loài;
- N compounds;
- K.

Tỷ lệ remobilization phụ thuộc crop.

### 4.15.60. Lúa

Ở lúa, cần theo dõi:
- leaf senescence;
- stem NSC;
- grain filling;
- N remobilization;
- stay-green;
- source–sink after heading.

### 4.15.61. Ngô

Ở ngô, cần theo dõi:
- post-silking N uptake;
- remobilization từ vegetative tissues;
- stay-green;
- leaf senescence progression;
- kernel sink strength.

### 4.15.62. Xà lách

Ở xà lách, marketable stage thường trước reproductive senescence.

Cần đặc biệt theo dõi:
- outer-leaf senescence;
- tipburn/necrosis phân biệt với senescence;
- bolting transition;
- marketable biomass loss.

### 4.15.63. Senescence vs necrosis

Không đồng nhất:

$
Senescence
=
Necrosis
$

Necrosis có thể là damage/pathology, còn senescence là regulated developmental program.

### 4.15.64. Senescence vs abscission

Abscission là quá trình tách cơ quan.

Một leaf có thể senesce trước abscission nhưng hai quá trình không đồng nhất.

### 4.15.65. Abscission state

Một reduced state:

$
A_{abs}
=
\sigma(
\beta_0+\beta_{ET}ET^*-\beta_{IAA}IAA^*+\beta_SS_o
)
$

chỉ dùng như proposed model.

### 4.15.66. Nutrient loss through abscission

Nếu leaf rụng trước remobilization hoàn tất:

$
Loss_i
=
M_{i,leaf}
A_{abs}
$

làm giảm nutrient-use efficiency.

### 4.15.67. Nutrient-use efficiency

Một crop-level metric:

$
NUE
=
\frac{Yield}
{N\ input}
$

Cần phân biệt:
- uptake efficiency;
- utilization efficiency;
- remobilization efficiency.

### 4.15.68. Uptake efficiency

$
NUpE
=
\frac{N_{plant}}
{N_{available/input}}
$

định nghĩa denominator phải ghi rõ.

### 4.15.69. Utilization efficiency

$
NUtE
=
\frac{Yield}
{N_{plant}}
$

### 4.15.70. Senescence và NUE

Senescence timing có thể ảnh hưởng NUE qua:
- remobilization;
- late uptake;
- photosynthetic duration;
- sink filling.

### 4.15.71. Protein turnover cost

Remobilization không miễn phí về năng lượng.

Một energetic cost:

$
ATP_{rem}
=
ATP_{proteolysis}
+
ATP_{transport}
+
ATP_{reassimilation}
$

### 4.15.72. Carbon cost của remobilization

Amino acid transport và N reassimilation có thể cần carbon skeleton.

Do đó:

$
Remobilization
\neq
Zero\ cost
$

### 4.15.73. Senescence state-space

$
\mathbf x_{sen}
=
[
Chl,
Protein,
NSC,
N_{mob},
P_{mob},
K_{mob},
ROS,
Hormone,
Autophagy,
PCD
]^T
$

### 4.15.74. Dynamics

$
\frac{d\mathbf x_{sen}}{dt}
=
\mathbf f_{sen}
(
\mathbf x_{sen},
stage,
sink,
stress,
carbon,
nutrient
)
$

### 4.15.75. Output

$
\mathbf y_{sen}
=
[
GLAI,
F_{rem,C},
F_{rem,N},
F_{rem,P},
F_{rem,K},
Mortality,
Abscission
]^T
$

### 4.15.76. Coupling với 4.7

4.7 xác định:
- nutrient pools;
- demand;
- remobilization capacity.

4.15 quyết định:
- timing;
- regulatory state;
- organ turnover.

### 4.15.77. Coupling với 4.13

$
Sugar/T6P/SnRK1/TOR
\rightarrow
Senescence\ regulation
$

### 4.15.78. Coupling với 4.14

$
DVS
\rightarrow
Senescence\ program
$

Phenology xác định khi senescence developmentally competent.

### 4.15.79. Coupling với 4.6

$
Senescence
\rightarrow
GLAI\downarrow
\rightarrow
A_{can}\downarrow
$

### 4.15.80. Coupling với 4.5

Remobilized carbon/nutrients phải đi qua transport network tới sink.

Không được chuyển pool tức thời mà bỏ qua phloem capacity.

### 4.15.81. Parameter provenance

Cần provenance cho:
- \(k_{sen}\);
- \(k_{rem,i}\);
- chlorophyll decay;
- proteolysis rate;
- autophagy proxy;
- PCD threshold;
- abscission parameters.

### 4.15.82. Dữ liệu thực nghiệm

Có thể dùng:
- SPAD/chlorophyll;
- leaf N/P/K;
- protein;
- NSC;
- LAI/GLAI;
- isotope tracing;
- senescence scoring;
- gene-expression markers;
- root mortality;
- grain nutrient accumulation.

### 4.15.83. Calibration hierarchy

Nên hiệu chỉnh:
1. chlorophyll/GLAI decline;
2. organ nutrient loss;
3. remobilization flux;
4. sink accumulation;
5. organ mortality/abscission;
6. yield/nutrient composition.

### 4.15.84. Validation

Validation nên kiểm:
- onset of senescence;
- rate of green-area loss;
- N/P/K remobilization;
- grain filling;
- stay-green response;
- root turnover.

### 4.15.85. Không fit bằng final yield duy nhất

Hai mô hình có cùng final yield nhưng senescence trajectory khác nhau có thể sai cơ chế hoàn toàn.

### 4.15.86. Không double counting

Nếu senescence đã giảm:
- \(V_{cmax}\);
- \(GLAI\);
- active root area;

thì không nhân thêm một \(F_{sen}\) chung vào yield.

### 4.15.87. Vai trò của 4.15

4.15 hoàn thiện vòng đời cơ quan:

<div class="flow-chain">
<strong>Phát triển</strong> → <strong>Trưởng thành</strong> → <strong>Senescence</strong> → <strong>Autophagy/Proteolysis</strong> → <strong>Remobilization</strong> → <strong>PCD/Abscission</strong> → <strong>Sink filling</strong>
</div>

### 4.15.88. Kết luận 4.15

Trong VECrop, senescence phải được xem là một **quá trình điều hòa và tái phân bổ tài nguyên**, không chỉ là một hệ số giảm biomass.

Mô hình nên biểu diễn:

$
Development
+
Stress
+
Source\text{-}Sink
\rightarrow
Senescence
$

sau đó:

$
Senescence
\rightarrow
Remobilization
+
Photosynthetic\ decline
+
Organ\ turnover
$

để nối trực tiếp vòng đời cơ quan với năng suất và hiệu quả sử dụng dinh dưỡng.

---

# Chuỗi tích hợp cuối Chương 4

<div class="flow-chain">
<strong>Đất/giá thể</strong> → <strong>Rễ</strong> → <strong>Xylem</strong> → <strong>Lá</strong> → <strong>Khí khổng & quang hợp</strong> → <strong>Phloem</strong> → <strong>Source–sink</strong> → <strong>C–N–P–K & năng lượng</strong> → <strong>ROS–Hormone–Ca²⁺–MAPK</strong> → <strong>Sinh trưởng và năng suất</strong>
</div>

**Phạm vi giáo trình hiện tại kết thúc đúng tại mục 4.15.**

---

# Tài liệu nền tảng

1. Nobel P.S. **Physicochemical and Environmental Plant Physiology.**
2. Kramer P.J., Boyer J.S. **Water Relations of Plants and Soils.**
3. Rengel Z., Cakmak I., White P.J. (eds.). **Marschner's Mineral Nutrition of Plants. 4th ed.** Academic Press, 2023.
4. Tyree M.T., Zimmermann M.H. **Xylem Structure and the Ascent of Sap.**
5. Knoblauch M., Peters W.S. Reviews on the Münch pressure-flow mechanism.
6. De Schepper V. et al. Reviews on phloem transport and drought.
7. Farquhar G.D., von Caemmerer S., Berry J.A. C3 photosynthesis model.
8. Medlyn B.E. et al. Unified stomatal optimization / conductance model.
9. von Caemmerer S. **Biochemical Models of Leaf Photosynthesis.**
10. Bailey-Serres J., Voesenek L.A.C.J. Reviews on flooding and low-oxygen responses.
11. Zhu J.K. Reviews on salinity and ion homeostasis.
12. Mittler R.; Waszczak C. et al. Reviews on ROS signaling and redox.
13. Cutler S.R. et al. Reviews on ABA signaling.
14. Boudsocq M., Sheen J. Reviews on calcium-dependent signaling.
15. Xu J., Zhang S. Reviews on MAPK cascades in plants.
16. Fichtner F., Lunn J.E. Reviews on trehalose-6-phosphate and sucrose signaling.
17. Reviews on HXK, SnRK1 and TOR signaling in plant growth and stress responses.
18. Coen E., Prusinkiewicz P. Reviews on developmental timing in plants.
19. Desvoyes B. et al. Reviews on cell proliferation kinetics in the root apical meristem.
20. Reviews on flowering-time regulation, photoperiod and vernalization in crops.
21. Reviews on leaf senescence regulation, nutrient remobilization and stay-green phenotypes.
22. Reviews on autophagy and programmed cell death in plant senescence.

> **Quy tắc VECrop:** mọi tham số như \(P_{50}\), \(g_1\), \(V_{cmax}\), \(J_{max}\), \(K_m\), \(V_{\max}\), \(k_{rem}\), hormone coefficient hoặc vulnerability parameter phải có provenance theo loài/giống/cơ quan/giai đoạn/điều kiện/phương pháp; nếu chưa có nguồn thì phải ghi rõ *calibration parameter* hoặc *proposed*.


---

> **Điểm dừng hiện tại:** 4.15. Chưa có nội dung sau 4.15.
