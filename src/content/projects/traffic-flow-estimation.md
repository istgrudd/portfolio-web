---
title: "Traffic Flow Estimation"
category: "Computer Vision"
summary: "Thesis extending vehicle detection to traffic flow estimation under low-visibility conditions in Yogyakarta."
featured: true
order: 3
status: "in-progress"
problem: |
  Traffic congestion in Yogyakarta is exacerbated by frequent low-visibility conditions (rain, fog). Current traffic monitoring lacks automated flow estimation that works reliably in these challenging conditions. Manual surveys per PKJI (Indonesian Highway Capacity Manual) standards are labor-intensive and infrequent.
approach: |
  Extending YOLOv11/v26 object detection with ByteTrack multi-object tracking to estimate vehicle trajectories. A SMP (Speed Measurement Point) flow estimation module computes traffic volume, speed, and density per PKJI standards. The system processes CCTV footage from Yogyakarta intersections.
results: |
  - Multi-object tracking pipeline integrated with YOLO detectors.
  - SMP module computes standard traffic flow metrics (volume, speed, density).
  - Evaluated on real CCTV footage under varied weather conditions.
  - _Thesis in progress — final results pending._
role: "Solo researcher — end-to-end pipeline design, model adaptation, tracking integration, PKJI-compliant flow estimation module."
stack:
  - "YOLOv11"
  - "YOLOv26"
  - "ByteTrack"
  - "PyTorch"
  - "OpenCV"
  - "Python"
links:
  github: "#"
---

## Pipeline

```text
CCTV Footage → YOLO Detection → ByteTrack Tracking → SMP Flow Estimation
                                                           ↓
                                              Volume · Speed · Density
                                                    (PKJI Standards)
```

## Approach

1. **Detection:** YOLOv11/v26 fine-tuned on Indonesian traffic dataset.
2. **Tracking:** ByteTrack assigns consistent IDs across frames.
3. **Flow Estimation:** SMP module aggregates per-lane vehicle counts, speeds, and densities per PKJI.
4. **Low-Visibility Handling:** Dataset includes rain/fog conditions; augmentation strategies applied.
