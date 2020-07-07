import React, { ChangeEvent, Fragment } from 'react';

import { Container } from './styles';

interface Props {
  colorValue: {
    red: number;
    green: number;
    blue: number;
  };
  handleChangeColors: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Inputs: React.FC<Props> = ({ colorValue, handleChangeColors }) => {
  const rgbValues = [
    {
      value: colorValue.red,
      reference: 'red',
    },
    {
      value: colorValue.green,
      reference: 'green',
    },
    {
      value: colorValue.blue,
      reference: 'blue',
    },
  ];

  return (
    <>
      {rgbValues.map(rgbValue => (
        <Fragment key={rgbValue.reference}>
          <Container>
            <section className="colors-content">
              <label htmlFor={rgbValue.reference}>
                {rgbValue.reference.toUpperCase()}
              </label>
              <input
                disabled
                max="255"
                min="0"
                type="number"
                name={rgbValue.reference}
                value={rgbValue.value}
                onChange={handleChangeColors}
              />
            </section>
            <input
              type="range"
              name={rgbValue.reference}
              id={rgbValue.reference}
              min="0"
              max="255"
              value={rgbValue.value}
              onChange={handleChangeColors}
            />
          </Container>
        </Fragment>
      ))}
    </>
  );
};

export default Inputs;
