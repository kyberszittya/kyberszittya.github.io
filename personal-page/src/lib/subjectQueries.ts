import { getCollection } from 'astro:content';
import { education } from '../data/site';

export type SubjectSummaryRecord = {
  title: string;
  heading: string;
  description: string;
  semesters: string[];
  teachingLanguages: string[];
  hostUniversities: string[];
  hostDepartments: string[];
  degreePrograms: string[];
  neptunCode?: string;
  mascot?: { name: string; shortLabel?: string; description?: string; accent?: string; emoji?: string };
  href: string;
};

export async function getSubjectSummaryRecords(): Promise<SubjectSummaryRecord[]> {
  const subjectsCollection = await getCollection('subjects');

  return Array.from(
    subjectsCollection
      .reduce((map, subjectEntry) => {
        const current = map.get(subjectEntry.data.subject);
        const semesterLabels = subjectEntry.data.semesters ?? [];
        const languageLabels = subjectEntry.data.teachingLanguages ?? education.teachingProfile.languages;
        const hostUniversities = [subjectEntry.data.hostUniversity];
        const hostDepartments = [subjectEntry.data.hostDepartment];
        const degreePrograms = [subjectEntry.data.degreeProgram];

        if (!current) {
          map.set(subjectEntry.data.subject, {
            title: subjectEntry.data.subject,
            heading: subjectEntry.data.title,
            description:
              subjectEntry.data.subjectSummary ??
              `Subject materials and teaching notes for ${subjectEntry.data.subject}.`,
            semesters: semesterLabels,
            teachingLanguages: languageLabels,
            hostUniversities,
            hostDepartments,
            degreePrograms,
            neptunCode: subjectEntry.data.neptunCode,
            mascot: subjectEntry.data.mascot,
            href: `/subjects/${subjectEntry.id}`,
          });
          return map;
        }

        map.set(subjectEntry.data.subject, {
          ...current,
          description: subjectEntry.data.subjectSummary ?? current.description,
          semesters: Array.from(new Set([...current.semesters, ...semesterLabels])),
          teachingLanguages: Array.from(new Set([...current.teachingLanguages, ...languageLabels])),
          hostUniversities: Array.from(new Set([...current.hostUniversities, ...hostUniversities])),
          hostDepartments: Array.from(new Set([...current.hostDepartments, ...hostDepartments])),
          degreePrograms: Array.from(new Set([...current.degreePrograms, ...degreePrograms])),
          neptunCode: current.neptunCode ?? subjectEntry.data.neptunCode,
          mascot: current.mascot ?? subjectEntry.data.mascot,
        });

        return map;
      }, new Map<string, SubjectSummaryRecord>())
      .values(),
  ).sort((a, b) => a.title.localeCompare(b.title));
}
