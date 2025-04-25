import projects from "../data/projects.json"
import { ProjCard } from "../components/ProjCard"
import { H2 } from "../components/Typography"
import { TagButton } from "../components/TagButton"


export const Proj = () => {
  return (
    <section>
    <H2>Featured Projects</H2>      
    {projects.projects.map((project) =>{
      return (
        <ProjCard
        key={project.name} 
        name={project.name}
        image={project.image}
        tags={project.tags.map((tag) => {
          return <TagButton projtag>{tag}</TagButton>
        })
        }
        content={project.content}
        netlify={project.netlify}
        github={project.github}
        
        />
      )     
  })}

   </section>
  )
}

