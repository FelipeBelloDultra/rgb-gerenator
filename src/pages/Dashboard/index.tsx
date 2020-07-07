import React, { useState, ChangeEvent, useCallback } from 'react';
import Inputs from '../../components/Inputs';
import Box from '../../components/Box';
import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const [colorValue, setColorValue] = useState({
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256),
  });

  const handleChangeColors = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setColorValue({ ...colorValue, [name]: Number(value) });
    },
    [colorValue],
  );

  return (
    <Container>
      <Header title="RGB - Generator" />
      <main>
        <div>
          <Inputs
            colorValue={colorValue}
            handleChangeColors={handleChangeColors}
          />
        </div>
        <Box colorValue={colorValue} />
      </main>
    </Container>
  );
};

export default Dashboard;
