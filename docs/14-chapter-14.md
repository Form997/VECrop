# Chương 14. Quản lý nước – dinh dưỡng – nhà kính – thủy canh

## 14.1. Water balance

$$
\Delta S
=
P+I-ET-D-R
$$

Trong nhà kính, \(P\) có thể bằng 0 và cần tách irrigation, drainage, substrate storage.

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
