import {
  academicReachSection,
  homeFeatureCards,
  homePrimaryCards,
  overviewCards,
  overviewSection,
  researchHighlightSection,
} from './home';
import type { PageSection } from './pageSections';

export function buildHomePageSections(introParagraphs: string[]): PageSection[] {
  return [
    {
      type: 'text',
      tone: 'cyan',
      sectionClassName: 'section-block',
      surfaceClassName: 'section-surface section-surface-golden',
      kicker: overviewSection.kicker,
      kickerKey: overviewSection.kickerKey,
      title: overviewSection.title,
      titleKey: overviewSection.titleKey,
      paragraphs: introParagraphs.map((text, index) => ({
        text,
        key: `home.intro.${index}`,
      })),
    },
    {
      type: 'stack-cards',
      tone: 'blue',
      layoutClassName: 'card-grid-wide card-grid-golden card-grid-golden-wide',
      cards: homePrimaryCards.map((card) => ({
        kicker: card.kicker,
        kickerKey: card.kickerKey,
        title: card.title,
        titleKey: card.titleKey,
        items: [...card.items],
      })),
    },
    {
      type: 'stack-cards',
      tone: 'violet',
      layoutClassName: 'card-grid-wide card-grid-golden card-grid-golden-wide',
      cards: homeFeatureCards.map((card) => ({
        kicker: card.kicker,
        title: card.title,
        summary: card.summary,
        items: [...card.items],
        cta: card.cta,
      })),
    },
    {
      type: 'link-band',
      tone: 'magenta',
      className: 'floating-reach-band',
      kicker: academicReachSection.kicker,
      title: academicReachSection.title,
      summary: academicReachSection.summary,
      links: [...academicReachSection.links],
    },
    {
      type: 'info-card-grid',
      tone: 'indigo',
      layoutClassName: 'card-grid card-grid-golden',
      cards: overviewCards.map((item) => ({
        title: item.title,
        description: item.description,
        href: item.href,
        hrefLabel: `Open ${item.title}`,
      })),
    },
    {
      type: 'info-card-grid',
      tone: 'cyan-soft',
      layoutClassName: 'card-grid card-grid-golden',
      kicker: researchHighlightSection.kicker,
      kickerKey: researchHighlightSection.kickerKey,
      title: researchHighlightSection.title,
      titleKey: researchHighlightSection.titleKey,
      cards: researchHighlightSection.cards.map((card) => ({
        title: card.title,
        description: card.description,
        href: card.href,
        hrefLabel: card.hrefLabel,
        hrefKey: card.hrefKey,
      })),
    },
  ];
}
