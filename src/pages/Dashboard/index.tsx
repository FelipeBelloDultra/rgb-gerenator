import React from 'react';
import Inputs from '../../components/Inputs';
import Box from '../../components/Box';
import Header from '../../components/Header';

import { useColors } from '../../hooks/colors';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { colorValue } = useColors();

  return (
    <Container>
      <Header title="RGB - Generator" />
      <main>
        <div>
          <Inputs reference="red" value={colorValue.red} />
          <Inputs reference="green" value={colorValue.green} />
          <Inputs reference="blue" value={colorValue.blue} />
        </div>
        <Box />
      </main>
    </Container>
  );
};

export default Dashboard;
