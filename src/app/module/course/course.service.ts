import { Course } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data,
    include: {
      preRequisite: true,
      preRequisiteFor: true,
    },
  });
  return result;
};

export const CourseService = {
  insertIntoDB,
};
