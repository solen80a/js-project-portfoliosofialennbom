import projects from "../data/projects.json"
import { ProjCard } from "./ProjCard"

export const Proj = () => {
  return (
    <section>
    <h2>Featured Projects</h2>      
    {projects.projects.map((project) =>{
      return (
        <ProjCard
        key={project.name} 
        name={project.name}
        image={project.image}
        tags={project.tags.join(" ")}
        content={project.content}
        netlify={project.netlify}
        />
      )     
  })}
   </section>
  )
}

