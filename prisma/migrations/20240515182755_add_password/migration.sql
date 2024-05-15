-- AlterTable
ALTER TABLE "faculties" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '123456';

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '123456';
