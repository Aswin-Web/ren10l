-- CreateEnum
CREATE TYPE "FileDocType" AS ENUM ('PassportImg', 'AddressProof', 'PaymentSlips', 'InternalDocs', 'Others');

-- CreateEnum
CREATE TYPE "LinkType" AS ENUM ('NAVMENU', 'SIDEBARMENU', 'DEFAULT');

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "FileDocs" (
    "file_id" SERIAL NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_internal_name" TEXT NOT NULL,
    "file_location" TEXT NOT NULL,
    "file_size" TEXT NOT NULL,
    "file_type" "FileDocType" NOT NULL,
    "comments" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FileDocs_pkey" PRIMARY KEY ("file_id")
);

-- CreateTable
CREATE TABLE "AppServices" (
    "services_id" SERIAL NOT NULL,
    "service_internal_name" TEXT NOT NULL,
    "service_external_name" TEXT,
    "service_note" TEXT,
    "service_description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppServices_pkey" PRIMARY KEY ("services_id")
);

-- CreateTable
CREATE TABLE "ServicesNavLink" (
    "link_id" SERIAL NOT NULL,
    "link_name" TEXT NOT NULL,
    "link_href" TEXT NOT NULL,
    "link_type" "LinkType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServicesNavLink_pkey" PRIMARY KEY ("link_id")
);

-- CreateTable
CREATE TABLE "Address" (
    "address_id" SERIAL NOT NULL,
    "address_line_1" TEXT,
    "address_line_2" TEXT,
    "address_line_3" TEXT,
    "address_line_4" TEXT,
    "area" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "ContactInfo" (
    "contact_id" SERIAL NOT NULL,
    "contact_number" INTEGER NOT NULL,
    "contact_code" TEXT,
    "country_code" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactInfo_pkey" PRIMARY KEY ("contact_id")
);

-- CreateTable
CREATE TABLE "EmailInfo" (
    "email_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailInfo_pkey" PRIMARY KEY ("email_id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "org_id" TEXT NOT NULL,
    "org_internal_name" TEXT,
    "org_external_name" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("org_id")
);

-- CreateTable
CREATE TABLE "OrganizationServices" (
    "org_service_id" TEXT NOT NULL,
    "service_id" INTEGER NOT NULL,
    "service_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrganizationServices_pkey" PRIMARY KEY ("org_service_id")
);

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationServices" ADD CONSTRAINT "OrganizationServices_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "AppServices"("services_id") ON DELETE RESTRICT ON UPDATE CASCADE;
