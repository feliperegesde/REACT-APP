import React, { useEffect, useRef } from "react";
import focusManager from "./FocusManager";
import Header from './header'
import Card from "./Card";
import Sidebar from "../sidebar";
import Baixo from "./Baixo";

const Home: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getFocusable = (container: HTMLElement | null): HTMLElement[] =>
      container ? Array.from(container.querySelectorAll<HTMLElement>("button, [tabindex]:not([tabindex='-1'])")) : [];

    focusManager.setHeaderElements(getFocusable(headerRef.current));
    focusManager.setSideBarElements(getFocusable(sidebarRef.current));
    focusManager.setMainContentElements(getFocusable(mainRef.current));
    focusManager.setFooterElements(getFocusable(footerRef.current));
    console.log(getFocusable(mainRef.current))

  }, []);

  return (
    <div   className="appContainer">
      <div ref={headerRef}  className="headerWrapper">
        <Header />
      </div>
      <div ref={sidebarRef} className="contentWrapper">
        <Sidebar />
        <div ref={ mainRef} className="mainContent">
          <Card />
        </div>
      </div>
      <div ref={footerRef} className="footerWrapper">
        <Baixo />
      </div>
    </div>
  );
}


export default Home;



