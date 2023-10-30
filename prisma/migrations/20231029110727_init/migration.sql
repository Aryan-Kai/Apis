-- CreateTable
CREATE TABLE "MobileRecords" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "MobileRecords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MobileRecords_phoneNumber_key" ON "MobileRecords"("phoneNumber");
