import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  })
});

const lectures = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lectures" }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
  })
});

const students = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/students" }),
  schema: z.object({
    name: z.string(),
    researchTopic: z.string(),
    active: z.boolean().default(true),
  })
});

export const collections = { blog, lectures, students };