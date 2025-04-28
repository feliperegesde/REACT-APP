// Home.js
import React from 'react';
import Header from './header';
import Card from './Card';
import Baixo from './Baixo';
import Sidebar from './sidebar';

function Home() {
  return (
   <div  className='appContainer'>
      <Sidebar></Sidebar>
      <div className='.mainContent'> 
        <Header />
        <Card />
        <Baixo />
      </div>
    </div>
    
  );
}

export default Home;
