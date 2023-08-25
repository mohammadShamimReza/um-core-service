import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './AcademicSemester.validation';
import { AcademicSemeterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemeterController.getAllFromDB);
router.get('/:id', AcademicSemeterController.getDataById);
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemeterController.insertIntoDB
);

export const academicSemeterRoutes = router;
