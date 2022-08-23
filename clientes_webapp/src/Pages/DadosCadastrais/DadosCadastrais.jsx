import {getClientesById} from '../../Service/api.js';
import { useParams } from 'react-router-dom';
import React,{ useState, useEffect } from 'react';
import S from './DadosCadastrais.module.css'

const DadosCadastrais = () => {
  const {id} = useParams();

const [dados, setDados] = useState({
    nome: '',
    sobrenome: '', 
    email: '', 
    telefone: '', 
    cep: '', 
    endereco1: '',
    endereco2:'', 
    data_nasc:'',
    cpf: '',
    renda: ''
  })
  useEffect(() => {
    handleGetCliente();
}, []);


async function handleGetCliente() {
    const response = await getClientesById(id);
    setDados(response);
}
  return (
    <div className={S.DadosCadastrais}>
        <form >
            <label>Nome:</label><br/>
            <input type="text" value={dados.nome} disabled/><br/><br/>
            <label>Sobrenome:</label><br/>
            <input type="text"  value={dados.sobrenome} disabled/><br/><br/>
            <label>Email</label><br/>
            <input type="text"  value={dados.email} disabled/><br/><br/>
            <label>Telefone</label><br/>
            <input type="text"  value={dados.telefone} disabled/><br/><br/>

            <label>CEP:</label><br/>
            <input type="text"  value={dados.cep} disabled/><br/><br/>
            <label>Endereço 1:</label><br/>
            <input type="text"  value={dados.endereco1} disabled/><br/><br/>
            <label>Endereço 2:</label><br/>
            <input type="text"  value={dados.endereco2} disabled/><br/><br/>

            <label>Data de Nascimento:</label><br/>
            <input type="text"  value={dados.data_nasc} disabled/><br/><br/>
            <label>CPF:</label><br/>
            <input type="text"  value={dados.cpf} disabled/><br/><br/>
            <label>Renda mensal:</label><br/>
            <input type="text"  value={dados.renda} disabled/><br/><br/>
        </form>
    </div>
  )
}

export default DadosCadastrais