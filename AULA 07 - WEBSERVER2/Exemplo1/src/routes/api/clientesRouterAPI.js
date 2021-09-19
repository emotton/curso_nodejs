const express = require('express');
const router = express.Router();

// Services
const {getClientes, getClienteById, 
    insertCliente, updateClienteById,
    deleteClienteById} = 
    require('../../services/clientesService')

router.get("/", (req, res)=>{
    res.status(200).json(getClientes())
})

router.get("/:id", (req, res)=>{
    res.status(200).json(getClienteById(req.params.id))
})

router.post("/", (req, res)=>{
    insertCliente(req.body)
    res.status(201).json({success: true})
})

router.put("/:id", (req, res)=>{
    updateClienteById(req.params.id, req.body)
    res.send({success: true})
})

router.delete("/:id", (req, res)=>{
    deleteClienteById(req.params.id)
    res.send({success: true})
})

module.exports = router;