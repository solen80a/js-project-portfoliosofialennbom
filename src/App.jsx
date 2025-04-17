import "./index.css"
import { Nav } from "./components/Nav"
import { Profile } from "./components/Profile"
import { Tech } from "./components/Tech"
import { ProjCard } from "./components/ProjCard"
import { Footer } from "./components/Footer"
import projects from "./data/projects.json"


export const App = () => {
  return (
    <>
      <Nav /> 
      <Profile />
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
      <Footer />
    </>
  )
}
