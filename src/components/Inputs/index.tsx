import React, { ChangeEvent, useCallback } from 'react';

import { useColors } from '../../hooks/colors';

import { Container } from './styles';

interface Props {
  reference: string;
  value: number;
}

const Inputs: React.FC<Props> = ({ reference, value }) => {
  const { setColors } = useColors();

  const handleChangeColor = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setColors(event);
    },
    [setColors],
  );

  return (
    <Container>
      <section className="colors-content">
        <label htmlFor={reference}>{reference.toUpperCase()}</label>
        <input
          disabled
          max="255"
          min="0"
          type="number"
          name={reference}
          value={value}
        />
      </section>
      <input
        type="range"
        name={reference}
        id={reference}
        min="0"
        max="255"
        value={value}
        onChange={handleChangeColor}
      />
    </Container>
  );
};

export default Inputs;
