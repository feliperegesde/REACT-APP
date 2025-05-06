// src/Root.tsx
import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import focusManager from "./body/FocusManager";
const Root: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    document.addEventListener("keydown", (e) => focusManager.handleKeyDown(e));
  }, []);
  useEffect(() => {
    const resetTabIndexes = () => {
      const allRegions = [headerRef, mainRef, footerRef];
      allRegions.forEach(ref => {
        if (ref.current) {
          const elements = ref.current.querySelectorAll<HTMLElement>("[tabindex]");
          elements.forEach(el => el.setAttribute("tabindex", "-1"));
          if (elements.length > 0) {
            elements[0].setAttribute("tabindex", "0");
          }
        }
      });
    };

    resetTabIndexes();
  }, [location]);

  return (
    <div className="app-layout">
      <header ref={headerRef} role="banner">
        <button tabIndex={-1}>Logo</button>
        <button tabIndex={-1}>Menu</button>
      </header>

      <main ref={mainRef} role="main">
        <Outlet />
      </main>

      <footer ref={footerRef} role="contentinfo">
        <button tabIndex={-1}>Contato</button>
        <button tabIndex={-1}>Ajuda</button>
      </footer>
    </div>
  );
};

export default Root;
