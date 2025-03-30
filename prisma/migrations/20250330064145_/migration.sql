-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "LinkType" ADD VALUE 'ADMIN';
ALTER TYPE "LinkType" ADD VALUE 'USER';

-- CreateTable
CREATE TABLE "MasterLink" (
    "master_link_id" SERIAL NOT NULL,
    "master_internal_name" TEXT NOT NULL,
    "master_external_name" TEXT NOT NULL,

    CONSTRAINT "MasterLink_pkey" PRIMARY KEY ("master_link_id")
);

-- CreateTable
CREATE TABLE "NavlinkMasterMapper" (
    "id" SERIAL NOT NULL,
    "master_link_id" INTEGER NOT NULL,
    "order_no" INTEGER NOT NULL DEFAULT 0,
    "link_id" INTEGER NOT NULL,

    CONSTRAINT "NavlinkMasterMapper_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NavlinkMasterMapper" ADD CONSTRAINT "NavlinkMasterMapper_master_link_id_fkey" FOREIGN KEY ("master_link_id") REFERENCES "MasterLink"("master_link_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NavlinkMasterMapper" ADD CONSTRAINT "NavlinkMasterMapper_link_id_fkey" FOREIGN KEY ("link_id") REFERENCES "ServicesNavLink"("link_id") ON DELETE RESTRICT ON UPDATE CASCADE;
