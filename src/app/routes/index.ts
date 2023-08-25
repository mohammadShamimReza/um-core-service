import express from 'express';
import { academicDepartmentRoutes } from '../module/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../module/academicFaculty/academicFaculty.routes';
import { academicSemeterRoutes } from '../module/academicSemester/academicSemester.routes';
import { BuildingRoutes } from '../module/building/building.routes';
import { facultyRoutes } from '../module/faculty/faculty.routes';
import { RoomRoutes } from '../module/room/room.routes';
import { studentRoutes } from '../module/student/student.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: academicSemeterRoutes,
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes,
  },
  {
    path: '/academic-faculty',
    routes: academicFacultyRoutes,
  },
  {
    path: '/student',
    routes: studentRoutes,
  },
  {
    path: '/faculty',
    routes: facultyRoutes,
  },
  {
    path: '/buildings',
    routes: BuildingRoutes,
  },
  {
    path: '/rooms',
    routes: RoomRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
