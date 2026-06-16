---
title: "Vehicle Detection in Low-Visibility CCTV"
category: "Computer Vision"
summary: "Optimized YOLOv11 for vehicle detection in adverse conditions (rain, fog, low-light). First-author IEEE publication at ICSINTESA 2025 with mAP@0.5 of 0.896 and 122 FPS real-time inference."
featured: true
order: 2
status: "completed"
problem: |
  Traffic surveillance systems degrade severely in adverse weather and low-light conditions. Existing models are typically benchmarked on clean, well-lit data—not the noisy, blurry reality of CCTV footage in rain, fog, or at night. A robust detector optimized specifically for these conditions is needed for reliable intelligent transportation systems.
approach: |
  Conducted a systematic three-scenario experiment using YOLOv11: first tuning batch size (8, 16, 32), then image resolution (228, 448, 640), and finally optimizer choice (AdamW, SGD, Adam, NAdam, RAdam, RMSProp). Each stage carried forward the best configuration. The custom dataset consisted of 1,070 CCTV images from Yogyakarta intersections and Indonesian toll roads—augmented to 2,570 via flipping, hue shifts, brightness adjustments, blurring, and noise injection to simulate adverse conditions.
results: |
  - Optimal configuration: batch size 16, resolution 640x640, AdamW optimizer.
  - mAP@0.5: 0.896, mAP@0.5-0.95: 0.678.
  - Real-time inference at 122 FPS (8.2 ms/img) on NVIDIA RTX 4090.
  - Published at ICSINTESA 2025 (IEEE) as first author.
role: "First author — dataset curation, experiment design, model training, evaluation, and paper writing. Co-authors: William Eka Chandra, Rafi Andhika Putra Pratama, Felix Corputty."
stack:
  - "YOLOv11"
  - "PyTorch"
  - "OpenCV"
  - "Python"
links:
  github: "#"
  paper: "#"
---

## Model Performance

| Metric | Value |
|---|---|
| mAP@0.5 | **0.896** |
| mAP@0.5-0.95 | **0.678** |
| FPS | **122** (8.2 ms/img) |
| GPU | NVIDIA RTX 4090 |

## Experimental Design

Three sequential scenarios, each carrying forward the best configuration:

| Scenario | Parameter | Values Tested | Best |
|---|---|---|---|
| 1 | Batch Size | 8, 16, 32 | **16** |
| 2 | Image Resolution | 228, 448, 640 | **640×640** |
| 3 | Optimizer | AdamW, SGD, Adam, NAdam, RAdam, RMSProp | **AdamW** |

Dataset: 1,070 raw images → 2,570 augmented (88% train, 8% val, 4% test). Three vehicle classes: car, bus, truck.

## Publication

- **Title:** Optimizing YOLOv11 for Vehicle Detection in Low-Visibility CCTV Footage
- **Venue:** ICSINTESA 2025 — 5th International Conference of Science and Information Technology in Smart Administration
- **Publisher:** IEEE
- **Year:** 2025
- **Role:** First Author
