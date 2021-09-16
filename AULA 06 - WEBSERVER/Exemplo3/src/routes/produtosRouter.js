const express = require('express');
const router = express.Router();

// Services
const {getProdutos, getProdutoById} = require('./../services/produtosService')

router.get("/", (req, res)=>{
    res.send({produtos: getProdutos()})
})

router.get("/:id", (req, res)=>{
    res.send(getProdutoById(req.params.id))
})

module.exports = router;