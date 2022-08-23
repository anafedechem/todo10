import express from "express";
import { ClienteController } from "./api/controllers/clienteController.js"
import cors from "cors";


const app = express(), port = process.env.PORT || 3000;
app.listen(port);
app.use(express.json());
app.use(cors());
const clienteController = new ClienteController();
clienteController.register(app);

console.log('API started on: ' + port);