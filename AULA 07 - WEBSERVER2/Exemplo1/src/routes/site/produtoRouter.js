const express = require('express');
const router = express.Router();

const {getProdutos} = require('../../services/produtosService')

router.get("/", (req, res)=>{
    res.render("park-henri/produtos",
    {produtos: getProdutos()})
})

module.exports = router;