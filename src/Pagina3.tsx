import React, { FC, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import focusManager from "./body/FocusManager";
import { useNavigate } from 'react-router-dom';

const Pagina3: FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getFocusable = (container: HTMLElement | null): HTMLElement[] =>
      container ? Array.from(container.querySelectorAll<HTMLElement>("button, [tabindex]:not([tabindex='-1'])")) : [];

    focusManager.setMainContentElements(getFocusable(mainRef.current));
  }, []);

  return (
    <div ref={mainRef} className="pagina1" tabIndex={0}>
      <h1 className="textpage1">
        PODE FECHAR AGORA OU RETORNE PARA PÁGINA INICIAL
      </h1>
      <Button variant="contained" color="success" onClick={() => navigate('/')}>
        Voltar para a Página Inicial
      </Button>
    </div>
  );
};

export default Pagina3;



