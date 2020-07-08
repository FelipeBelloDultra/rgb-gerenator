import React, { useRef, useCallback } from 'react';
import { FiCopy } from 'react-icons/fi';

import { useToast } from '../../hooks/toast';
import { useColors } from '../../hooks/colors';

import { Container, BoxSection } from './styles';

const Box: React.FC = () => {
  const inputRGB = useRef<HTMLInputElement>(null);

  const { addToast } = useToast();
  const { rgbConstant } = useColors();

  const handleCopyText = useCallback(() => {
    try {
      inputRGB.current?.select();
      document.execCommand('copy');

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
  }, [addToast]);

  return (
    <>
      <Container>
        <BoxSection>
          <input
            autoCorrect="off"
            autoComplete="off"
            onClick={handleCopyText}
            ref={inputRGB}
            type="text"
            value={`${rgbConstant};`}
            readOnly
          />
          <button type="button" onClick={handleCopyText}>
            <FiCopy size={20} />
          </button>
        </BoxSection>
        <div
          className="box"
          style={{
            background: rgbConstant,
          }}
        />
      </Container>
    </>
  );
};

export default Box;
