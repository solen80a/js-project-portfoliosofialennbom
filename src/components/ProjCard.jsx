import { Button } from "./Button"
import styled from "styled-components"
import { H3, Body } from "./Typography"
import { Media } from "./Media"


const ProjectCardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;     

 /* Tablet */
 @media ${Media.tablet}{      
    gap: 32px;
}

/* Desktop Widescreen */
@media ${Media.desktop}{   
    flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
    justify-content: center;     
    align-items: center; 
}

& p {
  width: 60%;

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

export const ProjCard = ({ 
  index, 
  name, 
  image, 
  tags, 
  content, 
  netlify, 
  github, 
  netlifyIcon,
  netlifyAlt,
  netlifyTitle,
  githubIcon,
  githubAlt,
  githubTitle 
}) => {
    const isReversed = index % 2 !== 0; // every other card

  return (
    <>  
    <ProjectCardContainer $reverse={isReversed}>   
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