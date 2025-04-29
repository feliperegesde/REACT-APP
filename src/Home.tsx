import React from 'react';
import Header from './header';
import Card from './Card';
import Baixo from './Baixo';
import Sidebar from './sidebar';

const Home: React.FC = () => {
  return (
    <div className="appContainer">
      <div className="headerWrapper">
        <Header />
      </div>
      <div className="contentWrapper">
        <Sidebar />
        <div className="mainContent">
          <Card />
        </div>
      </div>
      <div className="footerWrapper">
        <Baixo />
      </div>
    </div>
  );
};

export default Home;



