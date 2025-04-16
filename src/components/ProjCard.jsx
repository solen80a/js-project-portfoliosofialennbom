// import { Proj } from "./Proj"
// import projects from "./data/projects.json"
import "./ProjCard.css"

export const ProjCard = ({ name, image, tags, content }) => {
  return (
    <section>
      <section>
        <p>{tags}</p>
      </section>
      <img src={image} alt="" />
      <article>        
        <h3>{name}</h3>
        <p>{content}</p>
        <div>
          <button>Live demo</button>
          <button>View Code</button>
        </div>
      </article>
      </section>
  )
}