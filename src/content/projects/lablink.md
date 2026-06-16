---
title: "LabLink"
category: "Full-stack"
tags: ["Internal Tooling", "Self-hosted", "Information System"]
summary: "A centralized internal system for MBC Laboratory — members, inventory, on-call rosters, attendance, and a transparent cash ledger — replacing a sprawl of scattered docs, drives, and spreadsheets."
featured: true
order: 2
status: "completed"
timeframe: "2026 · 3-month build"
thumbnail: "/images/projects/lablink.webp"
metrics:
  - { value: "54", label: "active assistants" }
  - { value: "6", label: "core modules" }
  - { value: "2 week", label: "handoff to live" }
problem: |
  MBC Laboratory's data lived everywhere and nowhere — scattered across Google Docs, Drive folders, and spreadsheets. Assistants lost time hunting for whatever they needed, and there was no single transparent view of shared essentials like the cash balance, on-call rosters, attendance, or member records.

  I started LabLink to fix that: one place where any assistant can find lab data, and where money, schedules, and membership are visible to everyone instead of locked in one person's files.
approach: |
  LabLink centralizes lab operations into a single internal system. Under one dashboard it brings together member management, inventory with low-stock restock alerts, on-call rostering, TechRoadmap training attendance via QR check-in plus an activity leaderboard, and a transparent cash ledger with dues tracking — all backed by an activity log for accountability.

  The whole thing is self-hosted on the lab's own hardware: a FastAPI backend and a React + Vite + Tailwind + shadcn/ui frontend over a trimmed Supabase stack, exposed through a Cloudflare Tunnel.
results: |
  - Live in production and in active use by the lab's 54 assistants, with adoption still ramping as the team transitions off the old scattered workflow.
  - Replaced a sprawl of Docs, Drive folders, and spreadsheets with a single source of truth for members, inventory, on-call, attendance, and finances.
  - Made lab finances fully transparent — balance, dues status, and history visible to every assistant rather than locked in one person's spreadsheet.
  - Built solo end to end, then handed to the lab's technical-support division and live within two weeks of handoff.
role: "Sole developer of the initial system — product design, FastAPI backend, React/Vite frontend, and self-hosted deployment — before handing it to the lab's technical-support division to refine and extend."
architecture: |
  LabLink runs entirely on MBC Lab's own infrastructure. A FastAPI backend and a React + Vite + Tailwind + shadcn/ui frontend sit on top of a trimmed, self-hosted Supabase stack (PostgreSQL + auth), all running inside an Ubuntu Server VM on the lab's Proxmox host. Because the campus network offers no public IP, the app is exposed through a Cloudflare Tunnel, with the domain managed on Cloudflare. The result is a zero-hosting-cost system that keeps every byte of lab data on hardware the lab controls.
decisions: |
  - Resource-fit stack: picked a lightweight FastAPI + React/Vite stack specifically so the whole system runs comfortably on the lab's existing server, rather than a heavier framework the available hardware couldn't sustain in production.
  - Self-hosted on lab infrastructure: keeping data on lab-owned hardware avoids recurring hosting costs and keeps sensitive member and finance data in-house.
  - Cloudflare Tunnel over a public IP: the campus network has no public IP, so a tunnel exposes the service securely without opening the server to the internet directly.
  - Trimmed Supabase: self-host only the components actually needed (Postgres + auth) to keep the footprint light on shared lab hardware.
lessons: |
  - The hard part isn't the CRUD, it's the schema: most modules are straightforward CRUD, but the real engineering challenge sits in the data model behind the upcoming Project & Event features — many-to-many relationships and heavy joins that need a clean schema from day one (in progress).
  - Shipping is not adoption: the system is live, but assistants are still adapting to it, so rollout and change management matter as much as the build itself.
  - Build for handoff: developing solo and then handing off to the technical-support division made maintainability and clear structure a first-class concern, not an afterthought.
stack:
  - "Python"
  - "FastAPI"
  - "React"
  - "Vite"
  - "Tailwind CSS"
  - "shadcn/ui"
  - "Supabase"
  - "PostgreSQL"
  - "Cloudflare Tunnel"
  - "Proxmox"
links:
  github: "#"
---