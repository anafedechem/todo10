import S from './ListaDeClientes.module.css'
import {getClientes} from '../../Service/api.js';
import React,{ useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const ListaDeClientes = () => {
const [clientes, setClientes] = useState([]);
const navigate = useNavigate();
useEffect(() => {
    handleGetClientes();
}, []);


async function handleGetClientes() {
    const response = await getClientes();
    setClientes(response);
}
function navigateToDados(id){
    navigate(`/DadosCadastrais/${id}`);
}
return (
        <div className={S.MainContent}>
            <table>
                <thead></thead>
                <tbody>
                {
                !!clientes && clientes.map((cliente, index)=>{
                return (
                    <tr key={index} onClick={() => { navigateToDados(cliente.id); }}>
                     <td>{cliente.id}</td>
                     <td>{cliente.nome}</td>
                     <td>{cliente.email}</td>
                    </tr>)
                })
            }
                </tbody>
           
            </table>
            {/* <button>
                <Link className={S.link} to='/DadosCadastrais'>Ver dados do cliente</Link>
            </button> */}
        </div>
    )
}

export default ListaDeClientes