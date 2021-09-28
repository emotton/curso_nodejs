const express = require('express')
const app = express()
const favicon = require('serve-favicon');
const path = require('path');
const handlebars = require('express-handlebars');

// Routes
const homeRouter = require('./routes/site/homeRouter')
const clienteRouter = require('./routes/site/clienteRouter')
const produtoRouter = require('./routes/site/produtoRouter')
const clientesRouterAPI = require('./routes/api/clientesRouterAPI')
const produtosRouterAPI = require('./routes/api/produtosRouterAPI')

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

// Configurações
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// layouts
app.set('views', path.join(__dirname, 'views'));

var hbs = handlebars.create({
    defaultLayout: 'main',
    partialsDir: [path.join(__dirname, 'views/partials')]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

// public
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'parkhenri-icone.gif')));

// Definição das rotas na app
app.use('/park-henri', homeRouter);
app.use('/park-henri/clientes', clienteRouter);
app.use('/park-henri/produtos', produtoRouter);
app.use('/api/clientes', clientesRouterAPI);
app.use('/api/produtos', produtosRouterAPI);

app.get("/", (req, res)=>{
    res.redirect('/park-henri')
})

app.listen(3000, ()=>{
    console.log('Servidor no ar na porta 3000')
})





