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
decisions: |
  - IndoBERT + Regex both needed: NER models miss phone numbers, emails, and NIK/ID numbers. IndoBERT handles Indonesian names, organizations, and locations. Regex fallback catches structured patterns. Together they achieve reliable blind screening.
  - ChromaDB for rubric embeddings: Rubrics are small (5-10 dimensions), so ChromaDB's local, file-based vector store is ideal. No external service dependency. Embeddings use sentence-transformers/all-MiniLM-L6-v2 for lightweight, multilingual support.
  - Structured JSON + retry logic: The scoring prompt enforces a strict JSON schema. Backend parses the response, validates against Zod schemas, and retries (up to 3 attempts) with increasingly strict prompts if parsing fails. Temperature = 0 for deterministic output.
  - Production fork at MBC Lab: After the capstone, a fork of ScreenAI was deployed internally at MBC Laboratory to support assistant recruitment. The system handles real CV uploads and rubric-based ranking for the lab's selection process.
lessons: |
  - Layered anonymization is non-negotiable: Model-based NER alone lets pattern-based PII slip through. Regex fallback is essential for production use.
  - LLM output needs guardrails: Without JSON schema enforcement and retry logic, even capable models produce unusable output ~10% of the time.
  - Users value speed over features: The first UI had too many options. Recruiters used exactly three flows (upload, dashboard, detail). The redesign stripped everything else.
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
