import './index.css'
import { Nav } from './Nav.jsx'
import { Tech } from './Tech.jsx'
import { ProjCard } from './ProjCard.jsx'

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
      <ProjCard /> 
    </>
  )
}
