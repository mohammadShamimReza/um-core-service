import express from 'express';
import { AcademicDepartmentRoutes } from '../module/academicDepartment/AcademicDepartment.router';
import { AcademicFacultyRoutes } from '../module/academicFaculty/AcademicFaculty.router';
import { AcademicSemesterRoutes } from '../module/academicSemester/AcademicSemester.router';
import { FacultyRoutes } from '../module/faculty/faculty.router';
import { StudentRoutes } from '../module/student/student.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes,
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes,
  },
  {
    path: '/academic-faculty',
    routes: AcademicFacultyRoutes,
  },
  {
    path: '/student',
    routes: StudentRoutes,
  },
  {
    path: '/faculty',
    routes: FacultyRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
