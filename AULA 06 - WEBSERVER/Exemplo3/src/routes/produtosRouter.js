const express = require('express');
const router = express.Router();

// Services
const {
   getProdutos, getProdutoById
} = require('../services/produtosService');

router.get("/", (req, res)=>{
    res.send({produtos: getProdutos()})
})

router.get("/:id", (req, res)=>{
    res.send(getProdutoById(req.params.id))
})

router.post("/", (req, res)=>{
    console.log(req.body)
    global.produtos.push(req.body)
    res.send({success: true})
})

router.put("/:id", (req, res)=>{
    console.log(req.params.id+ " quer ser alterado !")
    console.log(req.body)
    res.send({success: true})
})

router.delete("/:id", (req, res)=>{
    console.log(req.params.id+ " quer ser excluido !")
    res.send({success: true})
})

module.exports = router;