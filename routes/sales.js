const express = require("express");
const prisma = require("../prisma");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const sales = await prisma.venta.findMany({})
        res.send(sales)
    } catch (error) {
        console.error(error)
    }
});

router.get("/book/:isbn", async (req, res)=>{
    const { isbn } = req.params
    try {
        const allSales = await prisma.libro.findUnique({
            where:{
                ISBN : isbn
            },
            select:{
                Ventas: true
            }
        })
        res.send(allSales)
    } catch (error) {
        console.error(error)
    }
})

router.get("/date/:date", async (req, res)=>{
    const { date } = req.params
    try {
        const dateSales = await prisma.venta.findMany({
            where:{
                Fecha_Venta: new Date(date)
            }
        })
        res.send(dateSales)
    } catch (error) {
        console.error(error)
    }
})

router.get("/top", async (req, res)=>{
    try {
        const top = await prisma.libro.findMany({
            where:{
                Ventas:{
                    some:{}
                }
            },
            select:{
                ISBN:true,
                Precio:true,
                Titulo:true,
                Ventas:{
                    select:{
                        Cantidad:true
                    }
                }
            }
        })

        const SalesSum = top.map((venta)=>{
                const totalVentas = venta.Ventas.reduce((acc, sum)=>acc + sum.Cantidad, 0)
                return {
                ISBN:venta.ISBN,
                Titulo: venta.Titulo,
                Recaudado: totalVentas * venta.Precio,
            }
        })
        SalesSum.sort((first, second)=> second.Recaudado - first.Recaudado)
        res.send(SalesSum[0])
    } catch (error) {
     console.error(error)   
    }
})

router.get("/:id", async (req, res)=>{
    const { id } = req.params

    try {
        const sales = await prisma.venta.findUnique({
            where: {
                ID_Ventas: +id
            }
        })
        res.send(sales)
    } catch (error) {
        console.error(error)
    }
})

module.exports = router;
