import { Button } from "./Button"

import { Proj } from "../sections/Proj"
import projects from "../data/projects.json"

export const ProjCard = ({ name, image, tags, content, netlify, github }) => {
  return (
    <section>     
      <img className="card-img" src={image} alt="" />
      <section>
        <p>{tags}</p>
        
      </section>
      <article>        
        <h3>{name}</h3>
        <p>{content}</p>
        
      
        
        
      <Button  url={netlify} target _blank ></Button>
        
      <Button>View Code</Button>      
     
      </article>
    </section>
  )
}