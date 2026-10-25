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
