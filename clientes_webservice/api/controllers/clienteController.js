import { ClienteDAO } from "../dao/clienteDao.js";
import { Cliente } from "../models/clienteModel.js"
class ClienteController {
    constructor() {
        this.dao = new ClienteDAO();
    }
    async getAll(res) {
        let clientes = await this.dao.getAll();
        res.json(clientes)
    }
    async getById(req, res) {
        const id = req.params.id;
        if(id === undefined){
            return {};
        }
        let cliente = await this.dao.getById(id);
        res.json(cliente)
    }
    create(req, res) {
        let cliente = req.body;
        let parsedCliente = new Cliente(cliente.nome, cliente.sobrenome, 
            cliente.email, cliente.telefone, cliente.cep, 
            cliente.endereco1, cliente.endereco2, cliente.dataNascimento, 
            cliente.cpf, cliente.renda);
        parsedCliente = this.dao.create(parsedCliente);
        res.json(parsedCliente)
    }
    register(app) {
        app.route('/clientes')
            .get((_req, res) => this.getAll(res))
            .post((req, res) => this.create(req, res));
        app.route('/clientes/:id')
            .get((req, res) => this.getById(req, res));
    }
}

export { ClienteController }