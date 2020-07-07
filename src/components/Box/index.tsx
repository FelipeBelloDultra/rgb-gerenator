import React, { useState, useEffect, useRef } from 'react';
import { FiCopy } from 'react-icons/fi';

import { Container, BoxSection } from './styles';

interface Props {
  colorValue: {
    red: number;
    green: number;
    blue: number;
  };
}

const Box: React.FC<Props> = ({ colorValue }) => {
  const inputRGB = useRef<HTMLInputElement>(null);

  const [copy, setCopy] = useState<string>(
    `rgba(${colorValue.red}, ${colorValue.green}, ${colorValue.blue})`,
  );
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setCopy(`rgb(${colorValue.red}, ${colorValue.green}, ${colorValue.blue})`);
  }, [colorValue]);

  function copyText() {
    inputRGB.current?.select();
    document.execCommand('copy');
    inputRGB.current?.blur();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1500);
  }

  return (
    <>
      <Container>
        <BoxSection>
          <input
            autoCorrect="off"
            autoComplete="off"
            onClick={copyText}
            ref={inputRGB}
            type="text"
            value={`${copy};`}
          />
          <button type="button" onClick={copyText}>
            <FiCopy size={20} />
          </button>
        </BoxSection>
        <div
          className="box"
          style={{
            background: copy,
          }}
        />
      </Container>
      {success && <p className="success">Copied!</p>}
    </>
  );
};

export default Box;
