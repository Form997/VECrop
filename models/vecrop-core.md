# VECrop Mechanistic Core

VECrop separates mechanism from diagnosis.

## Mechanistic path
[
Environment\rightarrow Root\rightarrow Xylem\rightarrow Leaf\rightarrow Carbon\rightarrow Phloem\rightarrow Sink\rightarrow Yield
]

## Diagnostic HSY
[
HSY_{diag}=\left[H_{env}^{w_1}H_{root}^{w_2}H_{xyl}^{w_3}H_{ion}^{w_4}H_E^{w_5}H_{redox}^{w_6}H_{photo}^{w_7}H_{sink}^{w_8}\right]^{1/\sum w_i}
]

Do not multiply `HSY_diag` again into mechanistic yield if the underlying stresses are already represented in the process equations.
