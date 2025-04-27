import { Button } from "./Button"
import styled from "styled-components"
import { H3, Body } from "./Typography"
import { Media } from "./Media"

import { Proj } from "../sections/Proj"
import projects from "../data/projects.json"
import { TagButton } from "../components/TagButton"

const ProjectCardContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

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

    &:nth-child(odd) {
      justify-content: flex-start;
      text-align: left;
    }

    &:nth-child(even) {
      justify-content: flex-end;
      text-align: right;
    }
}
`   

const ProjectCardImg = styled.img` 
min-width: 144px;
height: 154px;

/* Tablet */
@media ${Media.tablet}{  
    width: 260px;
    height: 277px;
}

/* Desktop Widescreen */
@media ${Media.desktop}{  
    width: 418px;
    height: 418px;
 
}
 
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
      <ProjectCardImg src={image} alt="" />      
          
      <article> 
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
      </article>
      </ProjectCardContainer>
    </>
  )
}