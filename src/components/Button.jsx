import styled from "styled-components"
import projects from "../data/projects.json"

const ButtonWrapper = styled.a`
  display: flex;  
  background-color: #434040;
  color: white;
  font-size: 18px;
  width: 303px;
  height: 48px;
  padding: 0 16px;
  border: 2px solid #434040;
  border-radius: 12px;
  align-items: center;
  align-content: center;
  gap: 16px;
  margin-right: auto; 
  

  img{
  height: 31px;
  min-width: 31px;
  
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

