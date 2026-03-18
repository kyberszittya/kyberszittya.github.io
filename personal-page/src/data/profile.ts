export const hero = {
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
};

export const focusResearch = [
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
];

export const backgroundResearch = [
  'Autonomous vehicle trajectory following',
  'Precise geolocation-based localization',
  'Etho-robotics and interaction modeling',
  'Decision processes of autonomous systems',
  'Agricultural applications',
  'Model-based environment generation',
  'Specification-based monitoring of test environments',
  'Simulator-based V&V of autonomous systems',
];

export const researchAreas = [
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
];

export const overviewLinks = [
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
];

export const education = {
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
};

export const experience = [
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
];

export const scholarProfile = {
  label: 'Google Scholar profile',
  href: 'https://scholar.google.com/citations?user=QdCAR8MAAAAJ&hl=hu',
};

export const dissertation = {
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
};

export const socialLinks = [
  {
    label: 'GitHub',
    value: 'kyberszittya',
    href: 'https://github.com/kyberszittya',
  },
  {
    label: 'Twitter/X',
    value: '@kyberszittya',
    href: 'https://x.com/kyberszittya',
  },
  {
    label: 'ResearchGate',
    value: 'Csaba Hajdu',
    href: 'https://www.researchgate.net/profile/Csaba-Hajdu?ev=hdr_xprf',
  },
  {
    label: 'Facebook',
    value: 'kyberszittya',
    href: 'https://www.facebook.com/kyberszittya/',
  },
  {
    label: 'ORCID',
    value: '0000-0002-1058-7525',
    href: 'https://orcid.org/0000-0002-1058-7525',
  },
  {
    label: 'Google Scholar',
    value: 'Scholar profile',
    href: 'https://scholar.google.com/citations?user=QdCAR8MAAAAJ',
  },
];

export const scholarMetrics = {
  citations: {
    all: 211,
    since2021: 198,
  },
  hIndex: {
    all: 7,
    since2021: 7,
  },
  i10Index: {
    all: 5,
    since2021: 5,
  },
  note: 'Metrics provided manually from the Google Scholar profile.',
  sourceLabel: 'Google Scholar profile',
  sourceHref: 'https://scholar.google.com/citations?user=QdCAR8MAAAAJ',
};

export const emailContacts = [
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
];

export const skills = [
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
];

export const languages = [
  'Hungarian (Native)',
  'English (C1)',
  'German (B2)',
  'Japanese (Basic)',
  'French (Basic)',
  'Croatian (Basic)',
];

export const arts = {
  summary:
    'Beyond engineering, I am interested in visual culture, cyberpunk aesthetics, and Japanese-inspired conceptual art. This section can grow into a portfolio for personal and interdisciplinary work.',
  highlights: ['Cyberpunk visual language', 'Robotics-inspired concept sketches', 'Visual storytelling and worldbuilding'],
};

export const contact = [
  { label: 'Research collaborations', value: 'Available for joint academic and applied research projects.' },  
  { label: 'General inquiries', value: 'Reach out through the platforms below for academic, professional, or creative conversations.' },
];
