import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import focusManager from "./body/FocusManager";

const Pagina1: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getFocusable = (container: HTMLElement | null): HTMLElement[] =>
      container ? Array.from(container.querySelectorAll<HTMLElement>("button, [tabindex]:not([tabindex='-1'])")) : [];

    focusManager.setMainContentElements(getFocusable(mainRef.current));
  }, []);

  return (
    <div ref={mainRef} className="pagina1" tabIndex={-1}>
      <h1 className="textpage1">PARANDO AÇÕES</h1>
      <Button variant="contained" color="success" href="/">
        Voltar para a Página Inicial
      </Button>
    </div>
  );
};

export default Pagina1;


