---
title: "QA System — OpenSearch RAG"
category: "NLP"
tags: ["RAG", "Vector Search"]
summary: "Retrieval-augmented QA pipeline using OpenSearch as the vector store — grounds answers in source documents to cut hallucination on domain-specific questions."
featured: false
order: 6
status: "completed"
timeframe: "2025"
problem: |
  Traditional QA systems struggle with domain-specific knowledge absent from their training data. A retrieval-augmented approach grounds answers in provided documents, improving accuracy and reducing hallucination.
approach: |
  Built a RAG pipeline with OpenSearch as the vector store. Documents are chunked and embedded, then retrieved by query similarity; the retrieved context is injected into the LLM prompt for grounded answer generation.
results: |
  - Domain-specific QA with grounded, citation-backed answers.
  - OpenSearch provides scalable vector search over large document collections.
role: "Developer — pipeline design, OpenSearch integration, and prompt engineering."
stack:
  - "OpenSearch"
  - "LangChain"
  - "Python"
links:
  github: "#"
---
