import React, { FC } from 'react';
import Button from '@mui/material/Button';

const Baixo: FC = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="footer">
      <Button className="f5button" variant="contained" onClick={reloadPage}>
        Recarregar Página
      </Button>
      <Button className="f5button" variant="contained" href="/pagina3">
        Fechar
      </Button>
      <Button className="f5button" variant="contained" href="/pagina1">
        Parar
      </Button>
    </div>
  );
};

export default Baixo;

  