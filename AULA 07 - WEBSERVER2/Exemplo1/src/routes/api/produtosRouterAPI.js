const express = require('express');
const router = express.Router();

// Services
const {getProdutos, getProdutoById,
       insertProduto, updateProdutoById,
    deleteProdutoById} = require('../../services/produtosService')

router.get("/", (req, res)=>{
    res.status(200).json(getProdutos())
})

router.get("/:id", (req, res)=>{
    res.status(200).json(getProdutoById(req.params.id))
})

router.post("/", (req, res)=>{
    insertProduto(req.body)
    res.status(201).json({success: true})
})

router.put("/:id", (req, res)=>{
     updateProdutoById(req.params.id, req.body)
    res.send({success: true})
})

router.delete("/:id", (req, res)=>{
    deleteProdutoById(req.params.id)
    res.send({success: true})
})
module.exports = router;