import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export type BibtexEntry = {
  key: string;
  type: string;
  title: string;
  authors: string[];
  year: number | null;
  venue: string;
  code: string;
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

export function parseBibtexEntries(content: string): BibtexEntry[] {
  const lines = content.split(/\r?\n/);
  const entries: BibtexEntry[] = [];

  let current:
    | {
        type: string;
        key: string;
        fields: Record<string, string>;
        rawLines: string[];
      }
    | undefined;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed && !current) {
      continue;
    }

    const start = trimmed.match(/^@([a-zA-Z]+)\{([^,]+),$/);
    if (start) {
      current = {
        type: start[1].toLowerCase(),
        key: start[2].trim(),
        fields: {},
        rawLines: [line],
      };
      continue;
    }

    if (!current) {
      continue;
    }

    current.rawLines.push(line);

    if (trimmed === '}') {
      const title = stripOuterDelimiters(current.fields.title ?? current.key);
      const venue = stripOuterDelimiters(current.fields.journal ?? current.fields.booktitle ?? '');
      const yearValue = current.fields.year ? Number.parseInt(stripOuterDelimiters(current.fields.year), 10) : null;

      entries.push({
        key: current.key,
        type: current.type,
        title,
        authors: parseAuthors(current.fields.author ?? ''),
        year: Number.isNaN(yearValue ?? NaN) ? null : yearValue,
        venue,
        code: current.rawLines.join('\n').trim(),
      });

      current = undefined;
      continue;
    }

    const fieldMatch = trimmed.match(/^([a-zA-Z]+)\s*=\s*(.+?)(,)?$/);
    if (fieldMatch) {
      current.fields[fieldMatch[1].toLowerCase()] = fieldMatch[2].trim();
    }
  }

  return entries.sort((a, b) => {
    const yearA = a.year ?? 0;
    const yearB = b.year ?? 0;
    if (yearA !== yearB) {
      return yearB - yearA;
    }

    return a.title.localeCompare(b.title);
  });
}

export function readBibtexEntries(relativePath: string) {
  const filePath = resolve(process.cwd(), relativePath);
  const content = readFileSync(filePath, 'utf8');
  return parseBibtexEntries(content);
}
