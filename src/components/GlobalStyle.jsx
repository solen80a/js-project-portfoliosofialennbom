import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #F4F4F4;
    color: #434040;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;