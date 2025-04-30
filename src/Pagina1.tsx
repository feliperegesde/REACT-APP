import React, { FC } from 'react';
import Header from './body/header';
import Baixo from './body/Baixo';
import Button from '@mui/material/Button';

const Pagina1: FC = () => {
  return (
    <>
      <Header />
      <div className="page1">
        <h1 className="textpage1">PARANDO AÇÕES</h1>

        <Button variant="contained" color="success" href="/">
          Voltar para a Página Inicial
        </Button>
      </div>
      <Baixo />
    </>
  );
};

export default Pagina1;
