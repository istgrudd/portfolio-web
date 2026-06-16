---
title: "Face Spoofing Detection"
category: "Computer Vision"
tags: ["Anti-spoofing", "Transfer Learning"]
summary: "CLIP ViT-L/14 fine-tuned for face anti-spoofing, using Focal Loss and weighted sampling to handle heavy class imbalance between genuine and presentation-attack samples."
featured: false
order: 5
status: "completed"
timeframe: "2025"
problem: |
  Face-recognition systems are vulnerable to presentation attacks — printed photos, video replays, 3D masks. A robust anti-spoofing module is critical for secure authentication.
approach: |
  Used CLIP ViT-L/14 as a feature extractor, with Focal Loss to handle class imbalance in spoofing datasets and WeightedRandomSampler during training. Face cropping served as preprocessing. Evaluated on standard anti-spoofing benchmarks.
results: |
  - CLIP-based features outperformed traditional handcrafted descriptors.
  - Focal Loss handled the imbalanced spoof/genuine ratio effectively.
role: "Model developer — architecture design, training pipeline, and evaluation."
stack:
  - "PyTorch"
  - "CLIP"
  - "ViT-L/14"
  - "OpenCV"
  - "Python"
links:
  github: "#"
---
