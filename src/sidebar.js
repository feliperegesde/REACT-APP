import React, { useState } from 'react';
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom'; 


function Sidebar() {
  const [executing, setExecuting] = useState(false);
  const navigate = useNavigate(); 

  function Executando() {
    setExecuting(true);
    setTimeout(() => {
      setExecuting(false);
      alert("Todos os testes foram executados!");
    }, 5000);
  }

  function handleAnalise() {
    navigate("/grafico"); 
  }

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
    </div>
  );
}

export default Sidebar;


