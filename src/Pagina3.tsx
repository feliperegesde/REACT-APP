import React, { FC } from 'react';
import Button from '@mui/material/Button';

const Pagina3: FC = () => {
  return (
    <>
      <div className="page1">
        <h1 className="textpage1">
          PODE FECHAR AGORA OU RETORNE PARA PÁGINA INICIAL
        </h1>
        <Button variant="contained" color="success" href="/">
          Voltar para a Página Inicial
        </Button>
      </div>
    </>
  );
};

export default Pagina3;
