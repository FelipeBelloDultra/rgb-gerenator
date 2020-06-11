import React, { ChangeEvent, Fragment } from 'react';

interface Props {
  colorValue: {
    red: number,
    green: number,
    blue: number,
  };
  handleChangeColors: (event: ChangeEvent<HTMLInputElement>) => void;
};

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
      {rgbValues.map((rgbValue, i) => (
        <Fragment key={i}>
          <div
            className="colors"
          >
            <div
              className="colors-content"
            >
              <label
                htmlFor={rgbValue.reference}>
                {rgbValue.reference.toUpperCase()}:
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
            </div>
            <input
              type="range"
              name={rgbValue.reference}
              id={rgbValue.reference}
              min="0"
              max="255"
              value={rgbValue.value}
              onChange={handleChangeColors}
            />
          </div>
        </Fragment>
      ))}
    </>
  );
}

export default Inputs;
