export const AcademicSemesterSearchAbleFields = ['title', 'code', 'startMonth', 'endMonth'];

export const AcademicSemesterFilterAbleFileds = ['searchTerm', 'code', 'startMonth', 'endMonth'];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const EVENT_ACADEMIC_SEMESTER_CREATED = 'academicSemesterCreated';
export const EVENT_ACADEMIC_SEMESTER_UPDATED = 'academicSemesterUpdated';