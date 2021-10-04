const express = require('express');
const router = express.Router();

// Services
const {getFornecedores, getFornecedorById, 
    insertFornecedor, updateFornecedorById,
    deleteFornecedorById} = 
    require('../../services/fornecedoresService')

router.get("/", async(req, res)=>{
    res.status(200).json(await getFornecedores())
})

router.get("/:id", async(req, res)=>{
    res.status(200).json(await getFornecedorById(req.params.id))
})

router.post("/", async(req, res)=>{
    await insertFornecedor(req.body)
    res.status(201).json({success: true})
})

router.put("/:id", async(req, res)=>{
    await updateFornecedorById(req.params.id, req.body)
    res.send({success: true})
})

router.delete("/:id", async(req, res)=>{
    await deleteFornecedorById(req.params.id)
    res.send({success: true})
})

module.exports = router;