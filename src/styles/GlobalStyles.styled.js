import 'node_modules/modern-normalize/modern-normalize.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'NeueMontreal';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/NeueMontreal-Regular.woff2') format('woff2'),
    url('./assets/fonts/NeueMontreal-Regular.woff') format('woff');
}

@font-face {
  font-family: 'NeueMontreal';
  font-style: italic;
  font-weight: 400;
  src: url('./assets/fonts/NeueMontreal-Italic.woff2') format('woff2'),
    url('./assets/fonts/NeueMontreal-Italic.woff') format('woff');
}

@font-face {
  font-family: 'NeueMontreal';
  font-style: normal;
  font-weight: 500;
  src: url('./assets/fonts/NeueMontreal-Medium.woff2') format('woff2'),
    url('./assets/fonts/NeueMontreal-Medium.woff') format('woff');
}


`;
