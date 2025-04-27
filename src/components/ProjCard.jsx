import { Button } from "./Button"
import styled from "styled-components"
import { H3, Body } from "./Typography"
import { Media } from "./Media"


const ProjectCardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 128px;
  padding: 64px;
  margin: 24px; 

 /* Tablet */
 @media ${Media.tablet}{      
    flex-direction: row; 
    gap: 32px;
}

/* Desktop Widescreen */
@media ${Media.desktop}{   
    flex-direction: row;
    justify-content: center;  
    height: 418px;       
    align-items: center; 
}

& p {
  width: 80%;

  /* Desktop Widescreen */
@media ${Media.desktop}{   
    width: 100%; 
}
}
`   

const ProjectCardContent = styled.article`
gap: 10px;

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