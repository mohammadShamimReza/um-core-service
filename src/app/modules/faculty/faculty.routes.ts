import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validations';

const router = express.Router();

router.get('/', FacultyController.getAllFromDB);

router.get('/my-courses', FacultyController.myCourses);

router.get('/:id', FacultyController.getByIdFromDB);

router.get('/my-course-students', FacultyController.getMyCourseStudents);

router.post(
  '/',
  validateRequest(FacultyValidation.create),
  FacultyController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.update),
  FacultyController.updateOneInDB
);

router.delete(
  '/:id',

  FacultyController.deleteByIdFromDB
);

router.post(
  '/:id/assign-courses',
  validateRequest(FacultyValidation.assignOrRemoveCourses),

  FacultyController.assignCourses
);

router.delete(
  '/:id/remove-courses',
  validateRequest(FacultyValidation.assignOrRemoveCourses),

  FacultyController.removeCourses
);

export const facultyRoutes = router;
