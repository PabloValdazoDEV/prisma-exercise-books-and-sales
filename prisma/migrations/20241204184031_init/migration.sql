/*
  Warnings:

  - You are about to drop the `Ventas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ventas" DROP CONSTRAINT "Ventas_ISBN_fkey";

-- DropTable
DROP TABLE "Ventas";

-- CreateTable
CREATE TABLE "Venta" (
    "ID_Ventas" SERIAL NOT NULL,
    "ISBN" TEXT NOT NULL,
    "Fecha_Venta" TIMESTAMP(3) NOT NULL,
    "Cantidad" INTEGER NOT NULL,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("ID_Ventas")
);

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_ISBN_fkey" FOREIGN KEY ("ISBN") REFERENCES "Libro"("ISBN") ON DELETE RESTRICT ON UPDATE CASCADE;
