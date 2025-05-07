import React, { FC, useEffect, useRef } from 'react';
import Header from './body/header';
import Baixo from './body/Baixo';
import Button from '@mui/material/Button';
import focusManager from "./body/FocusManager";
const Pagina2: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const getFocusable = (container: HTMLElement | null): HTMLElement[] =>
      container ? Array.from(container.querySelectorAll<HTMLElement>("button, [tabindex]:not([tabindex='-1'])")) : [];
    focusManager.setHeaderElements(getFocusable(headerRef.current));
    focusManager.setMainContentElements(getFocusable(mainRef.current));
    focusManager.setFooterElements(getFocusable(footerRef.current));
  }, []);

  return (
    <>
      <div ref={headerRef} className="headerWrapper">
        <Header />
      </div>

      <div ref={mainRef} className="pagina2" tabIndex={-1}>
        <h1 className="textoPagina2">AÇÃO</h1>
        <Button variant="contained" color="success" href="/">
          Voltar para a Página Inicial
        </Button>
      </div>

      <div ref={footerRef} className="footerWrapper">
        <Baixo />
      </div>
    </>
  );
};

export default Pagina2;





