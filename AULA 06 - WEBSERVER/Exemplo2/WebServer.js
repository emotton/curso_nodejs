const express = require('express')
const { fileURLToPath } = require('url')
const app = express()

// Mapear uma rota
app.get("/", (req, res) =>{
    res.redirect('/clientes')
})

app.get("/produtos", (req, res) =>{
    res.send({produtos: [
        {id: 1, nome: 'Notebook i7', valor: 8500.00},
        {id: 2, nome: 'Notebook i5', valor: 6500.00},
        {id: 3, nome: 'Monitor', valor: 3200.00}
    ]})
})

app.get("/clientes", (req, res) =>{
    res.send({clientes: [
        {id: 1, nome: 'Eduardo'},
        {id: 2, nome: 'Henrique'},
        {id: 3, nome: 'Akio'},
        {id: 4, nome: 'Bheatriz'},
        {id: 5, nome: 'Célia'}
    ]})
})

app.listen(3000, ()=>{
    console.log('Servidor no ar na porta 3000')
})

