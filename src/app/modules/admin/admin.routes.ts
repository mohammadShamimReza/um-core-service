import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validations';

const router = express.Router();

router.get('/',
    AdminController.getAllFromDB);



router.get('/:id', AdminController.getByIdFromDB);


router.post(
  '/',

  validateRequest(AdminValidation.create),
  AdminController.insertIntoDB
);



export const adminRoutes = router;