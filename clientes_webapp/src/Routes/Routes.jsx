import React from 'react';
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Cadastro from '../Pages/Cadastro/Cadastro';
import Header from '../Components/Header/Header';
import BarraLateral from '../Components/BarraLateral/BarraLateral';
import DadosCadastrais from '../Pages/DadosCadastrais/DadosCadastrais'
import ListaDeClientes from '../Pages/ListaDeClientes/ListaDeClientes'


const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>  
      <BarraLateral/>
      <Switch>
          <Route path='/' element={<Home />}/>
          <Route path='/Cadastro' element={<Cadastro />}/>
          <Route path='/DadosCadastrais/:id' element={<DadosCadastrais />}/>
          <Route path='/ListaDeClientes' element={<ListaDeClientes />}/>
      </Switch>  
    </BrowserRouter>
  )
}

export default Routes