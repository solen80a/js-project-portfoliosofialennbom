import styled from "styled-components";
import { Media } from "../components/Media";
import { H2} from "../components/Typography";
import { TagButton } from "../components/TagButton";

const SkillsSection = styled.section `
background-color: #434040;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
width: 100vw;
padding: 128px 0px 128px 0px;

& h2 {
  align-items: center;
  text-align: center;  
}
`

const SkillsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
gap: 24px; 
max-width: 982px; 

/* Tablet */
@media ${Media.tablet}{    
  align-items: center;
}

/* Desktop Widescreen */
@media ${Media.desktop}{         
    align-items: center; 
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    & button {
      
      
    }

    & div {
      grid-row: 1 / 2;
      align-items: center;
      justify-content: center;
    }

}
`

const SkillsList = styled.ul`
text-align: left;
float: right;
margin: 20px 0px;
padding: 0px 25px;

font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
list-style-type: none;

/* Tablet */
@media ${Media.tablet}{  
  text-align: center;
}

`

export const Skills = () => {
return (
  <>
  <SkillsSection>
    <H2>Skills</H2>
  <SkillsContainer> 
  <div>
    <TagButton>Code</TagButton>  
  </div>
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
  <div>
    <TagButton>Toolbox</TagButton>
  </div>
  <SkillsList>
    <li>Figma</li>
    <li>Slack</li>
    <li>Jira</li>
    <li>Confluence</li>
    <li>Office 365</li>   
  </SkillsList>
  <div>
    <TagButton>Upcomming</TagButton>
  </div>
  <SkillsList>
    <li>Node.js</li>
    <li>Mongo DB</li>    
  </SkillsList>
  <div>
    <TagButton>More</TagButton>
  </div>
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