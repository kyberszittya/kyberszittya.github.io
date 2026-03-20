import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;
export type StudentEntry = CollectionEntry<'students'>;
export type ExperienceEntry = CollectionEntry<'experience'>;

export type BlogPostEntity = {
  entry: BlogEntry;
  id: string;
  slug: string;
  href: string;
  title: string;
  summary: string;
  date: Date;
  updatedDate?: Date;
  draft: boolean;
  featured: boolean;
  category: string;
  tags: string[];
  series?: string;
};

export type StudentWorkEntity = {
  entry: StudentEntry;
  id: string;
  href: string;
  name: string;
  researchTopic: string;
  program?: string;
  degree: 'bsc' | 'msc' | 'other';
  degreeLabel: string;
  folderYear?: string;
  graduationYear?: number;
  resolvedYear: string;
  startSemester?: string;
  endSemester?: string;
  note?: string;
  active: boolean;
};

export type ExperienceEntity = {
  entry: ExperienceEntry;
  id: string;
  title: string;
  organization: string;
  period: string;
  startDate: Date;
  current: boolean;
  category: 'affiliation' | 'experience';
};

export function getBlogPostSlug(post: BlogEntry) {
  return post.data.slug ?? post.id.replace(/\.md$/i, '');
}

export function mapBlogPostEntity(post: BlogEntry): BlogPostEntity {
  const slug = getBlogPostSlug(post);

  return {
    entry: post,
    id: post.id,
    slug,
    href: `/blog/${slug}`,
    title: post.data.title,
    summary: post.data.summary,
    date: post.data.date,
    updatedDate: post.data.updatedDate,
    draft: post.data.draft,
    featured: post.data.featured,
    category: post.data.category,
    tags: post.data.tags,
    series: post.data.series,
  };
}

export function getStudentDegree(student: StudentEntry): StudentWorkEntity['degree'] {
  const [degree = 'other'] = student.id.split('/');
  return degree === 'bsc' || degree === 'msc' ? degree : 'other';
}

export function getStudentResolvedYear(student: StudentEntry) {
  return String(student.data.graduationYear ?? student.id.split('/')[1] ?? 'unknown');
}

export function mapStudentWorkEntity(student: StudentEntry): StudentWorkEntity {
  const degree = getStudentDegree(student);
  const folderYear = student.id.split('/')[1];

  return {
    entry: student,
    id: student.id,
    href: `/education/students/${student.id}`,
    name: student.data.name,
    researchTopic: student.data.researchTopic,
    program: student.data.program,
    degree,
    degreeLabel: degree === 'other' ? 'Student' : degree.toUpperCase(),
    folderYear,
    graduationYear: student.data.graduationYear,
    resolvedYear: getStudentResolvedYear(student),
    startSemester: student.data.startSemester,
    endSemester: student.data.endSemester,
    note: student.data.note,
    active: student.data.active,
  };
}

export function mapExperienceEntity(entry: ExperienceEntry): ExperienceEntity {
  return {
    entry,
    id: entry.id,
    title: entry.data.title,
    organization: entry.data.organization,
    period: entry.data.period,
    startDate: entry.data.startDate,
    current: entry.data.current,
    category: entry.data.category,
  };
}

export async function fetchBlogPostEntities() {
  const posts = await getCollection('blog');
  return posts.map(mapBlogPostEntity);
}

export async function fetchStudentWorkEntities() {
  const students = await getCollection('students');
  return students.map(mapStudentWorkEntity);
}

export async function fetchExperienceEntities() {
  const experience = await getCollection('experience');
  return experience.map(mapExperienceEntity);
}
