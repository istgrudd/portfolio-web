---
title: "Why I Chose Astro for My Portfolio (and You Should Too)"
date: 2026-06-10
lang: "en"
summary: "The decision framework behind choosing Astro over Next.js, Hugo, and vanilla HTML for a performance-focused developer portfolio."
tags: ["web", "astro", "tailwind", "static-site"]
draft: false
---

## The Constraints

My portfolio has a clear set of non-negotiables:

1. **Performance ≥ 95 on Lighthouse.** This is a portfolio for engineers and recruiters—slow pages signal sloppy work.
2. **Blog with Markdown.** I want to write posts by dropping `.md` files into a folder. No CMS, no database, no friction.
3. **Multi-page with zero JavaScript by default.** None of my content needs client-side rendering. If a page ships with JS, it better have a good reason.
4. **I maintain this alone.** No team, no CI complexity, no build pipeline that breaks when I ignore the project for 3 months.

## The Options

### Next.js

The obvious choice if you're in the React ecosystem. But:

- **Too much JS.** Even with Server Components, the default output is heavier than necessary for static content.
- **Complexity tax.** `next.config`, middleware, route handlers, caching strategies—all for a site that could be static HTML.
- **Vendor lock-in concerns.** Vercel optimizations don't always translate to other platforms.

**Verdict:** Overkill for a portfolio. Right tool, wrong job.

### Hugo

Fast. Very fast. But:

- **Go templating is not my daily driver.** Context-switching between Python/TypeScript and Go templates adds friction.
- **Limited component model.** Reusing layout pieces requires partials and shortcodes, which feel clunky compared to component-based architectures.
- **Smaller ecosystem.** Fewer themes, plugins, and community resources compared to JS-based tools.

**Verdict:** Great if you live in Go. I don't.

### Vanilla HTML/CSS/JS

Maximum performance, zero build step. But:

- **No templating.** Copy-pasting navbars and footers across 12+ pages is a maintenance nightmare.
- **No Markdown ingestion.** Writing blog posts in raw HTML defeats the purpose of a content-first workflow.
- **Manual optimization.** Image resizing, CSS minification, cache headers—all manual.

**Verdict:** Perfect for a single-page site. Terrible for multi-page + blog.

### Astro

- **Static HTML output.** Your React/Vue/Svelte components compile to zero-JS HTML. Islands hydrate only the interactive bits.
- **Content collections.** Type-safe Markdown/MDX with Zod schemas. Add a post = add a file.
- **First-class Markdown.** Shiki syntax highlighting built in. No plugin hunting.
- **Tailwind integration.** Official adapter, just works.
- **Minimal config.** `astro.config.mjs` is 6 lines for my entire setup.

**Verdict:** Purpose-built for content sites. The right tool for _this_ job.

## What I Actually Built

```text
src/
├── pages/           # File-based routing
├── content/
│   ├── blog/        # 3 Markdown posts (and growing)
│   └── projects/    # 9 project pages from content collections
├── components/      # BaseLayout, Navbar, Footer, SEO
└── lib/             # Constants, utilities
```

Build output: **12 static HTML pages, 14 KB of CSS, ~2 KB of JS** (theme toggle + mobile menu). Lighthouse scores pending, but I'm confident.

## The Trade-off

Astro is bad at dynamically rendered, highly interactive apps. If your site is mostly dashboards, real-time chat, or complex forms—use Next.js or Remix. Astro's island architecture means every interactive component is an explicit decision, not a default.

But for a portfolio? There's no contest. Static content should ship static HTML. Astro makes that easy without sacrificing developer experience.

---

_This site is open source. Check the [GitHub repo](#) for the full source._
