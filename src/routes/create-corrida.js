import express from 'express';
import { insertCorrida } from '../Controller/Corrida.js';
import { normalizeStatus } from '../Utils/valida-status.js';

const router = express.Router();

// Rota para criar uma nova corrida
router.post('/corrida', (req, res) => {
    const corrida = req.body;
    if (corrida && corrida.nome && corrida.carro && corrida.cor) {
        insertCorrida(corrida).then(() => {
            res.json({
                "statusCode": 200,
                "msg": "Corrida inserida!"
            });
        }).catch((error) => {
            res.status(500).json({
                "statusCode": 500,
                "msg": "Erro ao inserir corrida!",
                "error": error.message
            });
        });
    } else {
        res.status(400).json({
            "statusCode": 400,
            "msg": "Dados incompletos ou inválidos para inserir a corrida."
        });
    }
});

// Para o teste unitário
const app = express();
app.use(express.json());
app.use('/', router);

export default app;