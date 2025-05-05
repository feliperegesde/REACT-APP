import React, { FC, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import { useFocusManager } from './body/FocusManager';

const Pagina3: FC = () => {
  const { registerArea } = useFocusManager();

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      const elements = Array.from(
        mainRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')
      ) as HTMLElement[];

      registerArea('main', elements, 'vertical');
    }
  }, [registerArea]);

  return (
    <div ref={mainRef} className="page1" tabIndex={0}>
      <h1 className="textpage1">
        PODE FECHAR AGORA OU RETORNE PARA PÁGINA INICIAL
      </h1>
      <Button variant="contained" color="success" href="/">
        Voltar para a Página Inicial
      </Button>
    </div>
  );
};

export default Pagina3;


