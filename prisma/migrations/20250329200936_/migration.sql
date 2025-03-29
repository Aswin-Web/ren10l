/*
  Warnings:

  - A unique constraint covering the columns `[org_internal_name]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - Made the column `org_internal_name` on table `Organization` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Organization" ALTER COLUMN "org_internal_name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Organization_org_internal_name_key" ON "Organization"("org_internal_name");
