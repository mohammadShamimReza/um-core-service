import { AcademicDepartment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  academicDepartmentData: AcademicDepartment
): Promise<AcademicDepartment> => {
  const result = await prisma.academicDepartment.create({
    data: academicDepartmentData,
    include: {
      academic_faculty: true,
    },
  });
  return result;
};

const getAllFromDB = async (): Promise<AcademicDepartment[] | null> => {
  const result = await prisma.academicDepartment.findMany({});
  return result;
};

const getDataById = async (id: string): Promise<AcademicDepartment | null> => {
  const result = await prisma.academicDepartment.findUnique({
    where: { id: id },
  });
  return result;
};

export const AcademicDepartmentService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
