export type ICourseCreateData = {
  title: string;
  code: string;
  credits: string;
  preRequisiteCourses: IPrerequisitesCourseRequest[];
};

export type IPrerequisitesCourseRequest = {
  courseId: string;
  idDeleted?: null;
};

export type ICourseFilterRequest = {
  searchTerm?: string | undefined;
};
