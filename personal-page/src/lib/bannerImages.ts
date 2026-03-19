import { readdir } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const publicRoot = fileURLToPath(new URL('../../public', import.meta.url));
const bannerRoot = join(publicRoot, 'banners');
const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);

export async function collectBannerImages(pathname: string) {
  const segments = pathname
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean);

  const bannerDir = join(bannerRoot, ...segments);

  try {
    const files = await readdir(bannerDir);
    return files
      .filter((file) => imageExtensions.has(extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => encodeURI(`/banners/${segments.join('/')}/${file}`));
  } catch {
    return [];
  }
}
