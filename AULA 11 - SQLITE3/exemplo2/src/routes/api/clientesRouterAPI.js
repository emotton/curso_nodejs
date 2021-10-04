const express = require('express');
const router = express.Router();

// Services
const {getClientes, getClienteById, 
    insertCliente, updateClienteById,
    deleteClienteById} = 
    require('../../services/clientesService')

router.get("/", async(req, res)=>{
    res.status(200).json(await getClientes())
})

router.get("/:id", async(req, res)=>{
    res.status(200).json(await getClienteById(req.params.id))
})

router.post("/", async(req, res)=>{
    await insertCliente(req.body)
    res.status(201).json({success: true})
})

router.put("/:id", async(req, res)=>{
    await updateClienteById(req.params.id, req.body)
    res.send({success: true})
})

router.delete("/:id", async(req, res)=>{
    await deleteClienteById(req.params.id)
    res.send({success: true})
})

module.exports = router;