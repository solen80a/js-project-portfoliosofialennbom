import styled from "styled-components";
import { Media } from "../components/Media";
import { H2} from "../components/Typography";
import { TagButton } from "../components/TagButton";

const SkillsSection = styled.section `
background-color: #434040;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* width: 343px;
height: 791px; */
`

const SkillsContainer = styled.div`

gap: 24px;  
`

const SkillsList = styled.ul`
display: flex;
flex-wrap: wrap;
float: right;
margin: 20px 0px;
padding: 0px 25px;

font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
list-style-type: none;




& li {
 
  
}
`




export const Skills = () => {
return (
  <>
  <SkillsSection>
    <H2>Skills</H2>
  <SkillsContainer>
  <TagButton>Code</TagButton>
  <SkillsList>    
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Javascript ES6</li>
    <li>React</li>
    <li>Styled Components</li>
    <li>GitHub</li>
    <li>Bitbucket</li>
    <li>Jenkins</li>
    <li>MSSQL</li>
  </SkillsList>
  <TagButton>Toolbox</TagButton>
  <SkillsList>
    <li>Figma</li>
    <li>Slack</li>
    <li>Jira</li>
    <li>Confluence</li>
    <li>Office 365</li>   
  </SkillsList>
  <TagButton>Upcomming</TagButton>
  <SkillsList>
    <li>Node.js</li>
    <li>Mongo DB</li>    
  </SkillsList>
  <TagButton>More</TagButton>
  <SkillsList>
    <li>Branding</li>
    <li>Strategy</li>
    <li>Process Design</li>
    <li>Concept</li>
    <li>Development</li>
    <li>Agile methodology</li>
    <li>Team work</li>
    <li>Problem Solving</li>
    <li>Adaptability</li>
    <li>Communication</li>
  </SkillsList>
  </SkillsContainer>
  </SkillsSection>
  </>

)

}