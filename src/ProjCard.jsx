import { Proj } from "./Proj"

export const ProjCard = () => {
  return (
    <section>
      <h2>Featured Projects</h2>
      <img src=".src/assets/malte-michels-s4wGZw3UuLk-unsplash.jpg" alt="Image of a plant leaf"/>
      <article>
        <h3>{Proj.title}</h3>
        <p>{Proj.content}</p>
        <div>
          <button>Live demo</button>
          <button>View Code</button>
        </div>
      </article>
      </section>
  )
}