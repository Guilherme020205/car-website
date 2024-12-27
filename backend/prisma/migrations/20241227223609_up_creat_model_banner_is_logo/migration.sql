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
