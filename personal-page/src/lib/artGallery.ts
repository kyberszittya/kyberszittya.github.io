import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

type ArtImage = {
  src: string;
  alt: string;
};

export type ArtGalleryGroup = {
  id: string;
  slug: string;
  title: string;
  imageCount: number;
  images: ArtImage[];
};

const SUPPORTED_IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

function toTitleCase(value: string) {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function getArtGalleryGroups(): ArtGalleryGroup[] {
  const artRoot = resolve(process.cwd(), 'public/art');

  return readdirSync(artRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((directory) => {
      const slug = directory.name;
      const title = toTitleCase(slug);
      const categoryPath = resolve(artRoot, slug);
      const images = readdirSync(categoryPath, { withFileTypes: true })
        .filter((entry) => entry.isFile())
        .filter((entry) => SUPPORTED_IMAGE_EXTENSIONS.has(entry.name.slice(entry.name.lastIndexOf('.')).toLowerCase()))
        .map((entry, index) => ({
          src: `/art/${slug}/${entry.name}`,
          alt: `${title} artwork ${index + 1}`,
        }));

      return {
        id: `art-${slug}`,
        slug,
        title,
        imageCount: images.length,
        images,
      };
    })
    .filter((group) => group.imageCount > 0)
    .sort((a, b) => a.title.localeCompare(b.title));
}
