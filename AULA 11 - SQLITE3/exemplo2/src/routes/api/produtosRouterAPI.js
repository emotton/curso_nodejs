const express = require('express');
const router = express.Router();

// Services
const {getProdutos, getProdutoById,
       insertProduto, updateProdutoById,
    deleteProdutoById} = require('../../services/produtosService')

router.get("/", async(req, res)=>{
    res.status(200).json(await getProdutos())
})

router.get("/:id", async(req, res)=>{
    res.status(200).json(await getProdutoById(req.params.id))
})

router.post("/", async(req, res)=>{
    await insertProduto(req.body)
    res.status(201).json({success: true})
})

router.put("/:id", async(req, res)=>{
    await updateProdutoById(req.params.id, req.body)
    res.send({success: true})
})

router.delete("/:id", async(req, res)=>{
    await deleteProdutoById(req.params.id)
    res.send({success: true})
})
module.exports = router;