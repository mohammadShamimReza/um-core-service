import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllFromDB);

router.post(
  '/',
  // validateRequest(OfferedCourseSectionValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.insertIntoDB
);

export const OfferedCourseClassScheduleRouters = router;
