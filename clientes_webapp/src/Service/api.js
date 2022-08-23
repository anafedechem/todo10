import axios from 'axios';  

const instancia = axios.create({
    baseURL: 'http://localhost:3000/'
})


export const getClientes = async () => {
    const response = await instancia.get('/clientes');
    const json = await response.data;
    return json;
}


export const getClientesById = async (valorInput) => {    
     const response = await instancia.get(`/clientes/${valorInput}`);
     const json = await response.data;
     return json;
}


export const postCliente = async (cliente) => {
    const response = await instancia.post(`/clientes`, cliente);
    const json = await response.data.msg;
    return json;
}
