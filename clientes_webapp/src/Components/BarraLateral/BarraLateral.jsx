import React from 'react'
import S from './BarraLateral.module.css'
import { Link } from 'react-router-dom';

const BarraLateral = () => {
  return (
    <div>
        <nav className={S.BarraLateral}>
            <h1>O que você quer fazer?</h1>
            <button>            
              <Link className={S.link} to='/Cadastro'>Cadastrar um cliente</Link>
            </button>
            <p>OU</p>
            <button>       
              <Link className={S.link} to='/ListaDeClientes'>Ver lista de clientes</Link>
            </button>
            <p>OU</p>
            <button>
              <Link className={S.link} to='/DadosCadastrais'>Ver dados do cliente</Link>     
            </button>
        </nav>
    </div>
  )
}

export default BarraLateral