import React, { useRef, useEffect } from 'react';
import Header from './body/header';
import Baixo from './body/Baixo';
import Button from '@mui/material/Button';
import { useFocusManager } from './body/FocusManager';

const Pagina1: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const { registerArea } = useFocusManager();

  useEffect(() => {
    if (headerRef.current) {
      registerArea(
        'header',
        Array.from(headerRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')),
        'horizontal'
      );


    }
    if (mainRef.current) {
      const elements = Array.from(
        mainRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')
      ) as HTMLElement[];

      console.log('Main area focáveis:', elements);
      registerArea('main', elements, 'vertical');
  

    }
    if (footerRef.current) {
      registerArea(
        'footer',
        Array.from(footerRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')),
        'horizontal'
      );
    }
  }, [registerArea]);

  return (
    <>
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={mainRef} className="page1" tabIndex={-1}>
        <h1 className="textpage1">PARANDO AÇÕES</h1>
        <Button variant="contained" color="success" href="/">
          Voltar para a Página Inicial
        </Button>
      </div>
      <div ref={footerRef}>
        <Baixo />
      </div>
    </>
  );
};

export default Pagina1;

