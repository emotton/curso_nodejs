"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.json({ success: true });
});
router.post('/', (req, res) => {
    const cliente = {
        id: parseInt(req.body.id),
        nome: req.body.nome
    };
    console.log(cliente);
    res.status(201).json(cliente);
});
exports.default = router;
