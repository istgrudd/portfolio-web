import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    status: z.enum(["completed", "in-progress"]).default("completed"),
    problem: z.string().optional(),
    approach: z.string().optional(),
    results: z.string().optional(),
    role: z.string().optional(),
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

export const collections = { projects };
