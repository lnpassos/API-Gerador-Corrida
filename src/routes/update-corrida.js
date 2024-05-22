import express from 'express';
import { atualizaCorrida } from '../Controller/Corrida.js';
import { normalizeStatus } from '../Utils/valida-status.js';

const router = express.Router();


// Rota para atualizar a corrida!
router.put('/corrida', async (req, res) => {
    const corrida = req.body;
    const validStatuses = ['CANCELADO', 'FINALIZADO'];

    if (corrida && corrida.status && corrida.id) {
        // patroniza o status para maiúsculas
        const normalizedStatus = normalizeStatus(corrida.status);
        
        // Verifica se o status patronizado está na lista de status válidos
        if (validStatuses.includes(normalizedStatus)) {
            try {
                // Atualiza a corrida
                await atualizaCorrida({ ...corrida, status: normalizedStatus });
                res.json({
                    "statusCode": 200,
                    "msg": "Corrida atualizada!"
                });
            } catch (error) {
                res.status(500).json({
                    "statusCode": 500,
                    "msg": "Erro ao atualizar corrida!",
                    "error": error.message
                });
            }
        } else {
            res.status(400).json({
                "statusCode": 400,
                "msg": "O status fornecido é inválido. Apenas 'CANCELADO' ou 'FINALIZADO' são permitidos."
            });
        }
    } else {
        res.status(400).json({
            "statusCode": 400,
            "msg": "Dados inválidos para atualizar corrida!"
        });
    }
});


export default router;
