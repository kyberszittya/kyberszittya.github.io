import {
  dissertation,
  emailContacts,
  overviewLinks,
  researchAreas,
  scholarMetrics,
  socialLinks,
} from './site';

type HomeMetricInput = {
  graduatedStudentCount: number;
  graduatedStudentPercentage: number;
  publicationCount: number;
};

type HomePrimaryCardInput = {
  publicationCount: number;
  publicationPeriodCount: number;
  publishedBlogCount: number;
  activeStudentCount: number;
  totalStudentCount: number;
  currentAffiliationCount: number;
  researchTopicCount: number;
};

export const heroSocialLabels = ['GitHub', 'Twitter/X', 'Google Scholar', 'ResearchGate', 'ORCID'];

export const heroActions = [
  { href: '/research', label: 'Explore research', key: 'home.hero.ctaResearch', variant: 'button-primary' },
  { href: '/contact', label: 'Get in touch', key: 'home.hero.ctaContact', variant: 'button-secondary' },
] as const;

export const buildHomeHeroStats = ({
  graduatedStudentCount,
  graduatedStudentPercentage,
  publicationCount,
}: HomeMetricInput) => [
  { value: '211', label: 'citations', key: 'profile.stat.citations' },
  { value: '7', label: 'h-index', key: 'profile.stat.hindex' },
  {
    value: `${graduatedStudentCount} · ${graduatedStudentPercentage}%`,
    label: 'graduated students',
    key: 'profile.stat.graduatedStudents',
  },
  { value: `${publicationCount}`, label: 'publication entries', key: 'profile.stat.publications' },
  { value: 'AI + Robotics', label: 'core domain', key: 'profile.stat.domain' },
];

export const overviewSection = {
  kicker: 'Overview',
  kickerKey: 'home.overview.kicker',
  title: 'Research, education, and creative directions',
  titleKey: 'home.overview.title',
};

export function buildHomePrimaryCards({
  publicationCount,
  publicationPeriodCount,
  publishedBlogCount,
  activeStudentCount,
  totalStudentCount,
  currentAffiliationCount,
  researchTopicCount,
}: HomePrimaryCardInput) {
  return [
    {
      kicker: 'Main contact',
      kickerKey: 'home.contact.kicker',
      title: 'University email addresses',
      titleKey: 'home.contact.title',
      items: emailContacts.map((entry, index) => ({
        title: entry.label,
        titleKey: index === 0 ? 'profile.email.sze' : 'profile.email.obuda',
        href: entry.href,
        hrefLabel: entry.value,
      })),
    },
    {
      kicker: 'Scholar metrics',
      kickerKey: 'home.metrics.kicker',
      title: 'Research visibility at a glance',
      titleKey: 'home.metrics.title',
      items: [
        {
          title: 'Citations',
          titleKey: 'metrics.citations',
          text: `${scholarMetrics.citations.all} total, ${scholarMetrics.citations.since2021} since 2021`,
          textKey: 'metrics.citations.value',
        },
        {
          title: 'h-index',
          titleKey: 'metrics.hindex',
          text: `${scholarMetrics.hIndex.all} total, ${scholarMetrics.hIndex.since2021} since 2021`,
          textKey: 'metrics.hindex.value',
        },
        {
          title: 'i10-index',
          titleKey: 'metrics.i10index',
          text: `${scholarMetrics.i10Index.all} total, ${scholarMetrics.i10Index.since2021} since 2021`,
          textKey: 'metrics.i10index.value',
        },
      ],
    },
    {
      kicker: 'Site metrics',
      kickerKey: 'home.siteMetrics.kicker',
      title: 'Archive and activity overview',
      titleKey: 'home.siteMetrics.title',
      items: [
        {
          title: 'Publication archive',
          titleKey: 'home.siteMetrics.publications',
          text: `${publicationCount} entries across ${publicationPeriodCount} archive periods`,
        },
        {
          title: 'Student supervision',
          titleKey: 'home.siteMetrics.students',
          text: `${activeStudentCount} active out of ${totalStudentCount} tracked students`,
        },
        {
          title: 'Research topics',
          titleKey: 'home.siteMetrics.research',
          text: `${researchTopicCount} topic pages, ${currentAffiliationCount} current affiliations, ${publishedBlogCount} published blog posts`,
        },
      ],
    },
  ] as const;
}

export const homeFeatureCards = [
  {
    kicker: 'Dissertation',
    title: dissertation.title,
    summary: dissertation.summary,
    items: [
      {
        title: dissertation.degree,
        lines: [dissertation.institution, dissertation.evaluation],
      },
    ],
    cta: {
      href: '/dissertation',
      label: 'Open dissertation overview',
    },
  },
  {
    kicker: 'Featured research',
    title: 'HyMeKo',
    summary:
      'Hypergraph-based semantic modeling for representing knowledge, behavior, and cognitive structure across robotics and intelligent systems.',
    items: [
      {
        title: 'Research link',
        href: '/research/hymeko',
        hrefLabel: 'Open HyMeKo page',
      },
      {
        title: 'Dissertation link',
        href: '/dissertation',
        hrefLabel: 'Open dissertation overview',
      },
    ],
  },
] as const;

export const academicReachSection = {
  kicker: 'Academic reach',
  title: 'Where to find my work',
  summary: 'Profiles, code, citations, and academic presence collected in one place for quick access.',
  links: socialLinks
    .filter((item) => heroSocialLabels.includes(item.label))
    .map((item) => ({ href: item.href, label: item.label })),
};

export const overviewCards = overviewLinks.map((item) => ({
  title: item.label,
  description: item.description,
  href: item.href,
}));

export const researchHighlightSection = {
  kicker: 'Research highlights',
  kickerKey: 'home.researchHighlights.kicker',
  title: 'Current topic pages',
  titleKey: 'home.researchHighlights.title',
  cards: researchAreas.map((area) => ({
    title: area.title,
    description: area.description,
    href: `/research/${area.slug}`,
    hrefKey: 'common.openTopicPage',
    hrefLabel: 'Open topic page',
  })),
};
