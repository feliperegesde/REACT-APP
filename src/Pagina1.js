import React from 'react';

import Header from './header.js';
import Baixo from './Baixo.js';
import Button from '@mui/material/Button';



function Pagina1() {
  return (
    <>
      <Header />
      <div className="page1">
        <h1 className="textpage1" >PARANDO AÇÕES</h1>
        
        <Button variant="contained" color="success" href="/">
        Voltar para a Página Inicial
      </Button>
      </div>
      <Baixo />
    </>
  );
}

export default Pagina1;