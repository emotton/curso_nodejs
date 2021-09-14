const express = require('express')
const app = express()
// const bodyParser = require('body-parser');

// Rotas
const produtosRouter = require('./routes/produtosRouter');
const clientesRouter = require('./routes/clientesRouter');

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

// Configurações
/*
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
*/
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Setar Rotas
app.use('/produtos', produtosRouter);
app.use('/clientes', clientesRouter);

app.listen(3000, ()=>{
    console.log('Servidor no ar na porta 3000')
})