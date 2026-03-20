import {
  fetchBlogPostEntities,
  fetchExperienceEntities,
  fetchStudentWorkEntities,
  type BlogPostEntity,
  type ExperienceEntity,
  type StudentWorkEntity,
} from './contentEntities';

export async function getPublishedBlogPosts() {
  const posts = await fetchBlogPostEntities();

  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getExperienceRecords() {
  const entries = await fetchExperienceEntities();

  return entries.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
}

export async function getStudentWorkRecords() {
  const students = await fetchStudentWorkEntities();

  return students.sort((a, b) => {
    const yearDiff = (b.graduationYear ?? 0) - (a.graduationYear ?? 0);
    if (yearDiff !== 0) return yearDiff;
    return a.name.localeCompare(b.name);
  });
}

export async function getStudentWorkGroups() {
  const students = await getStudentWorkRecords();
  const availableYears = Array.from(new Set(students.map((student) => student.resolvedYear)))
    .filter((year) => year !== 'unknown')
    .sort((a, b) => Number(b) - Number(a));

  const groupsByDegree = {
    bsc: students.filter((student) => student.degree === 'bsc'),
    msc: students.filter((student) => student.degree === 'msc'),
  } as const;

  const yearGroups = {
    bsc: availableYears
      .map((year) => ({
        year,
        students: groupsByDegree.bsc.filter((student) => student.resolvedYear === year),
      }))
      .filter((group) => group.students.length > 0),
    msc: availableYears
      .map((year) => ({
        year,
        students: groupsByDegree.msc.filter((student) => student.resolvedYear === year),
      }))
      .filter((group) => group.students.length > 0),
  };

  return {
    students,
    availableYears,
    groupsByDegree,
    yearGroups,
  };
}

export async function getStudentMetrics() {
  const students = await fetchStudentWorkEntities();
  const totalCount = students.length;
  const graduatedCount = students.filter((student) => !student.active).length;
  const activeCount = totalCount - graduatedCount;
  const graduatedPercentage = totalCount > 0
    ? Math.round((graduatedCount / totalCount) * 100)
    : 0;

  return {
    totalCount,
    activeCount,
    graduatedCount,
    graduatedPercentage,
  };
}

export function findStudentWorkById(students: StudentWorkEntity[], id: string) {
  return students.find((student) => student.id === id);
}

export function findBlogPostBySlug(posts: BlogPostEntity[], slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatContentDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
