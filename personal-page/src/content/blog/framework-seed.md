---
title: "From Personal Site to Framework Seed"
summary: "A first blog note about turning the site into a reusable research platform with stronger content models and shared UI primitives."
date: 2026-03-20
updatedDate: 2026-03-20
draft: false
featured: true
category: "architecture"
tags:
  - astro
  - framework
  - content-model
series: "Platform Notes"
seoTitle: "From Personal Site to Framework Seed"
seoDescription: "A short note on evolving this Astro-based site into a reusable content framework."
---

This site is starting to behave less like a single portfolio and more like a reusable platform.

The most important shift is not visual. It is structural:

- repeated UI fragments become components
- repeated page intent becomes typed data
- authored content moves into collections with stable schemas

That combination is what makes a future blog module, publication archive, or even an admin-facing CRM layer possible without rewriting the whole project.

The next step is to keep separating:

1. domain data
2. page assembly data
3. reusable render components
4. feature-specific modules

That keeps the codebase small enough to work with today while making it easier to extend tomorrow.
