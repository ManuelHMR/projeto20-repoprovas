/*
  Warnings:

  - You are about to drop the column `discipleneId` on the `teachersDisciplines` table. All the data in the column will be lost.
  - Added the required column `disciplineId` to the `teachersDisciplines` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_discipleneId_fkey";

-- AlterTable
ALTER TABLE "teachersDisciplines" DROP COLUMN "discipleneId",
ADD COLUMN     "disciplineId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
