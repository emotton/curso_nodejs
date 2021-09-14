const express = require('express');
const router = express.Router();

// Services
const {
    getClientes, getClienteById
} = require('../services/clientesService');

router.get("/", (req, res)=>{
    res.send({clientes: getClientes()})
})

router.get("/:id", (req, res)=>{
    res.send(getClienteById(req.params.id))
})

router.post("/", (req, res)=>{
    console.log(req.body)
    global.clientes.push(req.body)
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