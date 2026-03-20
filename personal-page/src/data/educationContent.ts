export const thesisFaqSections = [
  {
    id: 'thesis-faq-before-starting',
    title: 'Before starting',
    titleKey: 'page.thesisFaq.start',
    items: [
      'Choose a topic that is narrow enough to finish well, but meaningful enough to demonstrate real engineering or research value.',
      'Clarify the expected outcome early: literature review, prototype, experiment, software artifact, dataset, or system integration.',
      'Agree on the language of the work and presentation in advance, especially if the topic is developed in both Hungarian and English contexts.',
      'Start collecting references from the beginning so the final writing phase is not separated from the technical work.',
    ],
    itemKeys: [
      'page.thesisFaq.start.0',
      'page.thesisFaq.start.1',
      'page.thesisFaq.start.2',
      'page.thesisFaq.start.3',
    ],
  },
  {
    id: 'thesis-faq-working-together',
    title: 'Working together',
    titleKey: 'page.thesisFaq.workflow',
    items: [
      'Keep progress visible through short updates, versioned files, and clearly named milestones.',
      'Bring partial drafts early. It is much easier to improve a rough chapter or prototype than to repair a full late-stage submission.',
      'Document decisions, assumptions, and open questions while working, not only at the end.',
      'When software is involved, keep the repository runnable and reproducible so evaluation and continuation stay straightforward.',
    ],
    itemKeys: [
      'page.thesisFaq.workflow.0',
      'page.thesisFaq.workflow.1',
      'page.thesisFaq.workflow.2',
      'page.thesisFaq.workflow.3',
    ],
  },
  {
    id: 'thesis-faq-deliverables',
    title: 'Deliverables and expectations',
    titleKey: 'page.thesisFaq.delivery',
    items: [
      'The written thesis should explain the problem, context, method, implementation, evaluation, and conclusions in a coherent structure.',
      'Figures, tables, and experimental results should support the argument, not just decorate it.',
      'Code, experiments, and references should be organized so another person can understand what was done and why.',
      'A strong thesis shows both technical execution and reflective thinking about limitations, tradeoffs, and future work.',
    ],
    itemKeys: [
      'page.thesisFaq.delivery.0',
      'page.thesisFaq.delivery.1',
      'page.thesisFaq.delivery.2',
      'page.thesisFaq.delivery.3',
    ],
  },
  {
    id: 'thesis-faq-key-points',
    title: 'Most important things to know',
    titleKey: 'page.thesisFaq.tips',
    items: [
      'Do not leave writing to the final weeks. Write continuously alongside the implementation.',
      'Make the scope realistic. A finished and well-evaluated smaller system is better than an oversized unfinished one.',
      'Back up everything: text, code, figures, data, and notes.',
      'Ask questions early when something is unclear. Small uncertainties tend to become large delays if they remain implicit.',
    ],
    itemKeys: [
      'page.thesisFaq.tips.0',
      'page.thesisFaq.tips.1',
      'page.thesisFaq.tips.2',
      'page.thesisFaq.tips.3',
    ],
  },
] as const;

export const tdkGuideSections = {
  foundations: [
    {
      id: 'tdk-what-belongs-here',
      title: 'What belongs here',
      items: [
        'Student research ideas that go beyond standard course assignments.',
        'Topics with experimental, analytical, or prototype-oriented outcomes.',
        'Work that can grow into a TDK submission, thesis topic, publication, or demonstrator.',
      ],
    },
    {
      id: 'tdk-good-directions',
      title: 'Good TDK directions',
      items: [
        'Artificial intelligence and robotics applications with measurable evaluation.',
        'Hypergraph-based modeling, structured knowledge, and semantic representations.',
        'Industrial and cyber-physical systems with interpretable data-driven methods.',
      ],
    },
  ],
  practice: [
    {
      id: 'tdk-how-we-work',
      title: 'How we can work on it',
      items: [
        'Start from a focused research question instead of a broad software project alone.',
        'Keep notes, references, experiment logs, and intermediate results from the beginning.',
        'Build toward a clear outcome: report, presentation, prototype, experiment, or competition submission.',
      ],
    },
    {
      id: 'tdk-expected-outcomes',
      title: 'Expected outcomes',
      items: [
        'A well-scoped written summary with related work and evaluation.',
        'A reproducible artifact such as code, dataset, experiment setup, or demo.',
        'A presentation-ready storyline for internal review, TDK, or later thesis continuation.',
      ],
    },
  ],
} as const;
