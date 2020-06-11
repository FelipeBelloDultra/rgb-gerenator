import React, { useState, ChangeEvent } from 'react';
import Inputs from './components/Inputs';
import Box from './components/Box';
import Header from './components/Header';

import './App.css';

const App = () => {
  const [colorValue, setColorValue] = useState({
    red: Math.floor(Math.random()  * 256),
    green: Math.floor(Math.random()  * 256),
    blue: Math.floor(Math.random()  * 256)
  });

  function handleChangeColors(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setColorValue({ ...colorValue, [name]: Number(value) });
  }

  return (
    <div className="container">
      <Header
        title="RGB - Generator"
      />
      <main>
        <div>
          <Inputs
            colorValue={colorValue}
            handleChangeColors={handleChangeColors}
          />
        </div>
        <Box
          colorValue={colorValue}
        />
      </main>
    </div>
  );
}

export default App;
