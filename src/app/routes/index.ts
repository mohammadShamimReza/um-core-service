import express from 'express';
import { academicDepartmentRoutes } from '../module/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../module/academicFaculty/academicFaculty.routes';
import { academicSemeterRoutes } from '../module/academicSemester/academicSemester.routes';
import { BuildingRoutes } from '../module/building/building.routes';
import { courseRoutes } from '../module/course/course.routes';
import { facultyRoutes } from '../module/faculty/faculty.routes';
import { offeredCourseRoutes } from '../module/offeredCourse/offeredCourse.routes';
import { offeredCourseSectionRoutes } from '../module/offeredCourseSection/offeredCourseSection.routes';
import { roomRoutes } from '../module/room/room.routes';
import { SemesterRegistrationRouters } from '../module/semesterRegistration/semesterRegistration.routes';
import { studentRoutes } from '../module/student/student.routes';

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
    routes: roomRoutes,
  },
  {
    path: '/courses',
    routes: courseRoutes,
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRouters,
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes,
  },
  {
    path: '/offered-courses-sectios',
    routes: offeredCourseSectionRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
