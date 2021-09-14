const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send({clientes: global.clientes})
})

router.get("/:id", (req, res)=>{

    let cliente;
    global.clientes.forEach(c => {
        if(c.id == req.params.id){
            cliente = c
        }
    });

    res.send(cliente)
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