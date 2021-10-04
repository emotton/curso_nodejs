const express = require('express');
const router = express.Router();

const {getProdutos} = require('../../services/produtosService')

router.get("/", async(req, res)=>{
    res.render("park-henri/produtos",
    {produtos: await getProdutos()})
})

module.exports = router;