import sqlite3 from "sqlite3";
const SQLite3 = sqlite3.verbose();

class ClienteDAO {
    constructor() {
        this.db = new SQLite3.Database("./clientes.db", (err) => {
            if (err) {
                console.log("Erro ao criar banco de dados: " + err );
                return;
            }
            this.setup(this.db);
        });
    }
    async getAll() {
        const getAllScript = `SELECT * FROM cliente;`;
        return new Promise((resolve, reject) => {
            this.db.all(getAllScript, [], (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }
    async getById(id) {
        const getScript = `SELECT * FROM cliente WHERE id = ${id};`;
        return new Promise((resolve, reject) => {
            this.db.each(getScript, (err, row) => {
                if (err) {
                    return reject(err);
                }
                resolve(row);
            });
        });
    }
    create(cliente) {
        const insertScript = `
        INSERT INTO cliente (nome, sobrenome, email, telefone, cep, endereco1, endereco2, data_nasc, cpf, renda)
        VALUES("${cliente.nome}","${cliente.sobrenome}","${cliente.email}","${cliente.telefone}",
            "${cliente.cep}","${cliente.endereco1}","${cliente.endereco2}","${cliente.dataNascimento}",
            "${cliente.cpf}",${cliente.renda});
        `;
        this.db.exec(insertScript);
        return cliente;
    }
    setup(db) {
        const createTableScript = `
        CREATE TABLE IF NOT EXISTS cliente (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome text NOT NULL,
            sobrenome text NOT NULL,
            email text NOT NULL,
            telefone text NOT NULL,
            cep text NOT NULL,
            endereco1 text NOT NULL,
            endereco2 text,
            data_nasc text NOT NULL,
            cpf text,
            renda number);
        `;
        db.exec(createTableScript);
    }
}

export { ClienteDAO }