-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "profileImage" TEXT,
    "email" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL DEFAULT '123456',
    "emergencyContactNo" TEXT NOT NULL DEFAULT '123456',
    "dateOfBirth" TEXT NOT NULL DEFAULT '2024-05-16T18:29:13.437Z',
    "managementDepartmentId" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "managementDepartment" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "managementDepartment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_managementDepartmentId_fkey" FOREIGN KEY ("managementDepartmentId") REFERENCES "managementDepartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
