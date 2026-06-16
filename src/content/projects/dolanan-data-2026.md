---
title: "Dolanan Data Nexus 2026"
category: "Computer Vision"
tags: ["Semantic Segmentation", "Remote Sensing"]
summary: "Swin Transformer + FPN semantic segmentation that maps flood-affected land from UAV imagery — built for a national data-mining competition and taken to the Top-10 final."
featured: true
order: 3
status: "completed"
timeframe: "2026"
metrics:
  - { value: "Top 10", label: "national finalist" }
  - { value: "Swin+FPN", label: "architecture" }
problem: |
  Rapid damage assessment after floods needs accurate mapping of affected areas from UAV imagery, but manual annotation is far too slow for emergency-response timelines.
approach: |
  Paired a Swin Transformer backbone with a Feature Pyramid Network (FPN) to capture multi-scale features, enabling semantic segmentation of post-flood UAV imagery and mapping of affected land-cover areas. Entered Dolanan Data Nexus 2026, a national data-mining competition.
results: |
  - Top-10 finalist among teams nationwide, selected for the final round in Surabaya.
  - Accurate segmentation of flood-affected zones from UAV orthomosaic imagery.
  - Swin-FPN captured both fine detail and large-scale context in aerial views.
role: "Team member — model implementation, training, and evaluation."
stack:
  - "PyTorch"
  - "Swin Transformer"
  - "FPN"
  - "OpenCV"
  - "Python"
links:
  github: "#"
---
