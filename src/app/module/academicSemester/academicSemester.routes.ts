import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './AcademicSemester.validation';
import { AcademicSemeterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemeterController.getAllFromDB);
router.get('/:id', AcademicSemeterController.getDataById);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemeterController.insertIntoDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemeterController.deleteByIdFromDB
);

export const academicSemeterRoutes = router;
