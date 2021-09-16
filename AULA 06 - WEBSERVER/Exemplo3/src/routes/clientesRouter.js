const express = require('express');
const router = express.Router();

// Services
const {getClientes, getClienteById} = require('./../services/clientesService')

router.get("/", (req, res)=>{
    res.send({clientes: getClientes()})
})

router.get("/:id", (req, res)=>{
    res.send(getClienteById(req.params.id))
})

module.exports = router;