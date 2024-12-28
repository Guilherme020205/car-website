-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banner" (
    "id" TEXT NOT NULL,
    "linck" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logo" (
    "id" TEXT NOT NULL,
    "linck" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socialNetworks" (
    "id" TEXT NOT NULL,
    "linck" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "socialNetworks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypesSocialNetworks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TypesSocialNetworks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicles" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "mark_id" TEXT NOT NULL,
    "exchange_id" TEXT NOT NULL,
    "fuel_id" TEXT NOT NULL,
    "bodyWork_id" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "year" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description_id" TEXT NOT NULL,
    "baner1" TEXT NOT NULL,
    "baner2" TEXT NOT NULL,
    "baner3" TEXT NOT NULL,
    "baner4" TEXT NOT NULL,
    "baner5" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "banner" TEXT NOT NULL,

    CONSTRAINT "marks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exchanges" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "exchanges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fuels" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "fuels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bodyworks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "bodyworks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "descriptions" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "descriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userName_key" ON "users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "socialNetworks_type_id_key" ON "socialNetworks"("type_id");

-- CreateIndex
CREATE UNIQUE INDEX "TypesSocialNetworks_name_key" ON "TypesSocialNetworks"("name");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_description_id_key" ON "vehicles"("description_id");

-- CreateIndex
CREATE UNIQUE INDEX "marks_name_key" ON "marks"("name");

-- CreateIndex
CREATE UNIQUE INDEX "exchanges_name_key" ON "exchanges"("name");

-- CreateIndex
CREATE UNIQUE INDEX "fuels_name_key" ON "fuels"("name");

-- CreateIndex
CREATE UNIQUE INDEX "bodyworks_name_key" ON "bodyworks"("name");

-- AddForeignKey
ALTER TABLE "socialNetworks" ADD CONSTRAINT "socialNetworks_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "TypesSocialNetworks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_mark_id_fkey" FOREIGN KEY ("mark_id") REFERENCES "marks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_exchange_id_fkey" FOREIGN KEY ("exchange_id") REFERENCES "exchanges"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_fuel_id_fkey" FOREIGN KEY ("fuel_id") REFERENCES "fuels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_bodyWork_id_fkey" FOREIGN KEY ("bodyWork_id") REFERENCES "bodyworks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_description_id_fkey" FOREIGN KEY ("description_id") REFERENCES "descriptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
