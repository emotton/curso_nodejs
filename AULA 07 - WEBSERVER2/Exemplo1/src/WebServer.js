const express = require('express')
const app = express()

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


// Routes
const clientesRouterAPI = require('./routes/api/clientesRouterAPI')
const produtosRouterAPI = require('./routes/api/produtosRouterAPI')

// Configurações (Antes das Rotas)
app.use(express.json())
// Utilizada para informar que podem existir
// json no body
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res)=>{
    res.send("Ola mundo Galera")
})

// Definição das rotas na app
app.use('/api/clientes', clientesRouterAPI);
app.use('/api/produtos', produtosRouterAPI);

app.listen(3000, ()=>{
    console.log('Servidor no ar')
})
