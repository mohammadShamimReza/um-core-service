import express from 'express';
import { AcademicSemesterRoutes } from '../module/academicSemester/AcademicSemester.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
