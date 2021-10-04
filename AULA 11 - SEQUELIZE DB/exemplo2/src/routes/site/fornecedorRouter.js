const express = require('express');
const router = express.Router();

const {getFornecedores} = require('../../services/fornecedoresService')

router.get("/", async(req, res)=>{
    res.render("park-henri/fornecedores",
    {fornecedores: await getFornecedores()})
})

module.exports = router;