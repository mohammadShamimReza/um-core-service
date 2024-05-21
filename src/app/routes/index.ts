import express from 'express';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemeterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { adminRoutes } from '../modules/admin/admin.routes';
import { AuthRoutes } from '../modules/auth/auth.route';
import { buildingRoutes } from '../modules/building/building.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';
import { managementDepartmentRoutes } from '../modules/manageDepartment/manageDepartment.routes';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { studentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.routes';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { studentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.routes';
import { studentRoutes } from '../modules/students/student.routes';
import { NoticeRoutes } from '../modules/notice/notice.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/management-departments',
    route: managementDepartmentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemeterRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: facultyRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/admins',
    route: adminRoutes,
  },
  {
    path: '/buildings',
    route: buildingRoutes,
  },
  {
    path: '/rooms',
    route: roomRoutes,
  },
  {
    path: '/courses',
    route: courseRoutes,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-courses',
    route: offeredCourseRoutes,
  },
  {
    path: '/offered-course-sections',
    route: offeredCourseSectionRoutes,
  },
  {
    path: '/offered-course-class-schedules',
    route: offeredCourseClassScheduleRoutes,
  },
  {
    path: '/student-enrolled-courses',
    route: studentEnrolledCourseRoutes,
  },
  {
    path: '/student-enrolled-course-marks',
    route: studentEnrolledCourseMarkRoutes,
  },
  {
    path: '/student-semester-payments',
    route: studentSemesterPaymentRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/notice',
    route: NoticeRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
