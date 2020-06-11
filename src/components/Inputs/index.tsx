import React, { ChangeEvent } from 'react';

interface Props {
  colorValue: {
    red: number,
    green: number,
    blue: number,
  };
  handleChangeColors: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Inputs: React.FC<Props> = ({ colorValue, handleChangeColors }) => {
  return (
    <>
      <div className="colors">
        <div className="colors-content">
          <label htmlFor="red">Red: </label>
          <input
            max="255"
            min="0"
            type="number"
            name="red"
            value={colorValue.red}
            onChange={handleChangeColors}
          />
        </div>
        <input
          type="range"
          name="red"
          id="red"
          min="0"
          max="255"
          value={colorValue.red}
          onChange={handleChangeColors}
        />
      </div>
      <div className="colors">
        <div className="colors-content">
          <label htmlFor="green">Green: </label>
          <input
            max="255"
            min="0"
            type="number"
            name="green"
            value={colorValue.green}
            onChange={handleChangeColors}
          />
        </div>
        <input
          type="range"
          name="green"
          id="green"
          min="0"
          max="255"
          value={colorValue.green}
          onChange={handleChangeColors}
        />
      </div>
      <div className="colors">
        <div className="colors-content">
          <label htmlFor="blue">Blue: </label>
          <input
            max="255"
            min="0"
            type="number"
            name="blue"
            value={colorValue.blue}
            onChange={handleChangeColors}
          />
        </div>
        <input
          type="range"
          name="blue"
          id="blue"
          min="0"
          max="255"
          value={colorValue.blue}
          onChange={handleChangeColors}
        />
      </div>
    </>
  )
}

export default Inputs;
