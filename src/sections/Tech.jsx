
import styled from "styled-components"
import { Media } from "../components/Media"

const TechWrapper = styled.section`
background-color: #434040;
color: white;
gap: 16px;

width: 100vw;
`
const H2 = styled.h2`
font-size: 60px;
  
`

const Body = styled.p`
text-align: center; 
`

export const Tech = () => {
  return (
    <TechWrapper>
    <H2>Tech</H2>
    <Body>HTML, CSS, Flexbox, CSS Grid, JavaScript, ES6, TypeScript, JSX, React, React Hooks, 
    Node.js,  Mongo DB, MSSQL, Web Accessibility, APIs, mob-programming, pair-programming,  Git, Jenkins, Jira.</Body>
    </TechWrapper>
  )
}