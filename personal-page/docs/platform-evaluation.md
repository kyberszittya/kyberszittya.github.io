# Platform Evaluation

## Current strength

This site is already close to a lightweight content platform:

- Astro gives a good static-first rendering model with room for islands when interaction is needed.
- The page structure is consistent enough to evolve into reusable content primitives.
- Data is already partially separated from views through `src/data` and `src/content`.
- The visual language is distinctive, which is valuable if this grows into a framework or starter.

## What a good framework base needs

- A stable content schema layer.
- A reusable page-composition layer.
- A design token system with component-level style boundaries.
- A navigation and routing model that is data-driven instead of page-local.
- A plugin or module surface for optional domains such as blog, CRM, gallery, research archive, and education.
- A clear split between domain data, content authoring, UI primitives, and page assembly.

## What a good blog engine needs

- Post collections with typed frontmatter.
- Taxonomy support for tags, categories, series, and featured status.
- Drafting and publishing workflow.
- RSS, sitemap, canonical metadata, and social preview metadata.
- Search or filtering across posts.
- Rich content blocks such as callouts, code, figures, citations, embeds, and related-post sections.
- Author profiles and multi-author support if the site expands beyond a single owner.

## What a CRM-style system needs

- Clear entities: people, organizations, opportunities, communication events, tasks, notes, and tags.
- Role and permission boundaries.
- Audit history and timeline views.
- Searchable records and filters.
- State transitions such as lead, active, paused, archived.
- Form ingestion from contact flows.
- API or sync boundaries if data comes from email, calendars, or external services.
- Admin-facing UI separate from the public-facing site.

## Recommended domain model direction

Use a modular content architecture rather than classic MVC:

- `content models`: typed records and collections such as `researchArea`, `publication`, `subject`, `person`, `contactChannel`, `pageSection`
- `view models`: assembly helpers that shape raw data for a specific page or feature
- `render components`: reusable UI blocks such as intro panels, info cards, stack lists, chip groups, hero strips, section navs
- `feature modules`: self-contained folders for blog, research, education, and CRM/admin concerns

This keeps Astro’s file-based routing while still giving you separation similar to controller/service/view layers.

## Suggested next evolution steps

1. Introduce typed page-section data for major landing pages.
2. Normalize repeated UI patterns into shared components.
3. Move more page-local literals into `src/data` or `src/content`.
4. Add collection schemas for blog posts, notes, and case studies.
5. If CRM features become real, create a separate admin module rather than forcing it into the public page layer.

## Recommended module boundaries

- `src/components/core`: low-level UI primitives
- `src/components/content`: cards, section blocks, lists, metadata panels
- `src/data`: static structured data and view-model builders
- `src/content`: authored markdown/mdx collections
- `src/lib`: parsing, formatting, transformation helpers
- `src/features/blog`, `src/features/research`, `src/features/crm`: feature-specific logic when the app grows

## Risks to avoid

- Hard-coding content structure directly inside page templates.
- Letting one large stylesheet or one data file become the de facto framework.
- Mixing admin/CRM concerns into public page rendering too early.
- Building overly generic abstractions before two or three real uses exist.

## Bottom line

This can become a strong framework seed for a research/blog platform. It is not yet a CRM system, but it has the right presentation and content structure to become one if you add a stronger entity model, admin workflows, and permissions as a separate layer.
