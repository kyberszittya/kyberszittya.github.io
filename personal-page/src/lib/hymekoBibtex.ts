import { readBibtexEntries } from './bibtex';

export function getHymekoBibtexEntries() {
  return readBibtexEntries('public/research/hymeko.bib');
}
