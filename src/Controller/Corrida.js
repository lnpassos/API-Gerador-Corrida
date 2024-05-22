import { openDb } from "../configDB.js";
import { normalizeStatus } from "../Utils/valida-status.js";


// Criando a tabela
export async function createTable(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Corrida ( id INTEGER PRIMARY KEY, nome TEXT, carro TEXT, cor TEXT, status TEXT )')
    })
}


// Cria nova corrida
export async function insertCorrida(corrida) {
    const db = await openDb();
    corrida.status = 'ATIVO';   // Define o status como 'ATIVO' por padrão (Assim que "Iniciar uma nova corrida")
    return db.run('INSERT INTO Corrida (nome, carro, cor, status) VALUES (?, ?, ?, ?)', 
    [corrida.nome, corrida.carro, corrida.cor, corrida.status]);
}


// Atualiza status da corrida
export async function atualizaCorrida(corrida) {
    const db = await openDb();
    corrida.status = normalizeStatus(corrida.status);  // padronizando o status antes de inserir
    return db.run('UPDATE Corrida SET status=? WHERE id=?', [corrida.status, corrida.id]);
}


// Puxar as corridas
export async function getAllCorridas() {
    const db = await openDb();
    return db.all('SELECT * FROM Corrida');
}