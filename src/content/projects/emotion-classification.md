---
title: "Indonesian Tweet Emotion Classification"
category: "NLP"
tags: ["Text Classification", "Emotion Detection", "Model Comparison", "Class Imbalance"]
summary: "A comparative text-mining study classifying Indonesian tweets into five emotions, benchmarking a BiLSTM baseline against IndoBERT and measuring how much custom preprocessing actually moves the needle."
featured: false
order: 6
status: "completed"
timeframe: "2026 · course project"
thumbnail: "/images/projects/emotion-classification.webp"
metrics:
  - { value: "0.727", label: "best macro F1 (val)" }
  - { value: "5", label: "emotion classes" }
  - { value: "3", label: "controlled experiments" }
problem: |
  Social media is where people vent emotion, but Indonesian tweets are hard to read automatically: they're short, informal, and packed with slang, typos, mentions, URLs, and implicit expression. The task was to classify tweets into five emotions — anger, happy, sadness, fear, love — on the IndoNLU EmoT dataset, where the classes are also imbalanced (anger dominates; fear and love are the minority).

  Beyond just building a classifier, the goal was to answer two questions: does a pretrained transformer beat a classic recurrent baseline here, and how much does the team's own preprocessing actually help?
approach: |
  As the modeling lead, I designed three controlled experiments to isolate those two questions. A BiLSTM served as the non-transformer baseline; IndoBERT Base-P2 was run first on raw tweets (reproducing the reference paper's setup) and then on our team-cleaned text (slang normalization with a 60+ entry dictionary, mention/URL/emoji removal, repeated-character collapsing) — so the only thing changing between the last two runs was the preprocessing.

  Everything was tracked in MLflow with macro F1 as the primary metric (chosen over accuracy because of the class imbalance). Since validation loss crept up during training, I selected each best checkpoint by best validation macro F1 rather than the final epoch.
results: |
  - IndoBERT with our preprocessing won at 0.727 validation macro F1, edging out IndoBERT on raw tweets (0.713) and clearly beating the BiLSTM baseline (0.604).
  - On the held-out test set the best model reached ~0.708 macro F1 (0.70 accuracy over 440 tweets).
  - The takeaways were clean: pretrained Indonesian representations beat a from-scratch recurrent model, and cleaning Twitter noise gave the transformer a consistent extra edge over the raw-text setup.
  - Error analysis traced most mistakes to semantically adjacent emotions — sadness↔anger and happy↔love — on short, ambiguous, informal tweets, pointing to data balancing and richer preprocessing as next steps.
role: "Modeling lead in a 4-person team — designed the experiment plan, chose the models to benchmark (BiLSTM baseline vs IndoBERT Base-P2), and implemented, trained, and lightly tuned them with MLflow tracking. Also contributed to the presentation deck. Teammates owned EDA, the preprocessing pipeline, and evaluation/error analysis."
stack:
  - "Python"
  - "PyTorch"
  - "Hugging Face Transformers"
  - "IndoBERT"
  - "MLflow"
  - "scikit-learn"
links:
  github: "https://github.com/istgrudd/emotion-classification"
  demo: "#"
  paper: "#"
---