import express from 'express';
import { createTable } from './Controller/Corrida.js';
import createCorridaRoutes from './routes/create-corrida.js'
import updateCorridaRoutes from './routes/update-corrida.js';
import getCorridasRoutes from './routes/get-corrida.js';

const app = express();
const port = 3000;

// Middleware para parsing do corpo da requisição
app.use(express.json());

// Inicializa o banco de dados
createTable().then(() => {
    console.log('Banco de dados inicializado');
});

// Usa as rotas definidas
app.use('/', createCorridaRoutes);
app.use('/', updateCorridaRoutes);
app.use('/', getCorridasRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.send('API - Gerador de Corridas!');
});

app.listen(port, () => {
    console.log(`App rodando no endereço http://localhost:${port}`);
});
