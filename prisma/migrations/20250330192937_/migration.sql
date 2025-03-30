-- CreateTable
CREATE TABLE "Complexes" (
    "complex_id" SERIAL NOT NULL,
    "complex_display_name" TEXT NOT NULL,
    "comples_full_name" TEXT,
    "available_floors" INTEGER NOT NULL,
    "address_id" INTEGER,
    "org_service_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "complex_init_status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Complexes_pkey" PRIMARY KEY ("complex_id")
);

-- CreateTable
CREATE TABLE "ComplexFloors" (
    "floor_id" SERIAL NOT NULL,
    "floor_code" TEXT NOT NULL,
    "floor_name" TEXT NOT NULL,
    "floor_order" INTEGER NOT NULL,
    "available_floor_space" INTEGER NOT NULL,
    "org_service_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "complex_id" INTEGER NOT NULL,
    "floor_init_status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComplexFloors_pkey" PRIMARY KEY ("floor_id")
);

-- CreateTable
CREATE TABLE "FloorSpaces" (
    "space_id" SERIAL NOT NULL,
    "space_code" TEXT NOT NULL,
    "space_name" TEXT NOT NULL,
    "space_comments" TEXT,
    "space_max_customers" INTEGER NOT NULL,
    "space_filled_customers" INTEGER NOT NULL,
    "space_balance_customers" INTEGER NOT NULL,
    "space_rent_per_customer" INTEGER NOT NULL,
    "org_service_id" TEXT NOT NULL,
    "floor_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "complex_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FloorSpaces_pkey" PRIMARY KEY ("space_id")
);

-- CreateTable
CREATE TABLE "CustomerMappedComplexes" (
    "id" SERIAL NOT NULL,
    "customer_id" TEXT NOT NULL,
    "complex_id" INTEGER NOT NULL,
    "floor_id" INTEGER NOT NULL,
    "space_id" INTEGER NOT NULL,
    "org_service_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,
    "payment_date" TEXT NOT NULL,
    "advance_amount" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerMappedComplexes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerAddress" (
    "id" SERIAL NOT NULL,
    "address_id" INTEGER NOT NULL,
    "customer_id" TEXT NOT NULL,
    "is_permanent" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerContactInfo" (
    "id" SERIAL NOT NULL,
    "customer_id" TEXT NOT NULL,
    "contact_id" INTEGER NOT NULL,
    "is_permanent" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerContactInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerEmailInfo" (
    "id" SERIAL NOT NULL,
    "customer_id" TEXT NOT NULL,
    "email_id" INTEGER NOT NULL,
    "is_permanent" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerEmailInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerFilesInfo" (
    "id" SERIAL NOT NULL,
    "customer_id" TEXT NOT NULL,
    "file_id" INTEGER NOT NULL,
    "file_comments" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerFilesInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerGuardian" (
    "id" SERIAL NOT NULL,
    "customer_id" TEXT NOT NULL,
    "guardian_type" TEXT NOT NULL,
    "guardian_name" TEXT NOT NULL,
    "email_id" INTEGER NOT NULL,
    "contact_id" INTEGER NOT NULL,
    "address_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerGuardian_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Complexes" ADD CONSTRAINT "Complexes_org_service_id_fkey" FOREIGN KEY ("org_service_id") REFERENCES "OrganizationServices"("org_service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complexes" ADD CONSTRAINT "Complexes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complexes" ADD CONSTRAINT "Complexes_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplexFloors" ADD CONSTRAINT "ComplexFloors_complex_id_fkey" FOREIGN KEY ("complex_id") REFERENCES "Complexes"("complex_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplexFloors" ADD CONSTRAINT "ComplexFloors_org_service_id_fkey" FOREIGN KEY ("org_service_id") REFERENCES "OrganizationServices"("org_service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplexFloors" ADD CONSTRAINT "ComplexFloors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FloorSpaces" ADD CONSTRAINT "FloorSpaces_floor_id_fkey" FOREIGN KEY ("floor_id") REFERENCES "ComplexFloors"("floor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FloorSpaces" ADD CONSTRAINT "FloorSpaces_complex_id_fkey" FOREIGN KEY ("complex_id") REFERENCES "Complexes"("complex_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FloorSpaces" ADD CONSTRAINT "FloorSpaces_org_service_id_fkey" FOREIGN KEY ("org_service_id") REFERENCES "OrganizationServices"("org_service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FloorSpaces" ADD CONSTRAINT "FloorSpaces_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerMappedComplexes" ADD CONSTRAINT "CustomerMappedComplexes_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organization"("org_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerMappedComplexes" ADD CONSTRAINT "CustomerMappedComplexes_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerMappedComplexes" ADD CONSTRAINT "CustomerMappedComplexes_complex_id_fkey" FOREIGN KEY ("complex_id") REFERENCES "Complexes"("complex_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerMappedComplexes" ADD CONSTRAINT "CustomerMappedComplexes_floor_id_fkey" FOREIGN KEY ("floor_id") REFERENCES "ComplexFloors"("floor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerMappedComplexes" ADD CONSTRAINT "CustomerMappedComplexes_space_id_fkey" FOREIGN KEY ("space_id") REFERENCES "FloorSpaces"("space_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerMappedComplexes" ADD CONSTRAINT "CustomerMappedComplexes_org_service_id_fkey" FOREIGN KEY ("org_service_id") REFERENCES "OrganizationServices"("org_service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerMappedComplexes" ADD CONSTRAINT "CustomerMappedComplexes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerAddress" ADD CONSTRAINT "CustomerAddress_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerAddress" ADD CONSTRAINT "CustomerAddress_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerAddress" ADD CONSTRAINT "CustomerAddress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerContactInfo" ADD CONSTRAINT "CustomerContactInfo_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerContactInfo" ADD CONSTRAINT "CustomerContactInfo_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "ContactInfo"("contact_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerContactInfo" ADD CONSTRAINT "CustomerContactInfo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerEmailInfo" ADD CONSTRAINT "CustomerEmailInfo_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerEmailInfo" ADD CONSTRAINT "CustomerEmailInfo_email_id_fkey" FOREIGN KEY ("email_id") REFERENCES "EmailInfo"("email_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerEmailInfo" ADD CONSTRAINT "CustomerEmailInfo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerFilesInfo" ADD CONSTRAINT "CustomerFilesInfo_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerFilesInfo" ADD CONSTRAINT "CustomerFilesInfo_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "FileDocs"("file_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerFilesInfo" ADD CONSTRAINT "CustomerFilesInfo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerGuardian" ADD CONSTRAINT "CustomerGuardian_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerGuardian" ADD CONSTRAINT "CustomerGuardian_email_id_fkey" FOREIGN KEY ("email_id") REFERENCES "EmailInfo"("email_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerGuardian" ADD CONSTRAINT "CustomerGuardian_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "ContactInfo"("contact_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerGuardian" ADD CONSTRAINT "CustomerGuardian_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;
