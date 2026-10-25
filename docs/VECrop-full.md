# VECrop — Giáo trình tổng hợp

> **Phạm vi hiện tại:** Chương 1–4 đến hết mục **4.20**; Chương 5 **mới có mục 5.1** (dữ liệu thực nghiệm và kiểm định).

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

$
y_{i,t}=h(x_{i,t},\boldsymbol\phi)+b_{i,t}+\varepsilon_{i,t}
$

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

$
M_{i,j}=
\begin{cases}
1,&\text{nếu giá trị của đơn vị }i,\text{ biến }j\text{ đã quan sát hợp lệ;}\\
0,&\text{nếu không có giá trị có thể sử dụng.}
\end{cases}
$

Trường hợp \(M_{i,j}=0\), **không được kết luận \(x_{i,j}=0\)**. Phân biệt MCAR, MAR, MNAR cần mô hình hoặc giả định có cơ sở; không thể xác định cơ chế thiếu chỉ bằng nhìn vào tỷ lệ ô trống. Bất kỳ cách điền khuyết nào cũng là một bước **xử lý có phiên bản**, không làm thay đổi bản raw.

### 5.1.8. Độ không chắc chắn: số đo và suy luận

Nếu \(z=f(x_1,\ldots,x_p)\), sai số đầu vào đủ nhỏ, \(f\) khả vi và biết ma trận hiệp phương sai \(\mathbf\Sigma_x\), thì gần đúng tuyến tính bậc một:

$
u^2(z)\approx \mathbf J\,\mathbf\Sigma_x\,\mathbf J^T,
\qquad
\mathbf J=\left[\frac{\partial f}{\partial x_1},\ldots,\frac{\partial f}{\partial x_p}\right]
$

- \(u(z)\) là **độ không chắc chắn chuẩn** của kết quả suy ra (cùng đơn vị với \(z\)).
- \(\mathbf J\) là vector đạo hàm riêng tại giá trị ước lượng.
- \(\mathbf\Sigma_x\) chứa cả phương sai và hiệp phương sai đầu vào; **không tự giả định các phép đo độc lập**.

Với phép lấy trung bình của \(n\) giá trị độc lập, đồng phân phối và có phương sai hữu hạn, sai số chuẩn ước lượng có thể là:

$
SE(\bar y)=\frac{s}{\sqrt n}.
$

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

$
QC_{\text{schema}}=\text{pass}
\;\not\Rightarrow\;
QC_{\text{measurement}}=\text{pass}
\;\not\Rightarrow\;
Validation_{\text{model}}=\text{pass}.
$

Một tỷ lệ trường đã điền 100% **không** chứng minh dữ liệu đúng, đầy đủ mẫu độc lập hoặc mô hình có năng lực dự báo.

### 5.1.11. Quan hệ giữa mô hình đo và mô hình sinh lý

Đặt:

$
\mathbf x_{t+1}=f(\mathbf x_t,\mathbf u_t,\boldsymbol\theta)+\boldsymbol\eta_t
$

$
\mathbf y_t=h(\mathbf x_t,\boldsymbol\phi)+\boldsymbol\varepsilon_t
$

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

$$
Sugar\ concentration
=
Carbon\ flux
$$

vì concentration là state, còn flux là tốc độ vận chuyển/chuyển hóa.

### 4.13.2. Hexokinase như cảm biến glucose

Hexokinase (HXK) vừa xúc tác:

$$
Glucose
+
ATP
\rightarrow
Glucose\text{-}6\text{-}phosphate
+
ADP
$$

vừa tham gia sugar signaling.

Một reduced signal:

$$
S_{HXK}
=
\frac{Glu}
{K_{HXK}+Glu}
$$

chỉ là biểu diễn VECrop đề xuất khi không mô hình pathway HXK chi tiết.

### 4.13.3. Sucrose status

Sucrose là:
- dạng vận chuyển carbon chính trong phloem ở nhiều loài;
- substrate cho sink;
- tín hiệu trạng thái source–sink.

Một biến trạng thái:

$$
C_{Suc,o}
$$

nên được giữ theo cơ quan khi dữ liệu cho phép.

### 4.13.4. Trehalose-6-phosphate

T6P là một tín hiệu quan trọng liên hệ sucrose availability với tăng trưởng và phát triển.

Một reduced coupling:

$$
S_{T6P}
=
\frac{T6P}
{K_{T6P}+T6P}
$$

Không dùng T6P như đại diện trực tiếp cho lượng carbon dự trữ.

### 4.13.5. T6P–sucrose relationship

Ở mức khái niệm:

$$
Sucrose\uparrow
\Rightarrow
T6P\uparrow
$$

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

$$
Energy\ deficit
\rightarrow
SnRK1\uparrow
$$

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

$$
Carbon/Nutrient/Energy\uparrow
\rightarrow
TOR\uparrow
$$

TOR thường liên quan:
- translation;
- ribosome biogenesis;
- cell growth;
- cell proliferation;
- anabolic metabolism.

### 4.13.8. Trục SnRK1–TOR

Một conceptual antagonism:

$$
SnRK1
\dashv
Growth/Anabolism
$$

$$
TOR
\rightarrow
Growth/Anabolism
$$

Nhưng không nên xem SnRK1 và TOR là hai biến luôn đối xứng hoàn toàn.

### 4.13.9. T6P–SnRK1

Một conceptual link:

$$
T6P\uparrow
\Rightarrow
SnRK1\ activity\downarrow
$$

trong nhiều bối cảnh mô thực vật.

Không mặc định cùng độ nhạy ở mọi tissue/crop.

### 4.13.10. Carbon status index

Một reduced carbon status:

$$
S_C
=
\frac{C_{sugar}}
{K_C+C_{sugar}}
$$

Nếu tách nhiều pool:

$$
\mathbf C_{sugar}
=
[Sucrose,Glucose,Fructose,Starch,T6P]^T
$$

### 4.13.11. Energy status

Một reduced energy state:

$$
S_E
=
\frac{ATP}
{K_E+ATP}
$$

Ở mức cơ chế sâu hơn có thể dùng:
- ATP/ADP;
- adenylate energy charge;
- NADH/NAD+;
- NADPH/NADP+.

### 4.13.12. TOR reduced formulation

Một VECrop proposal:

$$
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
$$

Các coefficient phải được calibration.

### 4.13.13. SnRK1 reduced formulation

Một VECrop proposal:

$$
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
$$

Không xem phương trình này là pathway sinh học chính xác.

### 4.13.14. Sugar–hormone crosstalk

Sugar signaling tương tác với:
- ABA;
- auxin;
- cytokinin;
- GA;
- ethylene.

Một regulator:

$$
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
$$

### 4.13.15. Carbon–nitrogen coupling

Tăng trưởng cần đồng thời:
- carbon skeleton;
- nitrogen;
- energy.

Một stoichiometric constraint:

$$
Growth_o
\le
\min
(
C_{avail,o}/q_{C,o},
N_{avail,o}/q_{N,o}
)
$$

Đây là reduced Liebig-style formulation.

### 4.13.16. N assimilation và carbon skeleton

Nitrate/ammonium assimilation cần carbon skeleton và reducing power.

Một conceptual link:

$$
N\ assimilation
\rightarrow
C\ skeleton\ demand
+
ATP/NAD(P)H\ demand
$$

Do đó N uptake cao không bảo đảm growth nếu carbon/energy giới hạn.

### 4.13.17. Source–sink feedback

Khi sink demand thấp:

$$
Sucrose_{leaf}\uparrow
\rightarrow
feedback\ regulation
\rightarrow
photosynthetic\ capacity\ change
$$

Khi sink demand cao:

$$
Export\uparrow
\rightarrow
source\ utilization\uparrow
$$

Mức độ phụ thuộc crop/stage.

### 4.13.18. Sink strength coupling

Từ 4.5:

$$
SS_o=M_oq_o
$$

Bổ sung carbon-energy regulation:

$$
SS_o^{eff}
=
SS_o
F_{sugar,o}
F_{energy,o}
F_{stage,o}
$$

Các factor này chỉ dùng nếu chưa được giải trực tiếp trong \(q_o\).

### 4.13.19. Growth capacity

Một reduced capacity:

$$
G_o^{cap}
=
G_{o,max}
A_{TOR}
(1-A_{SnRK1}^{eff})
$$

Đây là VECrop proposal, cần validation.

### 4.13.20. Starch dynamics

Một balance:

$$
\frac{dC_{starch}}{dt}
=
P_{starch}
-
D_{starch}
$$

Ban ngày:

$$
P_{starch}>0
$$

thường tăng.

Ban đêm:

$$
D_{starch}>0
$$

cung carbon cho respiration và growth.

### 4.13.21. Night carbon starvation

Nếu starch reserve không đủ:

$$
C_{starch}\downarrow
\rightarrow
Sugar\downarrow
\rightarrow
SnRK1\uparrow
$$

có thể làm:
- growth giảm;
- catabolism tăng;
- gene stress response thay đổi.

### 4.13.22. Diurnal carbon balance

Một day-night balance:

$$
C_{net,day}
=
A_{day}
-
R_{day}
-
Export_{day}
-
Storage_{day}
$$

$$
C_{net,night}
=
Mobilization_{starch}
-
R_{night}
-
Growth_{night}
$$

### 4.13.23. Carbon starvation diagnostic

Một reduced index:

$$
H_C
=
\min
\left(
1,
\frac{C_{available}}
{C_{demand}+\varepsilon}
\right)
$$

Không dùng nếu carbon balance đã được mô hình hóa đầy đủ.

### 4.13.24. Growth–survival tradeoff

Under stress:

$$
Growth\downarrow
$$

có thể đồng thời:

$$
Survival\ capacity\uparrow
$$

Do đó HSY không được định nghĩa đơn giản là “growth càng cao càng khỏe”.

### 4.13.25. Cấu trúc state-space

Có thể mở rộng state vector:

$$
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
$$

Dynamics:

$$
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
$$

### 4.13.26. Coupling với Chương 4.5

Phloem đưa sucrose tới sink:

$$
F_C=C_{Suc}Q_{ph}
$$

4.13 chuyển flux này thành trạng thái carbon–energy điều khiển growth capacity.

### 4.13.27. Coupling với 4.8

Từ ATP balance:

$$
ATP_{sup}
\leftrightarrow
S_E
$$

Không được vừa dùng \(H_E\) vừa dùng lại cùng ATP limitation trong \(A_{TOR}\) nếu dẫn đến double counting.

### 4.13.28. Coupling với 4.12

Một regulatory function mở rộng:

$$
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
$$

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

$$
Carbon\ balance
\rightarrow
Sugar\ status
\rightarrow
T6P/SnRK1/TOR
\rightarrow
Regulation
\rightarrow
Growth\ capacity
$$

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

$$
Organ\ growth
=
Cell\ production
+
Cell\ expansion
+
Differentiation
$$

Không nên mô tả tăng trưởng cơ quan chỉ bằng biomass accumulation.

### 4.14.3. Phân rã tăng trưởng cơ quan

Một decomposition:

$$
B_o
=
N_{cell,o}
m_{cell,o}
$$

Suy ra:

$$
\frac{dB_o}{dt}
=
N_{cell,o}
\frac{dm_{cell,o}}{dt}
+
m_{cell,o}
\frac{dN_{cell,o}}{dt}
$$

Trong đó:
- \(N_{cell,o}\): số tế bào;
- \(m_{cell,o}\): khối lượng trung bình mỗi tế bào.

Đây là decomposition khái niệm, không phải mô hình duy nhất.

### 4.14.4. Cell proliferation rate

Một dạng:

$$
\frac{dN_{cell}}{dt}
=
r_{div}
N_{cycling}
$$

trong đó:
- \(r_{div}\): division rate;
- \(N_{cycling}\): số tế bào đang trong cell cycle.

### 4.14.5. Cell-cycle duration

Nếu chu kỳ tế bào trung bình là:

$$
T_c
$$

thì một approximation:

$$
r_{div}
\approx
\frac{\ln 2}{T_c}
$$

chỉ hợp lý khi population tăng gần exponential.

### 4.14.6. Cell-cycle phases

Cell cycle gồm:
- G1;
- S;
- G2;
- M.

Một state vector:

$$
\mathbf N_{cycle}
=
[N_{G1},N_S,N_{G2},N_M]^T
$$

Ở mô hình sâu có thể dùng transition rates giữa các pha.

### 4.14.7. Cyclin–CDK control

Cell cycle được điều hòa bởi:
- cyclins;
- CDKs;
- inhibitors;
- checkpoint signals.

VECrop không cần mô hình chi tiết protein nếu dữ liệu không đủ; có thể dùng:

$$
r_{div}^{eff}
=
r_{div}^{ref}
F_{C}
F_{N}
F_{TOR}
F_{Hormone}
F_T
$$

đây là reduced formulation.

### 4.14.8. TOR và meristem activation

Từ 4.13:

$$
Carbon/Nutrient/Energy
\rightarrow
TOR
\rightarrow
Meristem\ activation
$$

TOR có thể điều phối:
- cell-cycle entry;
- ribosome biogenesis;
- protein synthesis;
- meristem activity.

### 4.14.9. SnRK1 và cell proliferation

Khi năng lượng thiếu:

$$
SnRK1\uparrow
\rightarrow
Anabolism\downarrow
\rightarrow
Cell\ proliferation\downarrow
$$

Đây là directional biological relation; quantitative strength cần calibration.

### 4.14.10. Cell expansion

Từ Lockhart-type framework:

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

Cell expansion phụ thuộc:
- turgor;
- wall extensibility;
- osmotic status;
- hormone;
- temperature.

### 4.14.11. Relative expansion rate

$$
RER
=
\frac1V
\frac{dV}{dt}
$$

Một reduced formulation:

$$
RER
=
RER_{max}
F_{\Psi}
F_{wall}
F_{auxin}
F_{TOR}
$$

### 4.14.12. Turgor–growth coupling

$$
\Psi_w
=
\Psi_p+\Psi_s
$$

Ở cấp tế bào, giảm water potential ngoài có thể làm:

$$
P\downarrow
\rightarrow
Cell\ expansion\downarrow
$$

trước khi photosynthesis giảm mạnh.

### 4.14.13. Wall loosening

Cell expansion liên quan đến:
- expansin;
- XTH;
- pectin remodeling;
- proton-mediated wall acidification.

Một conceptual chain:

$$
H^+\ export
\rightarrow
Wall\ acidification
\rightarrow
Wall\ loosening
\rightarrow
Expansion
$$

Không nên biến acid growth thành cơ chế duy nhất cho mọi mô.

### 4.14.14. Auxin và expansion

Auxin có thể tăng cell expansion trong một số mô qua:
- proton pump activation;
- wall loosening;
- gene regulation.

Một reduced response:

$$
F_{IAA}
=
f(IAA,organ,stage)
$$

Không dùng cùng hàm cho root và shoot.

### 4.14.15. Cytokinin và meristem

Cytokinin liên quan:
- cell division;
- SAM maintenance;
- shoot growth;
- nutrient signaling.

Một organ-specific regulator:

$$
F_{CK,o}
=
f(CK_o,stage)
$$

### 4.14.16. GA và elongation

GA thường liên quan:
- stem elongation;
- seed germination;
- floral development.

Một reduced elongation factor:

$$
F_{GA}
=
\frac{GA}
{K_{GA}+GA}
$$

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

$$
Meristematic
\rightarrow
Expansion
\rightarrow
Differentiated
$$

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

$$
\frac{dL_r}{dt}
=
v_{cell\ production}
+
v_{elongation}
$$

Trong reduced form:

$$
RGR_{root}
=
RGR_{root,max}
F_TF_{\Psi}F_NF_{O_2}F_{TOR}
$$

### 4.14.21. Shoot apical meristem

SAM tạo:
- leaf primordia;
- axillary meristem;
- reproductive structures.

Meristem state cần liên kết với phenology.

### 4.14.22. Leaf initiation rate

Một phyllochron-type framework:

$$
N_{leaf}(t)
=
N_0
+
\frac{TT(t)}
{Phyllochron}
$$

chỉ dùng trong miền phát triển phù hợp.

Phyllochron phụ thuộc genotype và temperature regime.

### 4.14.23. Thermal time

Một dạng đơn giản:

$$
TT
=
\sum_d
\max
(
0,
T_{mean,d}-T_b
)
$$

Trong đó \(T_b\) là base temperature.

Không dùng một \(T_b\) chung cho mọi crop/giai đoạn.

### 4.14.24. Cardinal temperatures

Một process có thể có:
- \(T_b\): base;
- \(T_{opt}\): optimum;
- \(T_{max}\): maximum.

Một triangular response:

$$
f_T(T)
=
\begin{cases}
0,&T\le T_b\\
\frac{T-T_b}{T_{opt}-T_b},&T_b<T<T_{opt}\\
\frac{T_{max}-T}{T_{max}-T_{opt}},&T_{opt}\le T<T_{max}\\
0,&T\ge T_{max}
\end{cases}
$$

Đây là reduced phenology function.

### 4.14.25. Nonlinear thermal time

Khi temperature response phi tuyến mạnh:

$$
TT_{eff}
=
\sum_t
f_T(T_t)\Delta t
$$

có ý nghĩa hơn linear degree-day.

### 4.14.26. Photoperiod

Một developmental modifier:

$$
F_P
=
f(Daylength,genotype,stage)
$$

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

$$
V(t)
=
\min
\left(
1,
V(t-\Delta t)
+
r_V(T)\Delta t
\right)
$$

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

$$
D_{dev}
=
D_{max}
F_T
F_P
F_V
F_G
$$

Trong đó:
- \(F_T\): temperature;
- \(F_P\): photoperiod;
- \(F_V\): vernalization;
- \(F_G\): genotype.

### 4.14.31. Developmental stage state

Một state:

$$
0\le DVS\le2
$$

ví dụ:
- \(DVS=0\): emergence;
- \(DVS=1\): flowering;
- \(DVS=2\): maturity.

Đây chỉ là convention mô hình; mapping phải crop-specific.

### 4.14.32. Stage transition

Một threshold:

$$
DVS(t+\Delta t)
=
DVS(t)
+
r_{dev}\Delta t
$$

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

$$
C_{circ}(t)
=
A\sin
\left(
\frac{2\pi t}{24}
+\phi
\right)
$$

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

$$
Development
\neq
Growth
$$

Growth: tăng kích thước/biomass.

Development: chuyển trạng thái/identity.

Một cây có thể phát triển nhanh về stage nhưng biomass thấp.

### 4.14.37. Organ initiation

Một organ number model:

$$
\frac{dN_o}{dt}
=
r_{init,o}
$$

với:

$$
r_{init,o}
=
f(T,photoperiod,meristem,genotype)
$$

### 4.14.38. Leaf area expansion

$$
\frac{dA_L}{dt}
=
N_L
\frac{dA_{cell}}{dt}
+
A_{cell}
\frac{dN_{cell}}{dt}
$$

Tương tự decomposition biomass.

### 4.14.39. Specific leaf area

$$
SLA
=
\frac{Leaf\ area}
{Leaf\ dry\ mass}
$$

SLA có thể thay đổi theo:
- light;
- N;
- temperature;
- age.

Không giữ cố định cả vụ nếu cần mechanistic accuracy.

### 4.14.40. LAI formation

$$
LAI
=
\frac{Leaf\ area}{Ground\ area}
$$

Dynamics:

$$
\frac{dLAI}{dt}
=
LAI_{growth}
-
LAI_{senescence}
$$

### 4.14.41. Root–shoot coordination

Một allocation balance:

$$
C_{growth}
=
C_{root}
+
C_{shoot}
+
C_{reproductive}
$$

Meristem demand cạnh tranh carbon theo source–sink status.

### 4.14.42. Meristem demand

Một sink demand:

$$
Demand_{meristem}
=
M_{meristem}
q_{meristem}
F_{TOR}
F_{stage}
$$

Đây là VECrop proposed formulation.

### 4.14.43. Cell-number limitation

Nếu carbon đủ nhưng division thấp:

$$
Growth
\approx
Cell\ number\ limited
$$

Nếu division đủ nhưng water/turgor thấp:

$$
Growth
\approx
Cell\ expansion\ limited
$$

### 4.14.44. Multiplicative limitation caution

Không mặc định:

$$
Growth
=
F_{division}
F_{expansion}
F_{differentiation}
$$

vì các process có coupling và compensation.

### 4.14.45. Stress effect on meristem

Stress có thể:
- arrest cell cycle;
- reduce meristem size;
- shift differentiation;
- alter hormone gradients.

Một reduced modifier:

$$
r_{div}^{stress}
=
r_{div}^{ref}
F_{stress}
$$

### 4.14.46. Drought

Drought thường làm giảm:
- turgor;
- cell expansion;
- meristem activity;
- leaf appearance rate.

Expansion có thể phản ứng trước photosynthesis.

### 4.14.47. Hypoxia

Hypoxia:

$$
ATP\downarrow
\rightarrow
Cell\ cycle/expansion\downarrow
$$

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

$$
SS_o
=
SS_o(stage)
$$

### 4.14.51. Phenology × respiration

Maintenance/growth respiration thay đổi theo:
- organ age;
- active tissue fraction;
- stage.

Không dùng một hệ số duy nhất cho cả vòng đời.

### 4.14.52. Phenology × nutrient demand

$$
q_{i,o}^{*}
=
q_{i,o}^{*}(stage)
$$

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

$$
\frac{dN_{tiller}}{dt}
=
Initiation
-
Mortality
$$

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

$$
ASI
=
t_{silking}
-
t_{anthesis}
$$

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

$$
\frac{dB_o}{dt}
=
G_o^{pot}
F_{source}
F_{water}
F_{nut}
F_{dev}
$$

Đây là reduced form và phải tránh double counting.

### 4.14.60. Mechanistic alternative

Ở mức cơ chế hơn:

$$
\frac{dB_o}{dt}
=
Carbon\ allocation_o
-
Respiration_o
-
Turnover_o
$$

và meristem/cell-expansion module quyết định capacity.

### 4.14.61. Developmental capacity

Một proposed capacity:

$$
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
$$

### 4.14.62. Growth rate thực

$$
G_o
=
\min
(
G_o^{source},
G_o^{cap}
)
$$

Đây là conceptual supply–capacity coupling.

### 4.14.63. Sink capacity

Từ 4.5:

$$
SS_o
=
M_oq_o
$$

4.14 giúp giải thích \(M_o\) qua:
- cell number;
- organ number;
- meristem size.

### 4.14.64. Coupling với 4.13

Chuỗi:

$$
Sugar/T6P/TOR
\rightarrow
CellCycle
\rightarrow
Meristem
\rightarrow
Organ\ growth
$$

### 4.14.65. Coupling với 4.12

Hormone–Ca–ROS–MAPK có thể điều chỉnh:
- cell-cycle entry;
- wall expansion;
- differentiation;
- developmental transitions.

### 4.14.66. Coupling với 4.6

Leaf development quyết định:

$$
LAI
$$

và từ đó ảnh hưởng:

$$
A_{can}
$$

### 4.14.67. Coupling với 4.7

Phenology quyết định:

$$
Req_{i,o}
$$

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

$$
Growth
\neq
Development
$$

và mô hình VECrop nên biểu diễn:

$$
Environment
\rightarrow
Developmental\ timing
\rightarrow
Organ\ capacity
$$

song song với:

$$
Carbon/Nutrient/Water
\rightarrow
Growth\ realization
$$

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

$$
Senescence
=
PCD
$$

Senescence có thể kéo dài nhiều ngày hoặc nhiều tuần, còn PCD là pha kết thúc của một số chương trình phát triển/stress.

### 4.15.3. Developmental senescence

Một developmental driver:

$$
S_{dev}
=
f(
age,
DVS,
organ,
genotype
)
$$

Senescence có thể bắt đầu ngay cả khi môi trường không stress.

### 4.15.4. Stress-induced senescence

Stress có thể thúc đẩy senescence:

$$
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
$$

Không được dùng một stress factor chung cho mọi nguyên nhân.

### 4.15.5. Senescence rate

Một reduced state:

$$
\frac{dS_o}{dt}
=
r_{sen,o}
(1-S_o)
$$

với:

$$
0\le S_o\le1
$$

Trong đó \(S_o=0\) là chưa senescent và \(S_o=1\) là senescence hoàn tất.

### 4.15.6. Rate phụ thuộc stage và stress

$$
r_{sen,o}
=
r_{0,o}
F_{stage}
F_T
F_{water}
F_N
F_{hormone}
F_{ROS}
$$

Đây là reduced VECrop formulation.

### 4.15.7. Chlorophyll loss

Một proxy:

$$
\frac{dChl}{dt}
=
-k_{Chl}S_oChl
$$

Chlorophyll decline là chỉ báo hữu ích nhưng không bằng toàn bộ senescence state.

### 4.15.8. Photosynthetic decline

Một reduced relation:

$$
V_{cmax}^{eff}
=
V_{cmax}^{green}
F_{sen}
$$

$$
J_{max}^{eff}
=
J_{max}^{green}
F_{sen}
$$

với:

$$
F_{sen}=1-S_o
$$

chỉ là approximation.

### 4.15.9. Chloroplast dismantling

Trong leaf senescence, chloroplast thường là nguồn lớn của N được tái huy động do Rubisco và protein quang hợp chiếm tỷ lệ N đáng kể.

### 4.15.10. Protein degradation

Một protein pool:

$$
\frac{dP_o}{dt}
=
Synthesis_o
-
Degradation_o
$$

Trong senescence:

$$
Degradation_o\uparrow
$$

### 4.15.11. Proteolysis

Proteolysis tạo:
- amino acids;
- peptides;
- N remobilizable pools.

Một flux:

$$
F_{prot\rightarrow AA}
=
k_{prot}S_oP_o
$$

### 4.15.12. Nitrogen remobilization

Từ 4.7:

$$
F_{rem,N,o}
=
k_{rem,N,o}(t)
M_{N,o}^{mob}
$$

4.15 mở rộng bằng senescence control:

$$
F_{rem,N,o}^{eff}
=
k_{rem,N,o}
S_o
M_{N,o}^{mob}
$$

### 4.15.13. Phosphorus remobilization

$$
F_{rem,P,o}
=
k_{rem,P,o}
S_o
M_{P,o}^{mob}
$$

Khả năng remobilize P phụ thuộc:
- chemical form;
- tissue;
- sink demand;
- genotype.

### 4.15.14. Potassium remobilization

K thường có mobility cao trong phloem.

Một balance:

$$
F_{rem,K,o}
=
k_{rem,K,o}
S_o
M_{K,o}^{mob}
$$

### 4.15.15. Mineral-specific remobilization

Không dùng:

$$
F_{rem,N}
=
F_{rem,P}
=
F_{rem,K}
$$

vì mobility và biochemical binding khác nhau.

### 4.15.16. Source transition

Một lá có thể chuyển:

$$
Sink\ leaf
\rightarrow
Source\ leaf
\rightarrow
Senescing\ source
$$

Trong giai đoạn senescing, export vẫn có thể cao dù photosynthesis đang giảm.

### 4.15.17. Sink priority

Trong reproductive stage:

$$
Priority_{grain}
\uparrow
$$

có thể thúc đẩy remobilization từ vegetative organs.

### 4.15.18. Carbon remobilization

Stored carbon có thể được huy động:

$$
Starch/Fructan/NSC
\rightarrow
Sucrose
\rightarrow
Phloem
\rightarrow
Sink
$$

### 4.15.19. NSC pool

$$
NSC
=
Sucrose
+
Glucose
+
Fructose
+
Starch
$$

tùy định nghĩa thực nghiệm.

### 4.15.20. Carbon remobilization flux

$$
F_{rem,C,o}
=
k_{rem,C,o}
S_o
M_{C,o}^{storage}
$$

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

$$
CK\uparrow
\Rightarrow
Senescence\ delay
$$

nhưng magnitude phụ thuộc:
- tissue;
- stage;
- source–sink;
- genotype.

### 4.15.23. Ethylene effect

Ethylene có thể thúc đẩy senescence ở nhiều hệ:

$$
ET\uparrow
\Rightarrow
r_{sen}\uparrow
$$

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

$$
r_{sen}
=
r_0
[
1+\alpha_{ROS}S_{ROS}
+\beta_{D}D_{ROS}
]
$$

Đây là proposed formulation.

### 4.15.26. Autophagy

Autophagy đóng vai trò trong:
- recycling cellular components;
- nutrient remobilization;
- stress survival;
- senescence progression.

Một reduced flux:

$$
F_{auto}
=
k_{auto}
A_{auto}
M_{substrate}
$$

### 4.15.27. Autophagy không đồng nhất với cell death

Autophagy có thể hỗ trợ survival và recycling trước khi PCD xảy ra.

Do đó:

$$
Autophagy
\neq
PCD
$$

### 4.15.28. Programmed cell death state

Một PCD activation state:

$$
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
$$

Đây là VECrop proposed diagnostic.

### 4.15.29. Membrane integrity decline

$$
H_{mem}
=
e^{-\lambda DD}
$$

với \(D\) là damage state tổng hợp.

### 4.15.30. Senescence và phloem export

Một organ export:

$$
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
$$

### 4.15.31. Reproductive sink coupling

$$
F_{rem,i\rightarrow grain}
=
a_{grain,i}
F_{rem,i,total}
$$

Trong đó \(a_{grain,i}\) phụ thuộc sink strength.

### 4.15.32. Grain filling

Một grain nutrient balance:

$$
\frac{dM_{i,grain}}{dt}
=
U_{new,i}
+
F_{rem,i\rightarrow grain}
-
Loss_i
$$

### 4.15.33. New uptake và remobilization

Final grain nutrient có thể đến từ hai nguồn:

$$
M_{i,grain}
=
M_{i,new\ uptake}
+
M_{i,remobilized}
$$

Không được suy rằng toàn bộ grain N đến từ remobilization.

### 4.15.34. Remobilization efficiency

$$
RE_i
=
\frac{M_{i,remobilized}}
{M_{i,pre-senescence}}
$$

Cần định nghĩa rõ pool và thời điểm đo.

### 4.15.35. Apparent remobilization efficiency

Từ biomass/tissue concentration:

$$
ARE_i
=
\frac{M_{i,pre}-M_{i,post}}
{M_{i,pre}}
$$

Đây là apparent metric, không chứng minh flux đích đến.

### 4.15.36. Isotope validation

Khi cần xác định flux thực:
- \(^{15}N\);
- \(^{13}C\);
- stable isotope tracing

có thể giúp phân biệt uptake mới và remobilization.

### 4.15.37. Leaf area loss

LAI dynamics:

$$
\frac{dLAI}{dt}
=
LAI_{growth}
-
LAI_{sen}
$$

Một senescence loss:

$$
LAI_{sen}
=
k_{LAI,sen}S_{leaf}LAI
$$

### 4.15.38. Green leaf area index

$$
GLAI
=
LAI(1-S_{leaf})
$$

Đây là reduced canopy representation.

### 4.15.39. Canopy photosynthesis under senescence

$$
A_{can}
=
\int_0^{GLAI}
A_n(L,t)\,dL
$$

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

$$
Source\ duration\downarrow
$$

Senescence quá muộn có thể:

$$
Remobilization\ efficiency\downarrow
$$

tùy crop và mục tiêu thu hoạch.

### 4.15.43. Source duration

Một source-duration metric:

$$
SAD
=
\int_{t_1}^{t_2}
GLAI(t)\,dt
$$

Green leaf area duration có thể liên hệ với cumulative carbon capture.

### 4.15.44. Source–sink balance

Nếu sink nhỏ:

$$
Sink\ limitation
\rightarrow
Sugar\ accumulation
\rightarrow
Feedback
\rightarrow
Senescence\ regulation
$$

### 4.15.45. Sugar signaling

Từ 4.13:

$$
Sucrose/T6P/SnRK1/TOR
\leftrightarrow
Senescence
$$

Carbon starvation và carbon excess có thể gây response khác nhau.

### 4.15.46. SnRK1

Trong carbon deficit:

$$
SnRK1\uparrow
$$

có thể thúc đẩy:
- catabolism;
- survival responses;
- recycling.

### 4.15.47. TOR

Khi growth-supporting carbon/nutrient cao:

$$
TOR\uparrow
$$

có thể trì hoãn một số starvation-like responses.

Không dùng TOR như “anti-senescence scalar” phổ quát.

### 4.15.48. Nitrogen status

N deficiency có thể tăng senescence ở lá già:

$$
N_{status}\downarrow
\rightarrow
Remobilization\uparrow
$$

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

$$
S_{leaf}
\neq
S_{root}
\neq
S_{stem}
\neq
S_{grain}
$$

Cần state riêng theo organ.

### 4.15.56. Root senescence

Root senescence ảnh hưởng:
- active root length;
- nutrient uptake;
- hydraulic conductance;
- rhizodeposition.

### 4.15.57. Root mortality

Một balance:

$$
\frac{dM_{root}}{dt}
=
Growth_{root}
-
Mortality_{root}
$$

Trong đó:

$$
Mortality_{root}
=
k_{death}S_{root}M_{root}
$$

### 4.15.58. Active root fraction

$$
f_{active}
=
\frac{M_{root,active}}
{M_{root,total}}
$$

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

$$
Senescence
=
Necrosis
$$

Necrosis có thể là damage/pathology, còn senescence là regulated developmental program.

### 4.15.64. Senescence vs abscission

Abscission là quá trình tách cơ quan.

Một leaf có thể senesce trước abscission nhưng hai quá trình không đồng nhất.

### 4.15.65. Abscission state

Một reduced state:

$$
A_{abs}
=
\sigma(
\beta_0+\beta_{ET}ET^*-\beta_{IAA}IAA^*+\beta_SS_o
)
$$

chỉ dùng như proposed model.

### 4.15.66. Nutrient loss through abscission

Nếu leaf rụng trước remobilization hoàn tất:

$$
Loss_i
=
M_{i,leaf}
A_{abs}
$$

làm giảm nutrient-use efficiency.

### 4.15.67. Nutrient-use efficiency

Một crop-level metric:

$$
NUE
=
\frac{Yield}
{N\ input}
$$

Cần phân biệt:
- uptake efficiency;
- utilization efficiency;
- remobilization efficiency.

### 4.15.68. Uptake efficiency

$$
NUpE
=
\frac{N_{plant}}
{N_{available/input}}
$$

định nghĩa denominator phải ghi rõ.

### 4.15.69. Utilization efficiency

$$
NUtE
=
\frac{Yield}
{N_{plant}}
$$

### 4.15.70. Senescence và NUE

Senescence timing có thể ảnh hưởng NUE qua:
- remobilization;
- late uptake;
- photosynthetic duration;
- sink filling.

### 4.15.71. Protein turnover cost

Remobilization không miễn phí về năng lượng.

Một energetic cost:

$$
ATP_{rem}
=
ATP_{proteolysis}
+
ATP_{transport}
+
ATP_{reassimilation}
$$

### 4.15.72. Carbon cost của remobilization

Amino acid transport và N reassimilation có thể cần carbon skeleton.

Do đó:

$$
Remobilization
\neq
Zero\ cost
$$

### 4.15.73. Senescence state-space

$$
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
$$

### 4.15.74. Dynamics

$$
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
$$

### 4.15.75. Output

$$
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
$$

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

$$
Sugar/T6P/SnRK1/TOR
\rightarrow
Senescence\ regulation
$$

### 4.15.78. Coupling với 4.14

$$
DVS
\rightarrow
Senescence\ program
$$

Phenology xác định khi senescence developmentally competent.

### 4.15.79. Coupling với 4.6

$$
Senescence
\rightarrow
GLAI\downarrow
\rightarrow
A_{can}\downarrow
$$

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

$$
Development
+
Stress
+
Source\text{-}Sink
\rightarrow
Senescence
$$

sau đó:

$$
Senescence
\rightarrow
Remobilization
+
Photosynthetic\ decline
+
Organ\ turnover
$$

để nối trực tiếp vòng đời cơ quan với năng suất và hiệu quả sử dụng dinh dưỡng.

---


## 4.16. Sinh trưởng sinh khối – phân bổ cơ quan – allometry – cấu trúc tán và rễ

### 4.16.1. Vai trò của 4.16

4.16 nối các module trước thành tăng trưởng biomass thực:

<div class="flow-chain">
<strong>Quang hợp</strong> → <strong>Carbon khả dụng</strong> → <strong>Source–sink</strong> → <strong>Phân bổ cơ quan</strong> → <strong>Hình thành sinh khối</strong> → <strong>Cấu trúc tán/rễ</strong>
</div>

Mục tiêu là tách rõ:
- carbon supply;
- sink demand;
- organ growth capacity;
- allocation;
- turnover.

### 4.16.2. Tổng sinh khối

$$
B_{tot}
=
B_{root}
+
B_{stem}
+
B_{leaf}
+
B_{repro}
+
B_{storage}
$$

Tùy crop có thể bỏ hoặc gộp một số compartment.

### 4.16.3. Cân bằng sinh khối toàn cây

$$
\frac{dB_{tot}}{dt}
=
G_{tot}
-
L_{turnover}
$$

Trong đó:
- \(G_{tot}\): biomass growth;
- \(L_{turnover}\): loss do senescence, mortality hoặc abscission.

### 4.16.4. Carbon-limited growth

Nếu biomass quy đổi từ carbon:

$$
G_C
=
Y_G
C_{avail}
$$

Trong đó \(Y_G\) là growth yield coefficient.

Không dùng một \(Y_G\) chung cho mọi tissue nếu thành phần hóa sinh khác nhau rõ.

### 4.16.5. Organ-specific growth

$$
\frac{dB_o}{dt}
=
G_o
-
L_o
$$

với:

$$
o\in
\{root,stem,leaf,reproductive,storage\}
$$

### 4.16.6. Allocation fraction

$$
a_o
=
\frac{F_{C,o}}
{\sum_jF_{C,j}}
$$

với:

$$
\sum_oa_o=1
$$

nếu toàn bộ carbon growth được phân bổ cho các compartment này.

### 4.16.7. Allocation theo sink strength

Từ 4.5:

$$
a_o
=
\frac{SS_o^{eff}}
{\sum_jSS_j^{eff}}
$$

Trong đó:

$$
SS_o^{eff}
=
M_oq_oF_{dev,o}F_{resource,o}
$$

Đây là VECrop reduced formulation.

### 4.16.8. Source limitation

Nếu carbon supply thấp:

$$
\sum_oDemand_{C,o}
>
C_{available}
$$

thì:

$$
Growth
\approx
Source\ limited
$$

### 4.16.9. Sink limitation

Nếu:

$$
C_{available}
>
\sum_oDemand_{C,o}
$$

nhưng organ growth capacity thấp thì:

$$
Growth
\approx
Sink\ limited
$$

### 4.16.10. Supply–capacity coupling

Một conceptual formulation:

$$
G_o
=
\min
(
G_{o}^{supply},
G_{o}^{capacity}
)
$$

### 4.16.11. Growth capacity

$$
G_o^{capacity}
=
f(
Meristem,
CellCycle,
Expansion,
TOR,
Hormone,
Stage
)
$$

nối trực tiếp với 4.14.

### 4.16.12. Supply term

$$
G_o^{supply}
=
f(
F_{C,o},
N_o,
P_o,
K_o,
Water_o,
ATP_o
)
$$

### 4.16.13. Carbon-to-biomass conversion

Một organ-specific coefficient:

$$
B_o
=
\eta_oC_o
$$

Trong đó \(\eta_o\) phụ thuộc:
- lipid;
- protein;
- carbohydrate;
- mineral fraction.

### 4.16.14. Growth respiration

Từ 4.8:

$$
R_{G,o}
=
G_o
\left(
\frac1{Y_{G,o}}-1
\right)
$$

Phân bổ carbon phải trừ growth respiration trước khi tính dry matter gain.

### 4.16.15. Maintenance respiration

$$
R_{M,o}
=
m_o(T)M_{met,o}
$$

Tissue già có thể có metabolic fraction thấp hơn tissue non.

### 4.16.16. Net carbon available

$$
C_{avail}
=
A_{can}
-
R_M
-
R_G
-
L_C
$$

Không double count respiration nếu \(Y_G\) đã bao gồm chi phí biosynthesis tương ứng.

### 4.16.17. Root allocation

Một root allocation state:

$$
a_r
=
f(
N_{status},
P_{status},
Water,
Carbon,
Hormone,
Stage
)
$$

Root allocation thường thay đổi khi resource limitation thay đổi.

### 4.16.18. Shoot allocation

$$
a_s
=
a_{leaf}+a_{stem}+a_{repro}
$$

với:

$$
a_r+a_s=1
$$

trong mô hình hai compartment.

### 4.16.19. Root:shoot ratio

$$
R:S
=
\frac{B_{root}}
{B_{shoot}}
$$

Không xem một giá trị R:S là optimum phổ quát.

### 4.16.20. Functional equilibrium

Một conceptual hypothesis:

$$
Allocation
\rightarrow
Resource\ acquisition\ balance
$$

Cây có thể tăng allocation vào cơ quan giúp thu nhận resource đang giới hạn, nhưng response phụ thuộc crop và stage.

### 4.16.21. Leaf biomass

$$
\frac{dB_{leaf}}{dt}
=
G_{leaf}
-
L_{leaf}
$$

### 4.16.22. Leaf area

$$
A_{leaf}
=
SLA
B_{leaf}
$$

Nếu SLA biến đổi theo thời gian:

$$
A_{leaf}(t)
=
SLA(t)B_{leaf}(t)
$$

### 4.16.23. LAI

$$
LAI
=
\frac{A_{leaf}}{A_{ground}}
$$

### 4.16.24. Dynamic SLA

Một reduced relationship:

$$
SLA
=
SLA_{ref}
F_{light}
F_N
F_T
F_{age}
$$

Cần calibration.

### 4.16.25. Stem biomass

$$
\frac{dB_{stem}}{dt}
=
G_{stem}
-
L_{stem}
-
F_{rem,stem}
$$

Nếu stem là storage organ tạm thời thì phải tách structural và reserve pools.

### 4.16.26. Structural và reserve biomass

$$
B_o
=
B_{struct,o}
+
B_{reserve,o}
$$

Điều này hữu ích cho lúa và ngô khi stem tích trữ NSC.

### 4.16.27. Storage pool

$$
\frac{dB_{reserve,o}}{dt}
=
Storage_o
-
Mobilization_o
$$

### 4.16.28. Reproductive biomass

$$
\frac{dB_{repro}}{dt}
=
G_{repro}
-
Loss_{repro}
$$

Ở crop lấy hạt, sink reproductive thường tăng mạnh sau flowering.

### 4.16.29. Reproductive allocation

$$
a_{repro}
=
f(
DVS,
Sink_{repro},
Carbon,
N,
Water
)
$$

### 4.16.30. Partition coefficient

Một empirical partition coefficient:

$$
p_o
=
\frac{\Delta B_o}
{\Delta B_{tot}}
$$

Phải xác định theo stage.

### 4.16.31. Không dùng partition coefficient cố định cả vụ

Vì:

$$
p_o
=
p_o(stage,environment,genotype)
$$

### 4.16.32. Allometry

Một allometric relation:

$$
B_y
=
aB_x^b
$$

Log transform:

$$
\ln B_y
=
\ln a
+
b\ln B_x
$$

### 4.16.33. Allometry không phải cơ chế

Allometry là mô tả quan hệ scaling.

Không nên dùng nó thay cho:
- carbon balance;
- developmental transition;
- sink strength
nếu mục tiêu là cơ chế.

### 4.16.34. Relative growth rate

$$
RGR
=
\frac1B
\frac{dB}{dt}
$$

### 4.16.35. Crop growth rate

$$
CGR
=
\frac1{A_g}
\frac{dB}{dt}
$$

### 4.16.36. Net assimilation rate

$$
NAR
=
\frac1{A_L}
\frac{dB}{dt}
$$

NAR là chỉ số sinh trưởng, không đồng nhất trực tiếp với leaf gas-exchange \(A_n\).

### 4.16.37. Leaf area ratio

$$
LAR
=
\frac{A_L}{B}
$$

và:

$$
RGR
=
NAR\times LAR
$$

theo decomposition cổ điển.

### 4.16.38. Specific leaf area và leaf mass ratio

$$
SLA
=
\frac{A_L}{B_L}
$$

$$
LMR
=
\frac{B_L}{B}
$$

Do đó:

$$
LAR
=
SLA\times LMR
$$

### 4.16.39. Canopy closure

Khi LAI tăng:

$$
f_{intercept}
=
1-e^{-k_LLAI}
$$

Canopy closure làm thay đổi:
- light interception;
- within-canopy VPD;
- leaf temperature;
- weed suppression.

### 4.16.40. Self-shading

Khi LAI quá cao:

$$
A_{lower\ canopy}\downarrow
$$

và maintenance cost có thể tăng so với carbon gain.

### 4.16.41. Optimal LAI không phổ quát

Optimum LAI phụ thuộc:
- solar radiation;
- leaf angle;
- extinction coefficient;
- crop;
- season;
- water/nutrient status.

### 4.16.42. Root biomass

$$
\frac{dB_{root}}{dt}
=
G_{root}
-
Mortality_{root}
$$

### 4.16.43. Root length

$$
L_{root}
=
SRL
B_{root}
$$

Trong đó:

$$
SRL
=
\frac{Root\ length}
{Root\ dry\ mass}
$$

### 4.16.44. Dynamic SRL

$$
SRL
=
SRL_{ref}
F_{diameter}
F_{age}
F_N
F_P
F_{water}
$$

### 4.16.45. Root surface area

Một cylindrical approximation:

$$
A_{root}
=
2\pi rL_{root}
$$

Nếu diameter distribution rộng, phải tích phân theo root classes.

### 4.16.46. Root architecture

Cần tách:
- axial roots;
- lateral roots;
- fine roots;
- root hairs.

Total biomass không đủ mô tả nutrient acquisition.

### 4.16.47. Root depth growth

Một reduced form:

$$
\frac{dZ_r}{dt}
=
v_{root,max}
F_TF_{\Psi}F_{O_2}F_{soil}
$$

### 4.16.48. Soil mechanical resistance

Root elongation có thể giảm khi penetration resistance tăng.

Một reduced modifier:

$$
F_{PR}
=
f(PR)
$$

Không dùng một threshold universal cho mọi đất và root type.

### 4.16.49. Root distribution by depth

$$
\beta(z)
=
\frac{RLD(z)}
{\int_0^{Z_r}RLD(z)\,dz}
$$

với:

$$
\int_0^{Z_r}\beta(z)\,dz=1
$$

### 4.16.50. Active root fraction

$$
A_{root,active}
=
A_{root}
f_{active}
$$

Uptake và hydraulics nên dùng active fraction khi có dữ liệu.

### 4.16.51. Root turnover

$$
Turnover_{root}
=
k_{turn,root}
B_{root}
$$

### 4.16.52. Root exudation carbon cost

$$
C_{root,total}
=
C_{growth}
+
C_{resp}
+
C_{exudation}
$$

Exudation không được bỏ khỏi carbon budget nếu nghiên cứu rhizosphere.

### 4.16.53. Mycorrhizal carbon cost

$$
C_{myc}
=
f(
colonization,
P_{delivery},
C_{supply}
)
$$

### 4.16.54. Organ nitrogen concentration

$$
N_{conc,o}
=
\frac{M_{N,o}}
{B_o}
$$

Growth dilution có thể làm concentration giảm dù total N tăng.

### 4.16.55. Nutrient dilution

Một empirical dilution curve:

$$
N_c
=
aB^{-b}
$$

Đây là benchmark empirical, không phải định luật phổ quát.

### 4.16.56. Critical nutrient concentration

Critical concentration là concentration tối thiểu liên quan với gần-maximal growth trong một calibration context.

Không chuyển trực tiếp giữa crop/cultivar nếu chưa kiểm định.

### 4.16.57. Nutrient demand from biomass growth

$$
Req_{i,o}
=
q_{i,o}^{*}
\frac{dB_o}{dt}
$$

nối trực tiếp 4.16 với 4.7.

### 4.16.58. Growth–nutrient feedback

Nếu nutrient supply thấp:

$$
L_i
=
\frac{Sup_i}
{Req_i+\varepsilon}
$$

thì organ growth capacity có thể giảm.

### 4.16.59. Water–growth feedback

Nếu leaf expansion giảm do turgor:

$$
LAI\downarrow
\rightarrow
Light\ interception\downarrow
\rightarrow
A_{can}\downarrow
$$

### 4.16.60. Carbon–growth feedback

Nếu sink growth thấp:

$$
Sucrose_{leaf}\uparrow
\rightarrow
Source\ feedback
$$

nối 4.16 với 4.13.

### 4.16.61. Senescence–growth coupling

Từ 4.15:

$$
L_{leaf}\uparrow
\rightarrow
GLAI\downarrow
$$

và:

$$
F_{rem}\uparrow
$$

có thể đồng thời xảy ra.

### 4.16.62. Turnover balance

$$
Net\ biomass\ change
=
Gross\ growth
-
Turnover
$$

Không đồng nhất net biomass gain với gross production.

### 4.16.63. Aboveground biomass

$$
AGB
=
B_{leaf}
+
B_{stem}
+
B_{repro}
$$

### 4.16.64. Belowground biomass

$$
BGB
=
B_{root}
+
B_{belowground\ storage}
$$

tùy crop.

### 4.16.65. Shoot biomass

$$
B_{shoot}
=
AGB
$$

chỉ khi định nghĩa shoot không bao gồm cấu trúc dưới đất.

### 4.16.66. Dry matter vs fresh mass

Không trộn:

$$
Fresh\ mass
\neq
Dry\ mass
$$

Fresh mass phụ thuộc mạnh water content.

### 4.16.67. Dry matter fraction

$$
DMF
=
\frac{Dry\ mass}
{Fresh\ mass}
$$

### 4.16.68. Marketable biomass

Đối với xà lách:

$$
B_{market}
\le
B_{shoot}
$$

do loại bỏ:
- damaged leaves;
- senescent leaves;
- diseased tissue;
- nonmarketable fraction.

### 4.16.69. Structural biomass

Một simplified decomposition:

$$
B_{struct}
=
B_{cellwall}
+
B_{protein}
+
B_{lipid}
+
B_{other}
$$

### 4.16.70. Biomass composition

Composition ảnh hưởng:
- construction cost;
- C:N ratio;
- energy demand;
- tissue longevity.

### 4.16.71. Construction cost

Một generic cost:

$$
C_{cost,o}
=
\sum_j
c_jM_{j,o}
$$

với \(c_j\) là carbon/energy cost theo thành phần.

### 4.16.72. Không dùng cùng construction cost cho mọi organ

Leaf, root, stem và grain có composition khác nhau.

### 4.16.73. Growth efficiency

$$
GE
=
\frac{\Delta B}
{C_{substrate}}
$$

Cần định nghĩa denominator rõ.

### 4.16.74. Radiation-use efficiency

Một empirical crop model:

$$
\Delta B
=
RUE
\times
IPAR
$$

RUE hữu ích như benchmark nhưng không thay thế photosynthesis-respiration model cơ chế.

### 4.16.75. Không nhân RUE vào mechanistic carbon gain

Nếu \(A_{can}\) đã tính carbon assimilation thì không:

$$
B
=
A_{can}
\times
RUE
$$

một cách máy móc.

### 4.16.76. Water-use efficiency

$$
WUE
=
\frac{Biomass\ or\ Yield}
{Water\ use}
$$

Phải ghi rõ numerator và denominator.

### 4.16.77. Biomass allocation dưới drought

Drought có thể thay đổi:
- root:shoot;
- leaf expansion;
- reproductive allocation;
- senescence.

Response phụ thuộc timing.

### 4.16.78. Biomass allocation dưới N deficiency

N deficiency thường ảnh hưởng mạnh:
- leaf area;
- protein concentration;
- shoot growth;
- root allocation.

Không hard-code cùng response cho mọi crop.

### 4.16.79. Density effect

Per-plant biomass:

$$
B_{plant}
=
f(D)
$$

Per-area biomass:

$$
B_{area}
=
D
B_{plant}
$$

Hai đại lượng có thể phản ứng ngược chiều với density.

### 4.16.80. Competition

Competition gồm:
- light;
- water;
- nutrients;
- space.

Một canopy model nên tránh gộp hết thành một density scalar nếu dữ liệu đủ.

### 4.16.81. Size hierarchy

Trong quần thể:

$$
B_i
\neq
B_j
$$

ngay cả cùng genotype do competition và spatial heterogeneity.

### 4.16.82. Distributional growth

Có thể mô hình:

$$
B\sim Lognormal(\mu_B,\sigma_B)
$$

nếu cần mô tả variability quần thể.

### 4.16.83. Lúa

Các compartment quan trọng:
- root;
- leaf;
- culm;
- sheath;
- panicle/grain;
- stem NSC reserve.

### 4.16.84. Lúa: tiller biomass

$$
B_{shoot}
=
\sum_{k=1}^{N_{tiller}}
B_{tiller,k}
$$

Tiller mortality cần nối với 4.14 và 4.15.

### 4.16.85. Ngô

Các compartment:
- root;
- leaf;
- stalk;
- cob;
- grain.

Post-silking allocation phải tách grain sink khỏi vegetative maintenance.

### 4.16.86. Ngô: kernel demand

$$
Demand_{grain}
=
N_{kernel}
q_{kernel}(t)
$$

### 4.16.87. Xà lách

Các compartment thực dụng:
- root;
- marketable leaves;
- nonmarketable/senescent leaves;
- stem/bolting axis nếu xuất hiện.

### 4.16.88. Xà lách: fresh vs dry yield

Market yield thường là fresh mass nên cần:

$$
Fresh\ yield
=
\frac{Dry\ mass}
{DMF}
$$

chỉ khi DMF được đo/ước lượng phù hợp.

### 4.16.89. State-space biomass

$$
\mathbf B
=
[
B_{root},
B_{stem},
B_{leaf},
B_{repro},
B_{reserve}
]^T
$$

### 4.16.90. Biomass dynamics

$$
\frac{d\mathbf B}{dt}
=
\mathbf G
-
\mathbf L
$$

### 4.16.91. Growth vector

$$
\mathbf G
=
\mathbf a
G_{tot}
$$

với:

$$
\sum_oa_o=1
$$

### 4.16.92. Turnover vector

$$
\mathbf L
=
[
L_{root},
L_{stem},
L_{leaf},
L_{repro},
L_{reserve}
]^T
$$

### 4.16.93. Allocation constraints

$$
0\le a_o\le1
$$

và:

$$
\sum_oa_o=1
$$

### 4.16.94. Dynamic allocation

$$
\frac{da_o}{dt}
=
f(
stage,
sink,
resource,
hormone,
stress
)
$$

thay vì xem \(a_o\) cố định.

### 4.16.95. Calibration hierarchy

Nên hiệu chỉnh:
1. total biomass;
2. organ biomass;
3. LAI/SLA;
4. root length/depth;
5. reserve pools;
6. allocation trajectories.

### 4.16.96. Validation

Validation độc lập nên có:
- destructive biomass sampling;
- organ dry mass;
- LAI;
- root traits;
- phenology;
- reserve/remobilization data.

### 4.16.97. Không fit allocation bằng final yield duy nhất

Final yield không đủ nhận dạng:
- root allocation;
- leaf/stem partition;
- turnover;
- reserve dynamics.

### 4.16.98. Mass-balance test

Biomass balance:

$$
B_{tot}(t_2)
-
B_{tot}(t_1)
\approx
\int_{t_1}^{t_2}
(G_{tot}-L_{turnover})dt
$$

### 4.16.99. Carbon-balance test

$$
C_{assim}
-
C_{resp}
-
C_{export/loss}
-
\Delta C_{biomass}
\approx0
$$

### 4.16.100. Coupling với 4.5

Phloem flux cấp carbon cho allocation.

### 4.16.101. Coupling với 4.6

LAI và canopy architecture quyết định carbon supply.

### 4.16.102. Coupling với 4.7

Nutrient pools quyết định growth stoichiometry.

### 4.16.103. Coupling với 4.8

Respiration quyết định carbon cost.

### 4.16.104. Coupling với 4.13

Sugar/TOR/SnRK1 điều chỉnh growth capacity.

### 4.16.105. Coupling với 4.14

Phenology xác định organ priority và developmental capacity.

### 4.16.106. Coupling với 4.15

Senescence/turnover quyết định net biomass và remobilization.

### 4.16.107. Không double counting

Nếu allocation đã được quyết định bởi sink strength và source supply, không nhân thêm:
- root factor;
- shoot factor;
- stage factor
vào biomass một lần nữa nếu chúng mô tả cùng cơ chế.

### 4.16.108. Vai trò của 4.16 trong VECrop

4.16 biến flux và capacity thành trạng thái sinh khối thực:

<div class="flow-chain">
<strong>Carbon supply</strong> → <strong>Sink strength</strong> → <strong>Allocation</strong> → <strong>Organ growth</strong> → <strong>Canopy/Root architecture</strong> → <strong>Total biomass</strong>
</div>

### 4.16.109. Kết luận 4.16

Sinh khối không nên được tính bằng một hệ số tăng trưởng duy nhất.

VECrop nên tách:

$$
Gross\ production
\rightarrow
Respiration
\rightarrow
Allocation
\rightarrow
Organ\ growth
\rightarrow
Turnover
\rightarrow
Net\ biomass
$$

và giữ riêng:
- source limitation;
- sink limitation;
- organ capacity;
- allocation;
- senescence.

Điều này tạo nền trực tiếp cho bước tiếp theo là **hình thành năng suất kinh tế và Harvest Index**.

---


## 4.17. Hình thành năng suất kinh tế – Harvest Index – thiết lập sink – filling – source/sink limitation – năng suất thương phẩm

### 4.17.1. Vai trò của 4.17

4.17 là bước chuyển từ:

<div class="flow-chain">
<strong>Sinh khối toàn cây</strong> → <strong>Cơ quan kinh tế</strong> → <strong>Số lượng sink</strong> → <strong>Kích thước sink</strong> → <strong>Filling</strong> → <strong>Năng suất</strong>
</div>

Không được đồng nhất:

$$
Biomass
=
Yield
$$

vì năng suất kinh tế phụ thuộc cả:
- tổng sinh khối;
- số cơ quan thu hoạch;
- sức chứa sink;
- phân bổ;
- thời gian filling;
- remobilization;
- stress theo giai đoạn;
- tỷ lệ thương phẩm.

### 4.17.2. Năng suất kinh tế

Một định nghĩa tổng quát:

$$
Y_{econ}
=
\frac{M_{harvestable}}{A_{ground}}
$$

Đơn vị thường:
- kg m\(^{-2}\);
- t ha\(^{-1}\).

### 4.17.3. Năng suất sinh học

$$
Y_{bio}
=
\frac{B_{total}}{A_{ground}}
$$

Phải phân biệt với năng suất kinh tế.

### 4.17.4. Harvest Index

$$
HI
=
\frac{Y_{econ}}
{B_{aboveground}}
$$

với cây lấy hạt.

Không dùng cùng định nghĩa cho mọi crop nếu cơ quan kinh tế khác nhau.

### 4.17.5. Harvest Index không phải hằng số

$$
HI
=
HI(
genotype,
stage,
environment,
source\text{-}sink,
stress
)
$$

Không được giữ cố định cả vụ nếu muốn mô hình động.

### 4.17.6. Yield decomposition tổng quát

Có thể phân rã:

$$
Y
=
N_{unit}
\times
W_{unit}
$$

Trong đó:
- \(N_{unit}\): số đơn vị thu hoạch trên diện tích;
- \(W_{unit}\): khối lượng trung bình mỗi đơn vị.

### 4.17.7. Yield component multiplicativity caution

Công thức:

$$
Y
=
N_{unit}
W_{unit}
$$

là identity cấu trúc nếu định nghĩa đúng.

Nhưng không có nghĩa hai thành phần độc lập; thường tồn tại compensation:

$$
N_{unit}\uparrow
\Rightarrow
W_{unit}\downarrow
$$

### 4.17.8. Sink number

Số sink được xác lập qua:
- organ initiation;
- flowering;
- fertilization;
- abortion;
- mortality.

Một balance:

$$
\frac{dN_{sink}}{dt}
=
Initiation
-
Abortion
-
Loss
$$

### 4.17.9. Sink size

Khối lượng sink:

$$
M_{sink}
=
N_{sink}
m_{sink}
$$

### 4.17.10. Potential sink capacity

Một sink capacity:

$$
Cap_{sink}
=
N_{sink}
W_{max,sink}
$$

Đây là upper bound cơ chế, không phải yield prediction trực tiếp.

### 4.17.11. Sink strength

Từ 4.5:

$$
SS_o
=
M_oq_o
$$

Mở rộng cho organ kinh tế:

$$
SS_{econ}
=
N_{sink}
q_{sink}
F_{dev}
F_{hormone}
F_{resource}
$$

### 4.17.12. Source supply

$$
Supply_C
=
A_{can}
+
F_{rem,C}
-
R
$$

Nếu dùng carbon unit nhất quán.

### 4.17.13. Sink demand

$$
Demand_C
=
N_{sink}
d_{sink}(t)
$$

### 4.17.14. Source limitation

Nếu:

$$
Supply_C
<
Demand_C
$$

thì:

$$
Growth_{sink}
\approx
Source\ limited
$$

### 4.17.15. Sink limitation

Nếu:

$$
Supply_C
>
Demand_C
$$

nhưng sink capacity thấp:

$$
Growth_{sink}
\approx
Sink\ limited
$$

### 4.17.16. Co-limitation

Trong nhiều trường hợp:

$$
Source\ limitation
\land
Sink\ limitation
$$

có thể đồng thời tồn tại theo thời gian hoặc giữa organ.

Không ép mô hình chỉ chọn một nhãn cho cả vụ.

### 4.17.17. Filling rate

Một generic filling rate:

$$
\frac{dm_{sink}}{dt}
=
r_{fill}(t)
$$

### 4.17.18. Logistic filling

Một empirical formulation:

$$
m(t)
=
\frac{W_{max}}
{1+\exp[-k(t-t_{50})]}
$$

Không xem logistic là cơ chế sinh học.

### 4.17.19. Gompertz filling

$$
m(t)
=
W_{max}
\exp
[
-\exp(-k(t-t_i))
]
$$

Có thể phù hợp dữ liệu một số organ.

### 4.17.20. Mechanistic filling

Ở mức cơ chế:

$$
\frac{dM_{sink}}{dt}
=
F_{C,in}
+
F_{N,in}
+
F_{P,in}
+
F_{K,in}
-
R_{sink}
-
Loss
$$

### 4.17.21. Filling duration

$$
Y_{sink}
\approx
\int_{t_{set}}^{t_{maturity}}
r_{fill}(t)\,dt
$$

Năng suất phụ thuộc cả:
- rate;
- duration.

### 4.17.22. Shortened filling duration

Heat hoặc stress cuối vụ có thể làm:

$$
Duration_{fill}\downarrow
$$

dù instantaneous filling rate ban đầu không giảm mạnh.

### 4.17.23. Thermal control của filling

Một temperature modifier:

$$
r_{fill}^{eff}
=
r_{fill,max}
F_T(T)
$$

Cardinal temperatures phải crop/stage-specific.

### 4.17.24. Carbon supply theo thời gian

Không dùng:

$$
Y
=
A_{can,mean}
\times
Duration
$$

nếu source và sink thay đổi mạnh theo thời gian.

Nên:

$$
C_{sup,total}
=
\int
Supply_C(t)\,dt
$$

### 4.17.25. Nitrogen supply cho sink

$$
Supply_N
=
U_N
+
F_{rem,N}
$$

### 4.17.26. Protein yield

Ở crop lấy hạt:

$$
Protein\ yield
=
Y_{grain}
\times
Protein\ concentration
$$

Yield và quality có thể trade-off.

### 4.17.27. Nutrient concentration dilution

Tăng carbohydrate accumulation có thể làm giảm nutrient concentration dù total nutrient không giảm tương ứng.

### 4.17.28. Grain N balance

$$
\frac{dM_{N,grain}}{dt}
=
U_{N,new}
+
F_{rem,N}
-
Loss_N
$$

### 4.17.29. Remobilization contribution

$$
f_{rem,N}
=
\frac{N_{grain,rem}}
{N_{grain,total}}
$$

Cần isotope/tracer hoặc mass-balance đủ tốt để ước lượng đáng tin.

### 4.17.30. Harvestable fraction

$$
f_h
=
\frac{B_{harvestable}}
{B_{organ,econ}}
$$

Cho crop thị trường tươi, \(f_h\) có thể < 1 do loại bỏ mô hỏng.

### 4.17.31. Marketable yield

$$
Y_{market}
=
Y_{gross}
f_{market}
$$

### 4.17.32. Marketable fraction

$$
f_{market}
=
1
-
f_{defect}
-
f_{disease}
-
f_{senescent}
-
f_{undersize}
-
f_{oversize}
$$

Không nhất thiết cộng tuyến tính nếu các defect chồng lấp; đây là bookkeeping form.

### 4.17.33. Yield quality vector

Có thể định nghĩa:

$$
\mathbf Q
=
[
size,
protein,
sugar,
moisture,
color,
firmness,
defect
]^T
$$

### 4.17.34. Multi-objective yield

Một objective:

$$
J
=
w_YY
+
w_QQ
-
w_CC
$$

nếu tối ưu đồng thời:
- yield;
- quality;
- cost.

### 4.17.35. Yield potential

Khái niệm:

$$
Y_p
=
f(
genotype,
radiation,
temperature,
CO_2,
phenology
)
$$

trong điều kiện không bị giới hạn bởi:
- water;
- nutrients;
- pests/diseases.

Đây là khái niệm benchmark, không phải một hằng số cố định.

### 4.17.36. Water-limited yield potential

$$
Y_w
=
f(
Y_p,
water\ supply,
ET,
soil
)
$$

### 4.17.37. Nutrient-limited yield

Một reduced formulation:

$$
Y_n
=
Y_p
F_N
F_P
F_K
$$

chỉ dùng khi các stress chưa được mô hình hóa cơ chế.

### 4.17.38. Attainable yield

Một conceptual:

$$
Y_a
\le
Y_w
\le
Y_p
$$

nhưng định nghĩa operational phải ghi rõ context.

### 4.17.39. Yield gap

$$
Y_g
=
Y_{benchmark}
-
Y_{actual}
$$

Benchmark có thể là:
- \(Y_p\);
- \(Y_w\);
- best-farm;
- experimental ceiling.

Phải ghi rõ loại nào.

### 4.17.40. Harvest Index động

Một state:

$$
HI(t)
=
\frac{B_{econ}(t)}
{B_{shoot}(t)}
$$

### 4.17.41. HI onset

Trước reproductive transition:

$$
HI\approx0
$$

với crop lấy hạt.

### 4.17.42. HI growth

Một reduced form:

$$
\frac{dHI}{dt}
=
r_{HI}
F_{stage}
F_{sink}
F_{resource}
$$

### 4.17.43. HI ceiling

$$
HI
\le
HI_{max,G}
$$

với \(HI_{max,G}\) genotype-specific.

### 4.17.44. Không áp dụng grain HI cho xà lách

Với xà lách:

$$
Y_{econ}
=
B_{marketable\ leaf}
$$

nên harvest index cần định nghĩa lại theo mục tiêu thương phẩm.

### 4.17.45. Reproductive success

Một reproductive success fraction:

$$
f_{fert}
=
\frac{N_{fertilized}}
{N_{potential}}
$$

### 4.17.46. Abortion fraction

$$
f_{abort}
=
\frac{N_{aborted}}
{N_{set}}
$$

### 4.17.47. Final sink number

$$
N_{final}
=
N_{potential}
f_{fert}
(1-f_{abort})
$$

### 4.17.48. Stress sensitivity windows

Không dùng một stress factor cho cả vụ.

Cần phân biệt:
- pre-flowering;
- flowering;
- early filling;
- late filling.

### 4.17.49. Stage-weighted stress

Một reduced cumulative stress:

$$
S_{cum}
=
\int
w_{stage}(t)
S(t)\,dt
$$

Trong đó \(w_{stage}\) phải calibration theo crop/process.

### 4.17.50. Heat around flowering

Heat có thể làm giảm:
- pollen viability;
- anthesis synchrony;
- fertilization;
- sink number.

### 4.17.51. Drought around flowering

Drought có thể giảm:
- reproductive success;
- silk emergence ở ngô;
- panicle fertility ở lúa;
- sink establishment.

### 4.17.52. Stress after flowering

Sau flowering, stress thường tác động mạnh lên:
- filling rate;
- filling duration;
- remobilization;
- senescence.

### 4.17.53. Density effect on yield components

$$
Y_{area}
=
D
\times
Y_{plant}
$$

Khi density tăng:
- sink number per area có thể tăng;
- unit weight có thể giảm;
- competition tăng.

### 4.17.54. Compensation

Một empirical relationship:

$$
W_{unit}
=
f(N_{unit})
$$

thường có negative compensation.

### 4.17.55. Yield stability

Không chỉ xét mean yield.

Có thể dùng:

$$
CV_Y
=
\frac{\sigma_Y}{\mu_Y}
$$

### 4.17.56. Environment sensitivity

Một genotype response:

$$
Y_{g,e}
=
\mu
+
G_g
+
E_e
+
(G\times E)_{g,e}
+
\epsilon
$$

### 4.17.57. G×E

Genotype × environment interaction quan trọng khi chuyển parameter giữa:
- location;
- season;
- management.

### 4.17.58. Yield uncertainty

$$
Y
=
f(
X,
\theta,
weather,
management
)
$$

Nên propagate uncertainty thay vì chỉ báo một con số.

### 4.17.59. Monte Carlo yield

$$
X^{(k)},
\theta^{(k)}
\rightarrow
Y^{(k)}
$$

Báo:
- median;
- P10;
- P50;
- P90
khi phù hợp.

### 4.17.60. Yield sensitivity

$$
S_{\theta_i}
=
\frac{\partial Y}
{\partial\theta_i}
$$

### 4.17.61. Elasticity

$$
E_{\theta_i}
=
\frac{\partial Y}{\partial\theta_i}
\frac{\theta_i}{Y}
$$

giúp so sánh parameter khác đơn vị.

### 4.17.62. Counterfactual yield

Một diagnostic:

$$
\Delta Y_{stress}
=
Y_{without\ stress}
-
Y_{actual}
$$

Chỉ có ý nghĩa nếu model causal đủ đáng tin.

### 4.17.63. Attribution caution

Không được kết luận:
“x% mất năng suất do N”
nếu:
- water;
- N;
- heat
tương tác mạnh mà model không nhận dạng được riêng.

### 4.17.64. Harvest timing

Yield marketable phụ thuộc thời điểm thu hoạch.

Một objective:

$$
t_h^*
=
\arg\max_t
[
Y_{market}(t)
\times
Price(t)
-
Loss(t)
]
$$

### 4.17.65. Overmaturity

Thu hoạch trễ có thể:
- tăng dry matter;
- nhưng giảm quality;
- tăng lodging;
- tăng shattering;
- tăng senescence.

### 4.17.66. Early harvest

Thu hoạch sớm có thể:
- giảm unit weight;
- tăng moisture;
- giảm total biomass;
- nhưng cải thiện market quality ở crop tươi.

### 4.17.67. Economic yield

$$
Revenue
=
Y_{market}
P_y
$$

### 4.17.68. Gross margin

$$
GM
=
Revenue
-
Variable\ Costs
$$

Không tối ưu input chỉ theo biological yield nếu mục tiêu sản xuất là lợi nhuận.

### 4.17.69. Marginal response

$$
MR_i
=
\frac{\partial Y}
{\partial u_i}
$$

với \(u_i\) là irrigation/fertilizer/density.

### 4.17.70. Economic optimum

$$
P_Y
\frac{\partial Y}{\partial u_i}
=
\frac{\partial C}{\partial u_i}
$$

trong mô hình đơn biến lý tưởng.

### 4.17.71. Lúa: cấu trúc năng suất

Một decomposition:

$$
Y_{rice}
=
Panicles\ m^{-2}
\times
Spikelets\ panicle^{-1}
\times
Filled\ fraction
\times
Grain\ weight
$$

cần scale factor đơn vị phù hợp.

### 4.17.72. Lúa: panicle number

$$
N_{panicle}
\le
N_{tiller}
$$

do không phải mọi tiller đều hữu hiệu.

### 4.17.73. Lúa: spikelets per panicle

Phụ thuộc:
- panicle differentiation;
- N status;
- radiation;
- temperature;
- genotype.

### 4.17.74. Lúa: filled-grain fraction

$$
f_{filled}
=
\frac{N_{filled}}
{N_{spikelet}}
$$

### 4.17.75. Lúa: grain filling

Một grain balance:

$$
\frac{dM_{grain}}{dt}
=
F_{photo}
+
F_{stem\ rem}
-
R_{grain}
$$

### 4.17.76. Lúa: stem NSC

Stem NSC có thể đóng góp đáng kể khi source sau heading bị giới hạn.

Không dùng một tỷ lệ cố định cho mọi giống/mùa vụ.

### 4.17.77. Lúa: sterility

Heat/cold quanh flowering có thể làm:

$$
f_{fert}\downarrow
$$

và giảm sink number trước khi grain filling bắt đầu.

### 4.17.78. Lúa: Harvest Index

$$
HI_{rice}
=
\frac{Grain\ dry\ mass}
{Aboveground\ dry\ biomass}
$$

### 4.17.79. Ngô: cấu trúc năng suất

$$
Y_{maize}
=
Ears\ m^{-2}
\times
Kernels\ ear^{-1}
\times
Kernel\ weight
$$

### 4.17.80. Ngô: ear number

$$
N_{ear}
\le
N_{plant}
\times
Ears\ plant^{-1}
$$

### 4.17.81. Ngô: kernel set

Kernel number phụ thuộc mạnh:
- ovule number;
- pollination;
- assimilate availability;
- stress quanh silking.

### 4.17.82. Ngô: ASI

$$
ASI
=
t_{silking}
-
t_{anthesis}
$$

ASI tăng thường là dấu hiệu reproductive stress trong nhiều bối cảnh.

### 4.17.83. Ngô: kernel growth

$$
\frac{dm_k}{dt}
=
r_{kernel}
F_T
F_C
F_N
$$

### 4.17.84. Ngô: post-silking source

Nguồn carbon gồm:
- current photosynthesis;
- stem reserve remobilization.

### 4.17.85. Ngô: post-silking N

Grain N:

$$
N_{grain}
=
N_{post\ uptake}
+
N_{remobilized}
$$

### 4.17.86. Ngô: stay-green tradeoff

Stay-green có thể tăng source duration nhưng nếu remobilization bị hạn chế thì grain nutrient dynamics có thể thay đổi.

### 4.17.87. Xà lách: định nghĩa năng suất

Với xà lách:

$$
Y_{lettuce}
=
Fresh\ marketable\ leaf\ biomass
$$

thường phù hợp hơn grain-style HI.

### 4.17.88. Xà lách: fresh mass

$$
Fresh\ mass
=
\frac{Dry\ mass}
{DMF}
$$

nếu dry matter fraction được đo phù hợp.

### 4.17.89. Xà lách: marketable fraction

$$
f_{market}
=
f(
tipburn,
senescence,
disease,
size,
shape,
bolting
)
$$

### 4.17.90. Xà lách: leaf number

$$
Y_{market}
\approx
N_{leaf,market}
\times
W_{leaf}
$$

chỉ là decomposition.

### 4.17.91. Xà lách: tipburn

Tipburn làm giảm:

$$
f_{market}
$$

dù total biomass có thể cao.

### 4.17.92. Xà lách: bolting

Bolting làm:
- thay đổi biomass allocation;
- giảm marketability;
- tăng stem fraction.

### 4.17.93. Xà lách: water content

Fresh yield rất nhạy với tissue water content.

Không dùng fresh yield để suy trực tiếp carbon gain.

### 4.17.94. Lúa/ngô/xà lách: cùng một framework, khác yield organ

VECrop nên giữ framework chung:

$$
Y
=
Number
\times
Unit\ size
\times
Marketable\ fraction
$$

nhưng mapping sinh lý phải crop-specific.

### 4.17.95. Yield-state vector

$$
\mathbf Y
=
[
N_{sink},
W_{sink},
f_{fert},
f_{abort},
HI,
Y_{gross},
f_{market},
Y_{market}
]^T
$$

### 4.17.96. Yield dynamics

$$
\frac{d\mathbf Y}{dt}
=
\mathbf f_Y
(
Source,
Sink,
Stage,
Water,
Nutrients,
Temperature,
Hormone,
Senescence
)
$$

### 4.17.97. Coupling với 4.5

Phloem source–sink quyết định carbon delivery tới organ kinh tế.

### 4.17.98. Coupling với 4.6

Canopy photosynthesis quyết định source supply.

### 4.17.99. Coupling với 4.7

N/P/K supply quyết định:
- sink growth;
- composition;
- remobilization.

### 4.17.100. Coupling với 4.8

Respiration quyết định carbon cost của filling.

### 4.17.101. Coupling với 4.13

Sugar/T6P/SnRK1/TOR điều chỉnh sink activity và growth capacity.

### 4.17.102. Coupling với 4.14

Phenology xác định:
- sink initiation;
- flowering;
- filling window;
- maturity.

### 4.17.103. Coupling với 4.15

Senescence quyết định:
- source duration;
- remobilization;
- organ loss.

### 4.17.104. Coupling với 4.16

Organ biomass và allocation cung cấp nền cho HI và economic yield.

### 4.17.105. Parameter provenance

Cần provenance cho:
- maximum sink size;
- flowering fertility;
- abortion rate;
- filling-rate parameters;
- filling duration;
- HI ceiling;
- marketable fraction;
- crop-specific yield components.

### 4.17.106. Calibration hierarchy

Nên hiệu chỉnh:
1. sink number;
2. fertilization/abortion;
3. unit filling curve;
4. source duration;
5. organ biomass;
6. HI;
7. marketable yield.

### 4.17.107. Validation độc lập

Nên kiểm:
- component yield;
- time-course filling;
- grain/leaf number;
- individual unit weight;
- final HI;
- marketable fraction;
- quality traits.

### 4.17.108. Không fit chỉ bằng final yield

Hai model có cùng final yield nhưng:
- sink number khác;
- unit weight khác;
- remobilization khác
có thể có cơ chế hoàn toàn khác nhau.

### 4.17.109. Component balance test

Phải kiểm:

$$
Y_{calc}
\approx
N_{unit}
W_{unit}
$$

sau quy đổi đơn vị.

### 4.17.110. Biomass-to-yield balance

$$
Y_{econ}
\le
B_{harvestable}
\le
B_{total}
$$

trừ khi hệ quy đổi fresh/dry mass khác nhau và đã được giải thích.

### 4.17.111. Carbon consistency

Economic dry-matter accumulation phải phù hợp với carbon supply/remobilization.

Không được tạo thêm biomass chỉ bằng tăng HI mà không giảm biomass compartment khác.

### 4.17.112. Nutrient consistency

Nếu grain N tăng:

$$
\Delta N_{grain}
$$

phải đến từ:
- new uptake;
- remobilization;
- hoặc cả hai.

### 4.17.113. Stress attribution test

Một stress chỉ được gán là nguyên nhân giảm yield component khi model tái hiện đúng intermediate states.

Ví dụ drought → low yield phải đi qua:
- water potential;
- stomata/photosynthesis;
- flowering/filling;
- hoặc sink loss.

### 4.17.114. Counterfactual component analysis

Có thể tính:

$$
\Delta Y_{N_{sink}}
=
Y(N_{sink}^{ref})-Y(actual)
$$

và tương tự cho unit weight, nhưng chỉ dùng như diagnostic.

### 4.17.115. Uncertainty decomposition

$$
Var(Y)
=
Var_{weather}
+
Var_{parameter}
+
Var_{measurement}
+
Var_{structure}
+
Interactions
$$

ở mức conceptual.

### 4.17.116. Practical decision outputs

4.17 có thể cung cấp:
- yield forecast;
- component forecast;
- expected marketable fraction;
- harvest-window forecast;
- limiting-component diagnosis.

### 4.17.117. Yield forecast phải có interval

Không báo:

$$
Y=8.2\ t\ ha^{-1}
$$

mà không uncertainty nếu dữ liệu đầu vào bất định.

Nên báo:

$$
Y_{P50}
$$

kèm:

$$
[P10,P90]
$$

khi phù hợp.

### 4.17.118. Forecast horizon

Sai số dự báo tăng khi horizon dài.

Cần phân biệt:
- early-season forecast;
- flowering-stage forecast;
- filling-stage forecast;
- near-harvest forecast.

### 4.17.119. Dynamic updating

Khi có dữ liệu mới:

$$
P(Y|\mathcal D_{new})
$$

nên được cập nhật bằng data assimilation/Bayesian update nếu model hỗ trợ.

### 4.17.120. Yield ceiling warning

Mô hình không nên cho:

$$
Y_{econ}
>
Cap_{sink}
$$

hoặc:

$$
Y_{econ}
>
C_{available}\times conversion
$$

### 4.17.121. Harvest Index warning

Nếu:

$$
HI>1
$$

trong dry-matter definition thông thường, model sai về balance.

### 4.17.122. Fresh-weight warning

Với xà lách:

$$
HI_{fresh}
$$

có thể gây hiểu nhầm vì water content chi phối mạnh.

Nên dùng:
- dry-matter partition;
- marketable fresh yield
song song.

### 4.17.123. Yield quality tradeoff

Ví dụ:
- grain yield vs protein concentration;
- lettuce fresh mass vs dry matter concentration;
- rapid growth vs tissue structural quality.

Không tối ưu một chỉ tiêu duy nhất nếu mục tiêu thương mại đa tiêu chí.

### 4.17.124. Losses before harvest

Một gross-to-net relation:

$$
Y_{net}
=
Y_{gross}
-
L_{lodging}
-
L_{shatter}
-
L_{disease}
-
L_{quality}
$$

### 4.17.125. Lodging

Ở lúa/ngô, lodging có thể làm giảm:
- harvestability;
- photosynthesis cuối vụ;
- grain filling;
- mechanical harvest efficiency.

### 4.17.126. Shattering

Ở cereal:

$$
Loss_{shatter}
=
f(
genotype,
maturity,
weather,
harvest\ delay
)
$$

### 4.17.127. Harvest efficiency

$$
\eta_h
=
\frac{Yield_{collected}}
{Yield_{standing}}
$$

### 4.17.128. Final collected yield

$$
Y_{collected}
=
Y_{standing}
\eta_h
$$

### 4.17.129. Economic yield chain

<div class="flow-chain">
<strong>Potential sinks</strong> → <strong>Sink set</strong> → <strong>Filling</strong> → <strong>Standing yield</strong> → <strong>Marketable fraction</strong> → <strong>Harvest efficiency</strong> → <strong>Collected yield</strong>
</div>

### 4.17.130. Không double counting

Nếu heat đã giảm:
- fertility;
- filling duration;

thì không nhân thêm một \(F_{heat}\) chung vào final yield.

Nếu senescence đã giảm GLAI và source supply, không phạt yield thêm bằng một \(F_{sen}\) tổng quát.

### 4.17.131. Vai trò của 4.17 trong VECrop

4.17 biến trạng thái sinh khối thành năng suất kinh tế:

$$
Biomass
\rightarrow
Yield\ components
\rightarrow
Sink\ filling
\rightarrow
Harvest\ index
\rightarrow
Marketable\ yield
$$

### 4.17.132. Kết luận 4.17

VECrop không nên dự báo năng suất bằng một hệ số cuối cùng duy nhất.

Cấu trúc phù hợp hơn là:

$$
Yield
=
f(
Sink\ number,
Sink\ size,
Filling\ rate,
Filling\ duration,
Source\ supply,
Remobilization,
Stress\ timing,
Harvestability
)
$$

và mọi thành phần phải liên kết ngược với:
- phenology;
- canopy photosynthesis;
- hydraulics;
- nutrient balance;
- source–sink;
- senescence;
- biomass allocation.

Điều này làm cho năng suất trở thành **kết quả cuối của chuỗi cơ chế**, không phải biến được “gắn thêm” vào cuối mô hình.

---


## 4.18. Tích hợp toàn cây – bảo toàn khối lượng – coupling đa module – đóng vòng mô hình VECrop

### 4.18.1. Mục tiêu tích hợp
4.18 ghép toàn bộ các module từ vùng rễ tới năng suất thành một hệ duy nhất:

<div class="flow-chain">
<strong>Root zone</strong> → <strong>Root uptake</strong> → <strong>Xylem</strong> → <strong>Leaf hydraulics</strong> → <strong>Photosynthesis</strong> → <strong>Phloem</strong> → <strong>Source–sink</strong> → <strong>Biomass</strong> → <strong>Yield</strong>
</div>

### 4.18.2. State vector toàn cây
$$
\mathbf X=
[\mathbf X_{soil},
\mathbf X_{root},
\mathbf X_{xylem},
\mathbf X_{leaf},
\mathbf X_{phloem},
\mathbf X_{met},
\mathbf X_{dev},
\mathbf X_{biomass},
\mathbf X_{yield}]^T
$$

### 4.18.3. Input vector
$$
\mathbf U=
[Weather,Irrigation,Fertilizer,CO_2,Density,Management]^T
$$

### 4.18.4. Phương trình động tổng quát
$$
\frac{d\mathbf X}{dt}
=
\mathbf F(\mathbf X,\mathbf U,\boldsymbol\theta,t)
$$

### 4.18.5. Observation model
$$
\mathbf Y_{obs}
=
\mathbf H(\mathbf X)+\boldsymbol\epsilon
$$

### 4.18.6. Các module lõi
VECrop whole-plant gồm:
1. soil/root-zone;
2. root hydraulics;
3. nutrient uptake;
4. xylem;
5. stomata;
6. photosynthesis;
7. phloem;
8. source–sink;
9. respiration/energy;
10. development;
11. senescence;
12. biomass allocation;
13. yield formation.

### 4.18.7. Coupling có hướng
Ví dụ:
$$
Soil\ water\rightarrow Root\ uptake\rightarrow\Psi_L\rightarrow g_s\rightarrow A_n
$$

và:
$$
A_n\rightarrow Sucrose\rightarrow Phloem\rightarrow Sink\rightarrow Biomass
$$

### 4.18.8. Feedback loop
Ví dụ:
$$
LAI\rightarrow A_{can}\rightarrow Carbon\rightarrow Leaf\ growth\rightarrow LAI
$$

### 4.18.9. Root–shoot feedback
$$
Root\ growth
\rightarrow
Water/Nutrient\ uptake
\rightarrow
Shoot\ growth
\rightarrow
Carbon\ supply
\rightarrow
Root\ growth
$$

### 4.18.10. Source–sink feedback
$$
Sink\ demand
\rightarrow
Phloem\ export
\rightarrow
Leaf\ sugar
\rightarrow
Photosynthetic\ regulation
$$

### 4.18.11. Water balance vùng rễ
$$
P+I-ET-R-D-\Delta S_w=\varepsilon_w
$$

### 4.18.12. Plant water balance
$$
U_w-E-\frac{dS_{plant}}{dt}
=
\varepsilon_{plant,w}
$$

### 4.18.13. Water balance error
$$
BE_w=
\frac{|\varepsilon_w|}
{\max(P+I,\varepsilon)}
$$

### 4.18.14. Carbon balance
$$
A_C-R_C-L_C-\frac{dM_C}{dt}
=
\varepsilon_C
$$

### 4.18.15. Carbon closure
$$
BE_C=
\frac{|\varepsilon_C|}
{\max(A_C,\varepsilon)}
$$

### 4.18.16. Nitrogen balance
$$
N_{input}+N_{fix}-N_{loss}-N_{harvest}-\Delta N_{system}
=
\varepsilon_N
$$

### 4.18.17. Phosphorus balance
$$
P_{input}-P_{loss}-P_{harvest}-\Delta P_{system}
=
\varepsilon_P
$$

### 4.18.18. Potassium balance
$$
K_{input}-K_{loss}-K_{harvest}-\Delta K_{system}
=
\varepsilon_K
$$

### 4.18.19. Internal transfer phải triệt tiêu
Với flux:
$$
F_{i\rightarrow j}
$$

thì trong total-system balance:
$$
-F_{i\rightarrow j}+F_{i\rightarrow j}=0
$$

Remobilization không tạo vật chất mới.

### 4.18.20. Unit registry
Mỗi biến phải có đơn vị chuẩn, ví dụ:
- \(\Psi\): MPa;
- \(C_i\): mol m\(^{-3}\);
- \(J_i\): mol m\(^{-2}\) s\(^{-1}\);
- biomass: kg DM m\(^{-2}\);
- yield: t ha\(^{-1}\).

### 4.18.21. Unit conversion
Ví dụ:
$$
1\ t\ ha^{-1}=0.1\ kg\ m^{-2}
$$

### 4.18.22. Dry/fresh mass
Không trộn:
$$
Fresh\ mass\neq Dry\ mass
$$
nếu chưa dùng dry-matter fraction.

### 4.18.23. Timescale hierarchy
- signaling: giây–phút;
- stomata/hydraulics: phút–giờ;
- photosynthesis: phút–giờ;
- growth: giờ–ngày;
- phenology: ngày–tuần.

### 4.18.24. Multi-rate integration
$$
\Delta t_{signal}
<
\Delta t_{hyd}
<
\Delta t_{growth}
$$

### 4.18.25. Daily carbon integration
$$
A_{day}
=
\int_{sunrise}^{sunset}
A_{can}(t)\,dt
$$

### 4.18.26. Solver order
Một thứ tự thực thi hợp lý:
1. weather/root-zone;
2. soil water;
3. root uptake;
4. hydraulics;
5. stomata;
6. photosynthesis;
7. carbon pools;
8. phloem/source–sink;
9. nutrient demand/uptake;
10. respiration;
11. development;
12. senescence;
13. biomass;
14. yield;
15. balance audit.

### 4.18.27. Order dependence
Nếu coupling mạnh, sequential update có thể sai. Khi đó dùng:
- iteration;
- implicit coupling;
- operator splitting.

### 4.18.28. Fixed-point iteration
$$
X^{k+1}=F(X^k)
$$

Dừng khi:
$$
\|X^{k+1}-X^k\|<\epsilon
$$

### 4.18.29. Relaxation
$$
X^{k+1}
=
(1-\lambda)X^k+\lambda F(X^k)
$$

với:
$$
0<\lambda\le1
$$

### 4.18.30. Positivity
Bắt buộc:
$$
M_i\ge0,\quad B_o\ge0,\quad C_i\ge0,\quad LAI\ge0
$$

### 4.18.31. Flux limiter
$$
F_{out}^{eff}
=
\min
\left(
F_{out},
\frac{M_i}{\Delta t}
\right)
$$

để không rút vượt pool.

### 4.18.32. Event handling
Cần xử lý rõ:
- emergence;
- flowering;
- irrigation;
- fertilizer;
- flooding;
- drainage;
- harvest.

### 4.18.33. Module interface
Mỗi module phải khai báo:
- input;
- output;
- unit;
- timestep;
- state ownership;
- parameter source.

### 4.18.34. Single source of truth
Một state chỉ có một owner.

Ví dụ:
$$
LAI
$$
chỉ được growth/canopy state quản lý, không có hai giá trị song song.

### 4.18.35. Algebraic loop
Ví dụ:
$$
g_s\rightarrow E\rightarrow\Psi_L\rightarrow g_s
$$

phải giải bằng iteration hoặc dynamic coupling.

### 4.18.36. Carbon–stomatal loop
$$
A_n\rightarrow g_s
$$
và:
$$
g_s\rightarrow C_i\rightarrow A_n
$$

### 4.18.37. Nutrient–growth loop
$$
Growth
\rightarrow
N\ demand
\rightarrow
N\ uptake
\rightarrow
N\ status
\rightarrow
Growth
$$

### 4.18.38. Double-counting audit
Ví dụ drought đã tác động qua:
$$
\Psi\rightarrow g_s\rightarrow A_n
$$

thì không nhân thêm:
$$
Y\times F_{drought}
$$
nếu cùng cơ chế đã được tính.

### 4.18.39. Diagnostic layer
HSY, \(H_{env}\), \(H_E\) nên là diagnostic outputs.

Không cho diagnostic score tự sửa state cơ chế nếu chưa có controller được định nghĩa rõ.

### 4.18.40. Parameter classes
Phân biệt:
- physical constants;
- literature parameters;
- cultivar parameters;
- soil/site parameters;
- calibrated parameters;
- proposed placeholders.

### 4.18.41. Physical constants
Ví dụ:
- \(R\);
- \(F\);
- \(g\).

### 4.18.42. Biological parameters
Không gọi:
- \(V_{cmax}\);
- \(P_{50}\);
- \(K_m\);
- phyllochron
là universal constants.

### 4.18.43. Initial conditions
$$
\mathbf X(t_0)=\mathbf X_0
$$

phải gồm ít nhất:
- soil water;
- nutrient pools;
- biomass;
- phenology;
- reserve pools.

### 4.18.44. Boundary conditions
Bao gồm:
- atmosphere;
- lower soil boundary;
- irrigation;
- nutrient input.

### 4.18.45. Spatial scale
Phải xác định rõ:
- per plant;
- per m²;
- field;
- soil layer;
- canopy layer.

### 4.18.46. Per-plant vs per-area
$$
B_{area}=D\,B_{plant}
$$

### 4.18.47. Layer aggregation
Soil:
$$
U_w=\sum_{k=1}^{n}U_{w,k}
$$

Canopy:
$$
A_{can}=\sum_lA_l
$$

### 4.18.48. Numerical residuals
Mỗi timestep nên lưu:
- water residual;
- C residual;
- N residual;
- P residual;
- K residual.

### 4.18.49. Cumulative residual
$$
R_{cum}=\sum_t\varepsilon(t)
$$

### 4.18.50. Conservation unit tests
Cần test:
- zero input/zero output → pool không đổi;
- internal transfer → total pool không đổi;
- harvest export → pool giảm đúng lượng.

### 4.18.51. Limiting-case tests
Ít nhất:
- zero light;
- zero water;
- zero N;
- saturated soil;
- high salinity;
- no sink;
- no root.

### 4.18.52. Zero-light test
Nếu:
$$
I=0
$$
thì net photosynthetic C gain không được dương sau respiration.

### 4.18.53. Zero-root test
Nếu:
$$
A_{root}=0
$$
thì root uptake phải gần 0.

### 4.18.54. No-sink test
Nếu sink demand = 0:
- sink allocation = 0;
- sugar/source feedback có thể tăng.

### 4.18.55. Carbon sanity check
Không cho:
$$
Growth+Respiration
>
Assimilation+Reserve\ mobilization
$$

nếu không có nguồn C khác.

### 4.18.56. Yield sanity check
Không cho:
$$
Y_{dry}>B_{total,dry}
$$

### 4.18.57. Mechanistic–reduced–diagnostic hierarchy
Ba cấp:
1. mechanistic;
2. reduced;
3. diagnostic.

Không trộn chúng vô thức.

### 4.18.58. Crop configuration
Core chung, config riêng cho:
- rice;
- maize;
- lettuce.

### 4.18.59. Rice coupling
$$
Flooding/AWD
\rightarrow
Eh/O_2
\rightarrow
Root
\rightarrow
N
\rightarrow
Tillering
\rightarrow
Panicle
\rightarrow
Grain
$$

### 4.18.60. Maize coupling
$$
Soil\ water
\rightarrow
Root
\rightarrow
Hydraulics
\rightarrow
C4\ photosynthesis
\rightarrow
ASI/Kernel\ set
\rightarrow
Yield
$$

### 4.18.61. Lettuce coupling
$$
Rootzone\ EC/pH/T/O_2
\rightarrow
Root
\rightarrow
Water/Ca
\rightarrow
Leaf\ expansion
\rightarrow
Tipburn/Marketability
\rightarrow
Fresh\ yield
$$

### 4.18.62. Balance table
Mỗi run nên báo:

| Balance | Input | Output | Storage change | Residual |
|---|---:|---:|---:|---:|
| Water |  |  |  |  |
| Carbon |  |  |  |  |
| Nitrogen |  |  |  |  |
| Phosphorus |  |  |  |  |
| Potassium |  |  |  |  |

### 4.18.63. Model-close condition
Simulation chỉ được xem là “đóng” khi:
$$
|BE_w|,\ |BE_C|,\ |BE_N|,\ |BE_P|,\ |BE_K|
$$
đều trong tolerance đã định nghĩa.

### 4.18.64. Conservation-first principle
Trong VECrop:
$$
Conservation > Fit\ đẹp
$$

Một model fit yield tốt nhưng vi phạm mass balance không đạt chuẩn cơ chế.

### 4.18.65. Error flags
Nên có:
- NEGATIVE_POOL;
- MASS_BALANCE_FAIL;
- UNIT_MISMATCH;
- PARAM_OUT_OF_RANGE;
- SOLVER_NONCONVERGENCE;
- EXTRAPOLATION.

### 4.18.66. Reproducibility
Mỗi run cần lưu:
- model version;
- crop config;
- parameter set;
- input hashes;
- solver settings;
- commit hash.

### 4.18.67. Calibration hooks
Model phải expose:
- predicted variables;
- residuals;
- parameter bounds.

### 4.18.68. Validation hooks
Calibration dataset và validation dataset phải tách.

### 4.18.69. Data assimilation
Một Kalman-type update:
$$
X_t^{post}
=
X_t^{prior}
+
K_t
(
Y_t-HX_t^{prior}
)
$$

### 4.18.70. Proxy caution
Ví dụ:
$$
SPAD\neq Leaf\ N
$$
dù có correlation.

### 4.18.71. Structural uncertainty
Sai số có thể đến từ:
- equation form;
- missing process;
- wrong coupling;
- parameter uncertainty.

### 4.18.72. Model discrepancy
$$
Y_{obs}
=
Y_{model}
+
\delta_{model}
+
\epsilon
$$

### 4.18.73. Ablation test
Bỏ module \(k\):
$$
\Delta E_k
=
E_{without\ k}
-
E_{full}
$$

### 4.18.74. Equifinality
Có thể:
$$
F(\theta^{(1)})
\approx
F(\theta^{(2)})
$$
dù internal states khác nhau.

### 4.18.75. Multi-variable calibration
Nên fit đồng thời:
- soil water;
- LAI;
- biomass;
- nutrients;
- yield.

### 4.18.76. Stress-combination validation
Cần kiểm:
- drought + heat;
- salinity + heat;
- low N + drought;
- hypoxia + reoxygenation.

### 4.18.77. Non-additive stress
Không mặc định:
$$
Effect_{A+B}
=
Effect_A+Effect_B
$$

### 4.18.78. Recovery và hysteresis
$$
Response_{stress}
\neq
Response_{recovery}
$$
tại cùng environmental state.

### 4.18.79. Domain of validity
Mỗi config cần ghi:
- climate range;
- soil range;
- cultivar scope;
- stage range;
- management range.

### 4.18.80. Explainability
Mỗi dự báo nên truy ngược được:
- state;
- flux;
- module;
- parameter;
- source dữ liệu.

### 4.18.81. Failure transparency
Nếu thiếu dữ liệu:
- báo uncertainty;
- flag extrapolation;
- không tự gán parameter giả.

### 4.18.82. Minimum mechanistic configuration
Tối thiểu:
- soil water;
- root uptake;
- photosynthesis;
- respiration;
- phenology;
- biomass;
- yield.

### 4.18.83. Advanced configuration
Có thể thêm:
- ion-specific transport;
- xylem vulnerability;
- phloem pressure;
- ROS;
- molecular signaling;
- SnRK1/TOR;
- detailed senescence.

### 4.18.84. Lightweight execution
VECrop nên cho phép core nhẹ:
- ODE nhỏ;
- vectorized calculation;
- CPU-only;
- module bật/tắt theo dữ liệu.

### 4.18.85. Final whole-plant formulation
$$
\boxed{
\frac{d\mathbf X}{dt}
=
\mathbf F(
\mathbf X,
\mathbf U,
\boldsymbol\theta
)
}
$$

subject to:
$$
\boxed{Mass\ conservation}
$$
$$
\boxed{Dimensional\ consistency}
$$
$$
\boxed{Biological\ bounds}
$$
$$
\boxed{Validated\ coupling}
$$

### 4.18.86. Kết luận 4.18
4.18 biến VECrop từ một tập phương trình thành **một hệ mô hình whole-plant tích hợp**.

Chuỗi cuối phải giữ:
$$
Environment
\rightarrow
Fluxes
\rightarrow
States
\rightarrow
Growth
\rightarrow
Yield
$$

và mọi feedback phải được giải có kiểm soát.

Một run chỉ được tin cậy khi:
1. unit nhất quán;
2. mass balance đóng;
3. state không vi phạm giới hạn;
4. không double count stress;
5. parameter có provenance;
6. calibration/validation tách biệt;
7. output truy ngược được về cơ chế.

---


## 4.19. Độ nhạy – bất định – nhận dạng tham số – hiệu chuẩn và kiểm định cấp whole-plant

### 4.19.1. Vai trò của 4.19
Sau khi VECrop đã được đóng vòng ở 4.18, bước tiếp theo là xác định:
- tham số nào thực sự ảnh hưởng mạnh tới output;
- tham số nào có thể nhận dạng từ dữ liệu;
- bất định nào đến từ dữ liệu, tham số hay cấu trúc;
- mô hình có dự báo tốt ngoài tập hiệu chuẩn hay không.

### 4.19.2. Phân biệt sensitivity và uncertainty
Sensitivity hỏi:
$$
Output\ thay\ đổi\ bao\ nhiêu\ khi\ input/parameter\ thay\ đổi?
$$

Uncertainty hỏi:
$$
Output\ bất\ định\ bao\ nhiêu\ khi\ input/parameter/model\ bất\ định?
$$

### 4.19.3. Local sensitivity
Một local sensitivity:
$$
S_i
=
\frac{\partial Y}
{\partial \theta_i}
$$

### 4.19.4. Normalized sensitivity
$$
S_i^*
=
\frac{\theta_i}{Y}
\frac{\partial Y}{\partial\theta_i}
$$

Giúp so sánh parameter khác đơn vị.

### 4.19.5. Finite-difference sensitivity
$$
S_i
\approx
\frac{Y(\theta_i+\Delta\theta_i)-Y(\theta_i-\Delta\theta_i)}
{2\Delta\theta_i}
$$

### 4.19.6. Step-size caution
Nếu \(\Delta\theta_i\) quá nhỏ:
- numerical noise tăng.

Nếu quá lớn:
- mất ý nghĩa local.

### 4.19.7. Global sensitivity
Global sensitivity xét toàn bộ miền parameter.

Có thể dùng:
- Morris;
- Sobol;
- FAST;
- variance-based methods.

### 4.19.8. Morris screening
Morris phù hợp để:
- screening parameter nhiều;
- tìm parameter ít ảnh hưởng;
- giảm chiều trước Sobol/calibration.

### 4.19.9. Elementary effect
$$
EE_i
=
\frac{Y(\boldsymbol\theta+\Delta e_i)-Y(\boldsymbol\theta)}
{\Delta}
$$

### 4.19.10. Morris statistics
Hai chỉ số thường dùng:
- \(\mu^*\): độ lớn ảnh hưởng;
- \(\sigma\): nonlinear/interactions.

### 4.19.11. Sobol decomposition
$$
Var(Y)
=
\sum_iV_i
+
\sum_{i<j}V_{ij}
+
\cdots
$$

### 4.19.12. First-order Sobol index
$$
S_i
=
\frac{V_i}{Var(Y)}
$$

### 4.19.13. Total Sobol index
$$
S_{T_i}
=
1-
\frac{Var_{\theta_{\sim i}}[E(Y|\theta_{\sim i})]}
{Var(Y)}
$$

### 4.19.14. Interaction importance
Nếu:
$$
S_{T_i}\gg S_i
$$

thì parameter \(i\) có interaction đáng kể với parameter khác.

### 4.19.15. Sensitivity theo output
Một parameter có thể:
- nhạy với LAI;
- ít nhạy với yield;
- rất nhạy với water use.

Do đó sensitivity phải output-specific.

### 4.19.16. Sensitivity theo stage
$$
S_i=S_i(t)
$$

Parameter có thể quan trọng ở:
- vegetative stage;
- flowering;
- filling;
- senescence
khác nhau.

### 4.19.17. Sensitivity map
VECrop nên có:
$$
S_{i,j}(t)
$$

với:
- \(i\): parameter;
- \(j\): output/state.

### 4.19.18. Practical identifiability
Parameter có thể lý thuyết nhận dạng được nhưng thực tế không nhận dạng được do:
- ít dữ liệu;
- noise lớn;
- parameter correlation;
- sampling không đúng giai đoạn.

### 4.19.19. Structural identifiability
Structural identifiability hỏi:
với dữ liệu lý tưởng, parameter có thể xác định duy nhất hay không.

### 4.19.20. Parameter correlation
Nếu:
$$
Corr(\theta_i,\theta_j)\approx\pm1
$$

thì hai parameter có thể bù trừ nhau.

### 4.19.21. Equifinality
Nhiều parameter set:
$$
\theta^{(1)},\theta^{(2)},\ldots
$$

có thể cho:
$$
Y^{(1)}\approx Y^{(2)}
$$

nhưng internal states khác.

### 4.19.22. Profile likelihood
Một cách kiểm identifiability:
- cố định \(\theta_i\);
- tối ưu các parameter còn lại;
- theo dõi loss.

### 4.19.23. Flat profile
Profile likelihood phẳng cho thấy parameter yếu nhận dạng.

### 4.19.24. Fisher information
$$
F
=
J^TWJ
$$

với \(J\) là sensitivity/Jacobian matrix.

### 4.19.25. Ill-conditioning
Nếu:
$$
cond(F)\gg1
$$

thì hệ parameter có thể poorly identifiable.

### 4.19.26. Parameter scaling
Trước optimization nên scale parameter:

$$
\theta_i^*
=
\frac{\theta_i-\theta_{min}}
{\theta_{max}-\theta_{min}}
$$

### 4.19.27. Parameter bounds
Bounds phải đến từ:
- vật lý;
- sinh học;
- literature;
- experimental design.

Không dùng bounds tùy ý chỉ để optimizer hội tụ.

### 4.19.28. Prior distribution
Trong Bayesian calibration:
$$
\theta_i\sim p(\theta_i)
$$

Prior phải có provenance.

### 4.19.29. Likelihood
$$
p(D|\theta)
$$

phản ánh xác suất dữ liệu quan sát khi biết parameter.

### 4.19.30. Posterior
$$
p(\theta|D)
\propto
p(D|\theta)p(\theta)
$$

### 4.19.31. Posterior predictive
$$
p(Y_{new}|D)
=
\int
p(Y_{new}|\theta)
p(\theta|D)
\,d\theta
$$

### 4.19.32. Measurement error
Observation model:
$$
Y_{obs}
=
Y_{true}
+
\epsilon_{meas}
$$

### 4.19.33. Process noise
Dynamic model:
$$
X_{t+1}
=
f(X_t,U_t,\theta)
+
\omega_t
$$

### 4.19.34. Model structural error
$$
Y_{obs}
=
Y_{model}
+
\delta_{structure}
+
\epsilon
$$

### 4.19.35. Ba nguồn bất định chính
Cần tách:
1. input uncertainty;
2. parameter uncertainty;
3. structural/model-form uncertainty.

### 4.19.36. Input uncertainty
Ví dụ:
- weather sensor;
- irrigation amount;
- fertilizer rate;
- initial soil water;
- initial nutrient pools.

### 4.19.37. Parameter uncertainty
Ví dụ:
- \(V_{cmax}\);
- \(g_1\);
- \(P_{50}\);
- \(K_m\);
- phyllochron;
- remobilization rates.

### 4.19.38. Structural uncertainty
Ví dụ:
- chọn FvCB hay reduced RUE;
- allocation theo sink hay partition coefficients;
- root uptake function khác nhau.

### 4.19.39. Monte Carlo propagation
$$
\theta^{(k)},U^{(k)}
\rightarrow
Y^{(k)}
$$

### 4.19.40. Output distribution
Báo:
- median;
- mean;
- standard deviation;
- quantiles.

### 4.19.41. P10–P50–P90
Một forecast nên có:
$$
P10,\ P50,\ P90
$$

khi uncertainty đáng kể.

### 4.19.42. Confidence vs credible interval
Frequentist confidence interval khác Bayesian credible interval.

Không dùng lẫn thuật ngữ.

### 4.19.43. Calibration objective
Một weighted loss:
$$
J(\theta)
=
\sum_j
w_j
\sum_t
\left[
Y_{j,obs}(t)-Y_{j,sim}(t)
\right]^2
$$

### 4.19.44. Multi-variable calibration
Nên fit đồng thời:
- soil water;
- LAI;
- biomass;
- nutrient concentration;
- yield.

### 4.19.45. Không fit bằng yield duy nhất
Final yield không đủ để nhận dạng:
- root hydraulics;
- photosynthetic parameters;
- allocation;
- senescence;
- nutrient uptake.

### 4.19.46. Weighted residual
$$
r_{j,t}
=
\frac{Y_{obs}-Y_{sim}}
{\sigma_{j,t}}
$$

### 4.19.47. Heteroscedasticity
Nếu measurement error tăng theo magnitude, không nên dùng cùng variance cho mọi điểm.

### 4.19.48. Robust loss
Có thể dùng:
- Huber;
- Student-t likelihood
khi outlier hiện diện.

### 4.19.49. Train/validation split
Tối thiểu:
- calibration dataset;
- independent validation dataset.

### 4.19.50. Cross-validation
Khi dữ liệu hạn chế:
- leave-one-season-out;
- leave-one-site-out;
- leave-one-cultivar-out
có thể hữu ích.

### 4.19.51. Temporal validation
Calibration trên một giai đoạn, kiểm định ở thời gian khác.

### 4.19.52. Spatial validation
Calibration ở một site, kiểm định site khác.

### 4.19.53. Cultivar validation
Parameter cultivar-specific phải được kiểm riêng.

### 4.19.54. Extrapolation test
Nếu model ra ngoài:
$$
\mathcal D_{cal}
$$

thì cần flag extrapolation.

### 4.19.55. Performance metrics
Không dùng một metric duy nhất.

Có thể dùng:
- RMSE;
- MAE;
- bias;
- \(R^2\);
- NSE khi phù hợp.

### 4.19.56. RMSE
$$
RMSE
=
\sqrt{
\frac1n
\sum_i
(Y_i-\hat Y_i)^2
}
$$

### 4.19.57. MAE
$$
MAE
=
\frac1n
\sum_i
|Y_i-\hat Y_i|
$$

### 4.19.58. Bias
$$
Bias
=
\frac1n
\sum_i
(\hat Y_i-Y_i)
$$

### 4.19.59. R² caution
High \(R^2\) không đảm bảo:
- bias nhỏ;
- conservation đúng;
- cơ chế đúng.

### 4.19.60. NSE caution
NSE nhạy với variance và scale.

Không dùng như chỉ số duy nhất.

### 4.19.61. Residual analysis
Residual nên kiểm:
- trend theo time;
- trend theo magnitude;
- autocorrelation;
- stage-specific bias.

### 4.19.62. Autocorrelation
Nếu residual có autocorrelation mạnh, error model độc lập có thể sai.

### 4.19.63. Stage-wise error
Có thể tách:
- establishment;
- vegetative;
- flowering;
- filling;
- maturity.

### 4.19.64. Balance-aware calibration
Loss nên phạt vi phạm conservation:

$$
J_{total}
=
J_{data}
+
\lambda_wBE_w^2
+
\lambda_CBE_C^2
+
\lambda_NBE_N^2
$$

### 4.19.65. Không “fit đẹp” bằng phá conservation
Nếu tăng fit nhưng mass balance xấu hơn, model không đạt chuẩn VECrop.

### 4.19.66. Regularization
$$
J_{reg}
=
J+\lambda\|\theta\|_2^2
$$

hoặc sparsity penalty nếu phù hợp.

### 4.19.67. Prior-based regularization
Bayesian prior cũng đóng vai trò regularization.

### 4.19.68. Overfitting
Dấu hiệu:
- calibration error rất thấp;
- validation error cao.

### 4.19.69. Underfitting
Dấu hiệu:
- cả calibration và validation đều kém;
- residual có structure rõ.

### 4.19.70. Model complexity
Thêm module chỉ khi cải thiện:
- prediction;
- mechanism;
- extrapolation;
- interpretability.

### 4.19.71. Complexity penalty
Một module mới nhưng không làm giảm error hoặc tăng hiểu biết có thể không đáng giữ.

### 4.19.72. Ablation
Bỏ module \(k\):
$$
\Delta E_k
=
E_{without\ k}
-
E_{full}
$$

### 4.19.73. Module identifiability
Một module có thể đúng về sinh học nhưng không nhận dạng được từ dataset hiện tại.

### 4.19.74. Observability
State \(X_i\) có thể không đo trực tiếp nhưng suy được qua observation operator.

### 4.19.75. Poor observability
Nếu nhiều state tạo cùng observation, model khó nhận dạng.

### 4.19.76. Experimental design
Sensitivity/identifiability nên hướng dẫn thiết kế thí nghiệm.

### 4.19.77. Optimal measurement timing
Đo vào thời điểm:
$$
|S_i(t)|
$$
cao có thể tăng khả năng nhận dạng.

### 4.19.78. Optimal variable choice
Để nhận dạng root hydraulic parameter, đo:
- \(\Psi_{leaf}\);
- transpiration;
- soil water
tốt hơn chỉ đo final yield.

### 4.19.79. Multi-scale observations
Nên kết hợp:
- sensor;
- destructive sampling;
- canopy measurements;
- yield;
- nutrient analysis.

### 4.19.80. Rice calibration priorities
Lúa:
- phenology;
- tiller/panicle number;
- LAI;
- soil redox/O₂ nếu ngập;
- grain filling;
- HI.

### 4.19.81. Maize calibration priorities
Ngô:
- root depth;
- C4 photosynthesis;
- ASI;
- kernel number;
- kernel weight;
- post-silking biomass.

### 4.19.82. Lettuce calibration priorities
Xà lách:
- root-zone EC/pH/T/O₂;
- leaf number;
- LAI;
- fresh/dry mass;
- tipburn/marketability;
- bolting timing.

### 4.19.83. Parameter transfer
Không chuyển parameter giữa crop nếu chỉ giống tên process.

### 4.19.84. Site parameter transfer
Soil hydraulic parameter phải site/soil-specific nếu dữ liệu cho thấy khác.

### 4.19.85. Hierarchical calibration
Có thể tách:
- global parameters;
- crop parameters;
- cultivar parameters;
- site parameters.

### 4.19.86. Hierarchical Bayesian form
$$
\theta_{cultivar}
\sim
\mathcal N(
\mu_{crop},
\sigma_{crop}^2
)
$$

### 4.19.87. Partial pooling
Giúp tránh:
- overfit từng cultivar;
- ép mọi cultivar cùng parameter.

### 4.19.88. Posterior correlation
Posterior correlation cao là dấu hiệu:
- equifinality;
- thiếu observation discriminating.

### 4.19.89. Prediction interval decomposition
Có thể tách:
$$
Var(Y)
=
Var_{input}
+
Var_{parameter}
+
Var_{structure}
+
Var_{noise}
+
Interactions
$$

### 4.19.90. Scenario uncertainty
Scenario management nên báo cả:
- expected gain;
- uncertainty;
- downside risk.

### 4.19.91. Decision robustness
Một management option tốt không chỉ có mean yield cao mà còn:
- variance thấp;
- downside risk thấp;
- ổn định qua weather scenarios.

### 4.19.92. Robust objective
$$
J_{robust}
=
E[Y]
-
\lambda Var(Y)
$$

### 4.19.93. Probabilistic threshold
Ví dụ:
$$
P(Y>Y_{target})
$$

hữu ích hơn chỉ báo mean yield.

### 4.19.94. Reliability
Một model forecast nên có:
- expected value;
- interval;
- confidence/extrapolation flag.

### 4.19.95. Calibration trace
Mỗi lần calibration cần lưu:
- dataset version;
- parameter bounds;
- optimizer;
- seed;
- objective;
- final parameter set.

### 4.19.96. Reproducibility
Cùng input + parameter + version phải tái tạo cùng output trong deterministic mode.

### 4.19.97. Stochastic reproducibility
Nếu có stochastic component phải lưu:
$$
Random\ seed
$$

### 4.19.98. Version lock
Khi so model:
- giữ cùng code version;
- chỉ thay đúng parameter/module cần test.

### 4.19.99. Benchmark hierarchy
So VECrop với:
1. naive baseline;
2. simple empirical model;
3. reduced crop model;
4. mechanistic full model.

### 4.19.100. Baseline importance
Nếu full model không vượt baseline đơn giản, complexity cần xem lại.

### 4.19.101. Physical plausibility
Một parameter set fit tốt nhưng tạo:
- negative pool;
- impossible HI;
- unrealistic flux
phải bị loại.

### 4.19.102. Biological plausibility
Parameter cần nằm trong miền phù hợp loài/organ/stage.

### 4.19.103. Constraint optimization
Có thể dùng:
$$
\theta_{min}
\le
\theta
\le
\theta_{max}
$$

và thêm conservation constraints.

### 4.19.104. Multi-objective calibration
Có thể tối ưu:
$$
[J_{water},J_{biomass},J_{yield},J_{nutrient}]
$$

thay vì gộp sớm thành một scalar.

### 4.19.105. Pareto front
Một parameter set có thể:
- fit water tốt;
- fit yield kém
và ngược lại.

Pareto analysis giúp thấy tradeoff.

### 4.19.106. Error covariance
Nếu observations correlated, likelihood nên phản ánh covariance.

### 4.19.107. Data weighting
Không nên để dataset có nhiều điểm tự động thống trị chỉ vì có nhiều mẫu.

### 4.19.108. Missing-data calibration
Missing values không nên tự điền bằng 0.

### 4.19.109. Out-of-range observation
Observation bất thường cần:
- kiểm sensor;
- kiểm unit;
- kiểm timestamp;
- không tự xóa.

### 4.19.110. Uncertainty map
Output cuối có thể gồm:
$$
\mathbf U_Y(t)
=
[
P10(t),
P50(t),
P90(t)
]
$$

### 4.19.111. Confidence map
Một diagnostic:
$$
C(t)
=
f(
coverage,
distance\ to\ calibration\ domain,
residual,
balance\ quality
)
$$

### 4.19.112. Confidence không phải probability đúng
Confidence score là diagnostic nội bộ, không được diễn giải như xác suất mô hình đúng nếu không có nền tảng thống kê tương ứng.

### 4.19.113. Validation gate
Một model chỉ được promote khi đạt:
- balance checks;
- validation error threshold;
- no critical failure flag;
- acceptable uncertainty.

### 4.19.114. Crop-specific acceptance
Ngưỡng chấp nhận có thể khác:
- rice;
- maize;
- lettuce
do biến mục tiêu khác nhau.

### 4.19.115. Yield-validation gate
Không chỉ final yield.

Phải đạt đồng thời:
- phenology;
- biomass;
- yield components;
- final yield.

### 4.19.116. Stress-validation gate
Stress module chỉ được giữ nếu tái hiện đúng:
- intermediate states;
- final response.

### 4.19.117. Cross-season validation
Một parameter set tốt phải kiểm qua nhiều vụ nếu muốn dùng ngoài một thí nghiệm.

### 4.19.118. Cross-site validation
Nếu dùng cho vùng rộng, phải kiểm nhiều site.

### 4.19.119. Transfer-learning caution
Không gọi việc đổi parameter vài hệ số là transfer learning nếu không có mô hình học máy tương ứng.

### 4.19.120. Data assimilation vs calibration
Calibration:
- cập nhật parameter.

Data assimilation:
- cập nhật state theo observation.

Không đồng nhất hai khái niệm.

### 4.19.121. Online updating
Có thể:
$$
X_t^{post}
=
Update(X_t^{prior},Y_t)
$$

trong mùa vụ.

### 4.19.122. Parameter drift
Nếu parameter thay đổi thật theo stage:
$$
\theta=\theta(t)
$$
thì không nên ép constant rồi giải thích bằng noise.

### 4.19.123. Time-varying parameter caution
Không cho mọi parameter thay đổi theo thời gian vì sẽ làm mất identifiability.

### 4.19.124. Structural model selection
Có thể so:
- hydraulic model A/B;
- allocation model A/B;
- senescence model A/B.

### 4.19.125. Information criteria caution
AIC/BIC hữu ích cho model thống kê phù hợp điều kiện, nhưng không phải tiêu chuẩn duy nhất cho mechanistic ODE.

### 4.19.126. Predictive validation
Ưu tiên:
$$
Performance_{unseen\ data}
$$

hơn fit trên calibration data.

### 4.19.127. Calibration hierarchy cho VECrop
Nên đi theo thứ tự:
1. physical/soil;
2. hydraulics;
3. gas exchange;
4. phenology;
5. nutrient uptake;
6. biomass allocation;
7. senescence;
8. yield.

### 4.19.128. Không fit downstream trước upstream
Nếu water module sai mà vẫn fit yield bằng allocation parameter, parameter sẽ mất ý nghĩa sinh học.

### 4.19.129. Sequential calibration caution
Sequential calibration tiện nhưng có thể khóa sai parameter upstream.

Cần re-check toàn hệ sau khi ghép.

### 4.19.130. Joint calibration
Joint calibration:
$$
\hat\theta
=
\arg\min_\theta
J_{whole-system}
$$

có thể tốt hơn nhưng đòi hỏi dữ liệu và computation lớn hơn.

### 4.19.131. Emulator
Khi full model chậm, có thể xây surrogate/emulator cho:
- sensitivity;
- uncertainty;
- optimization.

### 4.19.132. Emulator validation
Surrogate phải được kiểm trên domain dùng, không thay thế full model vô điều kiện.

### 4.19.133. Lightweight strategy
Với máy cấu hình nhẹ:
- Morris screening trước;
- giảm parameter;
- dùng Latin hypercube vừa phải;
- tránh MCMC cực lớn nếu không cần.

### 4.19.134. Latin Hypercube Sampling
LHS giúp phủ parameter space hiệu quả hơn random sampling thô trong nhiều bài toán.

### 4.19.135. Sampling reproducibility
Lưu:
- seed;
- sample count;
- parameter bounds;
- transform.

### 4.19.136. Log-scale parameter
Parameter trải nhiều bậc độ lớn nên sampling theo:
$$
\log\theta
$$
có thể phù hợp hơn linear scale.

### 4.19.137. Parameter transformation
Ví dụ positivity:
$$
\theta
=
e^\eta
$$

giúp optimizer không tạo parameter âm.

### 4.19.138. Uncertainty in initial state
Không chỉ parameter.

Ví dụ:
$$
\theta_{soil,0}
$$
và:
$$
B_0
$$
cũng có bất định.

### 4.19.139. Weather uncertainty
Forecast weather uncertainty nên propagate vào yield forecast.

### 4.19.140. Management uncertainty
Sai số:
- irrigation amount;
- fertilizer timing;
- plant density
cũng cần xét.

### 4.19.141. Observation uncertainty
Sensor và destructive sampling đều có error.

### 4.19.142. Model-form ensemble
Có thể dùng ensemble nhiều cấu trúc để ước lượng structural uncertainty.

### 4.19.143. Ensemble weighting
Không mặc định trọng số bằng nhau nếu có validation evidence khác nhau.

### 4.19.144. Bayesian model averaging caution
Chỉ dùng khi likelihood/model setup phù hợp.

### 4.19.145. Diagnostic outputs
4.19 nên xuất:
$$
\mathbf D_{unc}
=
[
Sensitivity,
Identifiability,
Parameter\ uncertainty,
Prediction\ interval,
Extrapolation\ flag
]^T
$$

### 4.19.146. Parameter report
Mỗi parameter cuối cần:
- estimate;
- interval;
- provenance;
- sensitivity;
- identifiability status.

### 4.19.147. Output report
Mỗi output chính cần:
- observed;
- simulated;
- residual;
- interval;
- stage;
- data quality flag.

### 4.19.148. Failure report
Nếu calibration thất bại:
- không tự chọn parameter cuối;
- lưu failure reason;
- không phát hành model như validated.

### 4.19.149. Recalibration trigger
Recalibration khi:
- cultivar mới;
- soil mới;
- climate domain mới;
- sensor system đổi;
- model structure đổi.

### 4.19.150. No-recalibration case
Không cần recalibrate chỉ vì thêm observation mới nếu state assimilation đã đủ và parameter domain không đổi.

### 4.19.151. Validation-first release
Một release VECrop nên có:
- calibration report;
- independent validation report;
- uncertainty report;
- balance audit.

### 4.19.152. Minimum acceptance package
Tối thiểu:
1. parameter table;
2. sensitivity ranking;
3. identifiability check;
4. validation metrics;
5. prediction intervals;
6. conservation audit.

### 4.19.153. Causal parameter interpretation
Không diễn giải một fitted coefficient như cơ chế sinh học nếu nó chỉ là statistical compensation.

### 4.19.154. Mechanism-preserving calibration
Calibration nên giữ:
- signs;
- bounds;
- conservation;
- physiological plausibility.

### 4.19.155. Uncertainty-aware decision
Một recommendation chỉ nên phát nếu:
$$
P(Benefit>0)
$$
đủ cao theo threshold đã định trước.

### 4.19.156. Risk-aware recommendation
Có thể báo:
- expected benefit;
- downside probability;
- worst plausible case.

### 4.19.157. Rice uncertainty focus
Lúa cần chú ý uncertainty ở:
- tiller survival;
- fertility;
- stem NSC remobilization;
- flooded-soil N dynamics.

### 4.19.158. Maize uncertainty focus
Ngô:
- root depth;
- ASI;
- kernel set;
- post-silking source;
- kernel weight.

### 4.19.159. Lettuce uncertainty focus
Xà lách:
- marketable fraction;
- DMF;
- tipburn risk;
- bolting timing;
- root-zone EC/O₂.

### 4.19.160. Cross-crop parameter sharing
Chỉ chia sẻ:
- physical constants;
- generic numerical settings
khi phù hợp.

Biological parameters phải kiểm riêng.

### 4.19.161. Calibration database
VECrop nên lưu lịch sử calibration theo:
- crop;
- cultivar;
- site;
- year;
- treatment;
- parameter version.

### 4.19.162. Provenance link
Mỗi parameter set phải truy được về:
- dataset;
- paper;
- experiment;
- calibration run.

### 4.19.163. Auditability
Người dùng phải biết:
- parameter nào lấy từ literature;
- parameter nào fit;
- parameter nào assumed;
- parameter nào proposed.

### 4.19.164. Không che uncertainty
Nếu uncertainty lớn:
- báo lớn;
- không làm tròn quá mức;
- không đưa một con số giả chính xác.

### 4.19.165. Precision reporting
Không báo:
$$
Y=8.23741\ t\ ha^{-1}
$$
nếu uncertainty ±1 t ha\(^{-1}\).

### 4.19.166. Final uncertainty principle
Một dự báo:
$$
\hat Y
$$
không đầy đủ nếu thiếu:
$$
Uncertainty(\hat Y)
$$

### 4.19.167. Final identifiability principle
Một parameter:
$$
\hat\theta
$$
không nên công bố như “đã xác định” nếu profile/posterior còn rộng.

### 4.19.168. Final validation principle
Fit tốt trên calibration set không đồng nghĩa model đúng.

### 4.19.169. Vai trò của 4.19 trong VECrop
4.19 tạo lớp kiểm định:

<div class="flow-chain">
<strong>Parameter</strong> → <strong>Sensitivity</strong> → <strong>Identifiability</strong> → <strong>Calibration</strong> → <strong>Validation</strong> → <strong>Uncertainty</strong> → <strong>Decision confidence</strong>
</div>

### 4.19.170. Kết luận 4.19
Một mô hình whole-plant chỉ đáng tin khi không chỉ fit tốt mà còn:
- parameter có thể nhận dạng;
- uncertainty được lượng hóa;
- validation độc lập;
- conservation đạt;
- prediction interval hợp lý;
- extrapolation được flag.

VECrop vì vậy phải coi:
$$
Prediction
=
Estimate
+
Uncertainty
+
Validity\ domain
$$

chứ không chỉ là một giá trị điểm.

---


## 4.20. Khung kiểm định đa cây trồng – bộ test cuối Chương 4 cho các nhóm cây thương mại

> **Mục tiêu:** 4.20 xây dựng bộ kiểm định cuối Chương 4 để VECrop có thể mở rộng từ lúa–ngô–xà lách sang hầu hết các nhóm cây trồng thương mại. Không giả định một bộ tham số chung cho mọi loài; chỉ chia sẻ **khung vật lý–sinh lý**, còn parameter, phenology, cơ quan thu hoạch và tiêu chí chất lượng phải cấu hình theo crop/cultivar.

### 4.20.1. Nguyên tắc bao phủ đa cây trồng

VECrop không nên tạo một “siêu cây trồng trung bình”.

Thay vào đó:

$$
Core\ engine
+
Crop\ configuration
+
Cultivar\ parameters
+
Management
=
Simulation
$$

### 4.20.2. Phân nhóm theo kiến trúc sinh lý và cơ quan thu hoạch

Các nhóm chính:
- ngũ cốc;
- cây họ đậu;
- cây lấy dầu;
- cây củ/rễ;
- cây rau lá;
- rau quả;
- cây ăn quả lâu năm;
- cây đường;
- cây sợi;
- cây đồ uống;
- cây gia vị/dược liệu;
- cây thức ăn gia súc;
- cây trồng nhà kính/thủy canh;
- cây nhiệt đới lâu năm;
- cây lấy nhựa/mủ;
- cây lấy hạt đặc sản;
- cây hoa/cảnh;
- cây sinh khối/năng lượng.

### 4.20.3. Khung test chung cho mọi cây

Mỗi crop configuration tối thiểu phải qua:
1. unit test;
2. balance test;
3. phenology test;
4. growth test;
5. stress test;
6. yield-component test;
7. uncertainty test;
8. extrapolation test.

### 4.20.4. Bộ biến tối thiểu

$$
\mathbf Z_{min}
=
[
Phenology,
LAI,
Biomass,
Root,
Water,
N,
Yield
]^T
$$

### 4.20.5. Bộ biến nâng cao

$$
\mathbf Z_{adv}
=
[
\Psi,
g_s,
A_n,
C_i,
NPK,
Phloem,
Sink,
ROS,
Hormone,
Senescence,
Quality
]^T
$$

### 4.20.6. Chuẩn dữ liệu cây trồng

Mỗi crop phải có metadata:
- species;
- cultivar;
- sowing/transplant date;
- density;
- management;
- soil/substrate;
- weather;
- phenology;
- harvest definition.

### 4.20.7. Không dùng tên thương mại thay species

Tên thương mại phải map về:
- species;
- cultivar/variety;
- production system.

### 4.20.8. Cấu hình quang hợp

Phân loại:
- C3;
- C4;
- CAM nếu áp dụng.

Không dùng FvCB C3 nguyên xi cho C4.

### 4.20.9. Cấu hình cơ quan kinh tế

$$
Harvest\ organ
\in
\{
grain,leaf,fruit,root,tuber,stem,fiber,seed,flower,latex,biomass
\}
$$

### 4.20.10. Cấu hình vòng đời

- annual;
- biennial;
- perennial.

### 4.20.11. Cấu hình hệ rễ

- shallow fibrous;
- deep fibrous;
- taproot;
- storage root;
- rhizome/tuber-linked.

### 4.20.12. Cấu hình sinh sản

- self-pollinated;
- cross-pollinated;
- vegetative harvest;
- perennial bearing cycle.

### 4.20.13. Cấu hình phenology

Mỗi crop cần:
- emergence;
- vegetative;
- reproductive;
- filling;
- maturity
hoặc mapping tương đương.

### 4.20.14. Cấu hình harvest rule

Harvest có thể theo:
- physiological maturity;
- market maturity;
- sugar content;
- size;
- color;
- dry matter;
- fiber quality;
- oil content.

### 4.20.15. Ngũ cốc – phạm vi

Bao gồm điển hình:
- rice;
- maize;
- wheat;
- barley;
- sorghum;
- millet;
- oats;
- rye;
- triticale.

### 4.20.16. Ngũ cốc – yield identity

$$
Y
=
Heads/Panicles/Ears\ area^{-1}
\times
Grains\ unit^{-1}
\times
Grain\ weight
$$

### 4.20.17. Ngũ cốc – test bắt buộc

Phải kiểm:
- tiller/ear establishment;
- flowering;
- grain number;
- grain filling;
- harvest index;
- lodging nếu có.

### 4.20.18. Lúa

Cần:
- flooded/AWD;
- redox;
- NH4+/NO3-;
- tillering;
- panicle;
- sterility;
- grain filling;
- stem NSC.

### 4.20.19. Ngô

Cần:
- C4 photosynthesis;
- deep root;
- ASI;
- ear/kernel set;
- post-silking source;
- kernel filling.

### 4.20.20. Lúa mì

Cần:
- vernalization tùy cultivar;
- photoperiod;
- tillering;
- spike development;
- anthesis;
- grain number;
- grain protein.

### 4.20.21. Barley

Tương tự wheat nhưng parameter riêng cho:
- phenology;
- tillering;
- grain filling;
- malting quality nếu mục tiêu thương mại.

### 4.20.22. Sorghum

Cần:
- C4;
- drought adaptation;
- stay-green;
- panicle sink;
- grain/silage configuration.

### 4.20.23. Millet

Cần cấu hình theo loài:
- pearl millet;
- finger millet;
- foxtail millet
không dùng chung parameter.

### 4.20.24. Oats/Rye/Triticale

Cần parameter riêng cho:
- cold response;
- vernalization;
- tillering;
- grain quality.

### 4.20.25. Cây họ đậu – phạm vi

Bao gồm:
- soybean;
- peanut;
- mung bean;
- common bean;
- pea;
- chickpea;
- lentil;
- cowpea;
- faba bean.

### 4.20.26. Họ đậu – N fixation

Cần thêm biological N fixation:

$$
N_{fix}
=
f(
Nodule,
C,
O_2,
N_{soil},
T,
Water
)
$$

### 4.20.27. Carbon cost của fixation

$$
C_{fix}
>
0
$$

Không coi N fixation là miễn phí.

### 4.20.28. Soybean

Cần:
- photoperiod;
- nodulation;
- pod set;
- seed number;
- seed oil/protein.

### 4.20.29. Peanut

Cần:
- flowering;
- pegging;
- pod development dưới đất;
- Ca supply;
- pod filling.

### 4.20.30. Mung/common bean/cowpea

Cần:
- flowering waves;
- pod set;
- seed filling;
- heat/drought sensitivity quanh flowering.

### 4.20.31. Chickpea/lentil/pea

Cần:
- cool-season phenology;
- pod set;
- seed filling;
- terminal drought response.

### 4.20.32. Cây lấy dầu – phạm vi

Bao gồm:
- canola/rapeseed;
- sunflower;
- sesame;
- oil palm;
- safflower;
- castor;
- flaxseed.

### 4.20.33. Oil yield

$$
Oil\ yield
=
Seed/Fruit\ yield
\times
Oil\ fraction
$$

### 4.20.34. Sunflower

Cần:
- head size;
- seed number;
- oil concentration;
- drought around flowering.

### 4.20.35. Rapeseed/canola

Cần:
- branching;
- pod number;
- seed number;
- oil/protein;
- lodging.

### 4.20.36. Sesame

Cần:
- indeterminate flowering;
- capsule number;
- shattering loss;
- oil concentration.

### 4.20.37. Oil palm

Cần:
- perennial architecture;
- bunch initiation;
- bunch filling;
- leaf area dynamics;
- harvest cycles;
- oil extraction trait.

### 4.20.38. Cây củ/rễ – phạm vi

Bao gồm:
- potato;
- cassava;
- sweet potato;
- carrot;
- beet;
- radish;
- taro;
- yam.

### 4.20.39. Storage-organ allocation

$$
a_{storage}
=
f(
DVS,
Sink,
Carbon,
Hormone,
Temperature
)
$$

### 4.20.40. Potato

Cần:
- tuber initiation;
- tuber number;
- bulking;
- photoperiod;
- temperature;
- dry matter;
- size classes.

### 4.20.41. Cassava

Cần:
- storage-root initiation;
- long-season source–sink;
- drought;
- starch accumulation.

### 4.20.42. Sweet potato

Cần:
- storage-root formation;
- vine/root allocation;
- marketable root size.

### 4.20.43. Carrot/radish/beet

Cần:
- storage-root growth;
- bolting risk;
- root quality;
- sugar/dry matter.

### 4.20.44. Taro/yam

Cần:
- corm/tuber formation;
- canopy duration;
- water relations;
- storage sink.

### 4.20.45. Rau lá – phạm vi

Bao gồm:
- lettuce;
- spinach;
- cabbage;
- kale;
- mustard greens;
- bok choy;
- celery;
- herbs harvested for leaves.

### 4.20.46. Rau lá – yield definition

$$
Y_{market}
=
Fresh\ marketable\ shoot
$$

### 4.20.47. Rau lá – quality constraints

Cần:
- leaf size;
- color/chlorophyll;
- nitrate;
- tipburn;
- senescence;
- bolting;
- disease damage.

### 4.20.48. Lettuce

Cần:
- shallow root;
- rapid leaf expansion;
- Ca transport;
- tipburn;
- fresh/dry matter;
- bolting.

### 4.20.49. Cabbage

Cần:
- head initiation;
- head filling;
- compactness;
- marketable head mass.

### 4.20.50. Spinach

Cần:
- rapid leaf production;
- bolting;
- nitrate concentration;
- photoperiod/temperature.

### 4.20.51. Celery

Cần:
- petiole biomass;
- water status;
- marketable stalk quality.

### 4.20.52. Rau quả – phạm vi

Bao gồm:
- tomato;
- pepper/chili;
- cucumber;
- eggplant;
- melon;
- watermelon;
- squash;
- okra.

### 4.20.53. Fruit-crop yield identity

$$
Y
=
Fruit\ number
\times
Mean\ fruit\ weight
\times
Marketable\ fraction
$$

### 4.20.54. Tomato

Cần:
- truss initiation;
- flower set;
- fruit number;
- fruit growth;
- soluble solids;
- blossom-end rot;
- harvest waves.

### 4.20.55. Pepper/chili

Cần:
- repeated flowering;
- fruit set;
- fruit load feedback;
- heat-sensitive pollen;
- marketable size/color.

### 4.20.56. Cucumber

Cần:
- sex expression;
- fruit set;
- rapid fruit growth;
- greenhouse humidity;
- harvest frequency.

### 4.20.57. Eggplant

Cần:
- fruit set;
- repeated harvest;
- fruit size;
- temperature response.

### 4.20.58. Melon/watermelon

Cần:
- vine growth;
- flowering;
- fruit set;
- sugar accumulation;
- fruit water balance.

### 4.20.59. Squash/pumpkin

Cần:
- fruit number;
- vine allocation;
- fruit dry matter;
- repeated/terminal harvest tùy crop.

### 4.20.60. Cây ăn quả lâu năm – phạm vi

Bao gồm:
- citrus;
- mango;
- banana;
- apple;
- pear;
- grape;
- avocado;
- peach;
- plum;
- lychee;
- longan;
- guava;
- papaya;
- dragon fruit.

### 4.20.61. Perennial state carryover

Với cây lâu năm:

$$
X_{year+1,0}
=
f(X_{year,end})
$$

Không reset biomass về 0 mỗi vụ.

### 4.20.62. Reserve carryover

$$
Reserve_{next}
=
Reserve_{end}
-
Dormancy/maintenance\ cost
$$

### 4.20.63. Alternate bearing

Một số cây có:
$$
Yield_t
\leftrightarrow
Flower\ induction_{t+1}
$$

cần memory qua năm.

### 4.20.64. Citrus

Cần:
- flowering flush;
- fruit set;
- fruit drop;
- size;
- juice/TSS/acid;
- alternate bearing ở một số cultivar.

### 4.20.65. Mango

Cần:
- flowering induction;
- panicle;
- fruit set;
- fruit drop;
- carbohydrate reserves;
- alternate bearing.

### 4.20.66. Banana

Cần:
- leaf emergence;
- pseudostem biomass;
- bunch initiation;
- hand/finger development;
- ratoon cycle.

### 4.20.67. Apple/pear

Cần:
- chilling;
- dormancy;
- bloom;
- fruit set;
- thinning;
- fruit size;
- sugar/firmness.

### 4.20.68. Grapevine

Cần:
- budbreak;
- flowering;
- berry set;
- veraison;
- sugar/acid;
- pruning;
- perennial reserve.

### 4.20.69. Avocado

Cần:
- flowering type;
- fruit set;
- strong fruit drop;
- alternate bearing;
- oil/dry matter.

### 4.20.70. Peach/plum

Cần:
- chilling;
- bloom;
- fruit set;
- thinning;
- fruit size;
- harvest quality.

### 4.20.71. Lychee/longan

Cần:
- floral induction;
- temperature cues;
- fruit set;
- fruit drop;
- carbohydrate reserve.

### 4.20.72. Guava/papaya

Cần:
- repeated flowering;
- fruit development;
- continuous harvest;
- temperature/water effects.

### 4.20.73. Dragon fruit

Cần:
- CAM-capable physiology;
- flowering induction;
- fruit set;
- night gas exchange nếu mô hình cơ chế.

### 4.20.74. Cây đường – phạm vi

Bao gồm:
- sugarcane;
- sugar beet.

### 4.20.75. Sugar yield

$$
Sugar\ yield
=
Biomass_{harvest}
\times
Sugar\ concentration
$$

### 4.20.76. Sugarcane

Cần:
- tillering;
- stalk elongation;
- sucrose accumulation;
- ratoon;
- lodging;
- maturity index.

### 4.20.77. Sugar beet

Cần:
- storage root;
- sucrose concentration;
- bolting;
- impurity/quality traits.

### 4.20.78. Cây sợi – phạm vi

Bao gồm:
- cotton;
- flax;
- hemp;
- jute.

### 4.20.79. Fiber yield

$$
Fiber\ yield
=
Harvested\ biomass
\times
Fiber\ fraction
\times
Quality\ factor
$$

### 4.20.80. Cotton

Cần:
- square;
- flower;
- boll set;
- boll retention;
- fiber length/strength;
- defoliation/harvest.

### 4.20.81. Flax/hemp/jute

Cần:
- stem elongation;
- fiber deposition;
- maturity;
- lodging;
- fiber quality.

### 4.20.82. Cây đồ uống – phạm vi

Bao gồm:
- coffee;
- tea;
- cocoa.

### 4.20.83. Coffee

Cần:
- flowering triggered by rainfall/dry period;
- fruit set;
- berry filling;
- biennial bearing;
- shade effects.

### 4.20.84. Tea

Cần:
- shoot flushing;
- plucking interval;
- leaf quality;
- shade;
- N management.

### 4.20.85. Cocoa

Cần:
- perennial canopy;
- flowering/cherelle;
- pod set;
- pod filling;
- shade/water stress.

### 4.20.86. Cây gia vị và dược liệu

Bao gồm:
- ginger;
- turmeric;
- garlic;
- onion;
- coriander;
- basil;
- mint;
- lemongrass;
- medicinal herbs.

### 4.20.87. Onion/garlic

Cần:
- bulb initiation;
- photoperiod;
- bulb filling;
- dry matter;
- curing.

### 4.20.88. Ginger/turmeric

Cần:
- rhizome initiation;
- rhizome filling;
- canopy duration;
- dry matter/active compounds.

### 4.20.89. Herbs

Harvest có thể theo:
- leaf biomass;
- essential oil;
- active compound.

Không dùng biomass đơn thuần làm objective duy nhất.

### 4.20.90. Cây thức ăn gia súc

Bao gồm:
- alfalfa;
- clover;
- ryegrass;
- Napier grass;
- forage maize;
- forage sorghum.

### 4.20.91. Forage yield

$$
Y_{forage}
=
Harvestable\ biomass
$$

nhưng quality cần:
- crude protein;
- fiber;
- digestibility;
- moisture.

### 4.20.92. Multi-cut system

Sau mỗi cắt:

$$
B_{shoot}^{+}
=
B_{shoot}^{-}
-
Harvest
$$

và regrowth dùng reserve/root state còn lại.

### 4.20.93. Alfalfa/clover

Cần:
- N fixation;
- regrowth;
- cutting interval;
- reserve dynamics.

### 4.20.94. Napier/forage grasses

Cần:
- repeated cutting;
- tillering;
- stem/leaf ratio;
- digestibility decline theo maturity.

### 4.20.95. Cây nhiệt đới công nghiệp lâu năm

Bao gồm:
- rubber;
- coconut;
- cashew;
- pepper;
- areca.

### 4.20.96. Rubber

Cơ quan kinh tế là latex.

Cần:
- canopy;
- trunk growth;
- latex regeneration;
- tapping schedule;
- carbon cost;
- drought effects.

### 4.20.97. Coconut

Cần:
- perennial leaf production;
- inflorescence;
- nut set;
- nut filling;
- multi-year reserve.

### 4.20.98. Cashew

Cần:
- flowering;
- nut set;
- apple/nut partition;
- alternate production.

### 4.20.99. Black pepper

Cần:
- vine growth;
- spike initiation;
- berry set;
- support system;
- root disease/water stress sensitivity.

### 4.20.100. Cây hạt đặc sản

Bao gồm:
- sesame;
- quinoa;
- buckwheat;
- chia;
- amaranth.

Cần cấu hình theo:
- inflorescence;
- seed set;
- filling;
- shattering;
- grain quality.

### 4.20.101. Cây hoa/cảnh

Bao gồm:
- chrysanthemum;
- rose;
- lily;
- orchid;
- marigold;
- potted ornamentals.

### 4.20.102. Flower marketable yield

Có thể là:
$$
Y_{flower}
=
Number_{marketable\ stems}
\times
Quality
$$

### 4.20.103. Flower quality

Cần:
- stem length;
- flower diameter;
- color;
- bud stage;
- vase life.

### 4.20.104. Photoperiodic ornamentals

Một số cây hoa rất nhạy photoperiod nên phenology module phải crop-specific.

### 4.20.105. Cây sinh khối/năng lượng

Bao gồm:
- miscanthus;
- switchgrass;
- energy cane;
- short-rotation biomass crops.

### 4.20.106. Biomass objective

$$
Y_{bioenergy}
=
Dry\ biomass
\times
Energy/Conversion\ quality
$$

### 4.20.107. Nhà kính

Cần thêm:
- controlled temperature;
- humidity;
- CO₂ enrichment;
- artificial light;
- fertigation;
- substrate volume.

### 4.20.108. Hydroponics

State vùng rễ:
$$
[
EC,pH,T_{solution},DO,N,P,K,Ca,Mg,Na,Cl
]
$$

### 4.20.109. Nutrient solution balance

$$
\frac{dM_{i,tank}}{dt}
=
Input_i
-
Uptake_i
-
Drain_i
+
Return_i
$$

### 4.20.110. Greenhouse fruit crops

Tomato/cucumber/pepper cần:
- truss/fruit load;
- pruning;
- harvest waves;
- climate control.

### 4.20.111. Vertical farming

Cần:
- PPFD;
- photoperiod;
- DLI;
- CO₂;
- airflow;
- root-zone solution;
- layer-specific microclimate.

### 4.20.112. Controlled-environment test

Phải kiểm:
- energy/light input;
- nutrient balance;
- water balance;
- growth rate;
- marketable yield.

### 4.20.113. Cây CAM

Với pineapple, dragon fruit và CAM crops:
- khí khổng mở đêm;
- acid accumulation;
- day/night carbon cycle.

Không dùng gas-exchange C3 ban ngày nguyên xi.

### 4.20.114. Pineapple

Cần:
- CAM;
- rosette architecture;
- floral induction;
- fruit development;
- sugar/acid quality.

### 4.20.115. Cây lấy mủ/nhựa

Ngoài rubber có thể có crop sản xuất latex/resin.

Output phải là:
$$
Flow_{latex/resin}
$$
chứ không chỉ biomass.

### 4.20.116. Cây gia vị lấy hạt/quả

Ví dụ:
- pepper;
- coriander;
- cumin;
- chili.

Objective có thể gồm:
- dry yield;
- essential oil;
- pungency/active compound.

### 4.20.117. Crop quality module

Quality state tổng quát:
$$
\mathbf Q_c
=
[
Moisture,
Protein,
Oil,
Sugar,
Acid,
Fiber,
Color,
Firmness,
Defect
]^T
$$

### 4.20.118. Marketability module

$$
Y_{market}
=
Y_{gross}
f_{market}
$$

### 4.20.119. Marketability không phổ quát

Tiêu chí khác nhau theo:
- commodity;
- thị trường;
- processing;
- export/domestic standards.

### 4.20.120. Multi-harvest crops

Với tomato, cucumber, pepper, tea, coffee:
$$
Y_{season}
=
\sum_{h=1}^{n}
Y_h
$$

### 4.20.121. Perennial harvest cycles

Cây lâu năm cần:
$$
State_{cycle+1}
=
f(State_{cycle},Harvest,Stress)
$$

### 4.20.122. Ratoon crops

Sugarcane, banana và một số grasses cần carryover:
- root/rhizome;
- reserves;
- disease pressure;
- stand age.

### 4.20.123. Grafting

Với fruit/vegetable grafted crops:
- rootstock;
- scion
phải có parameter tương tác riêng nếu mô hình sâu.

### 4.20.124. Rootstock–scion coupling

$$
Hydraulics_{rootstock}
\rightarrow
Scion\ water/nutrient
\rightarrow
Growth/Yield
$$

### 4.20.125. Pollination module

Cần cho:
- fruit crops;
- seed crops;
- cross-pollinated crops.

### 4.20.126. Pollination success

$$
f_{poll}
=
f(
Flowering\ overlap,
Temperature,
Humidity,
Pollinator,
Wind
)
$$

### 4.20.127. Fruit set

$$
N_{fruit,set}
=
N_{flower}
f_{poll}
f_{fert}
(1-f_{abort})
$$

### 4.20.128. Thinning

Management:
$$
N_{fruit}^{+}
=
N_{fruit}^{-}
-
N_{thinned}
$$

### 4.20.129. Pruning

Pruning thay đổi:
- LAI;
- source capacity;
- sink distribution;
- architecture.

### 4.20.130. Training system

Đặc biệt cho:
- grape;
- tomato;
- cucumber;
- fruit trees.

Cần ảnh hưởng tới light interception.

### 4.20.131. Planting density

$$
Y_{area}
=
Density
\times
Y_{plant}
$$

nhưng competition phải được mô hình hóa.

### 4.20.132. Intercropping

Không thể dùng single-crop canopy trực tiếp.

Cần:
- species A/B;
- competition;
- light partition;
- root overlap;
- nutrient sharing/competition.

### 4.20.133. Mixed canopy radiation

$$
I_k
=
f(
LAI_A,
LAI_B,
height_A,
height_B,
leaf\ angle
)
$$

### 4.20.134. Agroforestry

Cần:
- tree–crop competition;
- shade;
- root depth separation;
- long-term woody biomass.

### 4.20.135. Salinity-tolerant crops

Không dùng cùng EC threshold cho:
- barley;
- tomato;
- lettuce;
- rice.

### 4.20.136. Flood-tolerant crops

Không dùng rice hypoxia parameter cho maize/lettuce.

### 4.20.137. Drought-tolerant crops

Không suy tolerance chỉ từ một \(P_{50}\).

Cần:
- stomatal strategy;
- rooting;
- osmotic adjustment;
- phenology;
- reserve.

### 4.20.138. Heat tolerance

Phải phân biệt:
- vegetative heat;
- reproductive heat;
- filling heat.

### 4.20.139. Cold/chilling

Cây nhiệt đới có thể bị chilling mà chưa freezing.

### 4.20.140. Frost

Cần damage module riêng nếu mô hình crop vùng lạnh.

### 4.20.141. Nutrient-specific tests

Mỗi crop nên có test:
- N deficiency;
- P deficiency;
- K deficiency;
- Ca-related disorder nếu relevant;
- Mg/S/micronutrient khi có dữ liệu.

### 4.20.142. Calcium disorders

Quan trọng ở:
- lettuce tipburn;
- tomato blossom-end rot;
- apple bitter pit.

Không mô hình bằng total Ca soil đơn thuần.

### 4.20.143. Iron deficiency

Quan trọng ở nhiều horticultural crops, đặc biệt pH cao.

Cần availability + root response.

### 4.20.144. Boron

Quan trọng với:
- reproductive development;
- cell wall
ở một số crops.

Threshold cần species-specific.

### 4.20.145. Silicon

Có ý nghĩa ở:
- rice;
- sugarcane;
- grasses.

Không coi là essential nutrient universal cho mọi crop.

### 4.20.146. Quality vs quantity

Một crop model thương mại cần:
$$
Objective
=
f(Yield,Quality,Marketability)
$$

### 4.20.147. Disease/pest placeholder

Chương 4 chỉ nên để interface:
$$
Damage_{biotic}(t)
$$

không giả mô hình sâu nếu chưa có epidemiology module.

### 4.20.148. Biotic stress effects

Có thể tác động:
- LAI;
- photosynthesis;
- root function;
- reproductive organs;
- marketable fraction.

### 4.20.149. Không double count disease

Nếu disease đã giảm LAI thì không phạt thêm photosynthesis lần nữa bằng cùng severity factor nếu đã bao hàm.

### 4.20.150. Weed competition

Cần module riêng nếu muốn:
- light competition;
- water competition;
- nutrient competition.

### 4.20.151. Lodging

Quan trọng ở:
- rice;
- wheat;
- barley;
- maize;
- tall biomass crops.

### 4.20.152. Shattering

Quan trọng ở:
- cereals;
- sesame;
- some legumes.

### 4.20.153. Cracking/splitting

Quan trọng ở:
- tomato;
- cherry;
- grape;
- citrus
tùy crop.

### 4.20.154. Postharvest boundary

VECrop Chương 4 dừng ở harvest.

Postharvest physiology chỉ nối qua output:
- moisture;
- sugar;
- acidity;
- firmness;
- storage reserves.

### 4.20.155. Crop configuration schema

Mỗi crop cần:
$$
Config=
\{
Photosynthesis,
Phenology,
Root,
Sink,
Harvest,
Quality,
Stress
\}
$$

### 4.20.156. Cultivar overrides

$$
\theta_{cultivar}
=
\theta_{crop}
+
\Delta\theta_{cultivar}
$$

### 4.20.157. Site overrides

$$
\theta_{site}
=
[
soil,
weather,
management
]
$$

### 4.20.158. Validation hierarchy đa cây

Mỗi crop phải qua:
1. process validation;
2. organ validation;
3. whole-plant validation;
4. yield validation;
5. multi-environment validation.

### 4.20.159. Process validation

Ví dụ:
- gas exchange;
- water uptake;
- nutrient uptake.

### 4.20.160. Organ validation

Ví dụ:
- root depth;
- leaf area;
- fruit/grain growth.

### 4.20.161. Whole-plant validation

Phải kiểm:
- total biomass;
- organ partition;
- water use;
- nutrient accumulation.

### 4.20.162. Yield validation

Phải kiểm:
- yield components;
- gross yield;
- marketable yield.

### 4.20.163. Multi-environment validation

Ít nhất:
- different season;
- different water regime;
- different nutrient regime
nếu muốn dùng rộng.

### 4.20.164. Crop-specific uncertainty

Mỗi crop cần sensitivity ranking riêng.

Không dùng ranking của rice cho tomato.

### 4.20.165. Parameter identifiability theo crop

Một parameter có thể identifiable ở crop này nhưng không ở crop khác vì observation khác.

### 4.20.166. Minimal dataset – field cereals

Tối thiểu:
- weather;
- soil water;
- phenology;
- LAI;
- biomass;
- yield components.

### 4.20.167. Minimal dataset – horticulture

Tối thiểu:
- climate;
- irrigation/fertigation;
- root-zone EC/pH;
- organ number;
- organ mass;
- marketable fraction.

### 4.20.168. Minimal dataset – perennial fruit

Tối thiểu:
- annual phenology;
- canopy state;
- flowering;
- fruit set;
- fruit growth;
- reserve/previous-year state;
- yield.

### 4.20.169. Minimal dataset – hydroponics

Tối thiểu:
- EC;
- pH;
- solution temperature;
- DO;
- nutrient concentrations;
- water uptake;
- biomass;
- yield.

### 4.20.170. Minimum acceptance test

Một crop config không được coi là sẵn sàng nếu chưa qua:
- unit consistency;
- mass balance;
- phenology sanity;
- yield-component sanity;
- validation.

### 4.20.171. Universal limiting tests

Mọi crop phải kiểm:
- no light;
- no water;
- no root;
- no sink;
- extreme temperature;
- nutrient depletion.

### 4.20.172. Crop-specific limiting tests

Ví dụ:
- rice: anoxia/reoxygenation;
- maize: drought at silking;
- lettuce: Ca transport/tipburn;
- potato: high temperature at tuberization;
- tomato: blossom-end rot;
- apple: chilling/bloom.

### 4.20.173. Yield identity test

Mỗi crop phải có identity phù hợp.

Ví dụ cereal:
$$
Y=N_{grain}W_{grain}
$$

fruit crop:
$$
Y=N_{fruit}W_{fruit}
$$

leaf crop:
$$
Y=B_{marketable\ leaf}
$$

### 4.20.174. Harvest index test

Chỉ dùng HI khi định nghĩa phù hợp với commodity.

### 4.20.175. Quality consistency test

Quality output phải nhất quán với:
- composition;
- maturity;
- water status.

### 4.20.176. Economic consistency test

Nếu model dùng recommendation:
$$
Profit
=
Revenue-Cost
$$

không chỉ tối đa biological yield.

### 4.20.177. Marketability consistency

Một crop có total biomass cao vẫn có thể:
$$
Y_{market}\ll Y_{gross}
$$

### 4.20.178. Perennial carryover test

Cây lâu năm phải:
- giữ biomass/reserve;
- không reset phenology sai;
- theo dõi bearing cycle.

### 4.20.179. Multi-harvest carryover test

Sau mỗi lần harvest:
- sink giảm;
- source giữ lại;
- regrowth/next fruit wave cập nhật.

### 4.20.180. Ratoon carryover test

Cần giữ:
- root/rhizome;
- stand age;
- reserve;
- disease/stress memory.

### 4.20.181. Grafting test

Nếu grafted:
- rootstock hydraulics;
- scion phenology;
- yield response
phải kết nối đúng.

### 4.20.182. Crop switch test

Chuyển từ crop A sang crop B phải đổi:
- photosynthesis mode;
- phenology;
- sink;
- harvest;
- quality;
- parameter set.

### 4.20.183. No-hidden-parameter rule

Không được tự tạo parameter “hợp lý” mà không ghi:
- source;
- calibration;
- assumption.

### 4.20.184. Provenance matrix

Mỗi crop config cần bảng:
| Parameter | Crop | Cultivar | Unit | Source | Status |
|---|---|---|---|---|---|

### 4.20.185. Validation matrix

| Crop | Process | Variable | Dataset | Metric | Pass/Fail |
|---|---|---|---|---|---|

### 4.20.186. Stress matrix

| Crop | Stress | Sensitive stage | Mechanism | Observables |
|---|---|---|---|---|

### 4.20.187. Yield-component matrix

| Crop group | Number component | Size component | Marketability |
|---|---|---|---|
| cereal | grain number | grain weight | harvest loss |
| fruit | fruit number | fruit weight | defect |
| root/tuber | organ number | organ size | grade |
| leaf | leaf biomass | leaf expansion | defect |

### 4.20.188. Universal core không có nghĩa universal parameter

Có thể dùng chung:
- mass balance;
- water potential;
- transport equations;
- bookkeeping.

Không dùng chung vô điều kiện:
- \(V_{cmax}\);
- \(P_{50}\);
- phenology;
- sink parameters.

### 4.20.189. Commodity-first design

Cấu hình crop phải bắt đầu từ câu hỏi:
“Cái gì được bán/thu hoạch?”

Sau đó mới định nghĩa:
- yield;
- quality;
- harvest timing.

### 4.20.190. Crop-market mapping

Ví dụ:
- lettuce → fresh leaf;
- rice → dry grain;
- sugarcane → stalk sugar;
- rubber → latex;
- tea → young shoots;
- coffee → berries/beans;
- cotton → lint;
- ornamentals → stems/flowers.

### 4.20.191. Không dùng yield chung cho mọi crop

$$
Yield_{crop}
=
f(Harvest\ organ,Market\ definition)
$$

### 4.20.192. Crop-family inheritance

VECrop có thể cho config kế thừa:
$$
CropConfig
\leftarrow
FamilyTemplate
$$

nhưng cultivar vẫn override.

### 4.20.193. Template cereal

Bật mặc định:
- grain sink;
- tillering/branching;
- grain filling;
- HI.

### 4.20.194. Template leafy

Bật:
- leaf expansion;
- marketable fresh mass;
- senescence;
- bolting.

### 4.20.195. Template fruiting vegetable

Bật:
- flowering;
- fruit set;
- repeated harvest;
- fruit quality.

### 4.20.196. Template perennial fruit

Bật:
- dormancy/flush;
- reserve carryover;
- fruit set;
- annual cycle.

### 4.20.197. Template root/tuber

Bật:
- storage organ initiation;
- bulking;
- size grading.

### 4.20.198. Template forage

Bật:
- biomass quality;
- cutting;
- regrowth.

### 4.20.199. Template industrial perennial

Bật:
- multi-year biomass;
- repeated harvest/tapping;
- reserve carryover.

### 4.20.200. Template controlled environment

Bật:
- artificial light;
- CO₂;
- fertigation;
- climate control;
- high-frequency sensing.

### 4.20.201. Crop onboarding workflow

Khi thêm crop mới:
1. xác định harvest organ;
2. xác định photosynthesis type;
3. xác định phenology;
4. xác định root architecture;
5. xác định sink;
6. xác định quality;
7. thu parameter;
8. kiểm định.

### 4.20.202. Parameter collection hierarchy

Ưu tiên:
1. primary experiment;
2. peer-reviewed crop-specific literature;
3. authoritative handbook/database;
4. calibration;
5. assumption có gắn cờ.

### 4.20.203. Không bịa tham số

Nếu thiếu:
$$
\theta_i=NA
$$

tốt hơn tự gán số không có nguồn.

### 4.20.204. Crop readiness levels

Có thể định nghĩa:
- R0: concept only;
- R1: parameterized;
- R2: calibrated;
- R3: validated;
- R4: multi-site validated;
- R5: decision-support ready.

### 4.20.205. R0
Chỉ có:
- equations;
- config skeleton.

### 4.20.206. R1
Có parameter có nguồn nhưng chưa fit local.

### 4.20.207. R2
Đã calibration.

### 4.20.208. R3
Đã validation độc lập.

### 4.20.209. R4
Đã validation nhiều mùa/site.

### 4.20.210. R5
Có:
- uncertainty;
- failure flags;
- management recommendation validation.

### 4.20.211. Không gọi production-ready sớm

Crop config chỉ nên gọi production-ready khi đạt validation thực địa phù hợp.

### 4.20.212. Crop catalog

VECrop nên có catalog metadata:
- crop;
- species;
- group;
- photosynthesis;
- harvest organ;
- cycle;
- readiness.

### 4.20.213. Example catalog fields

$$
[
crop\_id,
species,
cultivar,
group,
C3/C4/CAM,
harvest\_organ,
readiness
]
$$

### 4.20.214. Validation summary card

Mỗi crop nên có:
- datasets;
- climates;
- soils;
- seasons;
- RMSE/MAE;
- uncertainty;
- known limitations.

### 4.20.215. Failure-domain card

Ghi rõ:
- chưa kiểm flood;
- chưa kiểm salinity;
- chưa kiểm high heat;
- chưa kiểm perennial carryover
nếu chưa có dữ liệu.

### 4.20.216. Crop-specific explainability

Một yield loss phải giải thích theo crop.

Ví dụ:
- maize: kernel set;
- rice: sterility;
- tomato: fruit set;
- lettuce: marketable leaf loss.

### 4.20.217. Common engine output

Mọi crop có thể xuất:
$$
[
Water,
Carbon,
Nutrients,
Biomass,
Phenology,
Yield,
Uncertainty
]
$$

### 4.20.218. Commodity-specific output

Ngoài core:
- grain protein;
- oil;
- sugar;
- fiber;
- latex;
- fruit Brix;
- marketability.

### 4.20.219. Final cross-crop conservation test

Mọi crop phải thỏa:
$$
Input-Output-\Delta Storage\approx0
$$

cho các pool chính.

### 4.20.220. Final cross-crop unit test

Không chấp nhận config có:
- mixed fresh/dry mass;
- per-plant/per-area confusion;
- incompatible time units.

### 4.20.221. Final cross-crop phenology test

Phải kiểm stage sequence không đảo:
$$
Emergence
\rightarrow
Vegetative
\rightarrow
Reproductive
\rightarrow
Maturity
$$

hoặc sequence crop-specific tương đương.

### 4.20.222. Final cross-crop yield test

Yield phải xuất phát từ:
- harvest organ;
- source;
- sink;
- development;
- allocation.

### 4.20.223. Final cross-crop uncertainty test

Mỗi forecast quan trọng phải có:
- interval;
- domain flag;
- data-quality flag.

### 4.20.224. Final cross-crop provenance test

Không có parameter quan trọng nào thiếu:
- source;
- unit;
- status.

### 4.20.225. Final cross-crop double-count test

Mỗi stress phải audit pathway.

Không được:
$$
Mechanistic\ stress
+
Empirical\ penalty
$$
cho cùng effect nếu chưa chứng minh cần cả hai.

### 4.20.226. Final cross-crop validation principle

Một crop mới không được coi là “đã có trong VECrop” chỉ vì có tên.

Nó chỉ thực sự được hỗ trợ khi:
$$
Config
+
Parameters
+
Calibration
+
Validation
$$
đều tồn tại.

### 4.20.227. Khung kết thúc Chương 4

<div class="flow-chain">
<strong>Core physiology</strong> → <strong>Crop template</strong> → <strong>Cultivar parameterization</strong> → <strong>Calibration</strong> → <strong>Validation</strong> → <strong>Uncertainty</strong> → <strong>Marketable yield</strong>
</div>

### 4.20.228. Kết luận Chương 4

Chương 4 kết thúc bằng nguyên tắc:

$$
One\ core
\neq
One\ crop
$$

Đúng hơn:

$$
One\ mechanistic\ core
+
Many\ crop\ configurations
$$

VECrop có thể mở rộng tới rất nhiều cây trồng thương mại nếu:
1. giữ chung các định luật vật lý và mass balance;
2. thay đổi đúng photosynthesis, phenology, root, sink và harvest logic;
3. không chuyển tham số sinh học tùy tiện giữa loài;
4. mỗi crop có provenance, calibration, validation và uncertainty riêng;
5. chỉ công bố mức hỗ trợ tương ứng readiness level thực tế.

**Điểm dừng Chương 4: 4.20.**

---

# Chuỗi tích hợp cuối Chương 4

<div class="flow-chain">
<strong>Đất/giá thể</strong> → <strong>Rễ</strong> → <strong>Xylem</strong> → <strong>Lá</strong> → <strong>Khí khổng & quang hợp</strong> → <strong>Phloem</strong> → <strong>Source–sink</strong> → <strong>C–N–P–K & năng lượng</strong> → <strong>ROS–Hormone–Ca²⁺–MAPK</strong> → <strong>Sinh trưởng và năng suất</strong>
</div>

**Phạm vi giáo trình hiện tại kết thúc đúng tại mục 4.20.**

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
23. Reviews and textbooks on crop growth analysis, biomass partitioning, allometry and organ allocation.
24. Reviews on root–shoot allocation, functional equilibrium and dynamic dry-matter partitioning.
25. Reviews and crop-model literature on yield components, sink establishment, grain filling and harvest index.
26. Literature on yield potential, yield gaps, reproductive stress windows and marketable yield formation in rice, maize and leafy vegetables.
27. Reviews on whole-plant systems modeling, structural–functional integration and conservation-based crop simulation.
28. Reviews on coupled water–carbon–nitrogen modeling and integrated crop systems.
29. Literature on global sensitivity analysis, identifiability, uncertainty quantification and Bayesian calibration for dynamic crop and environmental models.
30. Literature on model evaluation, cross-validation, data assimilation and uncertainty-aware decision support in agricultural systems.
31. Crop physiology and crop-model literature covering cereals, legumes, oilseeds, root/tuber crops, vegetables, perennial fruit crops, forage, industrial crops and controlled-environment agriculture.
32. Authoritative crop-specific agronomy, phenology, yield-component and quality literature should be attached to each future crop configuration rather than treated as universal parameters.

> **Quy tắc VECrop:** mọi tham số như \(P_{50}\), \(g_1\), \(V_{cmax}\), \(J_{max}\), \(K_m\), \(V_{\max}\), \(k_{rem}\), hormone coefficient hoặc vulnerability parameter phải có provenance theo loài/giống/cơ quan/giai đoạn/điều kiện/phương pháp; nếu chưa có nguồn thì phải ghi rõ *calibration parameter* hoặc *proposed*.


---

> **Điểm dừng Chương 4:** 4.20.
