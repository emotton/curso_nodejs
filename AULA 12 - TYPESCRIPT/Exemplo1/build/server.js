"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Rotas
const clientesRouter_1 = __importDefault(require("./routers/clientesRouter"));
dotenv_1.default.config();
const app = express_1.default();
const PORT = process.env.SERVER_PORT;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send('funcionando !!!');
});
// Definição de Rotas
app.use("/clientes", clientesRouter_1.default);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Servidor rodando em https://localhost:${PORT}`);
});
