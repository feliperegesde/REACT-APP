// PaginaGrafico.js
import { Button } from '@mui/material';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function PaginaGrafico() {
  const data = [
    { name: 'Video Card', preco: Math.floor(Math.random() * 1000 + 500) },
    { name: 'Camera', preco: Math.floor(Math.random() * 400 + 200) },
    { name: 'Audio Device', preco: Math.floor(Math.random() * 300 + 100) },
    { name: 'Wi-Fi', preco: Math.floor(Math.random() * 250 + 100) },
    { name: 'Touch', preco: Math.floor(Math.random() * 200 + 100) },
    { name: 'Mouse', preco: Math.floor(Math.random() * 150 + 50) },
    { name: 'RAM', preco: Math.floor(Math.random() * 500 + 300) },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Preço dos Dispositivos Testados</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="preco" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Button  href="/" variant='cotained' color="inherit">VOLTAR PAGINA INICIAL</Button>
    </div>
  );
}

export default PaginaGrafico;
