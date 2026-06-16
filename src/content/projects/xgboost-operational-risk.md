---
title: "XGBoost Operational Risk + SHAP"
category: "Machine Learning"
tags: ["Explainability", "Tabular"]
summary: "Operational-risk classifier on manufacturing data, paired with SHAP explanations so operators see why a prediction was made, not just the score."
featured: false
order: 7
status: "completed"
timeframe: "2025"
problem: |
  Manufacturing operations face risks that lead to downtime and financial loss. Predictive models help flag high-risk scenarios, but stakeholders also need to understand why a prediction was made.
approach: |
  Trained an XGBoost classifier on a manufacturing operational dataset to predict risk levels, then applied SHAP (SHapley Additive exPlanations) for global and local interpretability. Feature-importance and SHAP waterfall plots turn predictions into actionable insight.
results: |
  - XGBoost delivered strong predictive performance on operational-risk classification.
  - SHAP analysis surfaced the key risk drivers, enabling targeted mitigation.
role: "Developer — model training, SHAP integration, and result interpretation."
stack:
  - "XGBoost"
  - "SHAP"
  - "scikit-learn"
  - "Pandas"
  - "Python"
links:
  github: "https://github.com/istgrudd/sdpi-analisis_risiko_operasional"
---
