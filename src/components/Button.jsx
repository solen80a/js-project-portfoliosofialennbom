import styled from "styled-components"
import { Media } from "./Media"

const ButtonWrapper = styled.a`
  display: inline-flex; 
  background-color: #434040;
  color: white;
  font-size: 18px;
  width: 303px;
  height: 48px;
  padding: 0px 16px;
  border: 2px solid #434040;
  border-radius: 12px;
  align-items: center;    
  gap: 16px;
  
  cursor: pointer;  

  img{
  height: 31px;
  min-width: 31px;  
  } 

  /* Desktop Widescreen */
  @media ${Media.desktop}{   
    display: inline-flex; 
    justify-content: flex-start; 
    padding: 5px 125px 5px 16px;
    margin-right: auto;
  }
`

export const Button = ({  url, icon, alt, title }) => {
  return (         
    <ButtonWrapper href={url} target="_blank" >
      <img src={icon} alt={alt} /> 
      {title}         
    </ButtonWrapper>    
  )
}

