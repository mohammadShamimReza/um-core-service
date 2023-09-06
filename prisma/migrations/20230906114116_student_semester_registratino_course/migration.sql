/*
  Warnings:

  - You are about to drop the `sttudent_semester_registration` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sttudent_semester_registration" DROP CONSTRAINT "sttudent_semester_registration_semesterRegistrationId_fkey";

-- DropForeignKey
ALTER TABLE "sttudent_semester_registration" DROP CONSTRAINT "sttudent_semester_registration_studentId_fkey";

-- DropTable
DROP TABLE "sttudent_semester_registration";

-- CreateTable
CREATE TABLE "student_semester_registrations" (
    "id" TEXT NOT NULL,
    "isConfirmed" BOOLEAN DEFAULT false,
    "totalCreditsTaken" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentId" TEXT NOT NULL,
    "semesterRegistrationId" TEXT NOT NULL,

    CONSTRAINT "student_semester_registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_semester_registration_cousrses" (
    "semesterRegistrationId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "offeredCourseId" TEXT NOT NULL,
    "offeredCourseSectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_semester_registration_cousrses_pkey" PRIMARY KEY ("semesterRegistrationId","studentId","offeredCourseId")
);

-- AddForeignKey
ALTER TABLE "student_semester_registrations" ADD CONSTRAINT "student_semester_registrations_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_semester_registrations" ADD CONSTRAINT "student_semester_registrations_semesterRegistrationId_fkey" FOREIGN KEY ("semesterRegistrationId") REFERENCES "semester_registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
