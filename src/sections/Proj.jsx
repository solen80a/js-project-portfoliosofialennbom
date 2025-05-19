import projects from "../data/projects.json"
import { ProjCard } from "../components/ProjCard"
import { H2 } from "../components/Typography"
import { TagButton } from "../components/TagButton"

export const Proj = () => {
  return (
    <section>
    <H2>Featured Projects</H2>      
    {projects.projects.map((project, index) =>{
      return (
        <ProjCard
        key={project.name}
        index={index} 
        name={project.name}
        image={project.image}
        tags={project.tags.map((tag) => {
            return <TagButton $projtag>{tag}</TagButton>
          })}
        content={project.content}
        netlify={project.netlify}
        github={project.github}        
        netlifyIcon="/assets/Ic-Web.svg"
        netlifyAlt="Icon of a globe to represent the live demo"
        netlifyTitle="Live Demo"
        githubIcon="/assets/Btn - github.svg"
        githubAlt="GitHub icon"
        githubTitle="View Code">
        </ProjCard> 
      )     
      })}
    </section>
  )
}

