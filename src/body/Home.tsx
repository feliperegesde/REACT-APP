import React, { useEffect, useRef } from "react";
import focusManager from "./FocusManager";
import Card from "./Card";

const Home: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements: HTMLElement[] = []
    const getFocusable = (container: HTMLElement | null): HTMLElement[] =>
      container
        ? Array.from(
            container.querySelectorAll<HTMLElement>(
              "button, [tabindex]:not([tabindex='-1'])"
            )
          )
        : [];

    focusManager.setMainContentElements(getFocusable(mainRef.current));
  }, []);

  return (
    <div ref={mainRef} className="pagina-home" tabIndex={-1}>
      <Card />
    </div>
  );
};

export default Home;




