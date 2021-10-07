const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const handlebars = require('express-handlebars');
const cors = require('cors');

// Routes
const homeRouter = require('./routes/site/homeRouter');
const clienteRouter = require('./routes/site/clienteRouter');
const fornecedorRouter = require('./routes/site/fornecedorRouter');
const produtoRouter = require('./routes/site/produtoRouter');
const clientesRouterAPI = require('./routes/api/clientesRouterAPI');
const fornecedoresRouterAPI = require('./routes/api/fornecedoresRouterAPI');
const produtosRouterAPI = require('./routes/api/produtosRouterAPI');

// Database
(async () => {
    try {
        const database = require('./connections/db');
        const cliente = require('./models/cliente');
        const fornecedor = require('./models/fornecedor');
        const produto = require('./models/produto');
        await database.sync();
    } catch (error) {
        console.log(error);
    }
})()

// Configurações
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.options('*', cors());

// layouts
app.set('views', path.join(__dirname, 'views'));

var hbs = handlebars.create({
    defaultLayout: 'main',
    partialsDir: [path.join(__dirname, 'views/partials')]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// public
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'parkhenri-icone.gif')));

// Definição das rotas na app
app.use('/park-henri', homeRouter);
app.use('/park-henri/clientes', clienteRouter);
app.use('/park-henri/fornecedores', fornecedorRouter);
app.use('/park-henri/produtos', produtoRouter);
app.use('/api/clientes', clientesRouterAPI);
app.use('/api/fornecedores', fornecedoresRouterAPI);
app.use('/api/produtos', produtosRouterAPI);

app.get("/", (req, res)=>{
    res.redirect('/park-henri');
})

app.listen(3000, ()=>{
    console.log('Servidor no ar na porta 3000');
})





