import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controllar';
import { StudentValidation } from './student.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(StudentValidation.create),
  StudentController.insertIntoDB
);

router.get('/', StudentController.getAllFromDB);
router.get('/:id', StudentController.getDataById);

export const StudentRoutes = router;
