import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get('/', StudentSemesterPaymentController.getAllFromDB);

router.get(
  '/my-semester-payments',
  StudentSemesterPaymentController.getMySemesterPayments
);

router.post(
  '/initiate-payment',
  StudentSemesterPaymentController.initiatePayment
);
router.post(
  '/complete-payment',
  StudentSemesterPaymentController.completePayment
);

export const studentSemesterPaymentRoutes = router;
