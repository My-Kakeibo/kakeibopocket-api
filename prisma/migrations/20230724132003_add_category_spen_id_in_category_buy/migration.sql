/*
  Warnings:

  - Added the required column `categorySpendId` to the `CategoryBuy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoryBuy" ADD COLUMN     "categorySpendId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CategoryBuy" ADD CONSTRAINT "CategoryBuy_categorySpendId_fkey" FOREIGN KEY ("categorySpendId") REFERENCES "CategorySpend"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
