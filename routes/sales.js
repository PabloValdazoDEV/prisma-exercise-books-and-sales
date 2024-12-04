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

module.exports = router;
