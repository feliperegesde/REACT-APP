import React, { FC, useEffect, useRef } from 'react';
import Header from './body/header';
import Baixo from './body/Baixo';
import Button from '@mui/material/Button';
import { useFocusManager } from './body/FocusManager';

const Pagina2: FC = () => {
  const { registerArea } = useFocusManager();

  const headerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (headerRef.current) {
      const elements = Array.from(
        headerRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')
      ) as HTMLElement[];
      console.log('Header elementos:', elements.map(el => el.outerHTML));
      registerArea('header', elements, 'horizontal');
    }
  
    if (mainRef.current) {
      const elements = Array.from(
        mainRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')
      ) as HTMLElement[];
      console.log('MainRef:', mainRef.current);
      console.log('Main elementos:', elements.map(el => el.outerHTML));
      registerArea('main', elements, 'vertical');
    }
  
    if (footerRef.current) {
      const elements = Array.from(
        footerRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')
      ) as HTMLElement[];
      console.log('Footer elementos:', elements.map(el => el.outerHTML));
      registerArea('footer', elements, 'horizontal');
    }
  }, [registerArea]);
  

  return (
    <>
      <div ref={headerRef} tabIndex={0}>
        <Header />
      </div>

      <div ref={mainRef} className="pagina2" tabIndex={0}>
        <h1 className="textoPagina2" tabIndex={0}>AÇÃO</h1>
        <Button variant="contained" color="success" href="/">
          Voltar para a Página Inicial
        </Button>
      </div>

      <div ref={footerRef} tabIndex={0}>
        <Baixo />
      </div>
    </>
  );
};

export default Pagina2;




