import React from 'react'
import './App.css';

import FormularioCadastro from './Componentes/Formulario/'
import { Container, Typography } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container>

        <Typography variant="h2" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} />

      </Container>
    </div>
  );
}

function aoEnviarForm(dados) {

  console.log(dados)

}


export default App;
