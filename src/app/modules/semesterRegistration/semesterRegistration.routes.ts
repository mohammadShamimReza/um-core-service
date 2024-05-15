import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import { SemesterRegistrationValidation } from './semesterRegistration.validations';

const router = express.Router();
router.get(
    '/get-my-registration',
      SemesterRegistrationController.getMyRegistration
)

router.get('/', SemesterRegistrationController.getAllFromDB);
router.get(
    '/get-my-semsester-courses',
      SemesterRegistrationController.getMySemesterRegCouses
);
router.get('/:id', SemesterRegistrationController.getByIdFromDB);


router.post(
    '/enroll-into-course',
    validateRequest(SemesterRegistrationValidation.enrollOrWithdrawCourse),
      SemesterRegistrationController.enrollIntoCourse
)
router.post(
    '/start-registration',
      SemesterRegistrationController.startMyRegistration
)

router.post(
  '/',
  validateRequest(SemesterRegistrationValidation.create),
  
  SemesterRegistrationController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(SemesterRegistrationValidation.update),
  
  SemesterRegistrationController.updateOneInDB
);

router.delete(
  '/:id',
  
  SemesterRegistrationController.deleteByIdFromDB
);



router.post(
    '/withdraw-from-course',
    validateRequest(SemesterRegistrationValidation.enrollOrWithdrawCourse),
      SemesterRegistrationController.withdrawFromCourse
)
router.post(
    '/confirm-my-registration',
      SemesterRegistrationController.confirmMyRegistration
)

router.post(
    '/:id/start-new-semester',
    
    SemesterRegistrationController.startNewSemester
)


export const semesterRegistrationRoutes = router;