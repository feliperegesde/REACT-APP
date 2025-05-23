import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './body/Home';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3';
import PaginaGrafico from './PaginaGrafico';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="pagina1" element={<Pagina1 />} />
          <Route path="pagina2" element={<Pagina2 />} />
          <Route path="pagina3" element={<Pagina3 />} />
          <Route path="grafico" element={<PaginaGrafico />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;




