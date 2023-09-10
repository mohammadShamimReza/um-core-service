import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { studentEnrolledCourseMarkFilterableFields } from './studentEnrolledCourseMark.constants';
import { StudentEnrolledCourseDefaultMarkService } from './studentEnrolledCourseMark.service';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentEnrolledCourseMarkFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await StudentEnrolledCourseDefaultMarkService.getAllFromDB(
    filters,
    options
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student course marks fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateStudentMark = catchAsync(async (req: Request, res: Response) => {
  const result =
    await StudentEnrolledCourseDefaultMarkService.updateStudentMark(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'marks updated successfully',
    data: result,
  });
});

const updataFinalMarks = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseDefaultMarkService.updataFinalMarks(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Final Marks updated successfully',
    data: result,
  });
});

export const StudentEnrolledCourseMarkController = {
  getAllFromDB,
  updateStudentMark,
  updataFinalMarks,
};
