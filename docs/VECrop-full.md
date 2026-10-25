# VECrop — Giáo trình tổng hợp Chương 1 đến Chương 16

> Bản làm việc tích hợp toàn bộ các chương hiện có. Các file chương riêng vẫn được duy trì để chỉnh sửa, kiểm định và theo dõi phiên bản.

---

# Chương 1. Cơ sở sinh lý và toán học của hấp thu dinh dưỡng trong VECrop

## 1.1. Mục tiêu và phạm vi

Chương này thiết lập nền tảng sinh lý học, vật lý và toán học cho VECrop. Mục tiêu không phải tạo ra một “định luật mới” thay thế sinh lý thực vật hiện có, mà xây dựng một **khung tích hợp có thể kiểm định** để nối các quá trình:

$
\boxed{
\text{môi trường vùng rễ}
\rightarrow
\text{nước và ion}
\rightarrow
\text{rễ}
\rightarrow
\text{xylem}
\rightarrow
\text{lá}
\rightarrow
\text{quang hợp}
\rightarrow
\text{phloem}
\rightarrow
\text{source--sink}
\rightarrow
\text{sinh khối}
\rightarrow
\text{năng suất}
}
$

VECrop phân biệt ba cấp:

1. **Phương trình cơ chế**: dựa trên bảo toàn vật chất, nhiệt động học, thủy lực, động học enzyme/transport và sinh lý cây.
2. **Phương trình thực nghiệm**: dùng để mô tả một quan hệ quan sát được khi chưa đủ dữ liệu cho mô hình cơ chế.
3. **Chỉ số tổng hợp VECrop/HSY**: chỉ dùng sau khi các biến đã được chuẩn hóa và không được phép đếm lặp một stress đã được mô hình hóa trực tiếp.

Nguyên tắc xuyên suốt:

$
\boxed{
\text{không bịa tham số}
\quad+\quad
\text{không trộn đơn vị}
\quad+\quad
\text{không gọi giả thuyết là định luật}
}
$

---

## 1.2. Đối tượng của mô hình: hệ đất – rễ – cây – khí quyển

Một cây không thể được mô hình hóa độc lập với môi trường. VECrop xem cây là một hệ mở trao đổi vật chất và năng lượng với đất hoặc dung dịch dinh dưỡng, khí quyển, bức xạ, vi sinh vật vùng rễ và hệ quản lý canh tác.

Ta định nghĩa vector trạng thái môi trường:

$
\boxed{
\mathbf X_{env}
=
[
EC,\ pH,\ \theta,\ pF,\ \Psi_{soil},\ T,\ I,\ CO_2,\ O_2,\ Eh,\ N,\ P,\ K,\ldots
]^T
}
$

Trong đó $EC$ là độ dẫn điện; $pH$ là trạng thái acid–base; $\theta$ là hàm lượng nước thể tích của đất; $pF$ là logarit của độ lớn cột áp nước; $\Psi_{soil}$ là thế nước đất; $T$ là nhiệt độ; $I$ là bức xạ/PPFD; $CO_2$ là CO₂; $O_2$ là oxy vùng rễ; $Eh$ là thế oxy hóa–khử.

Không nên dùng một biến tổng quát như “độ màu mỡ đất” nếu mục tiêu là mô hình cơ chế. Mỗi biến phải có đơn vị, phương pháp đo và miền áp dụng rõ ràng.

---

## 1.3. Bảo toàn vật chất là ràng buộc cấp cao nhất

Đối với một chất $i$ trong một thể tích kiểm soát:

$
\boxed{
\frac{\partial M_i}{\partial t}
=
\sum F_{i,in}
-
\sum F_{i,out}
+
P_i
-
C_i
}
$

Trong đó $M_i$ là lượng chất đang lưu trữ; $F_{i,in}$ và $F_{i,out}$ là các dòng vào/ra; $P_i$ và $C_i$ là sản sinh/tiêu thụ nội tại.

Đối với nguyên tố khoáng như N, P, K trong toàn cây:

$
\boxed{
\frac{dM_i}{dt}
=
U_i-L_i
}
$

Tái phân bố N từ lá sang hạt không phải là mất N khỏi cây, mà chỉ là dòng nội bộ.

Carbon khác N–P–K vì nguồn carbon mới chủ yếu đến từ CO₂:

$
CO_2\rightarrow photosynthesis
$

và:

$
\boxed{
\frac{dM_C}{dt}
=
A_C-R-L_C
}
$

---

## 1.4. Phân biệt lượng, nồng độ, hoạt độ và thông lượng

Lượng chất:

$
M_i
$

Nồng độ:

$
\boxed{
C_i=\frac{M_i}{V}
}
$

Hoạt độ:

$
\boxed{
a_i=\gamma_iC_i
}
$

Thông lượng:

$
\boxed{
J_i
=
\frac{\text{lượng chất}}
{\text{diện tích}\times \text{thời gian}}
}
$

Không được cộng trực tiếp các đại lượng có bản chất và đơn vị khác nhau.

---

## 1.5. Nước: thế nước là biến động lực cơ bản

Thế nước tổng:

$
\boxed{
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
}
$

Trong đó $\Psi_p$ là thế áp suất, $\Psi_s$ thế thẩm thấu, $\Psi_m$ thế ma trận và $\Psi_g$ thế trọng trường.

Dòng nước:

$
\boxed{
\vec J_w=-K_h\nabla\Psi_w
}
$

Ở dạng hai nút:

$
\boxed{
Q_w=K(\Psi_1-\Psi_2)
}
$

VECrop không sử dụng “lực hướng lên” tổng hợp gồm transpiration + hormone + root pressure. Hormone là biến điều hòa; dòng nước phải được mô tả bằng gradient thế nước và độ dẫn thủy lực.

Trong trạng thái cây đang thoát hơi thường có:

$
\boxed{
\Psi_{soil}>\Psi_{root}>\Psi_{stem}>\Psi_{leaf}
}
$

theo nghĩa các giá trị trở nên âm hơn về phía lá.

---

## 1.6. pF và quan hệ nước đất

pF:

$
\boxed{
pF=\log_{10}|h|
}
$

trong đó $h$ là pressure head theo cm nước.

Một mô hình giữ nước đất kinh điển là van Genuchten:

$
\boxed{
S_e
=
\frac{\theta-\theta_r}{\theta_s-\theta_r}
=
\left[
1+(\alpha |h|)^n
\right]^{-m}
}
$

thường với:

$
m=1-\frac1n
$

Các tham số phải được hiệu chỉnh theo đất, không dùng một bộ chung cho mọi loại đất.

---

## 1.7. Dinh dưỡng khoáng: tổng lượng không bằng lượng cây có thể hấp thu

Tổng N, P hoặc K trong đất không đồng nghĩa với lượng cây có thể hấp thu.

$
\boxed{
M_{total}
=
M_{unavailable}
+
M_{potential}
+
M_{solution}
}
$

Tính khả dụng phụ thuộc hóa học đất, pH, nước, Eh, vi sinh vật, cấu trúc rễ, exudate, khuếch tán và dòng khối.

Một dạng dòng ion trong đất:

$
\boxed{
J_i^{soil}
=
q_wC_i
-
D_{eff,i}\nabla C_i
}
$

Trong đó $q_wC_i$ biểu diễn mass flow và thành phần khuếch tán biểu diễn diffusion.

---

## 1.8. Từ bề mặt rễ đến màng tế bào

Chuỗi:

$
\boxed{
soil\ solution
\rightarrow
rhizosphere
\rightarrow
apoplast
\rightarrow
plasma\ membrane
\rightarrow
cytosol
}
$

Màng sinh chất là hàng rào chọn lọc. Ion đi qua nhờ channel, carrier, symporter, antiporter hoặc pump trực tiếp/gián tiếp.

---

## 1.9. Thế điện hóa và động lực vận chuyển ion

$
\boxed{
\widetilde\mu_i
=
\mu_i^0+RT\ln a_i+z_iF\psi
}
$

Chênh lệch qua màng:

$
\boxed{
\Delta\widetilde\mu_i
=
RT\ln\frac{a_{i,in}}{a_{i,out}}
+
z_iF(\psi_{in}-\psi_{out})
}
$

Điện thế Nernst:

$
\boxed{
E_i
=
\frac{RT}{z_iF}
\ln\frac{a_{i,out}}{a_{i,in}}
}
$

Vì vậy dòng ion không thể được xác định chỉ bằng nồng độ ngoài rễ.

---

## 1.10. H⁺-ATPase và năng lượng hấp thu dinh dưỡng

H⁺-ATPase màng sinh chất sử dụng ATP để bơm proton và tạo gradient pH, điện thế màng và proton-motive force.

$
\boxed{
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
}
$

Điểm bắt buộc:

$
\boxed{
H^+\text{-ATPase không bơm nước trực tiếp}
}
$

---

## 1.11. Động học hấp thu ion

Khi transporter có động học bão hòa:

$
\boxed{
J_i
=
V_{\max,i}
\frac{C_i}{K_{m,i}+C_i}
}
$

Nhiều ion có thể có hệ hấp thu ái lực cao và thấp:

$
\boxed{
J_i
=
J_{HATS,i}
+
J_{LATS,i}
-
J_{efflux,i}
}
$

với:

$
J_{HATS,i}
=
V_{\max,H}
\frac{C_i}{K_{m,H}+C_i}
$

và có thể gần đúng:

$
J_{LATS,i}\approx k_LC_i
$

khi dữ liệu phù hợp.

$V_{\max}$ và $K_m$ phụ thuộc loài, giống, tuổi rễ, vị trí rễ, tình trạng dinh dưỡng, pH, nhiệt độ, oxy và transporter.

---

## 1.12. Phân biệt EC và nồng độ từng ion

$
\boxed{
EC\neq C_N,\quad EC\neq C_P,\quad EC\neq C_K
}
$

Hai dung dịch có cùng EC vẫn có thể có thành phần ion khác nhau.

Trong VECrop:

$
\boxed{
EC\rightarrow \text{trạng thái ion tổng và môi trường thẩm thấu}
}
$

còn:

$
\boxed{
C_i\rightarrow \text{uptake của ion }i
}
$

Thế thẩm thấu gần đúng:

$
\boxed{
\Psi_s\simeq -RT\sum_i\phi_iC_i
}
$

---

## 1.13. Vai trò của pH

pH ảnh hưởng hấp thu khoáng qua thay đổi dạng hóa học, sorption/precipitation và proton gradient.

Do đó không nên dùng một $F_{pH}$ duy nhất cho mọi nguyên tố:

$
\boxed{
J_i=J_i(C_i)F_{pH,i}
}
$

với:

$
F_{pH,N}\neq F_{pH,P}\neq F_{pH,K}
$

Nếu đã giải trực tiếp speciation và proton-coupled transport thì không cần nhân thêm $F_{pH}$ tổng quát.

---

## 1.14. Nhiệt độ

Nhiệt độ ảnh hưởng độ nhớt nước, khuếch tán, enzyme, respiration, membrane fluidity, transporter và sinh trưởng.

Một dạng Arrhenius:

$
\boxed{
k(T)=k_{ref}
\exp\left[
-\frac{E_a}{R}
\left(
\frac1T-\frac1{T_{ref}}
\right)
\right]
}
$

Đối với maintenance respiration:

$
\boxed{
R_M(T)
=
R_{M,ref}
Q_{10}^{(T-T_{ref})/10}
}
$

nhưng $Q_{10}$ phải được hiệu chỉnh.

---

## 1.15. Oxy vùng rễ

$
O_2
\rightarrow
respiration
\rightarrow
ATP
\rightarrow
H^+\text{-ATPase}
\rightarrow
ion\ uptake
$

Một dạng:

$
\boxed{
R_{O_2}
=
R_{O_2,\max}
\frac{C_{O_2}}{K_{O_2}+C_{O_2}}
}
$

Chỉ số cung–cầu năng lượng:

$
\boxed{
H_E
=
\min
\left[
1,
\frac{ATP_{sup}}{ATP_{dem}+\varepsilon}
\right]
}
$

và:

$
\boxed{
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
s_i(Q)
H_E
F_T
F_{stage}
}
$

---

## 1.16. Liebig và Shelford trong VECrop

Dạng giới hạn tối giản:

$
\boxed{
H_{Liebig}
=
\min(R_1,R_2,\ldots,R_m)
}
$

Một response dạng Gaussian:

$
\boxed{
R_j(x)
=
\exp
\left[
-\frac{(x-\mu_j)^2}{2\sigma_j^2}
\right]
}
$

Một dạng VECrop đề xuất:

$
\boxed{
H_{env}
=
G_{critical}
\left(
\prod_{j=1}^{m}R_j
\right)^{1/m}
}
$

Đây là cấu trúc đề xuất, không phải một định luật mới.

---

## 1.17. Chuẩn hóa biến sinh học

Không được cộng trực tiếp:

$
EC+pH+T+N
$

Phải chuyển thành chỉ số không thứ nguyên.

Min–max:

$
\boxed{
x^*
=
\frac{x-x_{\min}}{x_{\max}-x_{\min}}
}
$

Sigmoid:

$
\boxed{
x^*
=
\frac{1}{1+\exp[-k(x-x_{50})]}
}
$

Optimum response:

$
\boxed{
R(x)
=
\exp
\left[
-\frac{(x-\mu)^2}{2\sigma^2}
\right]
}
$

Việc chọn hàm phải dựa trên sinh lý và dữ liệu.

---

## 1.18. Khái niệm HSY trong VECrop

HSY được giữ như một **khung tổng hợp trạng thái sinh học**, không phải đơn vị năng lượng, không phải lực, và không phải hệ số năng suất phổ quát.

$
\Phi_1=\text{structure / vascular integrity}
$

$
\Phi_2=\text{gene–protein–enzyme–transport–energy}
$

$
\Phi_3=\text{hormone–Ca–ROS–MAPK–development}
$

Một dạng chuẩn hóa:

$
\boxed{
H_{cell}=w_1\Phi_1+w_2\Phi_2+w_3\Phi_3
}
$

với:

$
w_i\ge0,\qquad w_1+w_2+w_3=1
$

và các $\Phi_i\in[0,1]$.

---

## 1.19. Quá trình 1: cấu trúc

$\Phi_1$ có thể đại diện cellulose, hemicellulose, lignin, cấu trúc vách, độ toàn vẹn mạch, diện tích mạch, pit, mô dẫn và diện tích rễ hoạt động.

$
\boxed{
\Phi_1=\sum_k w_{1k}S_k^*
}
$

Nếu mô hình đã tính trực tiếp $K_x$ từ giải phẫu mạch, không đưa cùng đặc tính vào $\Phi_1$ rồi nhân lại vào $K_x$.

---

## 1.20. Quá trình 2: gene – protein – enzyme – transporter – năng lượng

Ý tưởng ban đầu:

$
(\vec A_4+\vec B_5+\vec C_6)=s(S_4+S_5-S_6)
$

được chuẩn hóa:

$
\boxed{
\Phi_{2,i}
=
\operatorname{clip}
[
s_i(Q)(S_{4,i}^*+S_{5,i}^*-S_{6,i}^*),
0,1
]
}
$

với:

$
\boxed{
s_i(Q)
=
\frac{1}
{1+\exp[-(\beta_{0i}+\sum_j\beta_{ji}Q_j^*)]}
}
$

Một liên kết cơ chế:

$
\boxed{
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
s_i(Q)
F_{stage,i}
F_{T,i}
F_{O_2,i}
}
$

Gene không tạo “lực”; nó điều chỉnh năng lực vận chuyển và chuyển hóa.

---

## 1.21. Quá trình 3: hormone và phát triển

Ý tưởng ban đầu:

$
(\vec A_7+\vec B_8+\vec C_9)=y(S_7+S_8-S_9)
$

được chuẩn hóa:

$
\boxed{
\Phi_{3,o}
=
\operatorname{clip}
[
y_o(Q,t)
(S_{7,o}^*+S_{8,o}^*-S_{9,o}^*),
0,1
]
}
$

với:

$
\boxed{
y_o(t)
=
\sigma
\left[
\beta_{0,o,g}
+
\sum_h\beta_{h,o,g}H_h^*(t)
\right]
}
$

Không được dùng một biểu thức cố định kiểu Auxin + GA + CK − ABA − Ethylene cho mọi cơ quan/giai đoạn.

---

## 1.22. Phân biệt Health Index với Harvest Index

Harvest Index:

$
\boxed{
HI_{harvest}
=
\frac{Y_{economic}}{B_{aboveground}}
}
$

Nếu cần chỉ số sức khỏe, khuyến nghị:

$
\boxed{
H_{crop}
}
$

để tránh trùng ký hiệu.

---

## 1.23. Không được nhân RUE × WUE × NUE trực tiếp

$
RUE,\quad WUE,\quad NUE
$

có đơn vị khác nhau.

Vì vậy:

$
\boxed{
RUE\times WUE\times NUE
}
$

không thể tự động trở thành một chỉ số hợp lệ.

Nếu muốn tích hợp, phải chuẩn hóa:

$
RUE^*,WUE^*,NUE^*\in[0,1]
$

và chỉ dùng nếu không đếm lặp cơ chế.

---

## 1.24. Mô hình cơ chế và mô hình rút gọn

Mô hình cơ chế:

$
\boxed{
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
}
$

Mô hình rút gọn có thể dùng:

$
\boxed{
Y_{reduced}
=
Y_{pot}
C_D(D)
\overline{HSY}
}
$

Điều bắt buộc:

$
\boxed{
Y_{mechanistic}
\neq
Y_{mechanistic}\times HSY_{diag}
}
$

nếu HSY đã chứa các stress đã được tính trực tiếp.

---

## 1.25. Mật độ cây và cạnh tranh

Một hàm chọn trước:

$
\boxed{
Y(D)=\alpha D e^{-\beta D}
}
$

cho:

$
\boxed{
D_{opt}=\frac1\beta
}
$

Đây chỉ là tính chất của hàm đã chọn.

Nếu $HSY=HSY(D)$:

$
\boxed{
\frac{d\ln Y}{dD}
=
\frac1D-\beta+\frac{\partial\ln HSY}{\partial D}=0
}
$

---

## 1.26. Kiểm tra thứ nguyên bắt buộc

Mọi phương trình phải thỏa dimensional consistency.

Ví dụ:

$
J_w=-K_h\nabla\Psi
$

thì đơn vị $K_h$ phải làm cho vế phải có cùng đơn vị với $J_w$.

Biểu thức:

$
v=|G|+HSY
$

không hợp lệ nếu $v$, $G$ và HSY không cùng đơn vị.

Nếu HSY điều chỉnh vận tốc:

$
\boxed{
v=v_0HSY
}
$

hoặc:

$
\boxed{
J=J_0HSY
}
$

với điều kiện được kiểm định.

---

## 1.27. Tổng và tích phân

Nếu cây được chia thành lớp rời rạc:

$
\boxed{
\sum_{i=1}^{n}F_i
}
$

Nếu theo chiều cao liên tục:

$
\boxed{
\int_0^H F(z)\,dz
}
$

Theo không gian và thời gian:

$
\boxed{
\int_0^T\int_0^H F(z,t)\,dz\,dt
}
$

Không dùng triple integral chỉ để biểu thị “nhiều tầng” khi không có ba biến tích phân độc lập.

---

## 1.28. Khung đa tầng VECrop

### Lớp 1 — môi trường/rhizosphere
$
\mathbf X_{env}
$

### Lớp 2 — tế bào và trao đổi chất
$
H_{cell}
$

### Lớp 3 — thủy lực và mạch dẫn
$
J_w,\ K_{root},K_x,\Psi
$

### Lớp 4 — quần thể và mật độ
$
D,\ LAI,\ competition
$

### Lớp 5 — quang hợp, source–sink và sinh khối
$
A_n,\ A_{can},F_C,B,Y
$

### Lớp 6 — quản lý, năng lượng và kinh tế

$
\boxed{
\mathbf u
=
\{N,P,K,irrigation,D,S,light,CO_2,\ldots\}
}
$

$
\boxed{
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
}
$

---

## 1.29. Cấu trúc phương trình tổng hợp cấp cao

$
\boxed{
\begin{aligned}
\mathbf X_{env}
&\rightarrow
\Psi_{soil},C_i,O_2,Eh
\\
&\rightarrow
J_{w,r},J_i
\\
&\rightarrow
Q_x,C_{i,x}
\\
&\rightarrow
\Psi_L,g_s,A_n
\\
&\rightarrow
A_{can}
\\
&\rightarrow
F_C
\\
&\rightarrow
SS_o
\\
&\rightarrow
M_o(t)
\\
&\rightarrow
Y
\end{aligned}
}
$

Đây là xương sống của toàn bộ VECrop.

---

## 1.30. HSY ở cấp chẩn đoán

$
\boxed{
HSY_{diag}
=
\left[
H_{env}^{w_e}
H_{cell}^{w_c}
H_{hyd}^{w_h}
H_{ion}^{w_i}
H_{energy}^{w_a}
H_{redox}^{w_r}
H_{photo}^{w_p}
H_{sink}^{w_s}
\right]^{1/\sum w}
}
$

với:

$
0\le H_j\le1
$

Các trọng số phải được hiệu chỉnh hoặc ước lượng từ dữ liệu.

---

## 1.31. Nhận dạng tham số

$
\boxed{
\boldsymbol\theta
=
[
K_m,
V_{\max},
K_h,
g_1,
V_{cmax},
J_{max},
k_{rem},
\ldots
]^T
}
$

Một bài toán hiệu chỉnh:

$
\boxed{
\hat{\boldsymbol\theta}
=
\arg\min_{\boldsymbol\theta}
\sum_t
[
y_{obs}(t)-y_{model}(t;\boldsymbol\theta)
]^2
}
$

Nếu nhiều tham số cho đầu ra gần như giống nhau, mô hình gặp parameter non-identifiability.

---

## 1.32. Độ bất định

$
Y=f(\mathbf X,\boldsymbol\theta)
$

Bất định đến từ cảm biến, đất, tham số, cấu trúc mô hình, giống và thời tiết.

Monte Carlo:

$
\boxed{
\mathbf X^{(k)},\boldsymbol\theta^{(k)}
\rightarrow
Y^{(k)}
}
$

Nên báo cáo median, quantiles hoặc confidence/credible interval thay vì chỉ một giá trị.

---

## 1.33. Kiểm định cân bằng

Nước:

$
\boxed{
Water_{in}-Water_{out}-\Delta Storage\approx0
}
$

Nitrogen:

$
\boxed{
N_{uptake}-N_{loss}-\Delta N_{plant}\approx0
}
$

Carbon:

$
\boxed{
C_{assimilation}-C_{respiration}-\Delta C_{biomass}\approx0
}
$

Nếu sai số cân bằng lớn, không nên diễn giải đầu ra năng suất.

---

## 1.34. Các mức dữ liệu

### Cấp A — dữ liệu trực tiếp
EC, pH, soil water, leaf water potential, gas exchange, biomass, tissue N/P/K.

### Cấp B — tham số suy ra
$K_h$, $V_{\max}$, $K_m$, $V_{cmax}$, $J_{max}$.

### Cấp C — chỉ số tổng hợp
$H_{env}$, $H_{cell}$, $HSY_{diag}$.

Càng lên cấp cao, càng phải ghi rõ phương pháp suy ra và độ bất định.

---

## 1.35. Phân biệt kiến thức nền và giả thuyết VECrop

### Kiến thức nền
- bảo toàn vật chất;
- thế nước và dòng theo gradient;
- mass flow và diffusion;
- thế điện hóa;
- Nernst;
- Michaelis–Menten;
- proton-motive force;
- van Genuchten;
- source–sink;
- xylem/phloem transport.

### Thành phần VECrop đề xuất
- cách tổ chức sáu lớp;
- cấu trúc $\Phi_1,\Phi_2,\Phi_3$;
- $H_{cell}=w_1\Phi_1+w_2\Phi_2+w_3\Phi_3$;
- cách dùng $HSY_{diag}$;
- kết hợp các response factor;
- các hàm logistic cho $s_i$ và $y_o$ khi chưa có dữ liệu trực tiếp.

Các phần đề xuất phải được ghi rõ là **proposed framework / proposed model** cho tới khi được kiểm định.

---

## 1.36. Những điều VECrop không được khẳng định ở giai đoạn hiện tại

Không nên viết:

- “HSY là định luật mới”.
- “HSY đúng cho mọi cây trồng”.
- “mọi lực trong xylem đều hướng lên”.
- “root pressure là động lực chính của ascent of sap”.
- “EC bằng nồng độ dinh dưỡng”.
- “pH tối ưu chung cho mọi nutrient”.
- “N, P, K dùng chung một $K_m$”.
- “RUE × WUE × NUE là một chỉ số vật lý”.
- “một bộ tham số lúa có thể áp cho ngô/xà lách”.
- “giá trị từ một thí nghiệm là hằng số sinh học”.

---

## 1.37. Mục tiêu kiểm chứng cho VECrop

Một phiên bản VECrop có giá trị khoa học khi chứng minh được một hoặc nhiều tiêu chí:

1. dự báo tốt hơn baseline;
2. giải thích được cơ chế;
3. bảo toàn vật chất;
4. tham số có ý nghĩa sinh lý;
5. chuyển được giữa điều kiện canh tác;
6. không tăng phức tạp vô ích;
7. ước lượng được bất định;
8. tạo ra giả thuyết thí nghiệm có thể kiểm chứng.

---

## 1.38. Ba cây kiểm định đầu tiên

### Lúa
C3, ngập/AWD, Eh–O₂ vùng rễ đặc thù, NH₄⁺ quan trọng, aerenchyma, source–sink hướng hạt.

### Ngô
C4, đáp ứng VPD/hạn, source–sink tới bắp/hạt, waterlogging sensitivity, post-silking nutrient uptake.

### Xà lách
C3, thu hoạch lá, nhạy thủy lực vùng rễ, Ca–tipburn, phù hợp nhà kính/thủy canh.

Nếu một cấu trúc chỉ đúng với một hệ nhưng thất bại ở hai hệ còn lại, cần xem lại tính tổng quát.

---

## 1.39. Cấu trúc dữ liệu cho mỗi tham số

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
| method | phương pháp đo |
| source | DOI/URL |
| role | calibration/validation/context |
| uncertainty | SD/SE/CI nếu có |

---

## 1.40. Kết luận chương

Chương 1 đặt nguyên tắc cốt lõi:

$
\boxed{
\text{environment}
\rightarrow
\text{physical gradients}
\rightarrow
\text{biological transport}
\rightarrow
\text{metabolism}
\rightarrow
\text{allocation}
\rightarrow
\text{yield}
}
$

Mọi bước phải tuân thủ:

$
\boxed{
\text{mass balance}
+
\text{dimensional consistency}
+
\text{physiological meaning}
+
\text{experimental testability}
}
$

HSY không phải “lực” hoặc “năng lượng” mới. Vai trò phù hợp nhất của HSY trong VECrop là khung tích hợp trạng thái sinh học và, trong phiên bản cơ chế đầy đủ, là chỉ số chẩn đoán.

---

# Tài liệu nền tảng

1. Marschner, P. (ed.). **Marschner's Mineral Nutrition of Plants, 4th ed.** Academic Press, 2023. DOI: 10.1016/C2019-0-00491-8.
2. White, P.J. **Ion-uptake mechanisms of individual cells and roots: short-distance transport.** In *Marschner's Mineral Nutrition of Plants*, 4th ed., 2023. DOI: 10.1016/B978-0-12-819773-8.00018-6.
3. Marschner, P. & Rengel, Z. **Nutrient availability in soils.** In *Marschner's Mineral Nutrition of Plants*, 4th ed., 2023. DOI: 10.1016/B978-0-12-819773-8.00003-4.
4. White, P.J. **Long-distance transport in the xylem and phloem.** In *Marschner's Mineral Nutrition of Plants*, 4th ed., 2023. DOI: 10.1016/B978-0-12-819773-8.00002-2.
5. van Genuchten, M.Th. (1980). **A closed-form equation for predicting the hydraulic conductivity of unsaturated soils.** *Soil Science Society of America Journal* 44: 892–898.
6. Kramer, P.J. & Boyer, J.S. **Water Relations of Plants and Soils.** Academic Press, 1995.
7. Nobel, P.S. **Physicochemical and Environmental Plant Physiology, 4th ed.** Academic Press, 2009.
8. Taiz, L. et al. **Plant Physiology and Development.** Sinauer/Oxford University Press.
9. Cosgrove, D.J. (2005). Growth of the plant cell wall. *Nature Reviews Molecular Cell Biology* 6: 850–861.
10. Monteith, J.L. (1977). Climate and the efficiency of crop production in Britain. *Philosophical Transactions of the Royal Society B* 281: 277–294.

> **Ghi chú học thuật:** các phương trình nền tảng được dùng như khung tham chiếu. Các hàm tổng hợp HSY/VECrop, trọng số, logistic và response function được đánh dấu là **mô hình đề xuất**, cần được hiệu chỉnh và kiểm định bằng dữ liệu độc lập trước khi dùng cho suy luận khoa học hoặc khuyến cáo sản xuất.

---

# Chương 2. Môi trường vùng rễ và điều kiện biên của VECrop

## 2.1. Vai trò của môi trường vùng rễ

VECrop xem vùng rễ là nơi tạo ra các **điều kiện biên vật lý, hóa học và sinh học** cho hấp thu nước, ion và trao đổi khí.

Vector trạng thái môi trường:

$$
\mathbf X_{env}
=
[EC,\ pH,\ \theta,\ pF,\ \Psi_{soil},\ T,\ I,\ CO_2,\ O_2,\ Eh,\ OM,\ N,\ P,\ K,\ Na,\ Ca,\ Mg,\ldots]^T
$$

Mỗi biến phải có:
- đơn vị;
- phương pháp đo;
- vị trí và độ sâu đo;
- thời điểm đo;
- sai số;
- miền hiệu chỉnh.

## 2.2. Nước trong đất và giá thể

Thế nước:

$$
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
$$

Trong đất không bão hòa, thành phần ma trận thường chi phối mạnh.

pF:

$$
pF=\log_{10}|h|
$$

với $h$ là pressure head theo cm nước.

Một dạng van Genuchten:

$$
S_e=
\frac{\theta-\theta_r}{\theta_s-\theta_r}
=
\left[1+(\alpha |h|)^n\right]^{-m}
$$

thường:

$$
m=1-\frac1n
$$

Không dùng một bộ $\alpha,n,m$ cho mọi loại đất.

## 2.3. Độ dẫn thủy lực của đất

Trong môi trường không bão hòa:

$$
\mathbf q=-K(\theta)\nabla(\Psi_m+\Psi_g)
$$

và nếu mô phỏng động:

$$
\frac{\partial \theta}{\partial t}
=
\nabla\cdot[K(\theta)\nabla(\Psi_m+\Psi_g)]
-S_{root}
$$

Đây là dạng nền của Richards equation.

## 2.4. EC và trạng thái ion tổng

EC không bằng nồng độ riêng của bất kỳ ion nào:

$$
EC\neq [Na^+],\quad EC\neq[K^+],\quad EC\neq[NO_3^-]
$$

Vai trò của EC trong VECrop:
- chỉ báo ionic strength;
- liên hệ với salinity;
- ảnh hưởng osmotic potential;
- hỗ trợ QC dung dịch dinh dưỡng.

Không suy ngược thành phần N–P–K từ EC nếu không có thêm dữ liệu ion.

## 2.5. Thế thẩm thấu

Gần đúng:

$$
\Psi_s=-RT\sum_i\phi_iC_i
$$

Trong dung dịch không lý tưởng phải dùng activity:

$$
a_i=\gamma_iC_i
$$

## 2.6. pH

pH tác động lên:
- speciation;
- sorption/desorption;
- precipitation/dissolution;
- proton-coupled transport;
- microbial processes.

Không dùng một đáp ứng pH duy nhất cho mọi nguyên tố.

Một dạng rút gọn:

$$
J_i^{eff}=J_iF_{pH,i}
$$

với $F_{pH,i}$ phải riêng theo nutrient/process.

## 2.7. Oxy vùng rễ

Oxy giới hạn hô hấp và ATP:

$$
R_{O_2}
=
R_{O_2,\max}
\frac{C_{O_2}}{K_{O_2}+C_{O_2}}
$$

Khi thiếu oxy:

$$
O_2\downarrow
\rightarrow
ATP\downarrow
\rightarrow
active\ transport\downarrow
$$

Trong đất ngập cần xét cả diffusion chậm, aerenchyma và radial oxygen loss.

## 2.8. Eh và trạng thái oxy hóa–khử

Eh không đồng nghĩa trực tiếp với nồng độ oxy rễ.

Một biểu diễn Nernst tổng quát:

$$
E_h=E^0+\frac{RT}{nF}\ln\frac{a_{Ox}}{a_{Red}}
$$

Trong đất ngập, thứ tự khử thường tiến theo:

$$
O_2\rightarrow NO_3^-\rightarrow Mn(IV)\rightarrow Fe(III)\rightarrow SO_4^{2-}\rightarrow CO_2
$$

Không hard-code một ngưỡng Eh phổ quát cho mọi đất.

## 2.9. Nhiệt độ vùng rễ

Nhiệt độ ảnh hưởng:
- viscosity;
- diffusion;
- respiration;
- transporter;
- membrane fluidity;
- root growth;
- microbial activity.

Một dạng Arrhenius:

$$
k(T)=k_{ref}
\exp\left[
-\frac{E_a}{R}
\left(
\frac1T-\frac1{T_{ref}}
\right)
\right]
$$

## 2.10. Chất hữu cơ và khoáng hóa

Có thể mô tả pool:

$$
\frac{dOM_{labile}}{dt}
=
Input-k_{dec}OM_{labile}
$$

Khoáng hóa N:

$$
R_{min,N}
=
k_NOM_{labile}f(T,\theta,pH,O_2)
$$

Đây là module tùy chọn nếu mục tiêu là soil-process modeling.

## 2.11. Dòng khối và khuếch tán dinh dưỡng tới rễ

$$
J_i^{soil}
=
q_wC_i-D_{eff,i}\nabla C_i
$$

Mass flow thường quan trọng với các ion di động cao; diffusion quan trọng với các ion ít di động hơn. Tỷ lệ phụ thuộc đất, nước và nutrient.

## 2.12. Depletion zone

Hấp thu rễ có thể tạo vùng nghèo ion quanh bề mặt rễ:

$$
\frac{\partial C_i}{\partial t}
=
D_{eff,i}\nabla^2C_i
-
R_{uptake,i}
+
R_{source,i}
$$

## 2.13. Tương tác ion

Không xử lý nutrient độc lập hoàn toàn. Một số tương tác quan trọng có thể xuất hiện:
- K–Na competition;
- Ca–Na interaction;
- NH4–K competition;
- phosphate precipitation với Ca/Fe/Al;
- micronutrient availability thay đổi theo pH.

VECrop chỉ thêm interaction term khi có dữ liệu:

$$
J_i^{eff}=J_i\,F_{ij}(C_j)
$$

## 2.14. Lúa, ngô và xà lách

### Lúa
- flooded soil;
- Eh thấp;
- NH4+ thường quan trọng;
- aerenchyma/ROL;
- Fe/Mn chemistry đặc thù.

### Ngô
- root-zone drying;
- nitrate transport;
- deep root exploration;
- VPD–soil water coupling mạnh.

### Xà lách
- rễ nông;
- nhạy root-zone temperature;
- hydroponic EC/pH/DO quan trọng;
- Ca delivery liên quan tipburn.

## 2.15. Dữ liệu tối thiểu

Một bộ dữ liệu root-zone nên có:
- $\theta$ hoặc soil water potential;
- EC;
- pH;
- temperature;
- O2/DO nếu có nguy cơ hypoxia;
- N–P–K dạng khả dụng;
- texture/retention curve cho đất;
- irrigation/fertilization history.

## 2.16. QC và bất định

Mỗi sensor cần:
- calibration;
- range check;
- drift detection;
- missing-value flag;
- timestamp;
- location/depth.

Một quan sát:

$$
y_{obs}=y_{true}+\epsilon
$$

với:

$$
\epsilon\sim\mathcal N(0,\sigma_{sensor}^2)
$$

chỉ khi giả định Gaussian phù hợp.

## 2.17. Từ môi trường tới mô hình cơ chế

Đầu ra của Chương 2 không nên là một “điểm sức khỏe” duy nhất. Các biến môi trường được chuyển thành điều kiện biên:

$$
\mathbf X_{env}
\rightarrow
\{\Psi_{soil},C_i,O_2,Eh,T\}
$$

rồi mới đi vào:
- hydraulic module;
- nutrient uptake;
- respiration;
- ion homeostasis;
- redox.

## 2.18. H_env chỉ dùng ở mô hình rút gọn

Nếu cần index:

$$
H_{env}
=
G_{critical}
\left(
\prod_{j=1}^{m}R_j
\right)^{1/m}
$$

với $R_j\in[0,1]$.

Đây là **VECrop proposed reduced formulation**, không thay thế module cơ chế khi dữ liệu đủ.

---

# Chương 3. HSY cấp tế bào – cấu trúc, chuyển hóa và điều hòa

## 3.1. Vai trò của HSY

HSY trong VECrop là **khung tích hợp trạng thái sinh học**, không phải:
- lực;
- năng lượng;
- định luật;
- hệ số năng suất phổ quát.

Ba trụ cột:

$$
\Phi_1=\text{structure / vascular integrity}
$$

$$
\Phi_2=\text{gene–protein–enzyme–transport–energy}
$$

$$
\Phi_3=\text{hormone–Ca^{2+}–ROS–MAPK–development}
$$

## 3.2. Chỉ số tế bào

$$
H_{cell}
=
w_1\Phi_1+w_2\Phi_2+w_3\Phi_3
$$

với:

$$
w_i\ge0,\qquad \sum_iw_i=1
$$

và:

$$
0\le\Phi_i\le1
$$

## 3.3. Chuẩn hóa trước khi tích hợp

Không cộng trực tiếp các đại lượng khác đơn vị.

Sigmoid:

$$
x^*=\frac{1}{1+\exp[-k(x-x_{50})]}
$$

Gaussian optimum:

$$
R(x)=
\exp\left[
-\frac{(x-\mu)^2}{2\sigma^2}
\right]
$$

Tất cả $\mu,\sigma,k,x_{50}$ phải hiệu chỉnh.

## 3.4. Phi_1: cấu trúc

Các thành phần có thể gồm:
- cellulose;
- hemicellulose;
- lignin;
- wall integrity;
- vessel anatomy;
- pit properties;
- root active area.

Một dạng:

$$
\Phi_1=\sum_k w_{1k}S_k^*
$$

Nếu một trait đã được dùng trực tiếp để tính $K_x$, không nhân nó thêm lần nữa trong $\Phi_1$.

## 3.5. Phi_2: gene–protein–enzyme–transport

Khung ban đầu:

$$
(\vec A_4+\vec B_5+\vec C_6)
=
s(S_4+S_5-S_6)
$$

Chuẩn hóa:

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

## 3.6. Regulatory logistic

$$
s_i(Q)
=
\frac{1}
{1+\exp[-(\beta_{0i}+\sum_j\beta_{ji}Q_j^*)]}
$$

## 3.7. Nối với transport capacity

$$
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
s_i(Q)
F_{stage,i}
F_{T,i}
F_{O_2,i}
$$

Gene/protein điều chỉnh **capacity**, không tạo “lực vận chuyển”.

## 3.8. H+-ATPase

H+-ATPase tạo proton motive force:

$$
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
$$

Nó không bơm nước trực tiếp.

## 3.9. Aquaporin

Có thể đưa aquaporin vào hydraulic capacity:

$$
L_{pr,eff}
=
L_{pr,0}
F_{AQP}
F_{anat}
F_{env}
$$

nhưng $F_{AQP}$ cần liên kết với expression/phosphorylation hoặc được hiệu chỉnh.

## 3.10. Phi_3: hormone và phát triển

Khung ban đầu:

$$
(\vec A_7+\vec B_8+\vec C_9)
=
y(S_7+S_8-S_9)
$$

Chuẩn hóa:

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

## 3.11. Hormone không chia cố định thành “tốt” và “xấu”

Không dùng:

$$
Auxin+GA+CK-ABA-Ethylene
$$

cho mọi tình huống.

ABA, ethylene, JA, SA có thể thúc đẩy thích nghi hoặc hạn chế tăng trưởng tùy:
- organ;
- stage;
- dose;
- stress history.

## 3.12. Hormone vector

$$
\mathbf H=
[IAA,CK,GA,ABA,ET,BR,JA,SA,SL]^T
$$

Có thể chuẩn hóa:

$$
H_h^*=\frac{H_h}{K_h+H_h}
$$

## 3.13. Hormone balance

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

## 3.14. Calcium signaling

Một transient:

$$
Ca_o(t)
=
Ca_0+\sum_kA_ke^{-(t-t_k)/\tau_k}
$$

Activation:

$$
S_{Ca}
=
\frac{[Ca^{2+}]^n}
{K_{Ca}^n+[Ca^{2+}]^n}
$$

## 3.15. ROS signaling

Không giả định ROS = 0 là tối ưu.

Một tín hiệu giảm lược:

$$
S_{ROS}
=
\frac{H_2O_2}
{K_{sig}+H_2O_2}
$$

Damage response:

$$
D_{ROS}
=
\frac{(H_2O_2/K_D)^n}
{1+(H_2O_2/K_D)^n}
$$

## 3.16. MAPK cascade

$$
MAPKKK\rightarrow MAPKK\rightarrow MAPK\rightarrow TF
$$

Dạng động:

$$
\frac{dM_3^*}{dt}
=
k_{a3}S(1-M_3^*)-k_{d3}M_3^*
$$

$$
\frac{dM_2^*}{dt}
=
k_{a2}M_3^*(1-M_2^*)-k_{d2}M_2^*
$$

$$
\frac{dM_1^*}{dt}
=
k_{a1}M_2^*(1-M_1^*)-k_{d1}M_1^*
$$

## 3.17. Gene expression

$$
\frac{dG_j}{dt}
=
k_{tr,j}F_j(TF,H,Ca,ROS)
-
k_{deg,j}G_j
$$

## 3.18. Regulator tích hợp cấp cơ quan

$$
y_o=
\sigma
\left[
\beta_0
+\sum_i\beta_iH_i^*
+\sum_{i<j}\beta_{ij}H_i^*H_j^*
+\beta_{Ca}S_{Ca}
+\beta_RS_{ROS}
+\beta_MM^*
\right]
$$

Dấu của các interaction term phải fit từ dữ liệu.

## 3.19. State-space molecular layer

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(\mathbf x,\mathbf u,\boldsymbol\theta)
$$

với:

$$
\mathbf x=
[IAA,CK,GA,ABA,ET,Ca,H_2O_2,MAPK,TF,Gene]^T
$$

và:

$$
\mathbf u=
[\Psi,EC,Na,N,P,T,VPD,O_2,light]^T
$$

## 3.20. Output của lớp điều hòa

$$
\mathbf r=
[g_s,\ root\ growth,\ cell\ elongation,\ xylem\ differentiation,\ senescence,\ sink\ strength]
$$

## 3.21. Diagnostic HSY

Ở mô hình đầy đủ:

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

Không nhân $HSY_{diag}$ vào năng suất nếu các stress đã được mô hình cơ chế ở bên trong.

## 3.22. Calibration

Các trọng số và hệ số:
- không chọn tùy ý;
- phải fit hoặc có prior;
- cần kiểm tra identifiability;
- phải báo uncertainty.

## 3.23. Kết luận

Chương 3 nối:
$$
molecular\ regulation
\rightarrow
transport\ capacity
\rightarrow
organ\ function
$$

mà không biến hormone/gene thành “lực vật lý”.

---

# Chương 4. Thủy lực, vận chuyển dài hạn và tích hợp toàn cây

## 4.1. Thế nước và SPAC

$$
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
$$

$$
\vec J_w=-K_h\nabla\Psi_w
$$

Trong nhiều trạng thái thoát hơi:

$$
\Psi_{soil}>\Psi_{root}>\Psi_{stem}>\Psi_{leaf}
$$

Không tuyệt đối hóa thứ tự này cho mọi thời điểm.

## 4.2. Thủy lực rễ và aquaporin

Ba đường chính:
- apoplast;
- symplast;
- transcellular.

$$
J_{w,r}
=
L_{pr,eff}
(\Psi_{soil}-\Psi_{xyl})
$$

$$
Q_r=A_rL_{pr,eff}(\Psi_{soil}-\Psi_{xyl})
$$

$$
R_{root}
\approx
\sum_j
\frac1{K_{apo,j}+K_{sym,j}+K_{trans,j}}
$$

H+-ATPase và aquaporin phải được tách chức năng.

## 4.3. Hấp thu khoáng

$$
U_i=A_rJ_{i,net}
$$

$$
J_i
=
J_{HATS,i}
+
J_{LATS,i}
-
J_{efflux,i}
$$

$$
J_{HATS,i}
=
V_{\max,H,i}
\frac{C_i}{K_{m,H,i}+C_i}
$$

Phosphate:

$$
J_P
=
V_{\max,P}
\frac{C_{Pi}}{K_{m,P}+C_{Pi}}
F_{H+}F_{PHT1}
$$

K:

$$
J_{K,HAK}
=
V_{\max,K}
\frac{[K^+]}{K_{m,K}+[K^+]}
$$

Channel form:

$$
I_K=g_K(V_m-E_K)
$$

$$
E_K=
\frac{RT}{F}
\ln
\frac{a_{K,out}}{a_{K,in}}
$$

## 4.4. Xylem loading và vận chuyển ion

$$
Q_{i,xyl}
=
Q_wC_{i,xyl}
-
A_xD_i
\frac{\partial C_i}{\partial z}
$$

Với Ca:

$$
Q_{Ca,x}
=
Q_wC_{Ca,x}
+
Q_{Ca,load}
$$

Ca có phloem mobility hạn chế tương đối so với nhiều nutrient khác, đặc biệt quan trọng với tipburn ở xà lách.

## 4.5. Xylem và cavitation

Poiseuille lý tưởng:

$$
Q=
\frac{\pi r^4}{8\eta l}\Delta P
$$

$$
K_v=
\frac{\pi r^4}{8\eta l}
$$

Mạch thật còn có pit, network và geometry resistance.

$$
J_x
=
-K_x
\frac{\partial\Psi_x}{\partial z}
$$

$$
K_{x,eff}
=
K_{x,pot}
F_{pit}
F_{emb}
F_T
F_{age}
$$

PLC:

$$
PLC
=
100
\left(
1-\frac{K_x}{K_{x,\max}}
\right)
$$

## 4.6. Vulnerability curve

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

$$
P_{50}
=
-b(\ln2)^{1/c}
$$

Không bịa $P_{50}$ cho cây khi chưa có nguồn.

## 4.7. Hydraulic capacitance

$$
C_h=\frac{dV_w}{d\Psi}
$$

$$
C_h
\frac{\partial\Psi_x}{\partial t}
=
-\frac{\partial Q_x}{\partial z}
+
S_{root}
-
S_{transp}
$$

## 4.8. Phloem và source–sink

$$
SS_o=M_oq_o
$$

Münch:

$$
Q_{ph}
=
K_{ph}
(P_{source}-P_{sink})
$$

$$
J_{ph}
=
-K_{ph}
\frac{\partial P_{ph}}{\partial x}
$$

Carbon flux:

$$
F_C=C_{Suc}Q_{ph}
$$

## 4.9. Phloem loading và xylem–phloem exchange

$$
J_{load}
=
V_{\max,Suc}^{eff}
\frac{C_{Suc,apo}}{K_{m,Suc}+C_{Suc,apo}}
$$

$$
J_{xp}
=
L_{xp}
(\Psi_x-\Psi_{ph})
$$

## 4.10. Sink strength và allocation

$$
SS_o^{eff}
=
M_oq_oy_oH_{CN,o}
$$

$$
a_o
=
\frac{SS_o^{eff}}
{\sum_jSS_j^{eff}}
$$

$$
F_{C,o}=a_oF_C
$$

$$
\frac{dC_o}{dt}
=
a_oF_C
-
R_{growth,o}
-
R_{maint,o}
-
F_{export,o}
$$

## 4.11. Hydraulics–stomata coupling

$$
C_L\frac{d\Psi_L}{dt}
=
K_L(\Psi_{soil}-\Psi_L)-E
$$

$$
g_{tw}
=
\left(
\frac1{g_{sw}}+\frac1{g_{bw}}
\right)^{-1}
$$

$$
E
\simeq
g_{tw}
\frac{D}{P_{atm}}
$$

Medlyn:

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

Hydraulic closure đề xuất:

$$
F_{hyd}(\Psi_L)
=
\frac1
{1+\exp[k_h(|\Psi_L|-|\Psi_{gs50}|)]}
$$

Lưu ý:

$$
\Psi_{gs50}\neq P_{50}
$$

## 4.12. C3 photosynthesis

Cho lúa và xà lách:

$$
A_n=\min(A_c,A_j,A_p)-R_d
$$

$$
A_c
=
V_{cmax}
\frac{C_c-\Gamma^*}
{C_c+K_c(1+O/K_o)}
$$

$$
A_j
=
J
\frac{C_c-\Gamma^*}
{4(C_c+2\Gamma^*)}
$$

$$
A_p\simeq3TPU
$$

## 4.13. C4 photosynthesis cho ngô

Không dùng mô hình C3 nguyên xi cho ngô.

$$
V_p
=
V_{pmax}
\frac{C_m}{C_m+K_p}
$$

Module đầy đủ cần tách mesophyll, bundle sheath, PEP carboxylase, Rubisco và bundle-sheath leakiness.

## 4.14. Tán cây

$$
I(L)=I_0e^{-k_LL}
$$

$$
A_{can}
=
\int_0^{LAI}
A_n(L,t)\,dL
$$

$$
E_{can}
=
\int_0^{LAI}
E(L,t)\,dL
$$

## 4.15. Cân bằng carbon

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

## 4.16. Cân bằng C–N–P–K cấp cơ quan

$$
M_i=\sum_oM_{i,o}
$$

$$
c_{i,o}
=
\frac{M_{i,o}}{B_o}
$$

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

## 4.17. Pool di động và remobilization

$$
M_{i,o}
=
M_{i,o}^{mob}
+
M_{i,o}^{fix}
$$

$$
F_{rem,i,o}
=
k_{rem,i,o}(t)
M_{i,o}^{mob}
$$

Demand:

$$
Req_{i,o}
=
q_{i,o}^*(stage)
\frac{dB_o}{dt}
$$

Supply:

$$
Sup_i=U_i+F_{rem,i}
$$

Satisfaction:

$$
L_i
=
\min
\left(
1,
\frac{Sup_i}{Req_i+\varepsilon}
\right)
$$

Reduced nutrient limitation:

$$
L_{nut}=\min(L_N,L_P,L_K)
$$

chỉ dùng ở reduced model.

## 4.18. Harvest indices

$$
HI_B
=
\frac{B_H}{B_{shoot}}
$$

$$
NHI
=
\frac{M_{N,H}}{M_{N,shoot}}
$$

Có thể định nghĩa PHI và KHI tương tự.

## 4.19. Respiration

Reduced:

$$
R_{tot}=R_G+R_M
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

Growth respiration:

$$
R_{G,o}
=
G_o
\left(
\frac1{Y_{G,o}}-1
\right)
$$

Maintenance:

$$
R_{M,o}
=
m_o(T)M_{met,o}
$$

$$
m_o(T)
=
m_{o,ref}
Q_{10}^{(T-T_{ref})/10}
$$

## 4.20. ATP và chi phí vận chuyển

$$
\Delta\widetilde\mu_i
=
RT\ln
\frac{a_{i,in}}{a_{i,out}}
+
z_iF\Delta\psi
$$

$$
P_i
=
U_i\max(0,\Delta\widetilde\mu_i)
$$

Không giả định 1 ATP/ion.

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

## 4.21. O2 và hypoxia

$$
\frac{\partial C_{O_2}}{\partial t}
=
D_{O_2,eff}\nabla^2C_{O_2}
+
S_{O_2}
-
R_{O_2}
$$

$$
R_{O_2}
=
R_{O_2,\max}
\frac{C_{O_2}}{K_{O_2}+C_{O_2}}
$$

Trong hypoxia, ATP từ oxidative phosphorylation giảm và cây có thể tăng fermentation. Không hard-code 38 ATP/glucose.

## 4.22. Aerenchyma và ROL

$$
\phi_{aer}
=
\frac{A_{gas}}{A_{root}}
$$

$$
J_{ROL}
=
P_{ROL}
(C_{O_2,root}-C_{O_2,soil})
$$

Đặc biệt quan trọng cho lúa.

## 4.23. Ion homeostasis, pH và salinity

$$
a_i=\gamma_iC_i
$$

$$
\Psi_s
=
-RT\sum_i\phi_iC_i
$$

$$
E_i
=
\frac{RT}{z_iF}
\ln
\frac{a_{i,out}}{a_{i,in}}
$$

Membrane equation:

$$
C_m\frac{dV_m}{dt}
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
+\cdots
\right)
$$

K/Na diagnostic:

$$
R_{KNa}
=
\frac{a_K}{a_{Na}+\varepsilon}
$$

Không đặt một ngưỡng phổ quát.

## 4.24. Salinity yield validation

Maas–Hoffman:

$$
Y_r=
\begin{cases}
1,&EC_e\le EC_t\\
1-\frac{b}{100}(EC_e-EC_t),&EC_e>EC_t
\end{cases}
$$

Dùng để validation empirical, không thay thế mô hình salt ở cấp tế bào.

## 4.25. ROS production

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

## 4.26. Antioxidant network

$$
2O_2^{\bullet-}
+
2H^+
\xrightarrow{SOD}
H_2O_2+O_2
$$

$$
2H_2O_2
\xrightarrow{CAT}
2H_2O+O_2
$$

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

## 4.27. ROS signaling và damage

$$
S_{ROS}
=
\frac{H_2O_2}{K_{sig}+H_2O_2}
$$

$$
D_{ROS}
=
\frac{(H_2O_2/K_D)^n}
{1+(H_2O_2/K_D)^n}
$$

$$
H_{mem}
=
e^{-\lambda_LD_L-\lambda_PD_P}
$$

ROS bằng 0 không phải trạng thái tối ưu vì ROS cũng là tín hiệu.

## 4.28. Hormone–Ca2+–ROS–MAPK

$$
\mathbf H
=
[IAA,CK,GA,ABA,ET,BR,JA,SA,SL]^T
$$

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

Một chuỗi ABA–stomata:

$$
ABA
\rightarrow
PYR/PYL
\rightarrow
PP2C\downarrow
\rightarrow
SnRK2/OST1
\rightarrow
RBOH
\rightarrow
ROS
$$

$$
ROS\rightarrow Ca^{2+}_{cyt}\uparrow
$$

$$
Ca^{2+}
\rightarrow
CPK/CBL-CIPK
\rightarrow
ion\ channels
$$

$$
K^+,\ anion\ efflux
\rightarrow
turgor_{guard}\downarrow
\rightarrow
g_s\downarrow
$$

## 4.29. Regulatory state equation

$$
y_o=
\sigma
\left[
\beta_0
+\sum_i\beta_iH_i^*
+\sum_{i<j}\beta_{ij}H_i^*H_j^*
+\beta_{Ca}S_{Ca}
+\beta_RS_{ROS}
+\beta_MM^*
\right]
$$

Interaction signs phải được fit.

## 4.30. Sugar sensing – SnRK1 – TOR

Cầu nối sang Chương 5:

$$
Carbon\ status
\rightarrow
T6P/SnRK1/TOR
\rightarrow
gene\ expression
\rightarrow
growth\ capacity
$$

## 4.31. Chuỗi tích hợp cuối

$$
\boxed{
soil
\rightarrow
root
\rightarrow
xylem
\rightarrow
leaf
\rightarrow
photosynthesis
\rightarrow
phloem
\rightarrow
source\!-\!sink
\rightarrow
biomass
\rightarrow
yield
}
$$

## 4.32. Quy tắc chống double counting

Nếu một stress đã tác động trực tiếp lên $K_{root}$, $g_s$, $A_n$, ATP hoặc sink strength thì không nhân lại cùng stress bằng một hệ số HSY cuối.

HSY trong mô hình đầy đủ nên dùng chủ yếu làm **diagnostic index**.

---

# Chương 5. Cảm nhận carbon – đường – năng lượng và điều khiển sinh trưởng

## 5.1. Vai trò của sugar sensing
Sucrose, glucose và trehalose-6-phosphate (T6P) không chỉ là chất chuyển hóa mà còn là tín hiệu trạng thái carbon.

## 5.2. Trục SnRK1–TOR
Ở trạng thái thiếu carbon/năng lượng, SnRK1 ưu tiên bảo toàn và huy động dự trữ; TOR thúc đẩy sinh tổng hợp và tăng trưởng khi carbon, dinh dưỡng và năng lượng đủ.

Khung trạng thái đề xuất:
$
S_C=\frac{C_{sugar}}{K_C+C_{sugar}},\qquad
S_E=\frac{ATP}{K_E+ATP}
$

Một biểu diễn giảm lược:
$
A_{TOR}=\sigma(\beta_0+\beta_CS_C+\beta_NS_N+\beta_ES_E-\beta_SS_{stress})
$

$
A_{SnRK1}=\sigma(\gamma_0-\gamma_CS_C-\gamma_ES_E+\gamma_SS_{stress})
$

Hai phương trình trên là **mô hình VECrop đề xuất**, không phải hằng số sinh học phổ quát.

## 5.3. Ghép với source–sink
$
SS_o^{eff}=SS_o\,F_{sugar,o}\,F_{energy,o}\,F_{stage,o}
$

Trong đó sink strength không chỉ phụ thuộc kích thước sink mà còn phụ thuộc khả năng sử dụng carbon.

## 5.4. T6P và sucrose
T6P thường phản ánh trạng thái sucrose và có vai trò điều phối tăng trưởng, phân bổ carbon và phát triển. VECrop nên giữ T6P như biến tín hiệu, không đồng nhất với lượng carbon dự trữ.

## 5.5. Điểm tích hợp
$
Carbon\ status \rightarrow T6P/SnRK1/TOR \rightarrow gene\ expression \rightarrow growth\ capacity
$

## 5.6. Nguyên tắc mô hình hóa
- Không nhân thêm “stress carbon” nếu carbon balance đã được giải cơ chế.
- Tách pool sucrose, starch và structural carbon khi dữ liệu cho phép.
- Tách tín hiệu đường khỏi flux carbon thực.

---

# Chương 6. Kiến trúc rễ – rhizosphere – microbiome

## 6.1. Root system architecture
Các biến cốt lõi:
- total root length;
- root length density;
- branching;
- root angle;
- root diameter classes;
- root hair length/density;
- rooting depth.

Một mô hình mật độ chiều sâu:
$
RLD(z)=RLD_0e^{-k_z z}
$
chỉ là dạng thực nghiệm, phải hiệu chỉnh theo cây và đất.

## 6.2. Hấp thu theo phân bố rễ
$
U_i=\int_0^{Z_r}A_r(z)\,J_i(z)\,dz
$

## 6.3. Rhizosphere
Vùng rễ làm thay đổi:
- pH;
- redox;
- exudates;
- enzyme;
- microbial activity;
- nutrient speciation.

Có thể mô tả khuếch tán–phản ứng:
$
\frac{\partial C_i}{\partial t}
=
D_{eff,i}\nabla^2C_i
-
R_{uptake,i}
+
R_{min,i}
-
R_{immob,i}
$

## 6.4. Exudation
$
J_{exu}=f(C_{status},P_{status},root\ age,stress)
$

Không giả định exudation luôn có lợi; nó có chi phí carbon.

## 6.5. Microbiome
Microbiome có thể ảnh hưởng:
- mineralization;
- biological N fixation;
- P mobilization;
- hormone-like signaling;
- pathogen suppression;
- redox chemistry.

Trong mô hình cơ chế ban đầu, nên dùng module tùy chọn:
$
R_{microbe,i}=k_{mic,i}M_{microbe}f(T,\theta,pH,C)
$

## 6.6. Mycorrhiza
Có thể biểu diễn uptake song song:
$
U_P=U_{P,root}+U_{P,myc}
$

và chi phí carbon:
$
C_{cost,myc}=f(U_{P,myc},colonization)
$

## 6.7. Khác biệt cây trồng
- Lúa: aerenchyma, radial oxygen loss, flooded rhizosphere.
- Ngô: deep rooting, architecture strongly linked to drought/N capture.
- Xà lách: shallow root system, high sensitivity to root-zone oxygen and temperature.

---

# Chương 7. Quang hợp lá – thích nghi – bức xạ tán cây – C3/C4

## 7.1. C3 photosynthesis
Cho lúa và xà lách, dùng nền Farquhar–von Caemmerer–Berry:
$
A_n=\min(A_c,A_j,A_p)-R_d
$

$
A_c=V_{cmax}\frac{C_c-\Gamma^*}{C_c+K_c(1+O/K_o)}
$

$
A_j=J\frac{C_c-\Gamma^*}{4(C_c+2\Gamma^*)}
$

## 7.2. C4 photosynthesis
Ngô phải có module riêng:
$
V_p=V_{pmax}\frac{C_m}{C_m+K_p}
$

và tách mesophyll–bundle sheath khi dùng mô hình cơ chế đầy đủ.

## 7.3. Electron transport và ánh sáng
Một dạng non-rectangular hyperbola:
$
\theta J^2-(\alpha I+J_{max})J+\alpha I J_{max}=0
$

## 7.4. Acclimation
$V_{cmax}$, $J_{max}$, respiration và leaf N có thể acclimate với nhiệt độ, ánh sáng, CO₂ và tuổi lá; không nên giữ cố định cả vụ.

## 7.5. Tán cây
Beer–Lambert:
$
I(L)=I_0e^{-k_LL}
$

$
A_{can}=\int_0^{LAI}A_n(L)\,dL
$

Khuyến nghị tách sunlit/shaded leaves khi cần độ chính xác cao hơn.

## 7.6. Leaf nitrogen
Leaf N quyết định mạnh năng lực quang hợp:
$
V_{cmax}=f(N_{leaf},age,T)
$

nhưng quan hệ phải hiệu chỉnh theo loài/giống.

## 7.7. Photoinhibition
Cần module bảo vệ quang hóa khi PPFD và nhiệt cao:
$
D_{PSII}=f(I,T,ROS,repair)
$

## 7.8. Khác biệt cây trồng
- Lúa: C3, canopy erectness/LAI và N profile quan trọng.
- Ngô: C4; không được dùng FvCB C3 nguyên xi.
- Xà lách: C3, canopy thấp, self-shading và tipburn liên hệ mạnh với transpiration/Ca.

---

# Chương 8. Phenology – meristem – sinh trưởng cơ quan – sinh sản – già hóa

## 8.1. Thermal time
$
TT=\sum_d\max(0,T_{mean,d}-T_b)
$

Dạng này chỉ là khung; nhiệt độ nền và ngưỡng phải theo loài/giai đoạn.

## 8.2. Photoperiod và vernalization
Có thể viết:
$
D_{dev}=f(TT,Photoperiod,Vernalization,genotype)
$

Lúa và ngô có đáp ứng quang chu kỳ theo giống; xà lách liên quan bolting và nhiệt độ.

## 8.3. Meristem, cell division và expansion
Tăng trưởng cơ quan:
$
\frac{dB_o}{dt}=N_{cell,o}\,\frac{dm_{cell,o}}{dt}
+
m_{cell,o}\,\frac{dN_{cell,o}}{dt}
$

Đây là phân rã khái niệm giúp tách cell division khỏi cell expansion.

## 8.4. Sink capacity
$
SS_o=M_oq_o
$

với $M_o$ là sink size/capacity và $q_o$ là sink activity.

## 8.5. Reproductive development
Cần tách:
- floral initiation;
- anthesis;
- fertilization;
- grain/seed set;
- grain filling.

## 8.6. Grain filling
Một dạng logistic:
$
W_g(t)=\frac{W_{max}}{1+\exp[-k(t-t_{50})]}
$

hoặc dùng supply–demand balance:
$
\frac{dC_g}{dt}=\min(Supply_C,Demand_C)-R_g
$

## 8.7. Senescence
$
\frac{dM_{leaf}^{green}}{dt}
=
Growth-Senescence
$

Senescence chịu điều hòa bởi tuổi, N, sugar status, hormone và stress.

## 8.8. Remobilization
$
F_{rem,i,o}=k_{rem,i,o}(t)M_{i,o}^{mob}
$

Phải phân biệt apparent remobilization với tracer-confirmed remobilization.

## 8.9. Harvest index
$
HI_{harvest}=\frac{Y_{economic}}{B_{shoot}}
$

Không nhầm với health index.

---

# Chương 9. Stress đơn và stress kết hợp

## 9.1. Nguyên tắc
Cây ngoài đồng thường chịu nhiều stress đồng thời. Không giả định:
$
Response(A+B)=Response(A)\times Response(B)
$

nếu chưa kiểm định.

## 9.2. Drought
Các cơ chế:
- $\Psi_{soil}\downarrow$;
- $K_{root}\downarrow$;
- ABA signaling;
- stomatal closure;
- leaf expansion reduction;
- carbon starvation/hydraulic failure depending on severity.

## 9.3. Heat
Tác động lên:
- membrane stability;
- photosynthetic enzymes;
- respiration;
- pollen viability;
- reproductive success.

## 9.4. Cold/chilling
Cần tách chilling và freezing; lúa/ngô/xà lách có ngưỡng và cơ chế khác nhau.

## 9.5. Flooding/hypoxia
$
O_2\downarrow\rightarrow ATP\downarrow\rightarrow active\ transport\downarrow
$

Lúa có aerenchyma thích nghi tốt hơn ngô và xà lách trong nhiều bối cảnh.

## 9.6. Salinity
Cần tách:
$
osmotic\ stress
$
và:
$
ion\ toxicity/imbalance
$

Không dùng EC như đại diện trực tiếp cho Na⁺.

## 9.7. Nutrient stress
Thiếu N/P/K/micronutrient có pathway khác nhau; không gộp vào một NUE factor.

## 9.8. Stress interaction
Một mô hình tương tác:
$
R=R_0+\beta_AA+\beta_BB+\beta_{AB}AB
$

$\beta_{AB}$ phải ước lượng từ dữ liệu.

## 9.9. Pest/disease coupling
VECrop chỉ nên mô hình mức physiological coupling ban đầu:
$
A_{can}^{eff}=A_{can}(1-D_{leaf})
$
$
Sink^{eff}=Sink(1-D_{organ})
$
với damage fraction được đưa từ module bệnh/sâu riêng.

---

# Chương 10. Genotype × Environment × Management, hiệu chỉnh và bất định

## 10.1. G×E×M
$
Y=f(G,E,M,G\times E,G\times M,E\times M)
$

Không chuyển tham số giữa giống nếu chưa kiểm định.

## 10.2. Calibration
$
\hat{\theta}
=
\arg\min_{\theta}
\sum_t w_t[y_{obs}(t)-y_{sim}(t;\theta)]^2
$

## 10.3. Identifiability
Phân biệt:
- structural identifiability;
- practical identifiability;
- parameter correlation.

## 10.4. Sensitivity analysis
Local:
$
S_i=\frac{\partial Y}{\partial \theta_i}
$

Global: Morris, Sobol hoặc phương pháp tương đương khi mô hình phức tạp.

## 10.5. Validation
Tách dữ liệu:
- calibration;
- validation;
- external validation.

Không đánh giá trên cùng bộ dữ liệu dùng để fit.

## 10.6. Metrics
$
RMSE=\sqrt{\frac1n\sum(y-\hat y)^2}
$

$
MAE=\frac1n\sum|y-\hat y|
$

Có thể bổ sung bias, $R^2$, NSE hoặc likelihood tùy bài toán.

## 10.7. Uncertainty
$
p(\theta|y)\propto p(y|\theta)p(\theta)
$

Bayesian inference hữu ích khi cần posterior uncertainty.

## 10.8. Data assimilation
State-space:
$
x_{t+1}=f(x_t,u_t,\theta)+\omega_t
$

$
y_t=h(x_t)+\nu_t
$

Có thể dùng Kalman/EnKF/particle filter tùy phi tuyến và dữ liệu.

## 10.9. Sensor integration
Nguồn:
- soil moisture;
- EC/pH;
- weather;
- leaf temperature;
- sap flow;
- gas exchange;
- canopy imagery;
- remote sensing.

Mỗi nguồn phải có uncertainty model và QC.

---

# Chương 11. Mô-đun cây trồng: lúa – ngô – xà lách

## 11.1. Nguyên tắc
Không dùng một bộ tham số chung cho ba cây.

## 11.2. Lúa
Bắt buộc xem xét:
- C3 photosynthesis;
- flooded/AWD hydrology;
- rhizosphere redox;
- aerenchyma/ROL;
- NH₄⁺/NO₃⁻ balance;
- tillering;
- panicle formation;
- grain filling;
- harvest index.

## 11.3. Ngô
Bắt buộc:
- C4 photosynthesis;
- deep root architecture;
- VPD/drought hydraulics;
- silking/anthesis synchrony;
- kernel number;
- post-silking C/N dynamics;
- lodging risk khi cần.

## 11.4. Xà lách
Bắt buộc:
- C3;
- shallow roots;
- root-zone temperature;
- hydroponic EC/pH/DO nếu dùng hệ không đất;
- Ca transport;
- tipburn;
- leaf expansion;
- marketable biomass thay cho grain yield.

## 11.5. Interface thống nhất
Mỗi crop module cần trả:
$
Phenology,\ LAI,\ Root,\ Photosynthesis,\ NutrientDemand,\ SinkDemand,\ Yield
$

với cùng interface nhưng tham số/cơ chế riêng.

---

# Chương 12. Thiết kế thí nghiệm, tối ưu quản lý và triển khai VECrop

## 12.1. Thiết kế thí nghiệm
Cần xác định:
- hypothesis;
- treatment;
- replication;
- blocking;
- randomization;
- measurement frequency;
- destructive/non-destructive sampling.

## 12.2. Thí nghiệm nhận dạng tham số
Không phải thí nghiệm năng suất nào cũng nhận dạng được $K_m,V_{max},K_h,V_{cmax}$. Phải thiết kế thí nghiệm theo tham số cần ước lượng.

## 12.3. Multi-objective management
$
\max_{\mathbf u}
\left[
Y,\ Profit,\ WUE,\ NUE
\right]
$

đồng thời:
$
\min_{\mathbf u}
\left[
WaterUse,\ NLoss,\ Energy,\ Risk
\right]
$

## 12.4. Profit
$
\Pi=P_YY-C_{fert}-C_{water}-C_{energy}-C_{labor}-C_{other}
$

## 12.5. Constraints
$
u_{min}\le u_t\le u_{max}
$

và các ràng buộc sinh học/môi trường.

## 12.6. Model predictive management
Ở mức nâng cao:
$
u_t^*
=
\arg\max_{u_{t:t+H}}
J(x_t,u,\hat W)
$

với forecast thời tiết và trạng thái cây cập nhật theo sensor.

## 12.7. Reproducibility
Mỗi mô phỏng cần lưu:
- code version;
- parameter set;
- data version;
- random seed;
- configuration;
- output;
- provenance.

## 12.8. Benchmark
So sánh VECrop với:
- empirical baseline;
- reduced crop model;
- mechanistic module baseline;
- ablation model.

## 12.9. Điều kiện đưa vào khuyến cáo sản xuất
Không dùng VECrop cho quyết định thực địa nếu:
- chưa external validate;
- parameter uncertainty quá lớn;
- dữ liệu input ngoài miền calibration;
- balance checks thất bại.

## 12.10. Lộ trình
1. khóa cấu trúc phương trình;
2. xây unit tests;
3. nhập dữ liệu chuẩn;
4. calibration từng module;
5. coupling;
6. validation từng cây;
7. uncertainty;
8. deployment.

---

# Chương 13. Stoichiometry, dinh dưỡng thứ cấp và vi lượng

## 13.1. Từ C–N–P–K sang multi-element model

Cây cần thêm Ca, Mg, S và các vi lượng như Fe, Mn, Zn, Cu, B, Mo, Ni, Cl.

VECrop không gộp tất cả thành một “nutrient score”.

$$
\mathbf M_{nut}
=
[M_N,M_P,M_K,M_{Ca},M_{Mg},M_S,M_{Fe},M_{Mn},M_{Zn},M_{Cu},M_B,M_{Mo},M_{Ni}]^T
$$

## 13.2. Stoichiometric demand

$$
Req_{i,o}
=
q_{i,o}^{*}(stage)
\frac{dB_o}{dt}
$$

Tỷ lệ tối ưu thay đổi theo cơ quan và giai đoạn.

## 13.3. Dilution

Nồng độ nutrient có thể giảm khi sinh khối tăng dù tổng lượng nutrient vẫn tăng.

Một quan hệ thực nghiệm:

$$
N_c=aW^{-b}
$$

chỉ dùng khi đã hiệu chỉnh cho cây/giai đoạn.

## 13.4. Nutrient interaction

Ví dụ:
- K–Na competition;
- Ca–Na balance;
- NH4–K interaction;
- P–Zn interaction;
- Fe–P chemistry;
- B–Ca liên quan cấu trúc mô.

Một dạng tương tác:

$$
U_i^{eff}=U_iF_{ij}(C_j)
$$

## 13.5. Mobility và remobilization

Không mọi nguyên tố remobilize giống nhau.

$$
F_{rem,i,o}
=
k_{rem,i,o}M_{i,o}^{mob}
$$

Ca thường có phloem mobility hạn chế; điều này đặc biệt quan trọng với mô non và xà lách.

## 13.6. Micronutrient toxicity

Một response hai phía:

$$
R_i(C)
=
\exp\left[
-\frac{(C-\mu_i)^2}{2\sigma_i^2}
\right]
$$

chỉ là reduced formulation; mô hình cơ chế nên dùng uptake, storage và damage riêng.

## 13.7. Nutrient-use efficiencies

NUE, PUE, KUE cần định nghĩa rõ denominator.

Ví dụ:

$$
NUE_{yield}
=
\frac{Y}{N_{input}}
$$

khác với:

$$
NUE_{uptake}
=
\frac{N_{plant}}{N_{available}}
$$

Không trộn các định nghĩa.

## 13.8. Tissue diagnostics

Tissue concentration cần gắn:
- organ;
- stage;
- sampling method;
- dry/fresh basis;
- cultivar.

## 13.9. Lúa – ngô – xà lách

### Lúa
Fe/Mn và redox chemistry quan trọng trong đất ngập.

### Ngô
N–P–K demand cao và biến đổi mạnh theo phenology.

### Xà lách
Ca, B và cân bằng cation đặc biệt quan trọng cho chất lượng lá và tipburn.

---

# Chương 14. Quản lý nước – dinh dưỡng – nhà kính – thủy canh

## 14.1. Water balance

$$
\Delta S
=
P+I-ET-D-R
$$

Trong nhà kính, $P$ có thể bằng 0 và cần tách irrigation, drainage, substrate storage.

## 14.2. Crop evapotranspiration

Ở mức reduced model:

$$
ET_c=K_cET_0
$$

Không dùng FAO-style coefficient như module cơ chế nếu đã mô phỏng stomata/canopy transpiration trực tiếp.

## 14.3. Irrigation scheduling

Một rule-based controller:

$$
I_t=
\begin{cases}
I_{dose},&\theta<\theta_{trigger}\\
0,&otherwise
\end{cases}
$$

Các threshold phải theo crop/substrate/system.

## 14.4. Fertigation mass balance

$$
M_{i,in}
=
C_{i,sol}V_{irrig}
$$

$$
M_{i,drain}
=
C_{i,drain}V_{drain}
$$

## 14.5. Leaching fraction

$$
LF=
\frac{V_{drain}}{V_{irrig}}
$$

Không tối ưu LF tách rời salt balance và nutrient loss.

## 14.6. EC/pH control

Trong hydroponics:

$$
EC_{tank}
=
f(\mathbf C_{ion},T)
$$

EC chỉ là tổng tín hiệu; cần periodic ion analysis khi muốn cân bằng nutrient chính xác.

## 14.7. Dissolved oxygen

$$
DO=f(T,aeration,root\ respiration,microbial\ demand)
$$

Root-zone hypoxia có thể xảy ra dù dung dịch nhìn “đủ nước”.

## 14.8. Root-zone temperature

Root-zone temperature ảnh hưởng uptake, respiration và root hydraulic conductance; phải tách khỏi air temperature.

## 14.9. Light integral

Daily light integral:

$$
DLI
=
\int_{day}PPFD(t)\,dt
$$

với chuyển đổi đơn vị thích hợp.

## 14.10. CO2 enrichment

Không tăng CO2 độc lập với light, N, temperature và sink demand.

## 14.11. Greenhouse climate

Các biến:
- air temperature;
- RH/VPD;
- PPFD;
- CO2;
- leaf temperature;
- root-zone temperature.

## 14.12. Optimization

$$
\max_{\mathbf u}
\Pi
$$

với:

$$
\mathbf u
=
[Irrigation,Fertigation,Light,CO_2,Ventilation,Shading]
$$

và các ràng buộc sinh lý/chất lượng.

---

# Chương 15. Quy trình hiệu chỉnh và kiểm định cho lúa – ngô – xà lách

## 15.1. Nguyên tắc

Không hiệu chỉnh toàn bộ tham số cùng lúc bằng năng suất cuối vụ.

## 15.2. Calibration hierarchy

Thứ tự đề xuất:
1. environment/soil;
2. phenology;
3. root/hydraulics;
4. photosynthesis;
5. nutrient uptake;
6. respiration;
7. allocation/source–sink;
8. yield.

## 15.3. Lúa

Tối thiểu cần:
- phenology;
- tiller dynamics;
- LAI;
- flooded/AWD water status;
- root-zone Eh/O2;
- N uptake;
- panicle/grain biomass;
- final yield.

## 15.4. Ngô

Tối thiểu:
- thermal/photothermal development;
- leaf number/LAI;
- C4 gas exchange hoặc canopy biomass;
- soil water/root depth;
- anthesis–silking interval;
- kernel number;
- grain filling.

## 15.5. Xà lách

Tối thiểu:
- leaf number;
- leaf area;
- fresh/dry biomass;
- root biomass;
- EC/pH/DO;
- root-zone temperature;
- tissue Ca/N/K;
- tipburn incidence.

## 15.6. Hold-out validation

$$
D=D_{cal}\cup D_{val},\qquad
D_{cal}\cap D_{val}=\varnothing
$$

## 15.7. External validation

Ưu tiên dữ liệu khác:
- mùa vụ;
- địa điểm;
- cultivar;
- management.

## 15.8. Metrics

$$
RMSE=
\sqrt{
\frac1n
\sum_i
(y_i-\hat y_i)^2
}
$$

$$
MAE=
\frac1n
\sum_i
|y_i-\hat y_i|
$$

Bias:

$$
MBE=
\frac1n
\sum_i
(\hat y_i-y_i)
$$

## 15.9. Residual diagnostics

Không chỉ nhìn $R^2$. Cần kiểm:
- heteroscedasticity;
- temporal autocorrelation;
- stage-specific bias;
- treatment-specific bias.

## 15.10. Benchmark

So sánh:
- empirical baseline;
- simple thermal/biomass model;
- VECrop reduced;
- VECrop mechanistic.

## 15.11. Ablation

Tắt từng module:

$$
\Delta E_k
=
Error_{without\ k}
-
Error_{full}
$$

để biết module có thật sự cải thiện dự báo hay không.

---

# Chương 16. Triển khai số, phần mềm, kiểm thử và provenance

## 16.1. State vector

$$
\mathbf x(t)
=
[\theta,\Psi,C_i,B_o,M_i,H_h,ROS,ATP,\ldots]^T
$$

## 16.2. Dynamic model

$$
\frac{d\mathbf x}{dt}
=
\mathbf f(\mathbf x,\mathbf u,\boldsymbol\theta,t)
$$

## 16.3. Algebraic constraints

Ví dụ:

$$
\sum_i z_iC_i+C_{fixed}\approx0
$$

và các mass-balance constraints.

## 16.4. Solver

Tùy stiffness:
- explicit RK;
- adaptive RK;
- BDF/implicit solver.

Không chọn timestep chỉ vì “chạy được”.

## 16.5. Positivity

Các state vật chất phải thỏa:

$$
M_i\ge0,\qquad B_o\ge0
$$

Nếu solver tạo giá trị âm, phải xử lý nguyên nhân số học/mô hình.

## 16.6. Unit system

Mọi biến phải ghi:
- symbol;
- SI unit;
- internal unit;
- conversion.

Không trộn mmol/L với mol/m3 mà không chuyển đổi.

## 16.7. Unit tests

Bắt buộc:
- mass conservation;
- dimensional consistency;
- non-negative pools;
- normalized indices in [0,1];
- crop-specific parameter isolation;
- no duplicate stress penalty.

## 16.8. Regression tests

Mỗi release lưu một bộ scenario chuẩn để phát hiện thay đổi ngoài ý muốn.

## 16.9. Parameter provenance

Mỗi tham số:

| field | nội dung |
|---|---|
| symbol | ký hiệu |
| species | loài |
| cultivar | giống |
| organ | cơ quan |
| stage | giai đoạn |
| value | giá trị |
| unit | đơn vị |
| source | DOI/URL |
| role | calibration/validation/context |
| uncertainty | SD/SE/CI |

## 16.10. Configuration

Không hard-code crop parameters trong source code. Dùng config riêng cho:
- rice;
- maize;
- lettuce.

## 16.11. Reproducibility

Mỗi run lưu:
- git commit;
- config hash;
- input data version;
- random seed;
- solver version;
- output metadata.

## 16.12. Scientific release

Một release khoa học cần:
- equations version;
- parameter version;
- dataset version;
- tests;
- validation report;
- changelog.

---

## Phụ lục kiểm định nguồn

- `references/consensus-gap-review.md`: rà soát khoảng trống học thuật và bằng chứng.
- `references/README.md`: quy tắc provenance cho tham số và tài liệu.

## Quy tắc khoa học

- Không bịa tham số.
- Không dùng một giá trị nghiên cứu đơn lẻ như hằng số phổ quát.
- Không trộn đại lượng khác đơn vị.
- Không đếm cùng một stress nhiều lần.
- Phân biệt rõ kiến thức nền với cấu trúc VECrop đề xuất.
- HSY trong mô hình cơ chế đầy đủ chủ yếu là chỉ số chẩn đoán.
