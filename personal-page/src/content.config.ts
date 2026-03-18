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
    neptunCode: z.string().optional(),
    tags: z.array(z.string()).optional(),
    subjectSummary: z.string().optional(),
    semesters: z.array(z.string()).optional(),
    teachingLanguages: z.array(z.string()).optional(),
    mascot: z.object({
      name: z.string(),
      shortLabel: z.string().optional(),
      description: z.string().optional(),
      accent: z.string().optional(),
      emoji: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
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
