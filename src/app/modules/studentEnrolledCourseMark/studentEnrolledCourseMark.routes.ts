import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseMarkConroller } from './studentEnrolledCourseMark.controller';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMark.validations';

const router = express.Router();

router.get('/', StudentEnrolledCourseMarkConroller.getAllFromDB);

router.get('/my-marks', StudentEnrolledCourseMarkConroller.getMyCourseMarks);

router.patch(
  '/update-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  StudentEnrolledCourseMarkConroller.updateStudentMarks
);
router.patch(
  '/update-final-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  StudentEnrolledCourseMarkConroller.updateFinalMarks
);

export const studentEnrolledCourseMarkRoutes = router;
