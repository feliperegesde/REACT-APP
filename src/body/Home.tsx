import React, { useEffect, useRef } from 'react';
import Header from './header';
import Card from './Card';
import Baixo from './Baixo';
import Sidebar from '../sidebar';
import useFocusManager from './FocusManager';

const Home: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const { registerArea } = useFocusManager;

  useEffect(() => {
    if (headerRef.current) {
      registerArea(
        'header',
        Array.from(
          headerRef.current.querySelectorAll(
            'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        )
      );
    }
    if (sidebarRef.current) {
      registerArea(
        'sidebar',
        Array.from(
          sidebarRef.current.querySelectorAll(
            'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        )
      );
    }
    if (mainRef.current) {
      registerArea(
        'main',
        Array.from(
          mainRef.current.querySelectorAll(
            'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        )
      );
    }
    if (footerRef.current) {
      registerArea(
        'footer',
        Array.from(
          footerRef.current.querySelectorAll(
            'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        )
      );
    }
  }, [registerArea]);

  return (
    <div className="appContainer">
      <div ref={headerRef} className="headerWrapper">
        <Header />
      </div>
      <div className="contentWrapper">
        <div ref={sidebarRef}>
          <Sidebar />
        </div>
        <div ref={mainRef} className="mainContent">
          <Card />
        </div>
      </div>
      <div ref={footerRef} className="footerWrapper">
        <Baixo />
      </div>
    </div>
  );
};

export default Home;




