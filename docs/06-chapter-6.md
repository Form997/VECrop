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
