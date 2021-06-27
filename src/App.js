import React, { Fragment } from 'react'
import './App.css';

import FormularioLogin from './Componentes/Login/'
import FormularioDados from './Componentes/Dados/'
import FormularioCategoria from "./Componentes/Categoria/"

function App() {
  return (
    <div className="App">
      
      <Fragment>
      
        <h1>Formulário de Cadastro</h1>
        <FormularioLogin />
        <FormularioDados />
        <FormularioCategoria />

      </Fragment>

    </div>
  );
}

export default App;
