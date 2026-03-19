export type NavItem = {
  key: string;
  label: string;
  href?: string;
  description?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { key: 'nav.home', label: 'Home', href: '/' },
  { key: 'nav.cv', label: 'CV', href: '/cv', description: 'Profile, experience, and technical overview' },
  {
    key: 'nav.research',
    label: 'Research',
    href: '/research',
    description: 'Themes, labs, and active directions',
    children: [
      { key: 'nav.research.behavior-analysis', label: 'Behavior analysis', href: '/research/behavior-analysis' },
      { key: 'nav.research.hymeko', label: 'HyMeKo', href: '/research/hymeko' },
      { key: 'nav.research.etho-robotics', label: 'Etho-robotics', href: '/research/etho-robotics' },
      { key: 'nav.research.industrial-robotics', label: 'Industrial-robotics', href: '/research/industrial-robotics' },
      { key: 'nav.research.industry-4-0', label: 'Industry 4.0', href: '/research/industry-4-0' },
    ],
  },
  {
    key: 'nav.publications',
    label: 'Publications',
    href: '/publications',
    description: 'Google Scholar and BibTeX-based publication list',
  },
  {
    key: 'nav.education',
    label: 'Education',
    href: '/education',
    description: 'Courses, mentoring, and student supervision',
    children: [
      { key: 'nav.education.lectures', label: 'Lectures', href: '/lectures' },
      { key: 'nav.education.tdk', label: 'TDK', href: '/education/tdk' },
      { key: 'nav.education.thesis-faq', label: 'Thesis FAQ', href: '/education/thesis-faq' },
      {
        key: 'nav.education.finished-students',
        label: 'Student supervision',
        href: '/education/students',
        children: [
          { key: 'nav.education.bsc', label: 'BSc', href: '/education/students#bsc' },
          { key: 'nav.education.msc', label: 'MSc', href: '/education/students#msc' },
        ],
      },
    ],
  },
  { key: 'nav.contact', label: 'Contact', href: '/contact', description: 'Reach out for research or teaching collaborations' },
  { key: 'nav.arts', label: 'Arts', href: '/arts', description: 'Visual work, concepts, and inspirations' },
];
