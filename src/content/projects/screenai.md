---
title: "ScreenAI"
thumbnail: "/images/projects/Workflow sistem.png" 
category: "NLP / Full-stack"
summary: "AI recruitment screening that ranks candidates against a rubric—fairly, and with an evidence-based reason behind every score. Capstone project, 440 CVs, production fork deployed at MBC Laboratory."
featured: true
order: 1
status: "completed"
problem: |
  Recruiters skim a CV in ~7.4 seconds, and keyword-only ATS tools rank without transparency—leaving unconscious bias unchecked and trust low. Manual screening is slow, inconsistent, and prone to hidden bias.
approach: |
  Built a three-layer AI pipeline: (1) Blind screening using IndoBERT NER to strip identity before scoring, (2) Competency matching via RAG with LangChain to ground ranking in a recruiter-defined rubric, and (3) Explainability (XAI) ensuring every score carries an evidence-based justification.

  Backend is FastAPI with ChromaDB for rubric embeddings. Frontend is React + Vite + Tailwind. The system processes 440 CVs and ranks them by rubric fit with transparent reasoning.
results: |
  - Successfully deployed capstone project for a team of 4 within 10 weeks.
  - Production fork currently used at MBC Laboratory for internal assistant recruitment.
  - Blind screening eliminates identity bias before scoring.
  - Every score includes cited evidence from the CV for recruiter trust.
role: "Team of 4 — contributed to AI pipeline architecture, NER anonymization, RAG integration, and prompt engineering."
stack:
  - "FastAPI"
  - "React"
  - "Vite"
  - "IndoBERT"
  - "LangChain"
  - "ChromaDB"
  - "LLM"
  - "Tailwind CSS"
links:
  github: "https://github.com/istgrudd/screenai"
  demo: "#"
---

## Architecture

```text
CV Upload → NER Anonymization (IndoBERT) → RAG Scoring (LangChain)
                                                  ↓
Recruiter Dashboard ← XAI Justifications ← ChromaDB (rubric embeddings)
```

## Key Features

- **Blind Screening:** NER-based PII stripping before any scoring.
- **Competency Match:** RAG grounds ranking in recruiter-defined rubric dimensions.
- **Explainable AI:** Every score is backed by cited CV evidence, not black-box magic.
- **Production Deployment:** A fork of ScreenAI is deployed at MBC Laboratory for internal use.
