// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Pagina2 from './Pagina2.js'; 
import Pagina1 from "./Pagina1.js"
import Pagina3 from './Pagina3.js';
import Button from '@mui/material/Button';
import Sidebar from './sidebar.js';
import PaginaGrafico from './PaginaGrafico.js';
function App() {
  return (
    <Router>
   
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina2" element={<Pagina2 />} />
        <Route path="/pagina1" element ={< Pagina1/>}/>
        <Route path="/pagina3" element ={<Pagina3/>}/>
        <Route path="/grafico" element={<PaginaGrafico />} /> 
      </Routes>
    
      
    </Router>
  );
}

export default App;

