import {
  Prisma,
  SemesterRegistration,
  SemesterRegistrationStatus,
  StudentSemesterRegistration,
} from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  semesterRegistrationRelationalFields,
  semesterRegistrationRelationalFieldsMapper,
  semesterRegistrationSearchableFields,
} from './semesterRegistration.constants';
import {
  IEnrollCoursePayload,
  ISemesterRegistrationFilterRequest,
} from './semesterRegistration.interface';

const insertIntoDB = async (
  data: SemesterRegistration
): Promise<SemesterRegistration> => {
  const isAnySemesterRegUpcommingOrOngoing =
    await prisma.semesterRegistration.findFirst({
      where: {
        OR: [
          {
            status: SemesterRegistrationStatus.UPCOMING,
          },
          {
            status: SemesterRegistrationStatus.ONGOING,
          },
        ],
      },
    });

  if (isAnySemesterRegUpcommingOrOngoing) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `there is  already an ${isAnySemesterRegUpcommingOrOngoing.status} registration`
    );
  }

  const result = await prisma.semesterRegistration.create({
    data,
  });

  return result;
};

const getAllFromDB = async (
  filters: ISemesterRegistrationFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<SemesterRegistration[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: semesterRegistrationSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (semesterRegistrationRelationalFields.includes(key)) {
          return {
            [semesterRegistrationRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditions: Prisma.SemesterRegistrationWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.semesterRegistration.findMany({
    include: {
      academicSemester: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.semesterRegistration.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getByIdFromDB = async (
  id: string
): Promise<SemesterRegistration | null> => {
  const result = await prisma.semesterRegistration.findUnique({
    where: {
      id,
    },
    include: {
      academicSemester: true,
    },
  });
  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<SemesterRegistration>
): Promise<SemesterRegistration> => {
  const isExist = await prisma.semesterRegistration.findUnique({
    where: {
      id,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Course not found', id);
  }
  if (
    payload.status &&
    isExist.status === SemesterRegistrationStatus.ONGOING &&
    payload.status !== SemesterRegistrationStatus.ENDED
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'can only move from ongoing to ended',
      id
    );
  }
  if (
    payload.status &&
    isExist.status === SemesterRegistrationStatus.UPCOMING &&
    payload.status !== SemesterRegistrationStatus.ONGOING
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'can only move from upcoming to ongoing',
      id
    );
  }

  const result = await prisma.semesterRegistration.update({
    where: {
      id,
    },
    data: payload,
    include: {
      academicSemester: true,
    },
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<SemesterRegistration> => {
  const result = await prisma.semesterRegistration.delete({
    where: {
      id,
    },
    include: {
      academicSemester: true,
    },
  });
  return result;
};

const startMyRegistration = async (
  authUserId: string
): Promise<{
  semesterRegistration: SemesterRegistration | null;
  studentSemesterRegistration: StudentSemesterRegistration | null;
}> => {
  const studentInfo = await prisma.student.findFirst({
    where: {
      studentId: authUserId,
    },
  });
  if (!studentInfo) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Student not Found');
  }

  const semesterRegistrationInfo = await prisma.semesterRegistration.findFirst({
    where: {
      status: {
        in: [
          SemesterRegistrationStatus.ONGOING,
          SemesterRegistrationStatus.UPCOMING,
        ],
      },
    },
  });
  if (
    semesterRegistrationInfo?.status === SemesterRegistrationStatus.UPCOMING
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Registration is not startd yet'
    );
  }

  let studentRegistretion = await prisma.studentSemesterRegistration.findFirst({
    where: {
      student: {
        id: studentInfo.id,
      },
      semesterRegistration: {
        id: semesterRegistrationInfo?.id,
      },
    },
  });

  if (!studentRegistretion) {
    studentRegistretion = await prisma.studentSemesterRegistration.create({
      data: {
        student: {
          connect: {
            id: studentInfo?.id,
          },
        },
        semesterRegistration: {
          connect: {
            id: semesterRegistrationInfo?.id,
          },
        },
      },
    });
  } else {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Semester is already registered'
    );
  }

  console.log(semesterRegistrationInfo);

  return {
    semesterRegistration: semesterRegistrationInfo,
    studentSemesterRegistration: studentRegistretion,
  };
};

const enrollIntoCourse = async (
  authUserId: string,
  payload: IEnrollCoursePayload
) => {
  console.log(authUserId, payload);

  const student = await prisma.student.findFirst({
    where: {
      studentId: authUserId,
    },
  });

  console.log(student);

  const semesterRegistration = await prisma.semesterRegistration.findFirst({
    where: {
      status: SemesterRegistrationStatus.ONGOING,
    },
  });

  const offeredCourse = await prisma.offeredCourse.findFirst({
    where: { id: payload.offeredCourseId },
    include: {
      course: true,
    },
  });
  const offeredCourseSection = await prisma.offeredCourseSection.findFirst({
    where: {
      id: payload.offeredCourseSectionId,
    },
  });

  if (!student) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student is not found');
  }
  if (!semesterRegistration) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'semester registration is not found'
    );
  }
  if (!offeredCourse) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Offered course is not found');
  }
  if (!offeredCourseSection) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'offered course section is not found'
    );
  }

  if (
    offeredCourseSection.maxCapacity &&
    offeredCourseSection.currentEnrolledStudent &&
    offeredCourseSection.currentEnrolledStudent >=
      offeredCourseSection.maxCapacity
  ) {
    throw new ApiError(
      httpStatus.INSUFFICIENT_STORAGE,
      ' Student capacity is full!! '
    );
  }

  await prisma.$transaction(async transactionClient => {
    await transactionClient.studentSemesterRegistrationCourse.create({
      data: {
        studentId: student?.id,
        semesterRegistrationId: semesterRegistration?.id,
        offeredCourseId: payload?.offeredCourseId,
        offeredCourseSectionId: payload?.offeredCourseSectionId,
      },
    });

    await transactionClient.offeredCourseSection.update({
      where: {
        id: payload?.offeredCourseSectionId,
      },
      data: {
        currentEnrolledStudent: {
          increment: 1,
        },
      },
    });

    const data = await transactionClient.studentSemesterRegistration.updateMany(
      {
        where: {
          student: {
            id: student?.id,
          },
          semesterRegistration: {
            id: semesterRegistration?.id,
          },
        },
        data: {
          totalCreditsTaken: {
            increment: offeredCourse.course.credit,
          },
        },
      }
    );

    console.log(data, 'this is from data');
  });

  return {
    message: 'successfully enrolled into course',
  };
};

export const semesterRegistrationService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  startMyRegistration,
  enrollIntoCourse,
};
