import React, { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [executing, setExecuting] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();

  function Executando() {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
      setShowSnackbar(true); 
    }, 5000);
  }

  function handleAnalise() {
    navigate("/grafico");
  }

  const handleCloseSnackbar = (_, reason) => {
    if (reason === 'clickaway') return;
    setShowSnackbar(false);
  };

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <Button variant="contained" href="https://pt.symbolab.com/solver/limit-calculator" className="sidebarButton">Limites</Button>
      <Button variant="contained" className="sidebarButton">Testes</Button>
      <Button 
        variant="contained" 
        className="sidebarButton" 
        onClick={handleAnalise}
      >
        Análise
      </Button>
      <Button 
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


