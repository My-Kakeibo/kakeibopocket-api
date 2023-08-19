-- DropForeignKey
ALTER TABLE "CategoryBuy" DROP CONSTRAINT "CategoryBuy_haveUserId_fkey";

-- AlterTable
ALTER TABLE "CategoryBuy" ALTER COLUMN "haveUserId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CategoryBuy" ADD CONSTRAINT "CategoryBuy_haveUserId_fkey" FOREIGN KEY ("haveUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
