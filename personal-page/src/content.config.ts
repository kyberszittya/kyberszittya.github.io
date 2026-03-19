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
    courseWebsite: z.string().url().optional(),
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
    program: z.string().optional(),
    startSemester: z.string().optional(),
    endSemester: z.string().optional(),
    note: z.string().optional(),
    graduationYear: z.number().int().optional(),
    active: z.boolean().default(true),
  })
});

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    period: z.string(),
    startDate: z.date(),
    current: z.boolean().default(false),
    category: z.enum(['affiliation', 'experience']).default('affiliation'),
  })
});

const tdk = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tdk" }),
  schema: z.object({
    title: z.string(),
    studentName: z.string(),
    placement: z.string(),
    year: z.number().int(),
    degree: z.enum(['bsc', 'msc']).optional(),
    studentHref: z.string().optional(),
    workTitle: z.string().optional(),
    summary: z.string(),
    sourceNote: z.string().optional(),
    graduated: z.boolean().default(false),
  })
});

export const collections = { blog, lectures, students, experience, tdk };
