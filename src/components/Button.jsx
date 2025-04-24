import styled from "styled-components"
import projects from "../data/projects.json"

const ButtonWrapper = styled.a`
  display: flex;
  background-color: ${props => (props.$primarybtn ? "#434040" : "white")};
  color: ${props => (props.$primarybtn ? "white" : "#434040")};
  font-size: 18px;
  width: 303px;
  height: 48px;
  padding: 0 16px;
  border: 2px solid #434040;
  border-radius: 12px;
  align-items: center;
  align-content: center;
  gap: 16px;

  img{
  height: 31px;
  width: 31px;
  filter: ${props => (props.$primarybtn ? "invert(0%)" : "invert(100%)")};
  }

  &:hover{
    background-color: ${props => (props.primarybtn ? "white" : "#434040")}; 
    color: ${props => (props.primarybtn ? "#434040" : "white")};

  img {
    filter: ${props => (props.primarybtn ? "invert(100%)" : "invert(0%)")}
  } 
}
`

export const Button = ({ $primarybtn, url }) => {
  return (
    // {projects.netlify}
     
    <ButtonWrapper href={url} target="_blank">

      <img src="/assets/Ic-Web.svg" alt="" />    
    
          
    </ButtonWrapper>
    
  )
}

