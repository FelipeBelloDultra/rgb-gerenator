import React, { useState, useEffect, useRef } from 'react';
import { FiCopy } from 'react-icons/fi';

import { useToast } from '../../hooks/toast';

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

  const { addToast } = useToast();

  const [copy, setCopy] = useState<string>(
    `rgba(${colorValue.red}, ${colorValue.green}, ${colorValue.blue})`,
  );

  useEffect(() => {
    setCopy(`rgb(${colorValue.red}, ${colorValue.green}, ${colorValue.blue})`);
  }, [colorValue]);

  function copyText() {
    try {
      inputRGB.current?.select();
      document.execCommand('copy');
      inputRGB.current?.blur();

      addToast({
        type: 'success',
        title: '😆 Sucesso',
        description: 'RGB copiado para a sua área de transferência',
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: '😫 Opss',
        description: 'Algo deu errado',
      });
    }
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
    </>
  );
};

export default Box;
