import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #425fb1;
    --title-color: #11204b;
    --text-color: #53536d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--title-color);
    font-family: Ubuntu;
  }
`;

export default GlobalStyle;
