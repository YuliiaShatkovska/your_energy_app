import { createGlobalStyle } from "styled-components";

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

body{
  background-color: #f4f4f4;
  color: #242424;
  font-family: 'Neue Montreal', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  margin: 0;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
input {
  font-family: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  fill: currentColor;
}



`;
