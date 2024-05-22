import request from 'supertest';
import app from '../routes/create-corrida.js';


// Teste para verificar se está criando corretamente uma nova Corrida
describe('Testing Create Route', () => {
    it('should create a new Corrida', async () => {
        const corridaData = {
            nome: "Teste",
            carro: "Carro de Teste",
            cor: "Uma cor de Teste"
        };

        const res = await request(app)
            .post('/corrida')
            .send(corridaData);

        expect(res.statusCode).toEqual(200);
        expect(res.body.statusCode).toEqual(200);
        expect(res.body.msg).toEqual("Corrida inserida!");
    });
});
