import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
`;
