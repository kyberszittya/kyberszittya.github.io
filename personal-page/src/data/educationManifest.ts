import type { PageSection } from './pageSections';
import { education } from './site';
import type { SubjectSummaryRecord } from '../lib/subjectQueries';

export function buildEducationPageSections(subjects: SubjectSummaryRecord[]): PageSection[] {
  return [
    {
      type: 'detail-card-grid',
      tone: 'blue',
      layoutClassName: 'card-grid-wide',
      cards: [
        {
          id: 'education-academic-background',
          title: 'Academic background',
          titleKey: 'page.cv.academicBackground',
          items: education.degrees.map((degree) => ({
            title: degree.title,
            text: degree.track,
            lines: degree.details,
          })),
        },
        {
          id: 'education-teaching-experience',
          title: 'Teaching experience',
          items: [
            {
              title: education.teachingProfile.title,
              text: education.teachingProfile.period,
              lines: [education.teachingProfile.description],
            },
          ],
          subtitle: 'Teaching languages',
          chips: education.teachingProfile.languages,
        },
      ],
    },
    {
      type: 'subject-summary-grid',
      tone: 'indigo',
      layoutClassName: 'card-grid-wide',
      id: 'education-subjects',
      title: 'Subjects',
      subjects,
    },
    {
      type: 'detail-card-grid',
      tone: 'violet',
      layoutClassName: 'card-grid-wide',
      cards: [
        {
          id: 'education-student-supervision',
          title: 'Student supervision',
          titleKey: 'page.education.finishedStudents',
          body: [
            {
              text: 'This area brings together active and graduated student supervision, and can grow into a fuller archive as more project details are added.',
              key: 'page.education.finishedStudents.summary',
            },
          ],
          links: [
            { href: '/education/tdk', label: 'Open TDK page', key: 'page.education.openTdk' },
            { href: '/education/thesis-faq', label: 'Open thesis FAQ', key: 'page.education.openThesisFaq' },
            { href: '/education/students', label: 'Open student supervision', key: 'page.education.openFinishedStudents' },
          ],
        },
      ],
    },
  ];
}
