import { Student } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (StudenttData: Student): Promise<Student> => {
  const result = await prisma.student.create({
    data: StudenttData,
    include: {
      academicDepartment: true,
      academicFaculty: true,
      academicSemester: true,
    },
  });
  return result;
};

const getAllFromDB = async (): Promise<Student[] | null> => {
  const result = await prisma.student.findMany({});
  return result;
};

const getDataById = async (id: string): Promise<Student | null> => {
  const result = await prisma.student.findUnique({
    where: { id: id },
    include: {
      academicDepartment: true,
      academicFaculty: true,
      academicSemester: true,
    },
  });
  return result;
};

export const StudentService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
