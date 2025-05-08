import React, { FC, useEffect } from 'react';
import Button from '@mui/material/Button';
import focusManager from './FocusManager';

const Baixo: FC = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const footerElementsRefs: HTMLElement[] = [];

    const recarregar = document.getElementById('footer-recarregar');
    const fechar = document.getElementById('footer-fechar');
    const parar = document.getElementById('footer-parar');

    if (recarregar) footerElementsRefs.push(recarregar);
    if (fechar) footerElementsRefs.push(fechar);
    if (parar) footerElementsRefs.push(parar);

    if (footerElementsRefs.length === 3) {
      focusManager.setFooterElements(footerElementsRefs);
    }
  }, []);

  return (
    <div className="footer">
      <Button
        id="footer-recarregar"
        className="f5button"
        variant="contained"
        onClick={reloadPage}
      >
        Recarregar Página
      </Button>
      <Button
        id="footer-fechar"
        className="f5button"
        variant="contained"
        href="/pagina3"
      >
        Fechar
      </Button>
      <Button
        id="footer-parar"
        className="f5button"
        variant="contained"
        href="/pagina1"
      >
        Parar
      </Button>
    </div>
  );
};

export default Baixo;


  