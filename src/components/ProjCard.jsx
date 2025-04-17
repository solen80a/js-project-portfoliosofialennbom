
import "./ProjCard.css"

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
        <a href={netlify}></a>
     
      </article>
      </section>
  )
}