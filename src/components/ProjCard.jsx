import { Button } from "./Button"
import styled from "styled-components"
import { H3, Body } from "./Typography"
import { Media } from "./Media"

import { Proj } from "../sections/Proj"
import projects from "../data/projects.json"
import { TagButton } from "../components/TagButton"

const ProjectCardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 128px;
  padding: 64px;
  margin: 24px;

 /* Tablet */
 @media ${Media.tablet}{  
    height: 277px;
}

/* Desktop Widescreen */
@media ${Media.desktop}{   
    flex-direction: row;
    justify-content: center;  
    height: 418px;       
    align-items: center; 
}
`   

const ProjectCardContent = styled.article`
/* min-width: 479px;
height: 100%;

  a {
    text-align: left; 
  }

/* Desktop Widescreen */
/*@media ${Media.desktop}{ 
  display: flex;
  justify-content: center; 
  align-items: center;     
  width: 580px;   
  align-items: center; 
    
  img {
    
    margin-right: auto;
}
} */
`

const TagWrapper = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
`

export const ProjCard = ({ name, image, tags, content, netlify, github, netlifyIcon,
  netlifyAlt,
  netlifyTitle,
  githubIcon,
  githubAlt,
  githubTitle }) => {
  return (
    <>  
    <ProjectCardContainer>   
      <img src={image} alt="" />      
          
      <ProjectCardContent> 
        <TagWrapper>{tags}</TagWrapper>        
        <H3>{name}</H3>
        <Body>{content}</Body>  
        <Button 
          url={netlify} 
          icon={netlifyIcon} 
          alt={netlifyAlt} 
          title={netlifyTitle} 
          />
        <Button 
          url={github} 
          icon={githubIcon} 
          alt={githubAlt} 
          title={githubTitle} 
          /> 
      </ProjectCardContent>
      </ProjectCardContainer>
    </>
  )
}