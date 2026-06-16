---
title: "ScreenAI"
category: "NLP"
tags: ["RAG", "NER", "Explainable AI", "Blind Screening", "LLM"]
summary: "AI recruitment screening that pairs NER-based blind screening with RAG competency scoring and Explainable AI to rank candidates fairly and transparently."
featured: true
order: 1
status: "completed"
timeframe: "2026 · 10-week capstone"
thumbnail: "/images/projects/screenai.webp"
metrics:
  - { value: "240", label: "real CVs evaluated" }
  - { value: "4", label: "position rubrics" }
  - { value: "3", label: "integrated AI mechanisms" }
problem: |
  Manual recruitment fails in two intertwined ways. It is slow and expensive — recruiters spend an average of 7.4 seconds reviewing a single CV, while the cost per hire can reach USD 4,700 per position — and it is vulnerable to unconscious bias (affinity, halo, contrast) that quietly shapes who advances.

  Commercial Applicant Tracking Systems do not close this gap. Most rely on keyword matching and give no transparency into why a candidate was scored the way they were, so recruiter trust in automated decisions stays low.
approach: |
  ScreenAI integrates three mechanisms that existing ATS tools rarely combine in one platform: NER-based blind screening, RAG competency evaluation, and Explainable AI scoring.

  The pipeline runs end to end. PyMuPDF extracts and normalizes text from uploaded PDFs; an IndoBERT NER model detects and masks identity attributes (name, contact, institution, photo) to enforce blind screening; a LangChain RAG pipeline retrieves the recruiter-defined qualification rubric for the target role; and DeepSeek V3 scores the candidate per competency dimension, grounding every score in specific evidence from the CV.

  Recruiters review ranked results in a FastAPI-backed dashboard that surfaces the XAI justification behind each score, generates a profile summary and interview questions, and supports manual override with an audit log.
results: |
  - Built a functional end-to-end pipeline — upload → extract → anonymize → retrieve rubric → score → rank — tested against a real internal dataset of 240 anonymized CVs across 4 roles (Cyber Security, Big Data, Game Technology, GIS).
  - Implemented evidence-based XAI: every competency score links back to a quoted span from the CV, making each decision traceable and verifiable.
  - Shipped a recruiter dashboard with ranking, manual override, and audit logging, plus auto-generated profile summaries and interview questions.
  - Evaluated via binary classification against historical hiring ground truth, using Accuracy, Precision, Recall, and F1-Score as the primary metric (recall prioritized, since missing a strong candidate costs more than a correctable false positive).
role: "Project Lead & AI Engineer — coordinated a 4-person team, architected and built the RAG + LangChain pipeline, owned LLM prompt engineering, and implemented the evidence-based XAI layer."
architecture: |
  A single LangChain-orchestrated pipeline chains four AI components. Document parsing (PyMuPDF) feeds an IndoBERT NER anonymizer, whose blind-screened text is embedded and matched against a vector store of recruiter rubrics. The retrieved rubric and the anonymized CV are composed into one prompt for DeepSeek V3, which returns structured JSON: per-dimension scores, evidence-based justifications, a profile summary, and interview questions. Results flow to the recruiter dashboard for ranking and override. The full analysis runs as a batch job once the recruitment window closes.
decisions: |
  - DeepSeek V4 over GPT-4o-mini: comparable reasoning at $0.27/M input tokens — the most cost-efficient choice for batch-scoring hundreds of documents — and drop-in via an OpenAI-compatible endpoint, so no pipeline rewrite.
  - IndoBERT NER over generic English NER: the CVs are predominantly Indonesian, so a model fine-tuned on Indonesian outperforms English-centric NER on local names and institutions.
  - RAG over a pure LLM: grounding every score in a recruiter-defined rubric makes outputs verifiable and lets recruiters tune criteria without touching the pipeline.
  - Structured JSON output: enforced on every LLM response to keep results programmatically reliable and reduce hallucination on non-standard documents.
lessons: |
  - Ground-truth caveat: high accuracy against historical hiring decisions can mean the system is replicating past human bias rather than removing it — flagged as an explicit limitation and a future fairness-evaluation direction (demographic parity, equalized odds).
  - Blind screening is necessary but not sufficient: masking identity removes one bias vector, but transparency (XAI) and human override are what actually earn recruiter trust.
stack:
  - "Python"
  - "LangChain"
  - "IndoBERT"
  - "DeepSeek V4"
  - "PyMuPDF"
  - "FastAPI"
  - "Hugging Face Transformers"
links:
  github: "https://github.com/istgrudd/screenai"
  demo: "https://screenai.my.id/"
---