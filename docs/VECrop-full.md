# VECrop — Bản gộp Chương 1 đến 4.12

> Tài liệu tổng hợp từ các chương hiện có trong repository. Các file chương riêng vẫn được giữ để tiện chỉnh sửa và kiểm soát phiên bản.

---

# Chương 1. Cơ sở sinh lý và toán học của hấp thu dinh dưỡng trong VECrop

## 1.1. Mục tiêu và phạm vi

Chương này thiết lập nền tảng sinh lý học, vật lý và toán học cho VECrop. Mục tiêu không phải tạo ra một “định luật mới” thay thế sinh lý thực vật hiện có, mà xây dựng một **khung tích hợp có thể kiểm định** để nối các quá trình:

<div class="vecrop-math-display">
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
</div>

VECrop phân biệt ba cấp:

1. **Phương trình cơ chế**: dựa trên bảo toàn vật chất, nhiệt động học, thủy lực, động học enzyme/transport và sinh lý cây.
2. **Phương trình thực nghiệm**: dùng để mô tả một quan hệ quan sát được khi chưa đủ dữ liệu cho mô hình cơ chế.
3. **Chỉ số tổng hợp VECrop/HSY**: chỉ dùng sau khi các biến đã được chuẩn hóa và không được phép đếm lặp một stress đã được mô hình hóa trực tiếp.

Nguyên tắc xuyên suốt:

<div class="vecrop-math-display">
\[
\boxed{
\text{không bịa tham số}
\quad+\quad
\text{không trộn đơn vị}
\quad+\quad
\text{không gọi giả thuyết là định luật}
}
\]
</div>

---

## 1.2. Đối tượng của mô hình: hệ đất – rễ – cây – khí quyển

Một cây không thể được mô hình hóa độc lập với môi trường. VECrop xem cây là một hệ mở trao đổi vật chất và năng lượng với đất hoặc dung dịch dinh dưỡng, khí quyển, bức xạ, vi sinh vật vùng rễ và hệ quản lý canh tác.

Ta định nghĩa vector trạng thái môi trường:

<div class="vecrop-math-display">
\[
\boxed{
\mathbf X_{env}
=
[
EC,\ pH,\ \theta,\ pF,\ \Psi_{soil},\ T,\ I,\ CO_2,\ O_2,\ Eh,\ N,\ P,\ K,\ldots
]^T
}
\]
</div>

Trong đó <span class="vecrop-math-inline">\(EC\)</span> là độ dẫn điện; <span class="vecrop-math-inline">\(pH\)</span> là trạng thái acid–base; <span class="vecrop-math-inline">\(\theta\)</span> là hàm lượng nước thể tích của đất; <span class="vecrop-math-inline">\(pF\)</span> là logarit của độ lớn cột áp nước; <span class="vecrop-math-inline">\(\Psi_{soil}\)</span> là thế nước đất; <span class="vecrop-math-inline">\(T\)</span> là nhiệt độ; <span class="vecrop-math-inline">\(I\)</span> là bức xạ/PPFD; <span class="vecrop-math-inline">\(CO_2\)</span> là CO₂; <span class="vecrop-math-inline">\(O_2\)</span> là oxy vùng rễ; <span class="vecrop-math-inline">\(Eh\)</span> là thế oxy hóa–khử.

Không nên dùng một biến tổng quát như “độ màu mỡ đất” nếu mục tiêu là mô hình cơ chế. Mỗi biến phải có đơn vị, phương pháp đo và miền áp dụng rõ ràng.

---

## 1.3. Bảo toàn vật chất là ràng buộc cấp cao nhất

Đối với một chất <span class="vecrop-math-inline">\(i\)</span> trong một thể tích kiểm soát:

<div class="vecrop-math-display">
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
</div>

Trong đó <span class="vecrop-math-inline">\(M_i\)</span> là lượng chất đang lưu trữ; <span class="vecrop-math-inline">\(F_{i,in}\)</span> và <span class="vecrop-math-inline">\(F_{i,out}\)</span> là các dòng vào/ra; <span class="vecrop-math-inline">\(P_i\)</span> và <span class="vecrop-math-inline">\(C_i\)</span> là sản sinh/tiêu thụ nội tại.

Đối với nguyên tố khoáng như N, P, K trong toàn cây:

<div class="vecrop-math-display">
\[
\boxed{
\frac{dM_i}{dt}
=
U_i-L_i
}
\]
</div>

Tái phân bố N từ lá sang hạt không phải là mất N khỏi cây, mà chỉ là dòng nội bộ.

Carbon khác N–P–K vì nguồn carbon mới chủ yếu đến từ CO₂:

<div class="vecrop-math-display">
\[
CO_2\rightarrow photosynthesis
\]
</div>

và:

<div class="vecrop-math-display">
\[
\boxed{
\frac{dM_C}{dt}
=
A_C-R-L_C
}
\]
</div>

---

## 1.4. Phân biệt lượng, nồng độ, hoạt độ và thông lượng

Lượng chất:

<div class="vecrop-math-display">
\[
M_i
\]
</div>

Nồng độ:

<div class="vecrop-math-display">
\[
\boxed{
C_i=\frac{M_i}{V}
}
\]
</div>

Hoạt độ:

<div class="vecrop-math-display">
\[
\boxed{
a_i=\gamma_iC_i
}
\]
</div>

Thông lượng:

<div class="vecrop-math-display">
\[
\boxed{
J_i
=
\frac{\text{lượng chất}}
{\text{diện tích}\times \text{thời gian}}
}
\]
</div>

Không được cộng trực tiếp các đại lượng có bản chất và đơn vị khác nhau.

---

## 1.5. Nước: thế nước là biến động lực cơ bản

Thế nước tổng:

<div class="vecrop-math-display">
\[
\boxed{
\Psi_w=\Psi_p+\Psi_s+\Psi_m+\Psi_g
}
\]
</div>

Trong đó <span class="vecrop-math-inline">\(\Psi_p\)</span> là thế áp suất, <span class="vecrop-math-inline">\(\Psi_s\)</span> thế thẩm thấu, <span class="vecrop-math-inline">\(\Psi_m\)</span> thế ma trận và <span class="vecrop-math-inline">\(\Psi_g\)</span> thế trọng trường.

Dòng nước:

<div class="vecrop-math-display">
\[
\boxed{
\vec J_w=-K_h\nabla\Psi_w
}
\]
</div>

Ở dạng hai nút:

<div class="vecrop-math-display">
\[
\boxed{
Q_w=K(\Psi_1-\Psi_2)
}
\]
</div>

VECrop không sử dụng “lực hướng lên” tổng hợp gồm transpiration + hormone + root pressure. Hormone là biến điều hòa; dòng nước phải được mô tả bằng gradient thế nước và độ dẫn thủy lực.

Trong trạng thái cây đang thoát hơi thường có:

<div class="vecrop-math-display">
\[
\boxed{
\Psi_{soil}>\Psi_{root}>\Psi_{stem}>\Psi_{leaf}
}
\]
</div>

theo nghĩa các giá trị trở nên âm hơn về phía lá.

---

## 1.6. pF và quan hệ nước đất

pF:

<div class="vecrop-math-display">
\[
\boxed{
pF=\log_{10}|h|
}
\]
</div>

trong đó <span class="vecrop-math-inline">\(h\)</span> là pressure head theo cm nước.

Một mô hình giữ nước đất kinh điển là van Genuchten:

<div class="vecrop-math-display">
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
</div>

thường với:

<div class="vecrop-math-display">
\[
m=1-\frac1n
\]
</div>

Các tham số phải được hiệu chỉnh theo đất, không dùng một bộ chung cho mọi loại đất.

---

## 1.7. Dinh dưỡng khoáng: tổng lượng không bằng lượng cây có thể hấp thu

Tổng N, P hoặc K trong đất không đồng nghĩa với lượng cây có thể hấp thu.

<div class="vecrop-math-display">
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
</div>

Tính khả dụng phụ thuộc hóa học đất, pH, nước, Eh, vi sinh vật, cấu trúc rễ, exudate, khuếch tán và dòng khối.

Một dạng dòng ion trong đất:

<div class="vecrop-math-display">
\[
\boxed{
J_i^{soil}
=
q_wC_i
-
D_{eff,i}\nabla C_i
}
\]
</div>

Trong đó <span class="vecrop-math-inline">\(q_wC_i\)</span> biểu diễn mass flow và thành phần khuếch tán biểu diễn diffusion.

---

## 1.8. Từ bề mặt rễ đến màng tế bào

Chuỗi:

<div class="vecrop-math-display">
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
</div>

Màng sinh chất là hàng rào chọn lọc. Ion đi qua nhờ channel, carrier, symporter, antiporter hoặc pump trực tiếp/gián tiếp.

---

## 1.9. Thế điện hóa và động lực vận chuyển ion

<div class="vecrop-math-display">
\[
\boxed{
\widetilde\mu_i
=
\mu_i^0+RT\ln a_i+z_iF\psi
}
\]
</div>

Chênh lệch qua màng:

<div class="vecrop-math-display">
\[
\boxed{
\Delta\widetilde\mu_i
=
RT\ln\frac{a_{i,in}}{a_{i,out}}
+
z_iF(\psi_{in}-\psi_{out})
}
\]
</div>

Điện thế Nernst:

<div class="vecrop-math-display">
\[
\boxed{
E_i
=
\frac{RT}{z_iF}
\ln\frac{a_{i,out}}{a_{i,in}}
}
\]
</div>

Vì vậy dòng ion không thể được xác định chỉ bằng nồng độ ngoài rễ.

---

## 1.10. H⁺-ATPase và năng lượng hấp thu dinh dưỡng

H⁺-ATPase màng sinh chất sử dụng ATP để bơm proton và tạo gradient pH, điện thế màng và proton-motive force.

<div class="vecrop-math-display">
\[
\boxed{
\Delta p
=
\Delta\psi
-
\frac{2.303RT}{F}\Delta pH
}
\]
</div>

Điểm bắt buộc:

<div class="vecrop-math-display">
\[
\boxed{
H^+\text{-ATPase không bơm nước trực tiếp}
}
\]
</div>

---

## 1.11. Động học hấp thu ion

Khi transporter có động học bão hòa:

<div class="vecrop-math-display">
\[
\boxed{
J_i
=
V_{\max,i}
\frac{C_i}{K_{m,i}+C_i}
}
\]
</div>

Nhiều ion có thể có hệ hấp thu ái lực cao và thấp:

<div class="vecrop-math-display">
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
</div>

với:

<div class="vecrop-math-display">
\[
J_{HATS,i}
=
V_{\max,H}
\frac{C_i}{K_{m,H}+C_i}
\]
</div>

và có thể gần đúng:

<div class="vecrop-math-display">
\[
J_{LATS,i}\approx k_LC_i
\]
</div>

khi dữ liệu phù hợp.

<span class="vecrop-math-inline">\(V_{\max}\)</span> và <span class="vecrop-math-inline">\(K_m\)</span> phụ thuộc loài, giống, tuổi rễ, vị trí rễ, tình trạng dinh dưỡng, pH, nhiệt độ, oxy và transporter.

---

## 1.12. Phân biệt EC và nồng độ từng ion

<div class="vecrop-math-display">
\[
\boxed{
EC\neq C_N,\quad EC\neq C_P,\quad EC\neq C_K
}
\]
</div>

Hai dung dịch có cùng EC vẫn có thể có thành phần ion khác nhau.

Trong VECrop:

<div class="vecrop-math-display">
\[
\boxed{
EC\rightarrow \text{trạng thái ion tổng và môi trường thẩm thấu}
}
\]
</div>

còn:

<div class="vecrop-math-display">
\[
\boxed{
C_i\rightarrow \text{uptake của ion }i
}
\]
</div>

Thế thẩm thấu gần đúng:

<div class="vecrop-math-display">
\[
\boxed{
\Psi_s\simeq -RT\sum_i\phi_iC_i
}
\]
</div>

---

## 1.13. Vai trò của pH

pH ảnh hưởng hấp thu khoáng qua thay đổi dạng hóa học, sorption/precipitation và proton gradient.

Do đó không nên dùng một <span class="vecrop-math-inline">\(F_{pH}\)</span> duy nhất cho mọi nguyên tố:

<div class="vecrop-math-display">
\[
\boxed{
J_i=J_i(C_i)F_{pH,i}
}
\]
</div>

với:

<div class="vecrop-math-display">
\[
F_{pH,N}\neq F_{pH,P}\neq F_{pH,K}
\]
</div>

Nếu đã giải trực tiếp speciation và proton-coupled transport thì không cần nhân thêm <span class="vecrop-math-inline">\(F_{pH}\)</span> tổng quát.

---

## 1.14. Nhiệt độ

Nhiệt độ ảnh hưởng độ nhớt nước, khuếch tán, enzyme, respiration, membrane fluidity, transporter và sinh trưởng.

Một dạng Arrhenius:

<div class="vecrop-math-display">
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
</div>

Đối với maintenance respiration:

<div class="vecrop-math-display">
\[
\boxed{
R_M(T)
=
R_{M,ref}
Q_{10}^{(T-T_{ref})/10}
}
\]
</div>

nhưng <span class="vecrop-math-inline">\(Q_{10}\)</span> phải được hiệu chỉnh.

---

## 1.15. Oxy vùng rễ

<div class="vecrop-math-display">
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
</div>

Một dạng:

<div class="vecrop-math-display">
\[
\boxed{
R_{O_2}
=
R_{O_2,\max}
\frac{C_{O_2}}{K_{O_2}+C_{O_2}}
}
\]
</div>

Chỉ số cung–cầu năng lượng:

<div class="vecrop-math-display">
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
</div>

và:

<div class="vecrop-math-display">
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
</div>

---

## 1.16. Liebig và Shelford trong VECrop

Dạng giới hạn tối giản:

<div class="vecrop-math-display">
\[
\boxed{
H_{Liebig}
=
\min(R_1,R_2,\ldots,R_m)
}
\]
</div>

Một response dạng Gaussian:

<div class="vecrop-math-display">
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
</div>

Một dạng VECrop đề xuất:

<div class="vecrop-math-display">
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
</div>

Đây là cấu trúc đề xuất, không phải một định luật mới.

---

## 1.17. Chuẩn hóa biến sinh học

Không được cộng trực tiếp:

<div class="vecrop-math-display">
\[
EC+pH+T+N
\]
</div>

Phải chuyển thành chỉ số không thứ nguyên.

Min–max:

<div class="vecrop-math-display">
\[
\boxed{
x^*
=
\frac{x-x_{\min}}{x_{\max}-x_{\min}}
}
\]
</div>

Sigmoid:

<div class="vecrop-math-display">
\[
\boxed{
x^*
=
\frac{1}{1+\exp[-k(x-x_{50})]}
}
\]
</div>

Optimum response:

<div class="vecrop-math-display">
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
</div>

Việc chọn hàm phải dựa trên sinh lý và dữ liệu.

---

## 1.18. Khái niệm HSY trong VECrop

HSY được giữ như một **khung tổng hợp trạng thái sinh học**, không phải đơn vị năng lượng, không phải lực, và không phải hệ số năng suất phổ quát.

<div class="vecrop-math-display">
\[
\Phi_1=\text{structure / vascular integrity}
\]
</div>

<div class="vecrop-math-display">
\[
\Phi_2=\text{gene–protein–enzyme–transport–energy}
\]
</div>

<div class="vecrop-math-display">
\[
\Phi_3=\text{hormone–Ca–ROS–MAPK–development}
\]
</div>

Một dạng chuẩn hóa:

<div class="vecrop-math-display">
\[
\boxed{
H_{cell}=w_1\Phi_1+w_2\Phi_2+w_3\Phi_3
}
\]
</div>

với:

<div class="vecrop-math-display">
\[
w_i\ge0,\qquad w_1+w_2+w_3=1
\]
</div>

và các <span class="vecrop-math-inline">\(\Phi_i\in[0,1]\)</span>.

---

## 1.19. Quá trình 1: cấu trúc

<span class="vecrop-math-inline">\(\Phi_1\)</span> có thể đại diện cellulose, hemicellulose, lignin, cấu trúc vách, độ toàn vẹn mạch, diện tích mạch, pit, mô dẫn và diện tích rễ hoạt động.

<div class="vecrop-math-display">
\[
\boxed{
\Phi_1=\sum_k w_{1k}S_k^*
}
\]
</div>

Nếu mô hình đã tính trực tiếp <span class="vecrop-math-inline">\(K_x\)</span> từ giải phẫu mạch, không đưa cùng đặc tính vào <span class="vecrop-math-inline">\(\Phi_1\)</span> rồi nhân lại vào <span class="vecrop-math-inline">\(K_x\)</span>.

---

## 1.20. Quá trình 2: gene – protein – enzyme – transporter – năng lượng

Ý tưởng ban đầu:

<div class="vecrop-math-display">
\[
(\vec A_4+\vec B_5+\vec C_6)=s(S_4+S_5-S_6)
\]
</div>

được chuẩn hóa:

<div class="vecrop-math-display">
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
</div>

với:

<div class="vecrop-math-display">
\[
\boxed{
s_i(Q)
=
\frac{1}
{1+\exp[-(\beta_{0i}+\sum_j\beta_{ji}Q_j^*)]}
}
\]
</div>

Một liên kết cơ chế:

<div class="vecrop-math-display">
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
</div>

Gene không tạo “lực”; nó điều chỉnh năng lực vận chuyển và chuyển hóa.

---

## 1.21. Quá trình 3: hormone và phát triển

Ý tưởng ban đầu:

<div class="vecrop-math-display">
\[
(\vec A_7+\vec B_8+\vec C_9)=y(S_7+S_8-S_9)
\]
</div>

được chuẩn hóa:

<div class="vecrop-math-display">
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
</div>

với:

<div class="vecrop-math-display">
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
</div>

Không được dùng một biểu thức cố định kiểu Auxin + GA + CK − ABA − Ethylene cho mọi cơ quan/giai đoạn.

---

## 1.22. Phân biệt Health Index với Harvest Index

Harvest Index:

<div class="vecrop-math-display">
\[
\boxed{
HI_{harvest}
=
\frac{Y_{economic}}{B_{aboveground}}
}
\]
</div>

Nếu cần chỉ số sức khỏe, khuyến nghị:

<div class="vecrop-math-display">
\[
\boxed{
H_{crop}
}
\]
</div>

để tránh trùng ký hiệu.

---

## 1.23. Không được nhân RUE × WUE × NUE trực tiếp

<div class="vecrop-math-display">
\[
RUE,\quad WUE,\quad NUE
\]
</div>

có đơn vị khác nhau.

Vì vậy:

<div class="vecrop-math-display">
\[
\boxed{
RUE\times WUE\times NUE
}
\]
</div>

không thể tự động trở thành một chỉ số hợp lệ.

Nếu muốn tích hợp, phải chuẩn hóa:

<div class="vecrop-math-display">
\[
RUE^*,WUE^*,NUE^*\in[0,1]
\]
</div>

và chỉ dùng nếu không đếm lặp cơ chế.

---

## 1.24. Mô hình cơ chế và mô hình rút gọn

Mô hình cơ chế:

<div class="vecrop-math-display">
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
</div>

Mô hình rút gọn có thể dùng:

<div class="vecrop-math-display">
\[
\boxed{
Y_{reduced}
=
Y_{pot}
C_D(D)
\overline{HSY}
}
\]
</div>

Điều bắt buộc:

<div class="vecrop-math-display">
\[
\boxed{
Y_{mechanistic}
\neq
Y_{mechanistic}\times HSY_{diag}
}
\]
</div>

nếu HSY đã chứa các stress đã được tính trực tiếp.

---

## 1.25. Mật độ cây và cạnh tranh

Một hàm chọn trước:

<div class="vecrop-math-display">
\[
\boxed{
Y(D)=\alpha D e^{-\beta D}
}
\]
</div>

cho:

<div class="vecrop-math-display">
\[
\boxed{
D_{opt}=\frac1\beta
}
\]
</div>

Đây chỉ là tính chất của hàm đã chọn.

Nếu <span class="vecrop-math-inline">\(HSY=HSY(D)\)</span>:

<div class="vecrop-math-display">
\[
\boxed{
\frac{d\ln Y}{dD}
=
\frac1D-\beta+\frac{\partial\ln HSY}{\partial D}=0
}
\]
</div>

---

## 1.26. Kiểm tra thứ nguyên bắt buộc

Mọi phương trình phải thỏa dimensional consistency.

Ví dụ:

<div class="vecrop-math-display">
\[
J_w=-K_h\nabla\Psi
\]
</div>

thì đơn vị <span class="vecrop-math-inline">\(K_h\)</span> phải làm cho vế phải có cùng đơn vị với <span class="vecrop-math-inline">\(J_w\)</span>.

Biểu thức:

<div class="vecrop-math-display">
\[
v=|G|+HSY
\]
</div>

không hợp lệ nếu <span class="vecrop-math-inline">\(v\)</span>, <span class="vecrop-math-inline">\(G\)</span> và HSY không cùng đơn vị.

Nếu HSY điều chỉnh vận tốc:

<div class="vecrop-math-display">
\[
\boxed{
v=v_0HSY
}
\]
</div>

hoặc:

<div class="vecrop-math-display">
\[
\boxed{
J=J_0HSY
}
\]
</div>

với điều kiện được kiểm định.

---

## 1.27. Tổng và tích phân

Nếu cây được chia thành lớp rời rạc:

<div class="vecrop-math-display">
\[
\boxed{
\sum_{i=1}^{n}F_i
}
\]
</div>

Nếu theo chiều cao liên tục:

<div class="vecrop-math-display">
\[
\boxed{
\int_0^H F(z)\,dz
}
\]
</div>

Theo không gian và thời gian:

<div class="vecrop-math-display">
\[
\boxed{
\int_0^T\int_0^H F(z,t)\,dz\,dt
}
\]
</div>

Không dùng triple integral chỉ để biểu thị “nhiều tầng” khi không có ba biến tích phân độc lập.

---

## 1.28. Khung đa tầng VECrop

### Lớp 1 — môi trường/rhizosphere
<div class="vecrop-math-display">
\[
\mathbf X_{env}
\]
</div>

### Lớp 2 — tế bào và trao đổi chất
<div class="vecrop-math-display">
\[
H_{cell}
\]
</div>

### Lớp 3 — thủy lực và mạch dẫn
<div class="vecrop-math-display">
\[
J_w,\ K_{root},K_x,\Psi
\]
</div>

### Lớp 4 — quần thể và mật độ
<div class="vecrop-math-display">
\[
D,\ LAI,\ competition
\]
</div>

### Lớp 5 — quang hợp, source–sink và sinh khối
<div class="vecrop-math-display">
\[
A_n,\ A_{can},F_C,B,Y
\]
</div>

### Lớp 6 — quản lý, năng lượng và kinh tế

<div class="vecrop-math-display">
\[
\boxed{
\mathbf u
=
\{N,P,K,irrigation,D,S,light,CO_2,\ldots\}
}
\]
</div>

<div class="vecrop-math-display">
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
</div>

---

## 1.29. Cấu trúc phương trình tổng hợp cấp cao

<div class="vecrop-math-display">
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
</div>

Đây là xương sống của toàn bộ VECrop.

---

## 1.30. HSY ở cấp chẩn đoán

<div class="vecrop-math-display">
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
</div>

với:

<div class="vecrop-math-display">
\[
0\le H_j\le1
\]
</div>

Các trọng số phải được hiệu chỉnh hoặc ước lượng từ dữ liệu.

---

## 1.31. Nhận dạng tham số

<div class="vecrop-math-display">
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
</div>

Một bài toán hiệu chỉnh:

<div class="vecrop-math-display">
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
</div>

Nếu nhiều tham số cho đầu ra gần như giống nhau, mô hình gặp parameter non-identifiability.

---

## 1.32. Độ bất định

<div class="vecrop-math-display">
\[
Y=f(\mathbf X,\boldsymbol\theta)
\]
</div>

Bất định đến từ cảm biến, đất, tham số, cấu trúc mô hình, giống và thời tiết.

Monte Carlo:

<div class="vecrop-math-display">
\[
\boxed{
\mathbf X^{(k)},\boldsymbol\theta^{(k)}
\rightarrow
Y^{(k)}
}
\]
</div>

Nên báo cáo median, quantiles hoặc confidence/credible interval thay vì chỉ một giá trị.

---

## 1.33. Kiểm định cân bằng

Nước:

<div class="vecrop-math-display">
\[
\boxed{
Water_{in}-Water_{out}-\Delta Storage\approx0
}
\]
</div>

Nitrogen:

<div class="vecrop-math-display">
\[
\boxed{
N_{uptake}-N_{loss}-\Delta N_{plant}\approx0
}
\]
</div>

Carbon:

<div class="vecrop-math-display">
\[
\boxed{
C_{assimilation}-C_{respiration}-\Delta C_{biomass}\approx0
}
\]
</div>

Nếu sai số cân bằng lớn, không nên diễn giải đầu ra năng suất.

---

## 1.34. Các mức dữ liệu

### Cấp A — dữ liệu trực tiếp
EC, pH, soil water, leaf water potential, gas exchange, biomass, tissue N/P/K.

### Cấp B — tham số suy ra
<span class="vecrop-math-inline">\(K_h\)</span>, <span class="vecrop-math-inline">\(V_{\max}\)</span>, <span class="vecrop-math-inline">\(K_m\)</span>, <span class="vecrop-math-inline">\(V_{cmax}\)</span>, <span class="vecrop-math-inline">\(J_{max}\)</span>.

### Cấp C — chỉ số tổng hợp
<span class="vecrop-math-inline">\(H_{env}\)</span>, <span class="vecrop-math-inline">\(H_{cell}\)</span>, <span class="vecrop-math-inline">\(HSY_{diag}\)</span>.

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
- cấu trúc <span class="vecrop-math-inline">\(\Phi_1,\Phi_2,\Phi_3\)</span>;
- <span class="vecrop-math-inline">\(H_{cell}=w_1\Phi_1+w_2\Phi_2+w_3\Phi_3\)</span>;
- cách dùng <span class="vecrop-math-inline">\(HSY_{diag}\)</span>;
- kết hợp các response factor;
- các hàm logistic cho <span class="vecrop-math-inline">\(s_i\)</span> và <span class="vecrop-math-inline">\(y_o\)</span> khi chưa có dữ liệu trực tiếp.

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
- “N, P, K dùng chung một <span class="vecrop-math-inline">\(K_m\)</span>”.
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

<div class="vecrop-math-display">
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
</div>

Mọi bước phải tuân thủ:

<div class="vecrop-math-display">
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
</div>

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

## Ghi chú phiên bản

- Phạm vi: Chương 1 đến hết mục 4.12.
- Trạng thái khoa học: khung/mô hình đề xuất, chưa phải định luật hay lý thuyết đã được xác nhận.
- Nguyên tắc: không bịa tham số, không trộn đơn vị, không đếm stress hai lần, phân biệt rõ phương trình nền tảng với giả thuyết VECrop.
