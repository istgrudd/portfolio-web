---
title: "ScreenAI"
category: "NLP / Full-stack"
summary: "AI-powered recruitment screening system with RAG, NER anonymization, and explainable scoring—staging with 40+ testers."
featured: true
order: 1
status: "completed"
problem: |
  Manual CV screening is slow, inconsistent, and prone to bias. Recruiters need a system that can automatically process, anonymize, and score candidate CVs against configurable rubrics with transparent reasoning.
approach: |
  Built a full-stack AI pipeline: PDF text extraction via PyMuPDF, PII anonymization using IndoBERT NER with regex fallback, and RAG-based scoring using DeepSeek V3 via LangChain. The system embeds rubric dimensions into ChromaDB, retrieves relevant criteria for each CV chunk, then generates per-dimension scores with evidence-backed justifications in structured JSON.

  Backend is FastAPI with SQLite, frontend is React + Tailwind. Entire system containerized with Docker and self-hosted on a Tencent Cloud VPS.
results: |
  - Successfully deployed to staging with ~40 active testers.
  - End-to-end pipeline: PDF upload → anonymization → RAG scoring → dashboard ranking.
  - Explainable AI: each dimension score cites specific CV excerpts as evidence.
  - Redesigned UI for recruiter-friendly workflow (rubric editor, candidate detail, score override).
role: "Solo developer — full-stack architecture, AI pipeline design, prompt engineering, deployment, and UI. Redesigned the frontend based on user feedback from initial staging."
stack:
  - "FastAPI"
  - "React"
  - "IndoBERT"
  - "LangChain"
  - "ChromaDB"
  - "Docker"
  - "DeepSeek V3"
  - "PyMuPDF"
  - "SQLite"
  - "Tailwind CSS"
links:
  github: "#"
  demo: "#"
---

## Architecture

```text
PDF Upload → PyMuPDF Extract → Normalizer → IndoBERT NER Anonymizer
                                                    ↓
Recruiter Dashboard ← Scoring Engine ← RAG Pipeline (DeepSeek V3)
                          ↑
                    ChromaDB (rubric embeddings)
```

## Key Features

- **Blind Screening:** Automatic PII removal (names, phone numbers, emails, NIK) before scoring.
- **Configurable Rubric:** Recruiters define dimensions, weights, and indicators.
- **Explainable Scores:** Per-dimension justifications with direct CV excerpts.
- **Batch Processing:** Evaluate all pending candidates in one action.
- **Score Override:** Recruiters can adjust scores with a reason.
