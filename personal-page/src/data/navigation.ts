export type NavItem = {
  label: string;
  href?: string;
  description?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'CV', href: '/cv', description: 'Profile, experience, and technical overview' },
  {
    label: 'Research',
    href: '/research',
    description: 'Themes, labs, and active directions',
    children: [
      { label: 'Behavior analysis', href: '/research/behavior-analysis' },
      { label: 'HyMeKo', href: '/research/hymeko' },
      { label: 'Etho-robotics', href: '/research/etho-robotics' },
      { label: 'Industrial-robotics', href: '/research/industrial-robotics' },
      { label: 'Industry 4.0', href: '/research/industry-4-0' },
    ],
  },
  {
    label: 'Publications',
    href: '/publications',
    description: 'Google Scholar and BibTeX-based publication list',
  },
  {
    label: 'Education',
    href: '/education',
    description: 'Courses, mentoring, and student supervision',
    children: [
      { label: 'Lectures', href: '/lectures' },
      {
        label: 'Finished students',
        href: '/education/students',
        children: [
          { label: 'BSc', href: '/education/students#bsc' },
          { label: 'MSc', href: '/education/students#msc' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact', description: 'Reach out for research or teaching collaborations' },
  { label: 'Arts', href: '/arts', description: 'Visual work, concepts, and inspirations' },
];
