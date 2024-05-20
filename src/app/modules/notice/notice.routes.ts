import express from 'express';
import { NoticeController } from './notice.controller';

const router = express.Router();

router.get('/',
    NoticeController.getAllFromDB);



router.post(
  '/',

  NoticeController.insertIntoDB
);

router.patch(
  '/:id',

  NoticeController.updateIntoDB
);

router.delete(
  '/:id',

  NoticeController.deleteFromDB
);

export const studentRoutes = router;