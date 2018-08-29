import { injectGlobal } from 'styled-components';

injectGlobal`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Arial';
  }

  body {
    background-color: rgb(50, 50, 50);
  }
`;
