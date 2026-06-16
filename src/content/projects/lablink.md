---
title: "LabLink"
category: "Full-stack"
tags: ["Internal tooling", "Infrastructure"]
summary: "Internal information system for MBC Laboratory — one governed home for data that used to sprawl across dozens of Google Docs. Designed and built solo, adopted across all four divisions."
featured: true
order: 2
status: "completed"
timeframe: "2025–2026"
metrics:
  - { value: "Solo", label: "end-to-end build" }
  - { value: "4", label: "divisions adopted" }
  - { value: "1", label: "source of truth" }
problem: |
  Lab records at MBC Laboratory were fragmented across many Google Docs and sheets — hard to find, easy to duplicate, impossible to trust as a single source of truth. Divisions had no shared system for governance, knowledge management, or institutional memory.
approach: |
  Designed and built a web platform from scratch that centralizes lab data into one governed, searchable system shared across all four divisions.

  Frontend: React + Vite + Tailwind CSS + shadcn/ui. Backend: FastAPI with PostgreSQL via Supabase. The platform covers user management, project tracking, a knowledge base, and per-division dashboards.
results: |
  - Replaced dozens of fragmented Google Docs and spreadsheets with a single source of truth.
  - Adopted across all four divisions of MBC Laboratory.
  - Built solo — full ownership from architecture through deployment and lab-wide rollout.
role: "Solo developer — full-stack architecture, database design, UI/UX, deployment, and driving lab-wide adoption."
stack:
  - "React"
  - "Vite"
  - "Tailwind CSS"
  - "shadcn/ui"
  - "FastAPI"
  - "PostgreSQL"
  - "Supabase"
links:
  github: "#"
---
