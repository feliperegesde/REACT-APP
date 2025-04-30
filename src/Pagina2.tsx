import React, { FC } from 'react';
import Header from './body/header';
import Baixo from './body/Baixo';
import Button from '@mui/material/Button';

const Pagina2: FC = () => {
  return (
    <>
      <Header />
      <div className="pagina2">
        <h1 className="textoPagina2">AÇÃO</h1>
        <Button variant="contained" color="success" href="/">
          Voltar para a Página Inicial
        </Button>
      </div>
      <Baixo />
    </>
  );
};

export default Pagina2;


