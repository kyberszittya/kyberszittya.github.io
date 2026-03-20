import { getPublishedBlogPosts as getPublishedBlogPostEntities, formatContentDate } from './contentQueries';

export async function getPublishedPosts() {
  return getPublishedBlogPostEntities();
}

export function getPostSlug(post: { slug: string }) {
  return post.slug;
}

export function formatBlogDate(date: Date) {
  return formatContentDate(date);
}
