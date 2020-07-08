import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
  ChangeEvent,
} from 'react';

interface Colors {
  red: number;
  green: number;
  blue: number;
}

interface ColorContextData {
  colorValue: Colors;
  rgbConstant: string;
  setColors(event: ChangeEvent<HTMLInputElement>): void;
}

const ColorContext = createContext<ColorContextData>({} as ColorContextData);

const ColorProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Colors>({
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256),
  });
  const [rgb, setRgb] = useState<string>(
    `rgb(${data.red}, ${data.green}, ${data.blue})`,
  );

  useEffect(() => {
    setRgb(`rgb(${data.red}, ${data.green}, ${data.blue})`);
  }, [data]);

  const setColors = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setData({ ...data, [name]: Number(value) });
    },
    [data],
  );

  return (
    <ColorContext.Provider
      value={{ colorValue: data, setColors, rgbConstant: rgb }}
    >
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
