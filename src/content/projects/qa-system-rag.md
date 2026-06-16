---
title: "QA System (OpenSearch RAG)"
category: "NLP"
summary: "Retrieval-augmented QA system using OpenSearch as vector database with custom RAG pipeline."
featured: false
order: 8
status: "completed"
problem: |
  Traditional QA systems struggle with domain-specific knowledge not present in training data. A retrieval-augmented approach can ground answers in provided documents, improving accuracy and reducing hallucination.
approach: |
  Built a RAG pipeline using OpenSearch as the vector store for document retrieval. Documents are chunked and embedded, then retrieved based on query similarity. The retrieved context is augmented into the LLM prompt for grounded answer generation.
results: |
  - Domain-specific QA with grounded, citation-backed answers.
  - OpenSearch provides scalable vector search for large document collections.
role: "Developer — pipeline design, OpenSearch integration, prompt engineering."
stack:
  - "OpenSearch"
  - "LangChain"
  - "Python"
  - "Vector Search"
links:
  github: "#"
---
