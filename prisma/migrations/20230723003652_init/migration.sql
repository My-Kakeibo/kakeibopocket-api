-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "fullname" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorySpend" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "CategorySpend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryBuy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "haveUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "CategoryBuy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpectationPerMonth" (
    "id" TEXT NOT NULL,
    "income" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ExpectationPerMonth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpendingExpectation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "budget" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "startDateSpend" TIMESTAMP(3) NOT NULL,
    "endDateSpend" TIMESTAMP(3) NOT NULL,
    "categoryBuyId" TEXT NOT NULL,
    "expectationPerMonthId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "SpendingExpectation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpendingReality" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "dateSpend" TIMESTAMP(3) NOT NULL,
    "categoryBuyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "SpendingReality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "CategoryBuy" ADD CONSTRAINT "CategoryBuy_haveUserId_fkey" FOREIGN KEY ("haveUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpectationPerMonth" ADD CONSTRAINT "ExpectationPerMonth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpendingExpectation" ADD CONSTRAINT "SpendingExpectation_categoryBuyId_fkey" FOREIGN KEY ("categoryBuyId") REFERENCES "CategoryBuy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpendingExpectation" ADD CONSTRAINT "SpendingExpectation_expectationPerMonthId_fkey" FOREIGN KEY ("expectationPerMonthId") REFERENCES "ExpectationPerMonth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpendingReality" ADD CONSTRAINT "SpendingReality_categoryBuyId_fkey" FOREIGN KEY ("categoryBuyId") REFERENCES "CategoryBuy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
