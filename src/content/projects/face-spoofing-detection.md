---
title: "Face Spoofing Detection"
category: "Computer Vision"
summary: "CLIP ViT-L-14 with Focal Loss and WeightedRandomSampler for robust face anti-spoofing."
featured: false
order: 5
status: "completed"
problem: |
  Face recognition systems are vulnerable to presentation attacks (printed photos, video replays, 3D masks). A robust anti-spoofing module is critical for secure authentication.
approach: |
  Leveraged CLIP ViT-L-14 as a feature extractor with Focal Loss to handle class imbalance in spoofing datasets. Applied WeightedRandomSampler during training and face cropping as preprocessing. Evaluated on standard anti-spoofing benchmarks.
results: |
  - CLIP-based features outperformed traditional handcrafted features.
  - Focal Loss effectively handled the imbalanced spoof/genuine ratio.
role: "Model developer — architecture design, training pipeline, evaluation."
stack:
  - "CLIP"
  - "ViT-L-14"
  - "PyTorch"
  - "OpenCV"
  - "Python"
links:
  github: "#"
---
