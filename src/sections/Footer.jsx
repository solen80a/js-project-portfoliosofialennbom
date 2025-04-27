import { H2, Body } from "../components/Typography"
import styled from "styled-components"
import { Media } from "../components/Media"

const FooterImg = styled.img`
  min-width: 164px;
  min-height: 164px;
  width: 164px;
  height: 164px;
  border-radius: 50%;
  align-items: center;
  align-self: center;
  `

  const FooterContainer = styled.footer `
  background-color: #434040;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
   
  
  
  & p {
    font-size: 24px;    
  }

  & a {
    font-size: 24px;
    color: white; 
    
  }
  `

const FooterDiv = styled.div `
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
margin: 16px 0;

`
const FooterIconContainer = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& .linkedin {
    filter: invert(100%);
  
}
`
const FooterIcon = styled.img`
 min-width: 32px;
 min-height: 32px;
`
    

export const Footer = () => {
  return(
    <FooterContainer>
      <H2>Let´s talk</H2>
      <div>
        <FooterImg  
          className="footer-img"
          src="assets/sofia_lennbom_black_white.jpg"
          alt="Profile image of the developer"
       />
      </div>
      <FooterDiv>      
        <Body>Sofia Lennbom</Body>        
        <a href= "+46705623461">+46(0)705 62 34 61</a>       
        <a href="sofialennbom@gmail.com">sofialennbom@gmail.com</a>        
      </FooterDiv>
      <FooterIconContainer>
        <a href="https://www.linkedin.com/in/sofia-lennbom-91252195/" target="_blank" rel="noopener noreferrer">
          <FooterIcon className="linkedin" src="assets/Btn - linkedin.svg" alt="LinkedIn icon" />
        </a>
        <a href="https://github.com/solen80a" target="_blank" rel="noopener noreferrer">
          <FooterIcon src="assets/Btn - github.svg" alt="Github icon" />
        </a>
      </FooterIconContainer>
    </FooterContainer>
  )
}