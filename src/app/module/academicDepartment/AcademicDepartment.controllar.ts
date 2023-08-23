import { AcedemicDepartment } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicDepartmentService } from './AcademicDepartment.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.insertIntoDB(req.body);

  sendResponse<AcedemicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department created successfully',
    data: result,
  });
});

const getAllFromDB;

const getDataById;

export const AcademicDepartmentController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
