import { defineCollection, z } from "astro:content";

// Controlled vocabulary — one primary bucket per project (enables filtering).
// Hybrid axis: some buckets are domain (CV/NLP/ML), others are the engineering
// layer/role (Full-stack, Deployment & Infra) — kept consistent on purpose.
const CATEGORIES = [
  "Computer Vision",
  "NLP",
  "Full-stack",
  "Machine Learning",
  "Deployment & Infra",
] as const;

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.enum(CATEGORIES),
    tags: z.array(z.string()).default([]), // cross-cutting topics (RAG, Segmentation, …)
    summary: z.string(), // one-line card description
    featured: z.boolean().default(false),
    order: z.number(),
    status: z.enum(["completed", "in-progress"]).default("completed"),
    timeframe: z.string().optional(), // e.g. "2026", "10 weeks"
    // Standardized headline numbers shown as a strip on the detail page.
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    // Core narrative — required so every project follows the same template.
    problem: z.string(),
    approach: z.string(),
    results: z.string(),
    role: z.string(),
    // Optional deep-dive (flagship projects only).
    architecture: z.string().optional(),
    decisions: z.string().optional(),
    lessons: z.string().optional(),
    stack: z.array(z.string()).default([]),
    links: z
      .object({
        github: z.string().optional(),
        demo: z.string().optional(),
        paper: z.string().optional(),
      })
      .default({}),
    thumbnail: z.string().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lang: z.enum(["en", "id"]).default("en"),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
