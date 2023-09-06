-- AddForeignKey
ALTER TABLE "student_semester_registration_cousrses" ADD CONSTRAINT "student_semester_registration_cousrses_semesterRegistratio_fkey" FOREIGN KEY ("semesterRegistrationId") REFERENCES "semester_registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_semester_registration_cousrses" ADD CONSTRAINT "student_semester_registration_cousrses_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_semester_registration_cousrses" ADD CONSTRAINT "student_semester_registration_cousrses_offeredCourseId_fkey" FOREIGN KEY ("offeredCourseId") REFERENCES "offered_courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_semester_registration_cousrses" ADD CONSTRAINT "student_semester_registration_cousrses_offeredCourseSectio_fkey" FOREIGN KEY ("offeredCourseSectionId") REFERENCES "offered_course_section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
