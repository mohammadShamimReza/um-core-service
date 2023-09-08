import { PrismaClient } from '@prisma/client';
import {
  DefaultArgs,
  PrismaClientOptions,
} from '@prisma/client/runtime/library';

const createSemesterPayment = async (
  prismaClient: Omit<
    PrismaClient<PrismaClientOptions, never, DefaultArgs>,
    '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
  >,
  payload: {
    studentId: string;
    acaddmicSemesterId: string;
    totalPaymentAmount: number;
  }
) => {
  console.log(payload, prismaClient, 'semesterPayment');
};

export const StudentSemesterPaymentService = {
  createSemesterPayment,
};
