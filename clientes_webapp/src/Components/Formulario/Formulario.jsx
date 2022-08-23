import React, {useState} from 'react'
import S from './Formulario.module.css'
import { postCliente } from '../../Service/api.js'

const Formulario = () => {
  const [FormStage, setFormStage] = useState(0)
function changeStage(e, stage){
  e.preventDefault();
  setFormStage(stage);
}
const [dadosForm, setDadosForm] = useState({
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
function handleSave(e){
  e.preventDefault();
  postCliente(dadosForm);
  alert('Sucesso!');
  document.location.href = '/ListaDeClientes';
  console.log(dadosForm);
}

function handleChange(target, nomeDaChave){
  const value = target.value;
  setDadosForm({...dadosForm, [nomeDaChave]: value});
  console.log(dadosForm);
}
  return (
    <div className={S.Formulario}>
        <form>
            <div className={FormStage === 0 ? '' : S.Hidden}>
                <label>Nome:</label><br/>
                <input type="text" value={dadosForm.nome} onChange={({ target }) => handleChange(target,'nome')} /><br/><br/>
                <label>Sobrenome:</label><br/>
                <input type="text" value={dadosForm.sobrenome} onChange={({ target }) => handleChange(target,'sobrenome')} /><br/><br/>
                <label>Email</label><br/>
                <input type="text" value={dadosForm.email} onChange={({ target }) => handleChange(target,'email')}/><br/><br/>
                <label>Telefone</label><br/>
                <input type="text" value={dadosForm.telefone} onChange={({ target }) => handleChange(target,'telefone')}/><br/><br/>
                <button onClick={(e)=>{ changeStage(e, 1) }}>PRÓXIMO</button><br/>
            </div>

            <div className={FormStage === 1 ? '' : S.Hidden}>
              <label>CEP:</label><br/>
              <input type="text" value={dadosForm.cep} onChange={({ target }) => handleChange(target,'cep')} /><br/><br/>
              <label>Endereço 1:</label><br/>
              <input type="text" value={dadosForm.endereco1} onChange={({ target }) => handleChange(target,'endereco1')}/><br/><br/>
              <label>Endereço 2:</label><br/>
              <input type="text" value={dadosForm.endereco2} onChange={({ target }) => handleChange(target,'endereco2')} /><br/><br/>
              <button onClick={(e)=>{ changeStage(e, 0) }}>ANTERIOR</button>
              <button onClick={(e)=>{ changeStage(e, 2) }}>PRÓXIMO</button><br/>
            </div>

            <div className={FormStage === 2 ? '' : S.Hidden}>
              <label>Data de Nascimento:</label><br/>
              <input type="text" value={dadosForm.data_nasc} onChange={({ target }) => handleChange(target,'data_nasc')} /><br/><br/>
              <label>CPF:</label><br/>
              <input type="text" value={dadosForm.cpf} onChange={({ target }) => handleChange(target,'cpf')} /><br/><br/>
              <label>Renda mensal:</label><br/>
              <input type="number" value={dadosForm.renda} onChange={({ target }) => handleChange(target,'renda')}/><br/><br/>
              <button onClick={(e)=>{ changeStage(e, 1) }}>ANTERIOR</button>
              <button onClick={handleSave}>SALVAR</button><br/>
            </div>
        </form>
    </div>
  )
}

export default Formulario