import express from 'express';
import { getAllCorridas } from '../Controller/Corrida.js';

const router = express.Router();

// Rota para puxar as corridas!
router.get('/corridas', async (req, res) => {
    try {
        const corridas = await getAllCorridas();
        if (corridas.length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(corridas, null, 2)); 
        } else {
            res.json({
                "statusCode": 200,
                "msg": "Nenhuma corrida cadastrada."
            });
        }
    } catch (error) {
        res.status(500).json({
            "statusCode": 500,
            "msg": "Erro ao buscar corridas!",
            "error": error.message
        });
    }
});

export default router;
