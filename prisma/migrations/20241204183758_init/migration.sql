/*
  Warnings:

  - You are about to drop the column `Auto` on the `Libro` table. All the data in the column will be lost.
  - Added the required column `Autor` to the `Libro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Libro" DROP COLUMN "Auto",
ADD COLUMN     "Autor" TEXT NOT NULL;
