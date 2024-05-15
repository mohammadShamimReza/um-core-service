import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';
import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validations';

const router = express.Router();

router.get('/', StudentEnrolledCourseController.getAllFromDB);

router.get('/:id', StudentEnrolledCourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.create),
  
  StudentEnrolledCourseController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.update),
  
  StudentEnrolledCourseController.updateOneInDB
);

router.delete(
  '/:id',
  
  StudentEnrolledCourseController.deleteByIdFromDB
);

export const studentEnrolledCourseRoutes = router;