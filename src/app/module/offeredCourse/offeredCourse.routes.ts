import express from 'express';
import { OfferedCourseController } from './offeredCourse.controller';

const router = express.Router();

router.post(
  '/',
  // validateRequest(OfferedCourseValidations.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.insertIntoDB
);

export const offeredCourseRoutes = router;
