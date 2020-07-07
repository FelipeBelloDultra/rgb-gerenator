import styled from 'styled-components';

import backgroundPhoto from '../../assets/photo.svg';

export const Container = styled.div`
  height: 100vh;
  padding: 20px 0 0 0;

  background-image: url(${backgroundPhoto});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 400px;
  background-attachment: fixed;

  align-items: center;
  display: flex;
  flex-direction: column;

  > main {
    padding: 5px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 1px rgb(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;

    display: flex;
    flex-direction: column;
  }
`;
