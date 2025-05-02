import React, { useEffect, useRef } from 'react';
import Header from './header';
import Card from './Card';
import Baixo from './Baixo';
import Sidebar from '../sidebar';
import { useFocusManager } from './FocusManager';

const Home: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const { registerArea } = useFocusManager();

  useEffect(() => {

    if (headerRef.current) {
      registerArea('header', Array.from(headerRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')));
    }
    if (sidebarRef.current) {
      registerArea('sidebar', Array.from(sidebarRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')));
    }
    if (mainRef.current) {
      registerArea('main', Array.from(mainRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')));
    }
    if (footerRef.current) {
      registerArea('footer', Array.from(footerRef.current.querySelectorAll('[tabindex], button, a, input, select, textarea')));
    }
  }, [registerArea]);

  return (
    <div className="appContainer">
      <div ref={headerRef} className="headerWrapper" tabIndex={-1}>
        <Header />
      </div>
      <div className="contentWrapper">
        <div ref={sidebarRef} tabIndex={-1}>
          <Sidebar />
        </div>
        <div ref={mainRef} className="mainContent" tabIndex={-1}>
          <Card />
        </div>
      </div>
      <div ref={footerRef} className="footerWrapper" tabIndex={-1}>
        <Baixo />
      </div>
    </div>
  );
};

export default Home;




