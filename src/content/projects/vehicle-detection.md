---
title: "Vehicle Detection & Classification"
category: "Computer Vision"
summary: "YOLOv11-based vehicle detection published as IEEE paper—first author contribution to traffic monitoring research."
featured: true
order: 2
status: "completed"
problem: |
  Traditional traffic monitoring systems rely on inductive loops and manual counting, which are expensive to deploy and maintain. A vision-based system could provide richer data at lower cost, but existing models struggle with varied vehicle types in Indonesian traffic conditions.
approach: |
  Trained YOLOv11 on a custom dataset of Indonesian traffic footage, covering multiple vehicle classes (motorcycles, cars, buses, trucks). Applied data augmentation, hyperparameter tuning, and evaluated against YOLOv8 baseline. Final model deployed as a real-time detection pipeline.
results: |
  - Published in IEEE Xplore as first author.
  - YOLOv11 achieved mAP@0.5 improvement over YOLOv8 baseline on the custom dataset.
  - Real-time inference at 30+ FPS on consumer GPU.
role: "First author — dataset collection, model training, evaluation, paper writing, and IEEE submission."
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

| Model | mAP@0.5 | mAP@0.5:0.95 | FPS |
|-------|---------|--------------|-----|
| YOLOv8 | 0.xxx | 0.xxx | xx |
| YOLOv11 | 0.xxx | 0.xxx | xx |

> _Exact metrics to be filled from the published paper._

## Publication

- **Title:** Vehicle Detection and Classification using YOLOv11
- **Venue:** IEEE Xplore
- **Year:** 2025
- **Role:** First Author
