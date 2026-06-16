---
title: "From Notebook to Production: Lessons from Deploying ScreenAI"
date: 2026-06-01
lang: "en"
summary: "What I learned building and deploying a full-stack AI screening system with RAG, NER anonymization, and 40+ real users on a self-hosted VPS."
tags: ["mlops", "rag", "fastapi", "docker"]
draft: false
---

## The Gap Between Demo and Production

Most ML projects stop at the Jupyter notebook. A model trained, metrics printed, a few charts generated—then the repo goes stale. Turning that into a system people actually use is a different problem entirely.

ScreenAI started as a question: _can we automate CV screening fairly and transparently?_ The answer required building not just a model, but an entire pipeline: PDF ingestion, PII anonymization, retrieval-augmented scoring, and a recruiter-friendly dashboard.

## The Architecture

```text
PDF Upload → PyMuPDF Extract → Normalize → IndoBERT NER Anonymize
                                                  ↓
Recruiter Dashboard ← Scoring Engine ← RAG Pipeline (DeepSeek V3)
                           ↑
                     ChromaDB (rubric embeddings)
```

Five services glued together by FastAPI, all running in Docker on a single Tencent Cloud VPS.

## Three Things That Mattered

### 1. Anonymization Is Harder Than You Think

IndoBERT NER catches names, organizations, and locations in Indonesian text—but it misses phone numbers, emails, and ID numbers. A regex fallback layer was critical. Even then, edge cases slip through: names embedded in project titles, institutions mentioned in passing.

The takeaway: **layered defense**. Model-based NER for structured entities, regex for patterns, and manual review as the final gate.

### 2. LLM Output Needs a Straitjacket

DeepSeek V3 is powerful but will occasionally produce malformed JSON, hallucinate evidence not in the CV, or score inconsistently. Three things helped:

- **Tight prompt engineering**: Explicit JSON schema, example output, "you MUST only cite text from the provided CV" warnings.
- **Retry logic**: Parse the response, validate against schema, retry up to 3 times with increasingly strict prompts.
- **Temperature = 0**: For scoring tasks, creativity is the enemy.

### 3. Recruiters Want Speed, Not Options

The first UI had too many features. Recruiters used exactly three things: upload, dashboard, candidate detail. Everything else was noise. The redesign stripped the interface down to those core flows, and engagement improved immediately.

## What I'd Do Differently

- **Start with simpler models.** IndoBERT + ChromaDB + DeepSeek is a heavy stack. A keyword-matching baseline would have shipped faster and provided a benchmark.
- **Invest in evaluation earlier.** Without ground-truth labels, I still can't quantify scoring accuracy. That's the next priority.
- **Separate scoring from generation.** The RAG pipeline does both retrieval and generation; splitting them would make debugging easier.

## The Numbers

| Metric | Value |
|---|---|
| Active testers | ~40 |
| Avg. scoring time per CV | ~8s |
| Pipeline components | 5 |
| Self-hosted cost | $0/mo (existing VPS) |

## What's Next

The system works, but it's not validated. The next phase is building an evaluation framework with ground-truth labels from real recruiter decisions. After that: interview question generation and multi-language CV support.

---

_ScreenAI was built as a solo project. The code is available on [GitHub](#), and the system is live in staging. If you're working on similar problems in recruitment AI, I'd love to compare notes._
