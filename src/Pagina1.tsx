import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import focusManager from "./body/FocusManager";

import { useNavigate } from 'react-router-dom'; // adicione esse import

const Pagina1: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // inicialize o hook aqui

  useEffect(() => {
    const getFocusable = (container: HTMLElement | null): HTMLElement[] =>
      container
        ? Array.from(container.querySelectorAll<HTMLElement>("button, [tabindex]:not([tabindex='-1'])"))
        : [];

    focusManager.setMainContentElements(getFocusable(mainRef.current));

    const headerElements: HTMLElement[] = [];

    const alarmBtn = document.getElementById("header-alarm");
    const dialogBtn = document.getElementById("header-dialog-button");
    const lenovoBtn = document.getElementById("header-lenovo-button");

    if (alarmBtn) headerElements.push(alarmBtn);
    if (dialogBtn) headerElements.push(dialogBtn);
    if (lenovoBtn) headerElements.push(lenovoBtn);

    if (headerElements.length) {
      focusManager.setHeaderElements(headerElements);
    }
  }, []);

  return (
    <div ref={mainRef} className="pagina1" tabIndex={-1}>
      <h1 className="textpage1">PARANDO AÇÕES</h1>
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate('/')}
      >
        Voltar para a Página Inicial
      </Button>
    </div>
  );
};


export default Pagina1;


