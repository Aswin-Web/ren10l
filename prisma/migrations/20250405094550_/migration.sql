/*
  Warnings:

  - Made the column `org_id` on table `Complexes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Complexes" DROP CONSTRAINT "Complexes_org_id_fkey";

-- AlterTable
ALTER TABLE "Complexes" ALTER COLUMN "org_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Complexes" ADD CONSTRAINT "Complexes_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;
