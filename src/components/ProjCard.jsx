import { Button } from "./Button"
import styled from "styled-components"
import { H3, Body } from "./Typography"
import { Media } from "./Media"

import { Proj } from "../sections/Proj"
import projects from "../data/projects.json"
import { TagButton } from "../components/TagButton"

const ProjectCardImg = styled.img`
 
 
  /* height: 479px; */
  /* align-self: stretch; */
 
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
      <ProjectCardImg src={image} alt="" />      
      <TagWrapper>{tags}</TagWrapper>     
      <article>        
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
    </>
  )
}