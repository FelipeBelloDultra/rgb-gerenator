import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  padding: 10px;

  .box {
    height: 75px;
    width: 75px;
    border-radius: 5px;
    border: 1px solid rgb(216, 216, 216);
  }

  .box-container {
  }

  .box-container input {
    border: 1px solid #e0e0e0;
    height: 30px;
  }
`;

export const BoxSection = styled.div`
  display: flex;
  align-items: center;

  > input {
    height: 31px;
    border-radius: 5px 0 0 5px;
    border: 1;
    cursor: pointer;
    background: #fff;
    transition: background-color 0.2s;
  }

  > input:hover {
    background: ${shade(0.1, '#fff')};
  }

  > button {
    height: 31px;
    width: 31px;
    background: var(--primary-color);
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    transition: background-color 0.2s;
    cursor: pointer;
  }
  button:hover {
    background: ${shade(0.1, '#11204b')};
  }
`;
