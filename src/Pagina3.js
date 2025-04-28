import React from 'react';
import { Link } from 'react-router-dom'; 
import Button from '@mui/material/Button';




function Pagina3() {

  return (
    <>
      
      <div className="page1">
        <h1 className="textpage1" >PODE FECHAR AGORA OU RETORNE PARA PAGINA INICIAL </h1>
        <Button variant="contained" color="success" href="/">
        Voltar para a Página Inicial
      </Button>
        </div>
      
    </>
  );
}

export default Pagina3