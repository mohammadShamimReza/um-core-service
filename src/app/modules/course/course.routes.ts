import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseValidation } from './course.validations';

const router = express.Router();
router.get('/', CourseController.getAllFromDB);
router.get('/:id', CourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(CourseValidation.create),
  
  CourseController.insertIntoDB
);


router.patch(
  '/:id',
  validateRequest(CourseValidation.update),
  
  CourseController.updateOneInDB
);


router.delete(
  '/:id',
  
  CourseController.deleteByIdFromDB
);

router.post(
  '/:id/assign-faculties',
  validateRequest(CourseValidation.assignOrRemoveFaculties),
  
  CourseController.assignFaculies
);

router.delete(
  '/:id/remove-faculties',
  validateRequest(CourseValidation.assignOrRemoveFaculties),
  
  CourseController.removeFaculties
);

export const courseRoutes = router;