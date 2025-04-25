import { Button } from "./Button"
import styled from "styled-components"
import { H3, Body } from "./Typography"
import { Media } from "./Media"

import { Proj } from "../sections/Proj"
import projects from "../data/projects.json"
import { TagButton } from "../components/TagButton"

const ProjectCardImg = styled.img`
  width: 100%;
  /* height: 70%; */
 
`
const TagWrapper = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
`

export const ProjCard = ({ name, image, tags, content, netlify, github }) => {
  return (
    <section>     
      <ProjectCardImg src={image} alt="" />      
      <TagWrapper>{tags}</TagWrapper>     
      <article>        
        <H3>{name}</H3>
        <Body>{content}</Body>  
      <Button  url={netlify} target _blank ></Button>        
      <Button url={github} target _blank></Button> 
      </article>
    </section>
  )
}