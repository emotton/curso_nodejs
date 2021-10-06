const express = require('express');
const router = express.Router();

const {getClientes} = require('../../services/clientesService')

router.get("/", async(req, res)=>{
    res.render("park-henri/clientes",
    {clientes:  await getClientes()})
})

module.exports = router;