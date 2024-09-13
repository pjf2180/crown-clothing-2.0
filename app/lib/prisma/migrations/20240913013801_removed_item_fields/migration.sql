/*
  Warnings:

  - You are about to drop the column `color` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "color",
DROP COLUMN "size",
DROP COLUMN "stock",
ADD COLUMN     "imageUrl" TEXT;
