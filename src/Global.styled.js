import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html, body{
    min-height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #FFBE00;
  }
`;

export default Global;
