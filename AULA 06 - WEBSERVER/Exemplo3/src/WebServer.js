const express = require('express')
const app = express()

// Routes
const clientesRouter = require('./routes/clientesRouter')
const produtosRouter = require('./routes/produtosRouter')

// Dados Mock
global.produtos = [
    {id: 1, nome: 'Notebook i7', valor: 8500.00},
    {id: 2, nome: 'Notebook i5', valor: 6500.00},
    {id: 3, nome: 'Monitor', valor: 3250.00}
]

global.clientes = [
    {id: 1, nome: 'Eduardo'},
    {id: 2, nome: 'Henrique'},
    {id: 3, nome: 'Akio'}
]

app.get("/", (req, res)=>{
    res.send("Hello Mundo Web!")
})

// Configuração
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Definição das rotas na app
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

app.listen(3000, ()=>{
    console.log('Servidor no ar na porta 3000')
})