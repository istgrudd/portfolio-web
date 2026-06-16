---
title: "Emotion Classification (Indonesian Tweets)"
category: "NLP"
summary: "Comparative study of BiLSTM vs IndoBERT for emotion classification on Indonesian Twitter data."
featured: false
order: 6
status: "completed"
problem: |
  Emotion detection in Indonesian social media text is challenging due to informal language, code-switching, and limited labeled datasets. Understanding which architecture works best is important for downstream NLP applications in Indonesian.
approach: |
  Compared BiLSTM and IndoBERT architectures on an Indonesian Twitter emotion dataset. BiLSTM served as the baseline sequence model; IndoBERT leveraged pre-trained contextual embeddings. Evaluated across multiple emotion categories with standard classification metrics.
results: |
  - IndoBERT significantly outperformed BiLSTM across all emotion categories.
  - Contextual embeddings from IndoBERT captured informal Indonesian language nuances better than static embeddings.
role: "Researcher — experiment design, model implementation, comparative analysis."
stack:
  - "IndoBERT"
  - "BiLSTM"
  - "PyTorch"
  - "Transformers"
  - "Python"
links:
  github: "#"
---
