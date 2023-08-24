import { AcedemicFaculty } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  academicDepartmentData: AcedemicFaculty
): Promise<AcedemicFaculty> => {
  const result = await prisma.acedemicFaculty.create({
    data: academicDepartmentData,
  });
  return result;
};

const getAllFromDB = async (): Promise<AcedemicFaculty[] | null> => {
  const result = await prisma.acedemicFaculty.findMany({});
  return result;
};

const getDataById = async (id: string): Promise<AcedemicFaculty | null> => {
  const result = await prisma.acedemicFaculty.findUnique({
    where: { id: id },
  });
  return result;
};

export const AcademicFacultyService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
