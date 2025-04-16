import './index.css'
import { Nav } from './components/Nav.jsx'
import { Tech } from './components/Tech.jsx'
import { ProjCard } from './components/ProjCard.jsx'
import projects from "./data/projects.json"


export const App = () => {
  return (
    <>
      <Nav /> 
      <h3>Hi there I´m</h3> 
      <h1>Sofia Lennbom</h1>
      <img
      src=".src/assets/sofia_lennbom_small.jpg"
      alt="Profile image of the developer"
      />
      <h3>Web Developer with a Background in Quality Assurance, Technical documentation and Training</h3>
      <p>I’m a developer with a curious mindset, eager to learn and build thoughtful digital experiences. I value quality—not just in code, but in the impact it creates.</p>
      <p>Loyal and hands-on, I’m a team player who takes initiative and enjoys tackling challenges to deliver meaningful, well-crafted solutions.</p>
      <Tech /> 
      <h2>Featured Projects</h2>      
      {projects.projects.map((project) =>{
        return (
          <ProjCard
          key={project.name} //something unique
          name={project.name}
          image={project.image}
          // text={project.tag.join(", ")}
          content={project.content}
          />
        )
      })}
    </>
  )
}
