import { Notice, Student } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Notice): Promise<Notice> => {
  const result = await prisma.notice.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<IGenericResponse<Notice[]>> => {
  const result = await prisma.notice.findMany({});

  console.log(result);
  return {
    meta: {
      total: 1,
      page: 1,
      limit: 100,
    },
    data: result,
  };
};

const getByIdFromDB = async (id: string): Promise<Student | null> => {
  const result = await prisma.student.findUnique({
    where: {
      id,
    },
    include: {
      academicFaculty: true,
      academicDepartment: true,
      academicSemester: true,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<Notice>
): Promise<Notice> => {
  const result = await prisma.notice.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<Notice> => {
  const result = await prisma.notice.delete({
    where: {
      id,
    },
  });
  return result;
};

export const StudentService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
