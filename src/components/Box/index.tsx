import React, { useState, useEffect, useRef } from 'react';
import { FiCopy } from 'react-icons/fi';

interface Props {
  colorValue: {
    red: number,
    green: number,
    blue: number,
  };
};

const Box: React.FC<Props> = ({ colorValue }) => {
  const inputRGB = useRef<HTMLInputElement>(null);

  const [copy, setCopy] = useState<string>(`rgba(${colorValue.red}, ${colorValue.green}, ${colorValue.blue})`);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setCopy(`rgb(${colorValue.red}, ${colorValue.green}, ${colorValue.blue})`);
  }, [colorValue]);

  function copyText() {
    inputRGB.current?.select();
    document.execCommand('copy');
    inputRGB.current?.blur();
    setSuccess(true);
  }

  return (
    <>
      <div className="box-container">
        <div>
          <input
            onClick={copyText}
            ref={inputRGB}
            type="text"
            value={copy}
            onChange={() => { }}
          />
          <button onClick={copyText}><FiCopy /></button>
        </div>
        <div className="box"
          style={{
            background: `rgb(${colorValue.red}, ${colorValue.green}, ${colorValue.blue})`
          }}
        ></div>
      </div>
      {success && (
        <p className="success">Copied!</p>
      )}
    </>
  );
}

export default Box;
