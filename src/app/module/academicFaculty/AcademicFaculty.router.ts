import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './AcademicFaculty.controllar';
import { AcademicFacultyValidation } from './AcademicFaculty.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicFacultyValidation.create),
  AcademicFacultyController.insertIntoDB
);

router.get('/', AcademicFacultyController.getAllFromDB);
router.get('/:id', AcademicFacultyController.getDataById);

export const AcademicFacultyRoutes = router;
