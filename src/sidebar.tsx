import React, { useState, useEffect } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { JSX } from 'react';
import focusManager from './body/FocusManager';

function Sidebar(): JSX.Element {
  const [executing, setExecuting] = useState<boolean>(false);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  const navigate = useNavigate();

  function Executando(): void {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
      setShowSnackbar(true); 
    }, 5000);
  }

  function handleAnalise(): void {
    navigate("/grafico");
  }

  function handleCloseSnackbar(
    event?: React.SyntheticEvent | Event,
    reason?: string
  ): void {
    if (reason === 'clickaway') return;
    setShowSnackbar(false);
  }

  useEffect(() => {
    const sidebarElements: HTMLElement[] = [];

    const btnLimites = document.getElementById("sidebar-limites");
    const btnTestes = document.getElementById("sidebar-testes");
    const btnAnalise = document.getElementById("sidebar-analise");
    const btnExecutar = document.getElementById("sidebar-executar");

    if (btnLimites) sidebarElements.push(btnLimites);
    if (btnTestes) sidebarElements.push(btnTestes);
    if (btnAnalise) sidebarElements.push(btnAnalise);
    if (btnExecutar) sidebarElements.push(btnExecutar);

    if (sidebarElements.length) {
      focusManager.setSideBarElements(sidebarElements);
    }
  }, []);

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <Button
        id="sidebar-limites"
        variant="contained"
        href="https://pt.symbolab.com/solver/limit-calculator"
        className="sidebarButton"
      >
        Limites
      </Button>
      <Button
        id="sidebar-testes"
        variant="contained"
        className="sidebarButton"
      >
        Testes
      </Button>
      <Button
        id="sidebar-analise"
        variant="contained"
        className="sidebarButton"
        onClick={handleAnalise}
      >
        Análise
      </Button>
      <Button
        id="sidebar-executar"
        variant="contained"
        className="sidebarButton"
        onClick={Executando}
        disabled={executing}
      >
        {executing ? "Executando..." : "Executar Todos"}
      </Button>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={handleCloseSnackbar} sx={{ width: '100%' }}>
          Todos os testes foram executados!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Sidebar;




