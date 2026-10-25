# VECrop — Giáo trình tổng hợp

> Bản làm việc tích hợp Chương 1 đến Chương 12. Các file chương riêng vẫn được duy trì để chỉnh sửa, kiểm định và theo dõi phiên bản.

---

# Chương 1. Cơ sở sinh lý và toán học của hấp thu dinh dưỡng trong VECrop

## 1.1. Mục tiêu và phạm vi

Chương này thiết lập nền tảng sinh lý học, vật lý và toán học cho VECrop. Mục tiêu không phải tạo ra một “định luật mới” thay thế sinh lý thực vật hiện có, mà xây dựng một **khung tích hợp có thể kiểm định** để nối các quá trình:

\[
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
\]

VECrop phân biệt ba cấp:

1. **Phương trình cơ chế**: dựa trên bảo toàn vật chất, nhiệt động học, thủy lực, động học enzyme/transport và sinh lý cây.
2. **Phương trình thực nghiệm**: dùng để mô tả một quan hệ quan sát được khi chưa đủ dữ liệu cho mô hình cơ chế.
3. **Chỉ số tổng hợp VECrop/HSY**: chỉ dùng sau khi các biến đã được chuẩn hóa và không được phép đếm lặp một stress đã được mô hình hóa trực tiếp.

Nguyên tắc xuyên suốt:

\[
\boxed{
\text{không bịa tham số}
\quad+\quad
\text{không trộn đơn vị}
\quad+\quad
\text{không gọi giả thuyết là định luật}
}
\]

---

## 1.2. Đối tượng của mô hình: hệ đất – rễ – cây – khí quyển

Một cây không thể được mô hình hóa độc lập với môi trường. VECrop xem cây là một hệ mở trao đổi vật chất và năng lượng với đất hoặc dung dịch dinh dưỡng, khí quyển, bức xạ, vi sinh vật vùng rễ và hệ quản lý canh tác.

Ta định nghĩa vector trạng thái môi trường:

\[
\boxed{
\mathbf X_{env}
=
[
EC,\ pH,\ \theta,\ pF,\ \Psi_{soil},\ T,\ I,\ CO_2,\ O_2,\ Eh,\ N,\ P,\ K,\ldots
]^T
}
\]

Trong đó \(EC\) là độ dẫn điện; \(pH\) là trạng thái acid–base; \(\theta\) là hàm lượng nước thể tích của đất; \(pF\) là logarit của độ lớn cột áp nước; \(\Psi_{soil}\) là thế nước đất; \(T\) là nhiệt độ; \(I\) là bức xạ/PPFD; \(CO_2\) là CO₂; \(O_2\) là oxy vùng rễ; \(Eh\) là thế oxy hóa–khử.

Không nên dùng một biến tổng quát như “độ màu mỡ đất” nếu mục tiêu là mô hình cơ chế. Mỗi biến phải có đơn vị, phương pháp đo và miền áp dụng rõ ràng.

---

## 1.3. Bảo toàn vật chất là ràng buộc cấp cao nhất

Đối với một chất \(i\) trong một thể tích kiểm soát:

\[
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
\]

Trong đó \(M_i\) là lượng chất đang lưu trữ; \(F_{i,in}\) và \(F_{i,out}\) là các dòng vào/ra; \(P_i\) và \(C_i\) là sản sinh/tiêu thụ nội tại.

Đối với nguyên tố khoáng như N, P, K trong toàn cây:

\[
\boxed{
\frac{dM_i}{dt}
=
U_i-L_i
}
\]

Tái phân bố N từ lá sang hạt không phải là mất N khỏi cây, mà chỉ là dòng nội bộ.

Carbon khác N–P–K vì nguồn carbon mới chủ yếu đến từ CO₂:

\[
CO_2\rightarrow photosynthesis
\]

và:

\[
\boxed{
\frac{dM_C}{dt}
=
A_C-R-L_C
}
\]

---

## 1.4. Phân biệt lượng, nồng độ, hoạt độ và thông lượng

Lượng chất:

\[
M_i
\]

Nồng độ:

\[
\boxed{
C_i=\frac{M_i}{V}
}
\]

Hoạt độ:

\[
\boxed{
a_i=\gamma_iC_i
}
\]

Thông lượng:

\[
\boxed{
J_i
=
\frac{\text{lượng chất}}
{\text{diện tích}\times \text{thời gian}}
}
\]

Không được cộng trực tiếp các đại lượng có bản chất và đơn vị khác nhau.

---

## 1.5. Nước: thế nước là biến động lực cơ bản

Thế nước tổng:

\[
\boxed{
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
}
\]

Trong đó \(\Psi_p\) là thế áp suất, \(\Psi_s\) thế thẩm thấu, \(\Psi_m\) thế ma trận và \(\Psi_g\) thế trọng trường.

Dòng nước:

\[
\boxed{
\vec J_w=-K_h\nabla\Psi_w
}
\]

Ở dạng hai nút:

\[
\boxed{
Q_w=K(\Psi_1-\Psi_2)
}
\]

VECrop không sử dụng “lực hướng lên” tổng hợp gồm transpiration + hormone + root pressure. Hormone là biến điều hòa; dòng nước phải được mô tả bằng gradient thế nước và độ dẫn thủy lực.

Trong trạng thái cây đang thoát hơi thường có:

\[
\boxed{
\Psi_{soil}>\Psi_{root}>\Psi_{stem}>\Psi_{leaf}
}
\]

theo nghĩa các giá trị trở nên âm hơn về phía lá.

---

## 1.6. pF và quan hệ nước đất

pF:

\[
\boxed{
pF=\log_{10}|h|
}
\]

trong đó \(h\) là pressure head theo cm nước.

Một mô hình giữ nước đất kinh điển là van Genuchten:

\[
\boxed{
S_e
=
\frac{\theta-\theta_r}{\theta_s-\theta_r}
=
\left[
1+(\alpha |h|)^n
\right]^{-m}
}
\]

thường với:

\[
m=1-\frac1n
\]

Các tham số phải được hiệu chỉnh theo đất, không dùng một bộ chung cho mọi loại đất.

---

## 1.7. Dinh dưỡng khoáng: tổng lượng không bằng lượng cây có thể hấp thu

Tổng N, P hoặc K trong đất không đồng nghĩa với lượng cây có thể hấp thu.

\[
\boxed{
M_{total}
=
M_{unavailable}
+
M_{potential}
+
M_{solution}
}
\]

Tính khả dụng phụ thuộc hóa học đất, pH, nước, Eh, vi sinh vật, cấu trúc rễ, exudate, khuếch tán và dòng khối.

Một dạng dòng ion trong đất:

\[
\boxed{
J_i^{soil}
=
q_wC_i
-
D_{eff,i}\nabla C_i
}
\]

Trong đó \(q_wC_i\) biểu diễn mass flow và thành phần khuếch tán biểu diễn diffusion.

---

## 1.8. Từ bề mặt rễ đến màng tế bào

Chuỗi:

\[
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
\]

Màng sinh chất là hàng rào chọn lọc. Ion đi qua nhờ channel, carrier, symporter, antiporter hoặc pump trực tiếp/gián tiếp.

---

## 1.9. Thế điện hóa và động lực vận chuyển ion

\[
\boxed{
\widetilde\mu_i
=
\mu_i^0+RT\ln a_i+z_iF\psi
}
\]

Chênh lệch qua màng:

\[
\boxed{
\Delta\widetilde\mu_i
=
RT\ln\frac{a_{i,in}}{a_{i,out}}
+
z_iF(\psi_{in}-\psi_{out})
}
\]

Điện thế Nernst:

\[
\boxed{
E_i
=
\frac{RT}{z_iF}
\ln\frac{a_{i,out}}{a_{i,in}}
}
\]

Vì vậy dòng ion không thể được xác định chỉ bằng nồng độ ngoài rễ.

---

## 1.10. H⁺-ATPase và năng lượng hấp thu dinh dưỡng

H⁺-ATPase màng sinh chất sử dụng ATP để bơm proton và tạo gradient pH, điện thế màng và proton-motive force.

\[
\boxed{
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
}
\]

Điểm bắt buộc:

\[
\boxed{
H^+\text{-ATPase không bơm nước trực tiếp}
}
\]

---

## 1.11. Động học hấp thu ion

Khi transporter có động học bão hòa:

\[
\boxed{
J_i
=
V_{\max,i}
\frac{C_i}{K_{m,i}+C_i}
}
\]

Nhiều ion có thể có hệ hấp thu ái lực cao và thấp:

\[
\boxed{
J_i
=
J_{HATS,i}
+
J_{LATS,i}
-
J_{efflux,i}
}
\]

với:

\[
J_{HATS,i}
=
V_{\max,H}
\frac{C_i}{K_{m,H}+C_i}
\]

và có thể gần đúng:

\[
J_{LATS,i}\approx k_LC_i
\]

khi dữ liệu phù hợp.

\(V_{\max}\) và \(K_m\) phụ thuộc loài, giống, tuổi rễ, vị trí rễ, tình trạng dinh dưỡng, pH, nhiệt độ, oxy và transporter.

---

## 1.12. Phân biệt EC và nồng độ từng ion

\[
\boxed{
EC\neq C_N,\quad EC\neq C_P,\quad EC\neq C_K
}
\]

Hai dung dịch có cùng EC vẫn có thể có thành phần ion khác nhau.

Trong VECrop:

\[
\boxed{
EC\rightarrow \text{trạng thái ion tổng và môi trường thẩm thấu}
}
\]

còn:

\[
\boxed{
C_i\rightarrow \text{uptake của ion }i
}
\]

Thế thẩm thấu gần đúng:

\[
\boxed{
\Psi_s\simeq -RT\sum_i\phi_iC_i
}
\]

---

## 1.13. Vai trò của pH

pH ảnh hưởng hấp thu khoáng qua thay đổi dạng hóa học, sorption/precipitation và proton gradient.

Do đó không nên dùng một \(F_{pH}\) duy nhất cho mọi nguyên tố:

\[
\boxed{
J_i=J_i(C_i)F_{pH,i}
}
\]

với:

\[
F_{pH,N}\neq F_{pH,P}\neq F_{pH,K}
\]

Nếu đã giải trực tiếp speciation và proton-coupled transport thì không cần nhân thêm \(F_{pH}\) tổng quát.

---

## 1.14. Nhiệt độ

Nhiệt độ ảnh hưởng độ nhớt nước, khuếch tán, enzyme, respiration, membrane fluidity, transporter và sinh trưởng.

Một dạng Arrhenius:

\[
\boxed{
k(T)=k_{ref}
\exp\left[
-\frac{E_a}{R}
\left(
\frac1T-\frac1{T_{ref}}
\right)
\right]
}
\]

Đối với maintenance respiration:

\[
\boxed{
R_M(T)
=
R_{M,ref}
Q_{10}^{(T-T_{ref})/10}
}
\]

nhưng \(Q_{10}\) phải được hiệu chỉnh.

---

## 1.15. Oxy vùng rễ

\[
O_2
\rightarrow
respiration
\rightarrow
ATP
\rightarrow
H^+\text{-ATPase}
\rightarrow
ion\ uptake
\]

Một dạng:

\[
\boxed{
R_{O_2}
=
R_{O_2,\max}
\frac{C_{O_2}}{K_{O_2}+C_{O_2}}
}
\]

Chỉ số cung–cầu năng lượng:

\[
\boxed{
H_E
=
\min
\left[
1,
\frac{ATP_{sup}}{ATP_{dem}+\varepsilon}
\right]
}
\]

và:

\[
\boxed{
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
s_i(Q)
H_E
F_T
F_{stage}
}
\]

---

## 1.16. Liebig và Shelford trong VECrop

Dạng giới hạn tối giản:

\[
\boxed{
H_{Liebig}
=
\min(R_1,R_2,\ldots,R_m)
}
\]

Một response dạng Gaussian:

\[
\boxed{
R_j(x)
=
\exp
\left[
-\frac{(x-\mu_j)^2}{2\sigma_j^2}
\right]
}
\]

Một dạng VECrop đề xuất:

\[
\boxed{
H_{env}
=
G_{critical}
\left(
\prod_{j=1}^{m}R_j
\right)^{1/m}
}
\]

Đây là cấu trúc đề xuất, không phải một định luật mới.

---

## 1.17. Chuẩn hóa biến sinh học

Không được cộng trực tiếp:

\[
EC+pH+T+N
\]

Phải chuyển thành chỉ số không thứ nguyên.

Min–max:

\[
\boxed{
x^*
=
\frac{x-x_{\min}}{x_{\max}-x_{\min}}
}
\]

Sigmoid:

\[
\boxed{
x^*
=
\frac{1}{1+\exp[-k(x-x_{50})]}
}
\]

Optimum response:

\[
\boxed{
R(x)
=
\exp
\left[
-\frac{(x-\mu)^2}{2\sigma^2}
\right]
}
\]

Việc chọn hàm phải dựa trên sinh lý và dữ liệu.

---

## 1.18. Khái niệm HSY trong VECrop

HSY được giữ như một **khung tổng hợp trạng thái sinh học**, không phải đơn vị năng lượng, không phải lực, và không phải hệ số năng suất phổ quát.

\[
\Phi_1=\text{structure / vascular integrity}
\]

\[
\Phi_2=\text{gene–protein–enzyme–transport–energy}
\]

\[
\Phi_3=\text{hormone–Ca–ROS–MAPK–development}
\]

Một dạng chuẩn hóa:

\[
\boxed{
H_{cell}=w_1\Phi_1+w_2\Phi_2+w_3\Phi_3
}
\]

với:

\[
w_i\ge0,\qquad w_1+w_2+w_3=1
\]

và các \(\Phi_i\in[0,1]\).

---

## 1.19. Quá trình 1: cấu trúc

\(\Phi_1\) có thể đại diện cellulose, hemicellulose, lignin, cấu trúc vách, độ toàn vẹn mạch, diện tích mạch, pit, mô dẫn và diện tích rễ hoạt động.

\[
\boxed{
\Phi_1=\sum_k w_{1k}S_k^*
}
\]

Nếu mô hình đã tính trực tiếp \(K_x\) từ giải phẫu mạch, không đưa cùng đặc tính vào \(\Phi_1\) rồi nhân lại vào \(K_x\).

---

## 1.20. Quá trình 2: gene – protein – enzyme – transporter – năng lượng

Ý tưởng ban đầu:

\[
(\vec A_4+\vec B_5+\vec C_6)=s(S_4+S_5-S_6)
\]

được chuẩn hóa:

\[
\boxed{
\Phi_{2,i}
=
\operatorname{clip}
[
s_i(Q)(S_{4,i}^*+S_{5,i}^*-S_{6,i}^*),
0,1
]
}
\]

với:

\[
\boxed{
s_i(Q)
=
\frac{1}
{1+\exp[-(\beta_{0i}+\sum_j\beta_{ji}Q_j^*)]}
}
\]

Một liên kết cơ chế:

\[
\boxed{
V_{\max,i}^{eff}
=
V_{\max,i}^{ref}
s_i(Q)
F_{stage,i}
F_{T,i}
F_{O_2,i}
}
\]

Gene không tạo “lực”; nó điều chỉnh năng lực vận chuyển và chuyển hóa.

---

## 1.21. Quá trình 3: hormone và phát triển

Ý tưởng ban đầu:

\[
(\vec A_7+\vec B_8+\vec C_9)=y(S_7+S_8-S_9)
\]

được chuẩn hóa:

\[
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
\]

với:

\[
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
\]

Không được dùng một biểu thức cố định kiểu Auxin + GA + CK − ABA − Ethylene cho mọi cơ quan/giai đoạn.

---

## 1.22. Phân biệt Health Index với Harvest Index

Harvest Index:

\[
\boxed{
HI_{harvest}
=
\frac{Y_{economic}}{B_{aboveground}}
}
\]

Nếu cần chỉ số sức khỏe, khuyến nghị:

\[
\boxed{
H_{crop}
}
\]

để tránh trùng ký hiệu.

---

## 1.23. Không được nhân RUE × WUE × NUE trực tiếp

\[
RUE,\quad WUE,\quad NUE
\]

có đơn vị khác nhau.

Vì vậy:

\[
\boxed{
RUE\times WUE\times NUE
}
\]

không thể tự động trở thành một chỉ số hợp lệ.

Nếu muốn tích hợp, phải chuẩn hóa:

\[
RUE^*,WUE^*,NUE^*\in[0,1]
\]

và chỉ dùng nếu không đếm lặp cơ chế.

---

## 1.24. Mô hình cơ chế và mô hình rút gọn

Mô hình cơ chế:

\[
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
\]

Mô hình rút gọn có thể dùng:

\[
\boxed{
Y_{reduced}
=
Y_{pot}
C_D(D)
\overline{HSY}
}
\]

Điều bắt buộc:

\[
\boxed{
Y_{mechanistic}
\neq
Y_{mechanistic}\times HSY_{diag}
}
\]

nếu HSY đã chứa các stress đã được tính trực tiếp.

---

## 1.25. Mật độ cây và cạnh tranh

Một hàm chọn trước:

\[
\boxed{
Y(D)=\alpha D e^{-\beta D}
}
\]

cho:

\[
\boxed{
D_{opt}=\frac1\beta
}
\]

Đây chỉ là tính chất của hàm đã chọn.

Nếu \(HSY=HSY(D)\):

\[
\boxed{
\frac{d\ln Y}{dD}
=
\frac1D-\beta+\frac{\partial\ln HSY}{\partial D}=0
}
\]

---

## 1.26. Kiểm tra thứ nguyên bắt buộc

Mọi phương trình phải thỏa dimensional consistency.

Ví dụ:

\[
J_w=-K_h\nabla\Psi
\]

thì đơn vị \(K_h\) phải làm cho vế phải có cùng đơn vị với \(J_w\).

Biểu thức:

\[
v=|G|+HSY
\]

không hợp lệ nếu \(v\), \(G\) và HSY không cùng đơn vị.

Nếu HSY điều chỉnh vận tốc:

\[
\boxed{
v=v_0HSY
}
\]

hoặc:

\[
\boxed{
J=J_0HSY
}
\]

với điều kiện được kiểm định.

---

## 1.27. Tổng và tích phân

Nếu cây được chia thành lớp rời rạc:

\[
\boxed{
\sum_{i=1}^{n}F_i
}
\]

Nếu theo chiều cao liên tục:

\[
\boxed{
\int_0^H F(z)\,dz
}
\]

Theo không gian và thời gian:

\[
\boxed{
\int_0^T\int_0^H F(z,t)\,dz\,dt
}
\]

Không dùng triple integral chỉ để biểu thị “nhiều tầng” khi không có ba biến tích phân độc lập.

---

## 1.28. Khung đa tầng VECrop

### Lớp 1 — môi trường/rhizosphere
\[
\mathbf X_{env}
\]

### Lớp 2 — tế bào và trao đổi chất
\[
H_{cell}
\]

### Lớp 3 — thủy lực và mạch dẫn
\[
J_w,\ K_{root},K_x,\Psi
\]

### Lớp 4 — quần thể và mật độ
\[
D,\ LAI,\ competition
\]

### Lớp 5 — quang hợp, source–sink và sinh khối
\[
A_n,\ A_{can},F_C,B,Y
\]

### Lớp 6 — quản lý, năng lượng và kinh tế

\[
\boxed{
\mathbf u
=
\{N,P,K,irrigation,D,S,light,CO_2,\ldots\}
}
\]

\[
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
\]

---

## 1.29. Cấu trúc phương trình tổng hợp cấp cao

\[
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
\]

Đây là xương sống của toàn bộ VECrop.

---

## 1.30. HSY ở cấp chẩn đoán

\[
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
\]

với:

\[
0\le H_j\le1
\]

Các trọng số phải được hiệu chỉnh hoặc ước lượng từ dữ liệu.

---

## 1.31. Nhận dạng tham số

\[
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
\]

Một bài toán hiệu chỉnh:

\[
\boxed{
\hat{\boldsymbol\theta}
=
\arg\min_{\boldsymbol\theta}
\sum_t
[
y_{obs}(t)-y_{model}(t;\boldsymbol\theta)
]^2
}
\]

Nếu nhiều tham số cho đầu ra gần như giống nhau, mô hình gặp parameter non-identifiability.

---

## 1.32. Độ bất định

\[
Y=f(\mathbf X,\boldsymbol\theta)
\]

Bất định đến từ cảm biến, đất, tham số, cấu trúc mô hình, giống và thời tiết.

Monte Carlo:

\[
\boxed{
\mathbf X^{(k)},\boldsymbol\theta^{(k)}
\rightarrow
Y^{(k)}
}
\]

Nên báo cáo median, quantiles hoặc confidence/credible interval thay vì chỉ một giá trị.

---

## 1.33. Kiểm định cân bằng

Nước:

\[
\boxed{
Water_{in}-Water_{out}-\Delta Storage\approx0
}
\]

Nitrogen:

\[
\boxed{
N_{uptake}-N_{loss}-\Delta N_{plant}\approx0
}
\]

Carbon:

\[
\boxed{
C_{assimilation}-C_{respiration}-\Delta C_{biomass}\approx0
}
\]

Nếu sai số cân bằng lớn, không nên diễn giải đầu ra năng suất.

---

## 1.34. Các mức dữ liệu

### Cấp A — dữ liệu trực tiếp
EC, pH, soil water, leaf water potential, gas exchange, biomass, tissue N/P/K.

### Cấp B — tham số suy ra
\(K_h\), \(V_{\max}\), \(K_m\), \(V_{cmax}\), \(J_{max}\).

### Cấp C — chỉ số tổng hợp
\(H_{env}\), \(H_{cell}\), \(HSY_{diag}\).

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
- cấu trúc \(\Phi_1,\Phi_2,\Phi_3\);
- \(H_{cell}=w_1\Phi_1+w_2\Phi_2+w_3\Phi_3\);
- cách dùng \(HSY_{diag}\);
- kết hợp các response factor;
- các hàm logistic cho \(s_i\) và \(y_o\) khi chưa có dữ liệu trực tiếp.

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
- “N, P, K dùng chung một \(K_m\)”.
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

\[
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
\]

Mọi bước phải tuân thủ:

\[
\boxed{
\text{mass balance}
+
\text{dimensional consistency}
+
\text{physiological meaning}
+
\text{experimental testability}
}
\]

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

# Chương 2. Môi trường vùng rễ

Các biến chính:

[
\mathbf X_{env}=\{EC,pH,\theta,pF,T,I,CO_2,O_2,Eh,OM,N,P,K,\ldots\}
]

## pF
[
pF=\log_{10}|h|
]
trong đó (h) là cột áp nước theo cm.

## Thế nước
[
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
]

## Môi trường tổng hợp
Một dạng VECrop đề xuất:
[
H_{env}=G_{critical}\left(\prod_jR_j\right)^{1/m}
]
trong đó các (R_j\in[0,1]) phải được hiệu chỉnh và không thay thế các phương trình cơ chế khi dữ liệu đủ.

---

# Chương 3. HSY cấp tế bào/phân tử

VECrop tách ba nhóm cơ chế:

[
\Phi_1=\text{Structure / vascular integrity}
]
[
\Phi_2=\text{Gene–protein–enzyme–transport–energy}
]
[
\Phi_3=\text{Hormone–Ca–ROS–MAPK–development}
]

Chỉ số tế bào:
[
H_{cell}=w_1\Phi_1+w_2\Phi_2+w_3\Phi_3,
\quad w_i\ge0,\quad \sum_iw_i=1
]

Một dạng điều hòa quá trình 2:
[
s_i(Q)=\frac{1}{1+\exp[-(\beta_{0i}+\sum_j\beta_{ji}Q_j^*)]}
]

Một dạng điều hòa quá trình 3:
[
y_o=\sigma\left[\beta_{0,o,g}+\sum_h\beta_{h,o,g}H_h^*+\cdots\right]
]

HSY không được coi là hệ số năng suất phổ quát nếu các cơ chế bên trong đã được mô hình hóa trực tiếp.

---

# Chương 4. Thủy lực, mạch dẫn và tích hợp toàn cây

## 4.1. Thế nước và SPAC
[
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
]
[
\vec J_w=-K_h\nabla\Psi_w
]

## 4.2. Thủy lực rễ – apoplast – symplast – aquaporin
[
J_{w,r}=L_{pr,eff}(\Psi_{soil}-\Psi_{xyl})
]
[
L_{pr,eff}=L_{pr,0}F_{anat}F_{AQP}F_{env}
]

## 4.3. Vận chuyển khoáng và xylem loading
[
J_{i,in}=V_{\max,i}^{eff}\frac{C_i}{K_{m,i}+C_i}+J_{LATS,i}
]
[
U_i=A_rJ_{i,net}
]

## 4.4. Vận chuyển dọc xylem – cavitation – embolism
[
J_x=-K_{x,eff}\frac{\partial\Psi_x}{\partial z}
]
[
K_{x,eff}=K_{x,max}\left(1-\frac{PLC}{100}\right)
]

## 4.5. Phloem – source–sink – hormone cấp cơ quan
[
Q_{ph}=K_{ph}(P_{source}-P_{sink})
]
[
SS_o=M_oq_oy_oH_{CN,o}
]
[
a_o=\frac{SS_o}{\sum_jSS_j}
]

## 4.6. Ghép xylem – khí khổng – quang hợp – phloem
[
C_L\frac{d\Psi_L}{dt}=K_L(\Psi_{soil}-\Psi_L)-E
]
[
g_{sw}=g_0+F_{hyd}\,1.6\left(1+\frac{g_1}{\sqrt D}\right)\frac{A_n}{C_s}
]
[
A_{can}=\int_0^{LAI}A_n(L)\,dL
]

## 4.7. Cân bằng động C–N–P–K
[
\frac{dM_C}{dt}=A_C-R_m-R_g-L_C
]
[
\frac{dM_i}{dt}=U_i-L_i,\quad i=N,P,K
]
[
F_{rem,i,o}=k_{rem,i,o}M_{i,o}^{mob}
]

## 4.8. Hô hấp – ATP – chi phí tăng trưởng
[
R_{M,o}=m_{o,ref}M_{met,o}Q_{10,o}^{(T-T_{ref})/10}
]
[
ATP_{dem}=ATP_G+ATP_M+ATP_U+ATP_A+ATP_T
]
[
H_E=\min\left(1,\frac{ATP_{sup}}{ATP_{dem}+\varepsilon}\right)
]

## 4.9. Oxy – hypoxia – anoxia – Eh
[
\frac{\partial C_{O_2}}{\partial t}=D_{O_2,eff}\nabla^2C_{O_2}+S_{O_2}-R_{O_2}
]
[
E_h=E^0+\frac{RT}{nF}\ln\frac{a_{Ox}}{a_{Red}}
]

## 4.10. Cân bằng ion – điện tích – pH – mặn
[
\Delta\widetilde\mu_i=RT\ln\frac{a_{i,in}}{a_{i,out}}+z_iF\Delta\psi
]
[
C_m\frac{dV_m}{dt}=-\left(I_{pump}+\sum_iI_i\right)
]
[
\sum_i z_iC_i+C_{fixed}\approx0
]

## 4.11. ROS – redox – antioxidant – damage
[
P_{ROS}=P_{chl}+P_{mit}+P_{per}+P_{RBOH}
]
[
\frac{d[H_2O_2]}{dt}=P_{H_2O_2}+\frac12v_{SOD}-v_{CAT}-v_{APX}-v_{PRX}-J_{H_2O_2}
]
[
H_{redox}=e^{-(\lambda_LD_L+\lambda_PD_P+\lambda_ND_{NA})}
]

## 4.12. Hormone – Ca²⁺ – ROS – MAPK
[
\frac{dH_h}{dt}=B_h-D_h+T_{h,in}-T_{h,out}
]
[
y_o=\sigma\left[\beta_{0,o,g}+\sum_i\beta_iH_i^*+\sum_{i<j}\beta_{ij}H_i^*H_j^*+\beta_{Ca}S_{Ca}+\beta_RS_{ROS}+\beta_MM^*\right]
]

## Chuỗi tích hợp
[
\boxed{soil\rightarrow root\rightarrow xylem\rightarrow leaf\rightarrow photosynthesis\rightarrow phloem\rightarrow source\text{-}sink\rightarrow biomass\rightarrow yield}
]

---

# Chương 5. Cảm nhận carbon – đường – năng lượng và điều khiển sinh trưởng

## 5.1. Vai trò của sugar sensing
Sucrose, glucose và trehalose-6-phosphate (T6P) không chỉ là chất chuyển hóa mà còn là tín hiệu trạng thái carbon.

## 5.2. Trục SnRK1–TOR
Ở trạng thái thiếu carbon/năng lượng, SnRK1 ưu tiên bảo toàn và huy động dự trữ; TOR thúc đẩy sinh tổng hợp và tăng trưởng khi carbon, dinh dưỡng và năng lượng đủ.

Khung trạng thái đề xuất:
\[
S_C=\frac{C_{sugar}}{K_C+C_{sugar}},\qquad
S_E=\frac{ATP}{K_E+ATP}
\]

Một biểu diễn giảm lược:
\[
A_{TOR}=\sigma(\beta_0+\beta_CS_C+\beta_NS_N+\beta_ES_E-\beta_SS_{stress})
\]

\[
A_{SnRK1}=\sigma(\gamma_0-\gamma_CS_C-\gamma_ES_E+\gamma_SS_{stress})
\]

Hai phương trình trên là **mô hình VECrop đề xuất**, không phải hằng số sinh học phổ quát.

## 5.3. Ghép với source–sink
\[
SS_o^{eff}=SS_o\,F_{sugar,o}\,F_{energy,o}\,F_{stage,o}
\]

Trong đó sink strength không chỉ phụ thuộc kích thước sink mà còn phụ thuộc khả năng sử dụng carbon.

## 5.4. T6P và sucrose
T6P thường phản ánh trạng thái sucrose và có vai trò điều phối tăng trưởng, phân bổ carbon và phát triển. VECrop nên giữ T6P như biến tín hiệu, không đồng nhất với lượng carbon dự trữ.

## 5.5. Điểm tích hợp
\[
Carbon\ status \rightarrow T6P/SnRK1/TOR \rightarrow gene\ expression \rightarrow growth\ capacity
\]

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
\[
RLD(z)=RLD_0e^{-k_z z}
\]
chỉ là dạng thực nghiệm, phải hiệu chỉnh theo cây và đất.

## 6.2. Hấp thu theo phân bố rễ
\[
U_i=\int_0^{Z_r}A_r(z)\,J_i(z)\,dz
\]

## 6.3. Rhizosphere
Vùng rễ làm thay đổi:
- pH;
- redox;
- exudates;
- enzyme;
- microbial activity;
- nutrient speciation.

Có thể mô tả khuếch tán–phản ứng:
\[
\frac{\partial C_i}{\partial t}
=
D_{eff,i}\nabla^2C_i
-
R_{uptake,i}
+
R_{min,i}
-
R_{immob,i}
\]

## 6.4. Exudation
\[
J_{exu}=f(C_{status},P_{status},root\ age,stress)
\]

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
\[
R_{microbe,i}=k_{mic,i}M_{microbe}f(T,\theta,pH,C)
\]

## 6.6. Mycorrhiza
Có thể biểu diễn uptake song song:
\[
U_P=U_{P,root}+U_{P,myc}
\]

và chi phí carbon:
\[
C_{cost,myc}=f(U_{P,myc},colonization)
\]

## 6.7. Khác biệt cây trồng
- Lúa: aerenchyma, radial oxygen loss, flooded rhizosphere.
- Ngô: deep rooting, architecture strongly linked to drought/N capture.
- Xà lách: shallow root system, high sensitivity to root-zone oxygen and temperature.

---

# Chương 7. Quang hợp lá – thích nghi – bức xạ tán cây – C3/C4

## 7.1. C3 photosynthesis
Cho lúa và xà lách, dùng nền Farquhar–von Caemmerer–Berry:
\[
A_n=\min(A_c,A_j,A_p)-R_d
\]

\[
A_c=V_{cmax}\frac{C_c-\Gamma^*}{C_c+K_c(1+O/K_o)}
\]

\[
A_j=J\frac{C_c-\Gamma^*}{4(C_c+2\Gamma^*)}
\]

## 7.2. C4 photosynthesis
Ngô phải có module riêng:
\[
V_p=V_{pmax}\frac{C_m}{C_m+K_p}
\]

và tách mesophyll–bundle sheath khi dùng mô hình cơ chế đầy đủ.

## 7.3. Electron transport và ánh sáng
Một dạng non-rectangular hyperbola:
\[
\theta J^2-(\alpha I+J_{max})J+\alpha I J_{max}=0
\]

## 7.4. Acclimation
\(V_{cmax}\), \(J_{max}\), respiration và leaf N có thể acclimate với nhiệt độ, ánh sáng, CO₂ và tuổi lá; không nên giữ cố định cả vụ.

## 7.5. Tán cây
Beer–Lambert:
\[
I(L)=I_0e^{-k_LL}
\]

\[
A_{can}=\int_0^{LAI}A_n(L)\,dL
\]

Khuyến nghị tách sunlit/shaded leaves khi cần độ chính xác cao hơn.

## 7.6. Leaf nitrogen
Leaf N quyết định mạnh năng lực quang hợp:
\[
V_{cmax}=f(N_{leaf},age,T)
\]

nhưng quan hệ phải hiệu chỉnh theo loài/giống.

## 7.7. Photoinhibition
Cần module bảo vệ quang hóa khi PPFD và nhiệt cao:
\[
D_{PSII}=f(I,T,ROS,repair)
\]

## 7.8. Khác biệt cây trồng
- Lúa: C3, canopy erectness/LAI và N profile quan trọng.
- Ngô: C4; không được dùng FvCB C3 nguyên xi.
- Xà lách: C3, canopy thấp, self-shading và tipburn liên hệ mạnh với transpiration/Ca.

---

# Chương 8. Phenology – meristem – sinh trưởng cơ quan – sinh sản – già hóa

## 8.1. Thermal time
\[
TT=\sum_d\max(0,T_{mean,d}-T_b)
\]

Dạng này chỉ là khung; nhiệt độ nền và ngưỡng phải theo loài/giai đoạn.

## 8.2. Photoperiod và vernalization
Có thể viết:
\[
D_{dev}=f(TT,Photoperiod,Vernalization,genotype)
\]

Lúa và ngô có đáp ứng quang chu kỳ theo giống; xà lách liên quan bolting và nhiệt độ.

## 8.3. Meristem, cell division và expansion
Tăng trưởng cơ quan:
\[
\frac{dB_o}{dt}=N_{cell,o}\,\frac{dm_{cell,o}}{dt}
+
m_{cell,o}\,\frac{dN_{cell,o}}{dt}
\]

Đây là phân rã khái niệm giúp tách cell division khỏi cell expansion.

## 8.4. Sink capacity
\[
SS_o=M_oq_o
\]

với \(M_o\) là sink size/capacity và \(q_o\) là sink activity.

## 8.5. Reproductive development
Cần tách:
- floral initiation;
- anthesis;
- fertilization;
- grain/seed set;
- grain filling.

## 8.6. Grain filling
Một dạng logistic:
\[
W_g(t)=\frac{W_{max}}{1+\exp[-k(t-t_{50})]}
\]

hoặc dùng supply–demand balance:
\[
\frac{dC_g}{dt}=\min(Supply_C,Demand_C)-R_g
\]

## 8.7. Senescence
\[
\frac{dM_{leaf}^{green}}{dt}
=
Growth-Senescence
\]

Senescence chịu điều hòa bởi tuổi, N, sugar status, hormone và stress.

## 8.8. Remobilization
\[
F_{rem,i,o}=k_{rem,i,o}(t)M_{i,o}^{mob}
\]

Phải phân biệt apparent remobilization với tracer-confirmed remobilization.

## 8.9. Harvest index
\[
HI_{harvest}=\frac{Y_{economic}}{B_{shoot}}
\]

Không nhầm với health index.

---

# Chương 9. Stress đơn và stress kết hợp

## 9.1. Nguyên tắc
Cây ngoài đồng thường chịu nhiều stress đồng thời. Không giả định:
\[
Response(A+B)=Response(A)\times Response(B)
\]

nếu chưa kiểm định.

## 9.2. Drought
Các cơ chế:
- \(\Psi_{soil}\downarrow\);
- \(K_{root}\downarrow\);
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
\[
O_2\downarrow\rightarrow ATP\downarrow\rightarrow active\ transport\downarrow
\]

Lúa có aerenchyma thích nghi tốt hơn ngô và xà lách trong nhiều bối cảnh.

## 9.6. Salinity
Cần tách:
\[
osmotic\ stress
\]
và:
\[
ion\ toxicity/imbalance
\]

Không dùng EC như đại diện trực tiếp cho Na⁺.

## 9.7. Nutrient stress
Thiếu N/P/K/micronutrient có pathway khác nhau; không gộp vào một NUE factor.

## 9.8. Stress interaction
Một mô hình tương tác:
\[
R=R_0+\beta_AA+\beta_BB+\beta_{AB}AB
\]

\(\beta_{AB}\) phải ước lượng từ dữ liệu.

## 9.9. Pest/disease coupling
VECrop chỉ nên mô hình mức physiological coupling ban đầu:
\[
A_{can}^{eff}=A_{can}(1-D_{leaf})
\]
\[
Sink^{eff}=Sink(1-D_{organ})
\]
với damage fraction được đưa từ module bệnh/sâu riêng.

---

# Chương 10. Genotype × Environment × Management, hiệu chỉnh và bất định

## 10.1. G×E×M
\[
Y=f(G,E,M,G\times E,G\times M,E\times M)
\]

Không chuyển tham số giữa giống nếu chưa kiểm định.

## 10.2. Calibration
\[
\hat{\theta}
=
\arg\min_{\theta}
\sum_t w_t[y_{obs}(t)-y_{sim}(t;\theta)]^2
\]

## 10.3. Identifiability
Phân biệt:
- structural identifiability;
- practical identifiability;
- parameter correlation.

## 10.4. Sensitivity analysis
Local:
\[
S_i=\frac{\partial Y}{\partial \theta_i}
\]

Global: Morris, Sobol hoặc phương pháp tương đương khi mô hình phức tạp.

## 10.5. Validation
Tách dữ liệu:
- calibration;
- validation;
- external validation.

Không đánh giá trên cùng bộ dữ liệu dùng để fit.

## 10.6. Metrics
\[
RMSE=\sqrt{\frac1n\sum(y-\hat y)^2}
\]

\[
MAE=\frac1n\sum|y-\hat y|
\]

Có thể bổ sung bias, \(R^2\), NSE hoặc likelihood tùy bài toán.

## 10.7. Uncertainty
\[
p(\theta|y)\propto p(y|\theta)p(\theta)
\]

Bayesian inference hữu ích khi cần posterior uncertainty.

## 10.8. Data assimilation
State-space:
\[
x_{t+1}=f(x_t,u_t,\theta)+\omega_t
\]

\[
y_t=h(x_t)+\nu_t
\]

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
\[
Phenology,\ LAI,\ Root,\ Photosynthesis,\ NutrientDemand,\ SinkDemand,\ Yield
\]

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
Không phải thí nghiệm năng suất nào cũng nhận dạng được \(K_m,V_{max},K_h,V_{cmax}\). Phải thiết kế thí nghiệm theo tham số cần ước lượng.

## 12.3. Multi-objective management
\[
\max_{\mathbf u}
\left[
Y,\ Profit,\ WUE,\ NUE
\right]
\]

đồng thời:
\[
\min_{\mathbf u}
\left[
WaterUse,\ NLoss,\ Energy,\ Risk
\right]
\]

## 12.4. Profit
\[
\Pi=P_YY-C_{fert}-C_{water}-C_{energy}-C_{labor}-C_{other}
\]

## 12.5. Constraints
\[
u_{min}\le u_t\le u_{max}
\]

và các ràng buộc sinh học/môi trường.

## 12.6. Model predictive management
Ở mức nâng cao:
\[
u_t^*
=
\arg\max_{u_{t:t+H}}
J(x_t,u,\hat W)
\]

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

## Phụ lục nguồn kiểm định khoảng trống học thuật

Xem `references/consensus-gap-review.md` để theo dõi báo cáo rà soát bằng chứng về các phần còn thiếu và nguồn học thuật liên quan.

## Trạng thái khoa học

- Các phương trình vật lý/sinh lý nền tảng được dùng theo tài liệu chuyên ngành.
- Các hàm tổng hợp, trọng số, logistic, response function và cấu trúc HSY/VECrop là **mô hình đề xuất** nếu chưa có nguồn trực tiếp hoặc chưa được hiệu chỉnh.
- Không dùng tham số từ một nghiên cứu như hằng số phổ quát cho mọi loài/giống/môi trường.
- Không đếm lặp cùng một stress ở nhiều tầng nếu cơ chế đã được giải trực tiếp.
