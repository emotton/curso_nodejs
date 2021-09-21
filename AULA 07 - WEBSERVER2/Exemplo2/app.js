const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.get("/", (req, res)=>{
    res.send("hello mundo !")
})

app.get("/index.html", (req,res)=>{
    const index = fs.readFileSync(path.join(__dirname, 'pages/index.html'), 'utf-8')
    console.log('Pagina vinda do app.get(index.html)')
    res.send(index);
})

app.get("/:nomePagina", (req,res)=>{
    console.log('Pagina vinda do get(:nomePagina)')
    res.send(puxarPagina(req.params.nomePagina));
})

function puxarPagina(nomePagina){
    return fs.readFileSync(path.join(__dirname, `/pages/${nomePagina}`), 'utf-8')
}

app.listen(3000, ()=>{
    console.log("servidor no ar")
})