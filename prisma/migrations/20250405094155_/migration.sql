-- AlterTable
ALTER TABLE "Complexes" ADD COLUMN     "org_id" TEXT;

-- AddForeignKey
ALTER TABLE "Complexes" ADD CONSTRAINT "Complexes_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("org_id") ON DELETE SET NULL ON UPDATE CASCADE;
