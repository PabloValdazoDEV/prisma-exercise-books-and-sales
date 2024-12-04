-- CreateTable
CREATE TABLE "Libro" (
    "ISBN" TEXT NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Auto" TEXT NOT NULL,
    "Precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("ISBN")
);

-- CreateTable
CREATE TABLE "Ventas" (
    "ID_Ventas" SERIAL NOT NULL,
    "ISBN" TEXT NOT NULL,
    "Fecha_Venta" TIMESTAMP(3) NOT NULL,
    "Cantidad" INTEGER NOT NULL,

    CONSTRAINT "Ventas_pkey" PRIMARY KEY ("ID_Ventas")
);

-- AddForeignKey
ALTER TABLE "Ventas" ADD CONSTRAINT "Ventas_ISBN_fkey" FOREIGN KEY ("ISBN") REFERENCES "Libro"("ISBN") ON DELETE RESTRICT ON UPDATE CASCADE;
