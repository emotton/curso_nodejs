import {Router} from 'express';
import { Cliente } from '../models/ClienteModel';

const router = Router();

router.get('/', (req, res) => {
    res.json({success: true});
})

router.post('/', (req, res) =>{
    const cliente: Cliente = {
        id: parseInt(req.body.id),
        nome: req.body.nome
    }
    console.log(cliente);
    res.status(201).json(cliente);
})

export default router;