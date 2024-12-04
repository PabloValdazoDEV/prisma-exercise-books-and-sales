const express = require('express');
const prisma = require('../prisma');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const libros = await prisma.libro.findMany({})
        res.send(libros)
    } catch (error) {
        console.error(error)
    }
})

router.get("/author/:author", async (req, res)=>{
    const { author } = req.params

    try {
        const findAuthor = await prisma.libro.findMany({
            where:{
                Autor: author
            }
        })
        res.send(findAuthor)
    } catch (error) {
        console.error(error)
    }
})

router.get("/prices/:price", async (req,res)=>{
    const { price } = req.params

    try {
        const bookPrice = await prisma.libro.findMany({
            where:{
                Precio:{
                    lt: +price
                }
            }
        })
        res.send(bookPrice)
    } catch (error) {
        console.error(error)
    }
})

router.get('/with-sales', async (req, res) => {
    try {
        const join = await prisma.libro.findMany({
            include:{
                Ventas: true
            }
        })
        res.send(join)
    } catch (error) {
        console.error(error)
    }
})

router.get("/:isbn", async (req, res)=>{
    const { isbn } = req.params

    try {
        const libro = await prisma.libro.findUnique({
            where: {
                ISBN: isbn
            }
        })
        res.send(libro)
    } catch (error) {
        console.error(error)
    }
})


module.exports = router;
