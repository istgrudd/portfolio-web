---
title: "Traffic Flow Estimation"
category: "Computer Vision"
summary: "Thesis extending the IEEE paper's vehicle detection work to traffic flow estimation under low-visibility conditions using ByteTrack and PKJI standards."
featured: true
order: 5
status: "in-progress"
problem: |
  Traffic congestion is exacerbated by frequent low-visibility conditions (rain, fog). Current traffic monitoring lacks automated flow estimation that works reliably in these challenging conditions. Manual surveys per PKJI (Indonesian Highway Capacity Manual) standards are labor-intensive and infrequent.
approach: |
  Extending the YOLOv11 vehicle detection model from the ICSINTESA paper with ByteTrack multi-object tracking to estimate vehicle trajectories. A SMP (Speed Measurement Point) flow estimation module computes traffic volume, speed, and density per PKJI standards. The system processes CCTV footage under varied weather conditions.
results: |
  - Multi-object tracking pipeline integrated with YOLO detectors.
  - SMP module computes standard traffic flow metrics (volume, speed, density).
  - Evaluated on real CCTV footage under varied weather conditions.
  - Thesis in progress.
role: "Solo researcher — end-to-end pipeline design, model adaptation, tracking integration, PKJI-compliant flow estimation module."
stack:
  - "YOLOv11"
  - "ByteTrack"
  - "PyTorch"
  - "OpenCV"
  - "Python"
links:
  github: "#"
---

## Pipeline

```text
CCTV Footage → YOLOv11 Detection → ByteTrack Tracking → SMP Flow Estimation
                                                              ↓
                                                  Volume · Speed · Density
                                                        (PKJI Standards)
```

## Approach

1. **Detection:** YOLOv11 optimized for low-visibility (from IEEE paper).
2. **Tracking:** ByteTrack assigns consistent IDs across frames.
3. **Flow Estimation:** SMP module aggregates per-lane vehicle counts, speeds, and densities per PKJI.
4. **Low-Visibility Handling:** Dataset includes rain/fog conditions; augmentation strategies applied.
