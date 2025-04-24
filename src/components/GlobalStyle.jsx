import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    align-items: center;
    border: 2px solid red;
  }

  body {
    font-family: poppins, sans-serif;
    background-color: #F4F4F4;
    color: #434040;
    display: flex;
    /* width: 375px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
  }

  #hej {
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, p {
    margin: 0;
    width: 80%;
  }

  img {
    max-width: 80%;
    height: auto;
    margin: 0 auto; 
  }

  section {
    display: flex;
    padding: 64px 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;    
    width: 80%;
  }

  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }
`;