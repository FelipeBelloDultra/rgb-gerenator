import React, { createContext, useState, useContext, useCallback } from 'react';

interface Colors {
  red: number;
  green: number;
  blue: number;
}

interface ColorContextData {
  colorValue: object;
  setColors(colors: Colors): void;
}

const ColorContext = createContext<ColorContextData>({} as ColorContextData);

const ColorProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Colors>({
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256),
  });

  const setColors = useCallback(({ red, green, blue }) => {
    setData({ red, green, blue });
  }, []);

  return (
    <ColorContext.Provider value={{ colorValue: data, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};

function useColors(): ColorContextData {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error('useColors must be used within an ColorProvider');
  }

  return context;
}

export { ColorProvider, useColors };
