import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import focusManager from "./body/FocusManager";

const Root: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      focusManager.handleKeyDown(e);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="app-root">
      <Outlet />
    </div>
  );
};

export default Root;


