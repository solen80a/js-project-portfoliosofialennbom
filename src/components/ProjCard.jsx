import { Button } from "./Button"
import "./ProjCard.css"
import { Proj } from "../sections/Proj"
import projects from "../data/projects.json"

export const ProjCard = ({ name, image, tags, content, netlify }) => {
  return (
    <section>     
      <img className="card-img" src={image} alt="" />
      <section>
        <p>{tags}</p>
      </section>
      <article>        
        <h3>{name}</h3>
        <p>{content}</p>
        {/*  */}
        <a href={netlify}>Click me</a>
        
      <Button primarybtn href={netlify}>Live Demo</Button>
        
      <Button>View Code</Button>      
     
      </article>
    </section>
  )
}