import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./body/header";
import Sidebar from "./sidebar";
import Baixo from "./body/Baixo";
import focusManager from "./body/FocusManager";
import Box from '@mui/material/Box';


const Root: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      focusManager.handleKeyDown(e);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const getFocusable = (container: HTMLElement | null): HTMLElement[] =>
      container ? Array.from(container.querySelectorAll<HTMLElement>("button, [tabindex]:not([tabindex='-1'])")) : [];

    focusManager.setHeaderElements(getFocusable(headerRef.current));
    focusManager.setSideBarElements(getFocusable(sidebarRef.current));
    focusManager.setFooterElements(getFocusable(footerRef.current));
  }, []);

  return (
    <div className="app-root">
      <div ref={headerRef} className="headerWrapper">
        <Header />
      </div>
      <div className="bodyWrapper">
        <div ref={sidebarRef} className="sidebarWrapper">
          <Sidebar />
        </div>
        <Box className="mainContent">
  <Outlet />
</Box>
      </div>
      <div ref={footerRef} className="footerWrapper">
        <Baixo />
      </div>
    </div>
  );
};

export default Root;



