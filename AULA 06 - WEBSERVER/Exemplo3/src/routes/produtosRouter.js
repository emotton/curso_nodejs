const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send({produtos: global.produtos})
})

router.get("/:id", (req, res)=>{

    let produto;
    global.produtos.forEach(p => {
        if(p.id == req.params.id){
            produto = p
        }
    });

    res.send(produto)
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