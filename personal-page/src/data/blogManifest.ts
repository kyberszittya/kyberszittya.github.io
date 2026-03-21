import type { PageSection } from './pageSections';

type BlogManifestPost = {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  dateLabel: string;
  href: string;
  featured?: boolean;
};

export function buildBlogPageSections(posts: BlogManifestPost[]): PageSection[] {
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const latestPosts = featuredPost ? posts.filter((post) => post.id !== featuredPost.id) : posts;
  const sections: PageSection[] = [];

  if (featuredPost) {
    sections.push({
      type: 'article-card-grid',
      tone: 'blue',
      layoutClassName: 'card-grid-wide',
      kicker: 'Featured entry',
      title: 'Highlighted post',
      cards: [
        {
          kicker: featuredPost.category,
          title: featuredPost.title,
          summary: featuredPost.summary,
          meta: [
            { label: 'Published', value: featuredPost.dateLabel },
            { label: 'Category', value: featuredPost.category },
            { label: 'Tags', value: featuredPost.tags.join(', ') || 'None yet' },
          ],
          chips: featuredPost.tags,
          href: featuredPost.href,
          hrefLabel: 'Read featured post',
        },
      ],
    });
  }

  sections.push({
    type: 'article-card-grid',
    tone: 'indigo',
    layoutClassName: 'card-grid',
    kicker: 'Archive',
    title: 'Latest writing',
    cards: latestPosts.map((post) => ({
      kicker: post.category,
      title: post.title,
      summary: post.summary,
      meta: [{ label: 'Published', value: post.dateLabel }],
      chips: post.tags,
      href: post.href,
      hrefLabel: 'Open post',
    })),
  });

  return sections;
}
