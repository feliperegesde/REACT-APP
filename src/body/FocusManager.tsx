
import React, { createContext, useContext, useRef, useEffect, ReactNode } from 'react';

export type AreaName = 'header' | 'sidebar' | 'main' | 'footer';
export type Orientation = 'horizontal' | 'vertical' | 'grid';

interface FocusArea {
  name: AreaName;
  elements: HTMLElement[];
  orientation: Orientation;
  columns?: number;
}

interface FocusContextType {
  registerArea: (
    name: AreaName,
    elements: HTMLElement[],
    orientation?: Orientation,
    columns?: number
  ) => void;
  focusArea: (name: AreaName) => void;
}

const FocusContext = createContext<FocusContextType | null>(null);

export const useFocusManager = () => {
  const context = useContext(FocusContext);
  if (!context) throw new Error('useFocusManager must be used within FocusProvider');
  return context;
};

export const FocusProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const areas = useRef<Record<AreaName, FocusArea>>({} as Record<AreaName, FocusArea>);
  const areaList: AreaName[] = ['header', 'sidebar', 'main', 'footer'];

  const registerArea = (
    name: AreaName,
    elements: HTMLElement[],
    orientation: Orientation = 'vertical',
    columns?: number
  ) => {
    areas.current[name] = { name, elements, orientation, columns };
  };

  const focusArea = (name: AreaName) => {
    const area = areas.current[name];
    if (area?.elements?.length) {
      area.elements[0].focus();
    }
  };

  const handleArrowNavigation = (e: KeyboardEvent) => {
    const active = document.activeElement as HTMLElement;
    const currentArea = Object.values(areas.current).find(area =>
      area.elements.includes(active)
    );
    if (!currentArea) return;

    const idx = currentArea.elements.indexOf(active);
    if (idx < 0) return;
    let nextIndex = idx;

    switch (e.key) {
      case 'ArrowRight':
        if (currentArea.orientation === 'horizontal') nextIndex = idx + 1;
        else if (currentArea.orientation === 'grid' && currentArea.columns !== undefined) {
          if (idx % currentArea.columns < currentArea.columns - 1) nextIndex = idx + 1;
        }
        break;
      case 'ArrowLeft':
        if (currentArea.orientation === 'horizontal') nextIndex = idx - 1;
        else if (currentArea.orientation === 'grid' && currentArea.columns !== undefined) {
          if (idx % currentArea.columns > 0) nextIndex = idx - 1;
        }
        break;
      case 'ArrowDown':
        if (currentArea.orientation === 'vertical') nextIndex = idx + 1;
        else if (currentArea.orientation === 'grid' && currentArea.columns !== undefined) {
          nextIndex = idx + currentArea.columns;
        }
        break;
      case 'ArrowUp':
        if (currentArea.orientation === 'vertical') nextIndex = idx - 1;
        else if (currentArea.orientation === 'grid' && currentArea.columns !== undefined) {
          nextIndex = idx - currentArea.columns;
        }
        break;
      default:
        return;
    }

    if (nextIndex >= 0 && nextIndex < currentArea.elements.length) {
      currentArea.elements[nextIndex].focus();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F6') {
        e.preventDefault();
        const currentIndex = areaList.findIndex(area =>
          areas.current[area]?.elements.some(el => el === document.activeElement)
        );
        const nextIndex = (currentIndex + 1) % areaList.length;
        focusArea(areaList[nextIndex]);
      } else if (e.key === 'Escape') {
        focusArea('header');
      } else if (
        e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
        e.key === 'ArrowLeft' || e.key === 'ArrowRight'
      ) {
        handleArrowNavigation(e);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
 
  }, []);

  return (
    <FocusContext.Provider value={{ registerArea, focusArea }}>
      {children}
    </FocusContext.Provider>
  );
};


