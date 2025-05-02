import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './body/Home';
import Pagina2 from './Pagina2'; 
import Pagina1 from './Pagina1';
import Pagina3 from './Pagina3';
import PaginaGrafico from './PaginaGrafico';
import { FocusProvider } from './body/FocusManager'; // ajuste o caminho conforme a pasta real

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <FocusProvider>
              <Home />
            </FocusProvider>
          }
        />
        <Route path="/pagina2" element={<Pagina2 />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
        <Route path="/grafico" element={<PaginaGrafico />} />
      </Routes>
    </Router>
  );
}

export default App;


