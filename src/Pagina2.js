import React from 'react';
import Header from './header.js';
import Baixo from './Baixo.js';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Pagina2() {

  return (
    <>
      <Header />
      <div className='pagina2' >
        <h1 className='textoPagina2' >AÇÃO</h1>
        <Button variant="contained" color="success" href="/">
        Voltar para a Página Inicial
      </Button>

      </div>
      <Baixo />
    </>
  );
}

export default Pagina2;
