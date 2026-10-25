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
