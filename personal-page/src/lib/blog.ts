import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getPostSlug(post: { id: string; data: { slug?: string } }) {
  return post.data.slug ?? post.id.replace(/\.md$/i, '');
}

export function formatBlogDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
