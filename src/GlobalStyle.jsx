import {createGlobalStyle} from 'styled-components';

// SMACSSでいうbaseの役割
const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 1.2rem;
  };
  *, *:after, *:before {
    box-sizing: border-box;
  };
  html {
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
  };
  body {
    margin: 0;
    padding: 0;
    background: #fefefe;
  }
`;

export default GlobalStyle;