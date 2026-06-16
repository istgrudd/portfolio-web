---
title: "ScreenAI"
category: "NLP"
tags: ["RAG", "LLM", "Explainability", "Full-stack"]
summary: "AI recruitment screening that ranks candidates against a recruiter's rubric — with blind, bias-stripped scoring and cited evidence behind every decision. Capstone (team of 4); a production fork runs at MBC Laboratory."
featured: true
order: 1
status: "completed"
timeframe: "2026 · 10 weeks"
thumbnail: "/images/projects/Workflow sistem.png"
metrics:
  - { value: "440", label: "CVs ranked" }
  - { value: "3-layer", label: "AI pipeline" }
  - { value: "10 wk", label: "capstone build" }
  - { value: "Prod", label: "deployed @ MBC Lab" }
problem: |
  Recruiters skim a CV in roughly 7 seconds, and keyword-only ATS tools rank without showing their reasoning — leaving unconscious bias unchecked and trust low. Manual screening is slow, inconsistent, and hard to audit.
approach: |
  A three-layer AI pipeline. First, blind screening uses IndoBERT NER to strip identity before any scoring. Second, competency matching uses a LangChain RAG pipeline to ground every ranking in a recruiter-defined rubric. Third, explainability ensures each score carries an evidence-based justification.

  The backend is FastAPI with ChromaDB for rubric embeddings; the frontend is React + Vite + Tailwind. The system ingests 440 CVs and ranks them by rubric fit with transparent reasoning.
results: |
  - Shipped as a capstone for a team of 4 within 10 weeks.
  - A production fork now runs at MBC Laboratory for internal assistant recruitment.
  - Blind screening removes identity signals before scoring.
  - Every score cites the CV evidence it was based on, so recruiters can trust and audit it.
role: "Team of 4 — owned the AI pipeline architecture: NER anonymization, RAG integration, and prompt engineering."
architecture: |
  Three sequential layers. (1) Blind screening — IndoBERT NER plus a regex fallback strips names, contacts, and ID numbers before scoring, so identity cannot bias the result. (2) Competency matching — a LangChain RAG pipeline grounds each score in a recruiter-defined rubric stored as ChromaDB embeddings. (3) Explainability — the scoring prompt returns strict JSON, and each score ships with cited evidence pulled from the CV.
decisions: |
  - IndoBERT + regex, not either alone: NER models miss phone numbers, emails, and NIK/ID numbers; regex catches those structured patterns; IndoBERT handles Indonesian names, organizations, and locations. Together they make blind screening reliable.
  - ChromaDB for rubric embeddings: rubrics are small (5–10 dimensions), so a local, file-based vector store is ideal — no external service dependency. Embeddings use sentence-transformers/all-MiniLM-L6-v2 for lightweight multilingual support.
  - Structured JSON + retry logic: the scoring prompt enforces a strict schema; the backend validates with Zod and retries up to 3 times with progressively stricter prompts. Temperature 0 for deterministic output.
lessons: |
  - Layered anonymization is non-negotiable: model-based NER alone lets pattern-based PII slip through. The regex fallback is essential in production.
  - LLM output needs guardrails: without schema enforcement and retries, even capable models produce unusable output a meaningful fraction of the time.
  - Users value speed over options: recruiters used exactly three flows (upload, dashboard, detail). The redesign stripped everything else.
stack:
  - "FastAPI"
  - "React"
  - "Vite"
  - "IndoBERT"
  - "LangChain"
  - "ChromaDB"
  - "Tailwind CSS"
links:
  github: "https://github.com/istgrudd/screenai"
---
