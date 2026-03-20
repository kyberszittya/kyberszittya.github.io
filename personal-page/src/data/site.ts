import { z } from 'astro:content';

const statSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const researchAreaSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  highlights: z.array(z.string()),
});

const overviewLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  description: z.string(),
});

const degreeSchema = z.object({
  title: z.string(),
  track: z.string().optional(),
  details: z.array(z.string()),
});

const socialLinkSchema = z.object({
  label: z.string(),
  value: z.string(),
  href: z.string(),
});

const contactInfoSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const emailContactSchema = z.object({
  label: z.string(),
  value: z.string(),
  href: z.string(),
});

const siteConfigSchema = z.object({
  hero: z.object({
    name: z.string(),
    handle: z.string(),
    role: z.string(),
    tagline: z.string(),
    summary: z.string(),
    intro: z.array(z.string()),
    stats: z.array(statSchema),
  }),
  research: z.object({
    focus: z.array(z.string()),
    background: z.array(z.string()),
    areas: z.array(researchAreaSchema),
  }),
  overviewLinks: z.array(overviewLinkSchema),
  education: z.object({
    degrees: z.array(degreeSchema),
    teachingProfile: z.object({
      title: z.string(),
      period: z.string(),
      description: z.string(),
      languages: z.array(z.string()),
    }),
    students: z.object({
      bsc: z.array(z.object({ name: z.string(), topic: z.string() })),
      msc: z.array(z.object({ name: z.string(), topic: z.string() })),
    }),
  }),
  legacyExperience: z.array(z.object({
    title: z.string(),
    org: z.string(),
    period: z.string(),
  })),
  scholarProfile: z.object({
    label: z.string(),
    href: z.string(),
  }),
  dissertation: z.object({
    title: z.string(),
    degree: z.string(),
    institution: z.string(),
    evaluation: z.string(),
    pdfHref: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()),
  }),
  socialLinks: z.array(socialLinkSchema),
  scholarMetrics: z.object({
    citations: z.object({
      all: z.number(),
      since2021: z.number(),
    }),
    hIndex: z.object({
      all: z.number(),
      since2021: z.number(),
    }),
    i10Index: z.object({
      all: z.number(),
      since2021: z.number(),
    }),
    note: z.string(),
    sourceLabel: z.string(),
    sourceHref: z.string(),
  }),
  emailContacts: z.array(emailContactSchema),
  skills: z.array(z.string()),
  languages: z.array(z.string()),
  arts: z.object({
    summary: z.string(),
    highlights: z.array(z.string()),
  }),
  contact: z.array(contactInfoSchema),
});

export const siteConfig = siteConfigSchema.parse({
  hero: {
    name: 'Hajdu Csaba',
    handle: '@kyberszittya',
    role: 'Assistant Lecturer & Researcher',
    tagline: 'Researcher in Cognitive Systems, Artificial Intelligence and Robotics',
    summary:
      'I build semantic, cognitive, and robotic systems that connect formal models with real-world autonomous behavior based on hypergraph models.',
    intro: [
      'Welcome to my personal page. My work focuses on cognitive systems, artificial intelligence, and robotics, with a strong emphasis on hypergraph-based semantic models and their use in autonomous platforms.',
      'I am currently an Assistant Lecturer at Szechenyi Istvan University and a Researcher at Obuda University in Hungary. My interests span advanced cognitive models, intelligent robotic systems, and the specification-driven analysis of complex environments.',
      'This site brings together my research directions, education activities, supervised students, and selected creative interests in one place.',
    ],
    stats: [
      { value: '211', label: 'citations' },
      { value: '7', label: 'h-index' },
      { value: '2', label: 'active affiliations' },
      { value: 'AI + Robotics', label: 'core domain' },
    ],
  },
  research: {
    focus: [
      'Hypergraph-based semantic models',
      'Hypergraph-based cognitive systems',
      'Specification-based monitoring of test environments',
      'Industrial applications based on hypergraph models',
      'Tensor-based models of cognitive systems',
      'Sparse representation in neural networks',
      'Behavior definition based on hypergraph models',
      'Structural entropy feedback in neural networks',
      'Structured prompting based on hypergraph definitions',
      'Simulation definition and analysis based on hypergraph models and LLMs',
    ],
    background: [
      'Autonomous vehicle trajectory following',
      'Precise geolocation-based localization',
      'Etho-robotics and interaction modeling',
      'Decision processes of autonomous systems',
      'Agricultural applications',
      'Model-based environment generation',
      'Specification-based monitoring of test environments',
      'Simulator-based V&V of autonomous systems',
    ],
    areas: [
      {
        id: 'behavior-analysis',
        slug: 'behavior-analysis',
        title: 'Behavior analysis',
        description:
          'Formal behavior descriptions, adaptive observation pipelines, and semantic representations for complex autonomous and human-centered systems.',
        highlights: [
          'Behavior observation pipelines for structured analysis',
          'Semantic abstractions for decision and interaction patterns',
          'Interpretability-oriented modeling of complex systems',
        ],
      },
      {
        id: 'hymeko',
        slug: 'hymeko',
        title: 'HyMeKo',
        description:
          'Hypergraph-based semantic modeling for representing knowledge, behavior, and cognitive structure across robotics and intelligent systems.',
        highlights: [
          'Knowledge representation grounded in hypergraph structures',
          'Cognitive modeling through semantic relations and transformations',
          'Bridging symbolic structure with autonomous system behavior',
        ],
      },
      {
        id: 'etho-robotics',
        slug: 'etho-robotics',
        title: 'Etho-robotics',
        description:
          'Interaction modeling inspired by ethology, with a focus on natural behavior, cooperative autonomy, and interpretable decision-making.',
        highlights: [
          'Ethology-inspired interaction modeling for embodied agents',
          'Naturalistic behavior design in collaborative contexts',
          'Readable decision processes for human-robot interaction',
        ],
      },
      {
        id: 'industrial-robotics',
        slug: 'industrial-robotics',
        title: 'Industrial-robotics',
        description:
          'Applied robotic solutions for industrial environments, combining safe automation, monitoring, and model-driven system design.',
        highlights: [
          'Monitoring and verification in production environments',
          'Model-based design for robust automation workflows',
          'Industrial deployment with traceability and safety in mind',
        ],
      },
      {
        id: 'industry-4-0',
        slug: 'industry-4-0',
        title: 'Industry 4.0',
        description:
          'Connected manufacturing systems, digital twins, smart monitoring, and AI-assisted operational intelligence for modern production contexts.',
        highlights: [
          'Digital twin and smart monitoring strategies',
          'Connected industrial systems with AI-assisted insight',
          'Cross-layer data interpretation for adaptive operations',
        ],
      },
    ],
  },
  overviewLinks: [
    {
      label: 'CV',
      href: '/cv',
      description: 'Academic background, affiliations, publications, and technical profile.',
    },
    {
      label: 'Dissertation',
      href: '/dissertation',
      description: 'Doctoral thesis overview, research framing, and core contribution highlights.',
    },
    {
      label: 'Research',
      href: '/research',
      description: 'Themes, focus areas, and dedicated subpages for each research direction.',
    },
    {
      label: 'Publications',
      href: '/publications',
      description: 'A dedicated publication archive sourced from Google Scholar and the local BibTeX file.',
    },
    {
      label: 'Education',
      href: '/education',
      description: 'Lectures, mentoring, and finished student supervision summaries.',
    },
    {
      label: 'Arts',
      href: '/arts',
      description: 'Visual interests, aesthetics, and space for future creative work.',
    },
    {
      label: 'Contact',
      href: '/contact',
      description: 'Collaboration topics and contact-oriented overview content.',
    },
  ],
  education: {
    degrees: [
      {
        title: 'PhD in Computer Science',
        track: 'Autonomous Systems',
        details: [
          'Thesis: "Hypergraph-Based Semantic Models in Cognitive and Robotic Systems"',
          'Evaluation: Excellent (Summa Cum Laude)',
          'Szechenyi Istvan University, Multidisciplinary Doctoral School of Engineering',
        ],
      },
      {
        title: 'MSc in Computer Science',
        track: 'Critical Systems',
        details: ['Budapest University of Technology and Economics (BME)'],
      },
      {
        title: 'BSc in Computer Science',
        details: ['Budapest University of Technology and Economics (BME)'],
      },
    ],
    teachingProfile: {
      title: 'University subject teaching',
      period: '2022 - Present',
      description:
        'Since 2022, my teaching activity has been organized primarily around full university subjects rather than standalone lectures, combining course design, subject maintenance, and teaching materials.',
      languages: ['English', 'Hungarian'],
    },
    students: {
      bsc: [
        { name: 'BSc student project placeholder', topic: 'Add finished BSc supervisees here as content grows.' },
      ],
      msc: [
        { name: 'MSc student project placeholder', topic: 'Add finished MSc supervisees here as content grows.' },
      ],
    },
  },
  legacyExperience: [
    {
      title: 'Assistant Lecturer',
      org: 'Szechenyi Istvan University, Department of Informatics',
      period: '2022 - Present',
    },
    {
      title: 'Researcher',
      org: 'Obuda University, Hungary',
      period: '2022 - Present',
    },
  ],
  scholarProfile: {
    label: 'Google Scholar profile',
    href: 'https://scholar.google.com/citations?user=QdCAR8MAAAAJ&hl=hu',
  },
  dissertation: {
    title: 'Hypergraph-Based Semantic Models in Cognitive and Robotic Systems',
    degree: 'PhD dissertation',
    institution: 'Szechenyi Istvan University, Multidisciplinary Doctoral School of Engineering',
    evaluation: 'Excellent (Summa Cum Laude)',
    pdfHref: '/dissertation/Doktori_final.pdf',
    summary:
      'A dissertation centered on hypergraph-based semantic modeling for cognitive systems and robotics, connecting formal structure, knowledge representation, and autonomous behavior.',
    highlights: [
      'Hypergraph-based semantic representations for cognitive and robotic systems',
      'Bridging formal models with embodied autonomous behavior',
      'Specification-oriented interpretation of complex environments and agent actions',
    ],
  },
  socialLinks: [
    { label: 'GitHub', value: 'kyberszittya', href: 'https://github.com/kyberszittya' },
    { label: 'Twitter/X', value: '@kyberszittya', href: 'https://x.com/kyberszittya' },
    { label: 'ResearchGate', value: 'Csaba Hajdu', href: 'https://www.researchgate.net/profile/Csaba-Hajdu?ev=hdr_xprf' },
    { label: 'Facebook', value: 'kyberszittya', href: 'https://www.facebook.com/kyberszittya/' },
    { label: 'ORCID', value: '0000-0002-1058-7525', href: 'https://orcid.org/0000-0002-1058-7525' },
    { label: 'Google Scholar', value: 'Scholar profile', href: 'https://scholar.google.com/citations?user=QdCAR8MAAAAJ' },
  ],
  scholarMetrics: {
    citations: { all: 211, since2021: 198 },
    hIndex: { all: 7, since2021: 7 },
    i10Index: { all: 5, since2021: 5 },
    note: 'Metrics provided manually from the Google Scholar profile.',
    sourceLabel: 'Google Scholar profile',
    sourceHref: 'https://scholar.google.com/citations?user=QdCAR8MAAAAJ',
  },
  emailContacts: [
    {
      label: 'Szechenyi Istvan University',
      value: 'hajdu.csaba@ga.sze.hu',
      href: 'mailto:hajdu.csaba@ga.sze.hu',
    },
    {
      label: 'Obuda University',
      value: 'hajdu.csaba@uni-obuda.hu',
      href: 'mailto:hajdu.csaba@uni-obuda.hu',
    },
  ],
  skills: [
    'ROS & ROS2',
    'Gazebo & LGSVL',
    'DDS (Connext/FastRTPS)',
    'IceOryx',
    'FreeRTOS & Arduino',
    'Neural Networks & RL',
    'PyTorch & TensorFlow',
    'Python', 'C++', 'Java', 'C#',
    'Unity',
    'Rust', 'Next.js',
    'Docker', 'Robotic systems',
    'Verification & Validation',
    'Model-Based Systems Engineering',
    'UML & SysML',
  ],
  languages: [
    'Hungarian (Native)',
    'English (C1)',
    'German (B2)',
    'Japanese (Basic)',
    'French (Basic)',
    'Croatian (Basic)',
  ],
  arts: {
    summary:
      'Beyond engineering, I am interested in visual culture, cyberpunk aesthetics, and Japanese-inspired conceptual art. This section can grow into a portfolio for personal and interdisciplinary work.',
    highlights: ['Cyberpunk visual language', 'Robotics-inspired concept sketches', 'Visual storytelling and worldbuilding'],
  },
  contact: [
    { label: 'Research collaborations', value: 'Available for joint academic and applied research projects.' },
    { label: 'General inquiries', value: 'Reach out through the platforms below for academic, professional, or creative conversations.' },
  ],
});

export const hero = siteConfig.hero;
export const focusResearch = siteConfig.research.focus;
export const backgroundResearch = siteConfig.research.background;
export const researchAreas = siteConfig.research.areas;
export const overviewLinks = siteConfig.overviewLinks;
export const education = siteConfig.education;
export const experience = siteConfig.legacyExperience;
export const scholarProfile = siteConfig.scholarProfile;
export const dissertation = siteConfig.dissertation;
export const socialLinks = siteConfig.socialLinks;
export const scholarMetrics = siteConfig.scholarMetrics;
export const emailContacts = siteConfig.emailContacts;
export const skills = siteConfig.skills;
export const languages = siteConfig.languages;
export const arts = siteConfig.arts;
export const contact = siteConfig.contact;
