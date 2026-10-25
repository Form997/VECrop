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
