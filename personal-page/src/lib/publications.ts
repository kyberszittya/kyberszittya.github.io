import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export type Publication = {
  key: string;
  slug: string;
  type: string;
  title: string;
  authors: string[];
  year: number | null;
  venue: string;
  pages?: string;
  publisher?: string;
  organization?: string;
  volume?: string;
  number?: string;
  externalUrl: string;
  externalLabel: string;
};

function stripOuterDelimiters(value: string) {
  let output = value.trim();

  while (
    (output.startsWith('{') && output.endsWith('}')) ||
    (output.startsWith('"') && output.endsWith('"'))
  ) {
    output = output.slice(1, -1).trim();
  }

  return output.replace(/\s+/g, ' ').trim();
}

function parseAuthors(value: string) {
  return stripOuterDelimiters(value)
    .split(/\s+and\s+/i)
    .map((author) => author.trim())
    .filter(Boolean);
}

function makeSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getPublications(): Publication[] {
  const bibPath = resolve(process.cwd(), '../cite.bibtex');
  const content = readFileSync(bibPath, 'utf8');
  const lines = content.split(/\r?\n/);
  const publications: Publication[] = [];

  let current:
    | {
        key: string;
        type: string;
        fields: Record<string, string>;
      }
    | undefined;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      continue;
    }

    const start = trimmed.match(/^@([a-zA-Z]+)\{([^,]+),$/);
    if (start) {
      current = {
        type: start[1].toLowerCase(),
        key: start[2].trim(),
        fields: {},
      };
      continue;
    }

    if (!current) {
      continue;
    }

    if (trimmed === '}') {
      const yearValue = current.fields.year ? Number.parseInt(stripOuterDelimiters(current.fields.year), 10) : null;
      const venueField = current.fields.journal ?? current.fields.booktitle ?? '';
      const title = stripOuterDelimiters(current.fields.title ?? current.key);
      const doi = current.fields.doi ? stripOuterDelimiters(current.fields.doi) : '';
      const url = current.fields.url ? stripOuterDelimiters(current.fields.url) : '';
      const externalUrl =
        url ||
        (doi ? `https://doi.org/${doi.replace(/^https?:\/\/doi\.org\//i, '')}` : '') ||
        `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
      const externalLabel = url ? 'Article link' : doi ? 'DOI' : 'Google Scholar search';

      publications.push({
        key: current.key,
        slug: makeSlug(current.key),
        type: current.type,
        title,
        authors: parseAuthors(current.fields.author ?? ''),
        year: Number.isNaN(yearValue ?? NaN) ? null : yearValue,
        venue: stripOuterDelimiters(venueField),
        pages: current.fields.pages ? stripOuterDelimiters(current.fields.pages) : undefined,
        publisher: current.fields.publisher ? stripOuterDelimiters(current.fields.publisher) : undefined,
        organization: current.fields.organization ? stripOuterDelimiters(current.fields.organization) : undefined,
        volume: current.fields.volume ? stripOuterDelimiters(current.fields.volume) : undefined,
        number: current.fields.number ? stripOuterDelimiters(current.fields.number) : undefined,
        externalUrl,
        externalLabel,
      });

      current = undefined;
      continue;
    }

    const fieldMatch = trimmed.match(/^([a-zA-Z]+)\s*=\s*(.+?)(,)?$/);
    if (fieldMatch) {
      current.fields[fieldMatch[1].toLowerCase()] = fieldMatch[2].trim();
    }
  }

  return publications.sort((a, b) => {
    const yearA = a.year ?? 0;
    const yearB = b.year ?? 0;
    if (yearA !== yearB) {
      return yearB - yearA;
    }

    return a.title.localeCompare(b.title);
  });
}
