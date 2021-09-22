const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.get("/", (req, res)=>{
    res.send("<html><body><h1 style='color:red;'>hello mundo !</h1></body></html>")
})

app.get("/index.html", (req, res)=>{
    console.log('pagina foi puxada pelo /index.html')
    const indexHtml = fs.readFileSync("pages/index.html", "utf-8")
    res.send(indexHtml)
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