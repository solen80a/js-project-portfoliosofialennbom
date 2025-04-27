import { createGlobalStyle } from "styled-components";
import { Media } from "./Media";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    /* margin: 0;
    padding: 0; */
    align-items: center;
    /* border: 2px solid red; */
  }

  body {
    font-family: poppins, sans-serif;
    background-color: #F4F4F4;
    color: #434040;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;   
  }

  a {
    text-decoration: none;
  }

  h1, h2, p {
    margin: 0;
    padding: 0;
  } 

  h3 {
    text-align: left;
    margin: 0;
    padding: 0;
  }

  img {
    min-width: 300px;    
    max-width: 100%;
    height: auto;
    margin: 0;
    border-radius: 12px;
    align-self: stretch;
  }

  section {
    display: flex;
    padding: 64px 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px; 
    width: 100vw;    
  }

  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }

  article {
    min-width: 479px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    
    /* Desktop Widescreen */
    @media ${Media.desktop}{ 
      display: flex;
      justify-content: center; 
      align-items: center;     
      width: 580px;   
      align-items: center; 
        
      img {
        
        margin-right: auto;
    }
    }
  }
`
;