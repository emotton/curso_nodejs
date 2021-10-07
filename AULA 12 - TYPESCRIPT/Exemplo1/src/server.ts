import express from "express";
import path from "path";
import dotenv from "dotenv";

// Rotas
import clientesRouter from "./routers/clientesRouter";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT; 

app.use(express.json());

app.get( "/", ( req, res ) => {
    res.send('funcionando !!!');
} );

// Definição de Rotas
app.use("/clientes", clientesRouter);

app.listen( PORT, () => {
    console.log(`⚡️[server]: Servidor rodando em https://localhost:${PORT}`);
} );