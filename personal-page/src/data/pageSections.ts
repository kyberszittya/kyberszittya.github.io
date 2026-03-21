import type { StackListItem } from '../components/StackList.astro';
import type { SubjectSummaryRecord } from '../lib/subjectQueries';

export type SectionTone =
  | 'cyan'
  | 'cyan-soft'
  | 'blue'
  | 'violet'
  | 'magenta'
  | 'indigo';

export type TextSection = {
  type: 'text';
  tone: SectionTone;
  kicker?: string;
  kickerKey?: string;
  title: string;
  titleKey?: string;
  paragraphs: { text: string; key?: string }[];
  sectionClassName?: string;
  surfaceClassName?: string;
};

export type StackCardSection = {
  type: 'stack-cards';
  tone: SectionTone;
  layoutClassName: string;
  cards: {
    kicker?: string;
    kickerKey?: string;
    title: string;
    titleKey?: string;
    summary?: string;
    items?: StackListItem[];
    cta?: { href: string; label: string };
  }[];
};

export type LinkBandSection = {
  type: 'link-band';
  tone: SectionTone;
  kicker: string;
  kickerKey?: string;
  title: string;
  titleKey?: string;
  summary: string;
  summaryKey?: string;
  className?: string;
  links: { href: string; label: string }[];
};

export type InfoCardGridSection = {
  type: 'info-card-grid';
  tone: SectionTone;
  layoutClassName: string;
  cards: {
    title: string;
    description: string;
    href: string;
    hrefLabel?: string;
    hrefKey?: string;
  }[];
  kicker?: string;
  kickerKey?: string;
  titleKey?: string;
  title?: string;
};

export type ArticleCardGridSection = {
  type: 'article-card-grid';
  tone: SectionTone;
  layoutClassName: string;
  cards: {
    kicker?: string;
    kickerKey?: string;
    title: string;
    titleKey?: string;
    summary: string;
    meta?: { label: string; value: string }[];
    chips?: string[];
    href: string;
    hrefLabel: string;
    hrefKey?: string;
  }[];
  kicker?: string;
  kickerKey?: string;
  title?: string;
  titleKey?: string;
};

export type DetailCardGridSection = {
  type: 'detail-card-grid';
  tone: SectionTone;
  layoutClassName: string;
  cards: {
    id?: string;
    title: string;
    titleKey?: string;
    items?: StackListItem[];
    body?: { text: string; key?: string }[];
    subtitle?: string;
    subtitleKey?: string;
    chips?: string[];
    links?: { href: string; label: string; key?: string }[];
  }[];
};

export type SubjectSummaryGridSection = {
  type: 'subject-summary-grid';
  tone: SectionTone;
  layoutClassName: string;
  id?: string;
  title: string;
  titleKey?: string;
  subjects: SubjectSummaryRecord[];
};

export type PageSection =
  | TextSection
  | StackCardSection
  | LinkBandSection
  | InfoCardGridSection
  | ArticleCardGridSection
  | DetailCardGridSection
  | SubjectSummaryGridSection;
