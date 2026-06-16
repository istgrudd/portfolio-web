---
title: "Emotion Classification — Indonesian Tweets"
category: "NLP"
tags: ["Text Classification", "Transformers"]
summary: "Comparative study of BiLSTM vs IndoBERT for emotion classification on Indonesian tweets — quantifying how much contextual embeddings help on informal, code-switched text."
featured: false
order: 5
status: "completed"
timeframe: "2025"
problem: |
  Emotion detection in Indonesian social-media text is hard: informal language, code-switching, and limited labeled data. Knowing which architecture works best matters for downstream Indonesian NLP.
approach: |
  Compared a BiLSTM baseline against IndoBERT on an Indonesian Twitter emotion dataset. BiLSTM served as the sequence baseline; IndoBERT leveraged pre-trained contextual embeddings. Both were evaluated across emotion categories with standard classification metrics.
results: |
  - IndoBERT outperformed BiLSTM across every emotion category.
  - Contextual embeddings captured informal Indonesian nuance far better than static embeddings.
role: "Researcher — experiment design, model implementation, and comparative analysis."
stack:
  - "PyTorch"
  - "IndoBERT"
  - "BiLSTM"
  - "Transformers"
  - "Python"
links:
  github: "https://github.com/istgrudd/emotion-classification"
---
