import { useState } from "react"
import { Hamburger } from "./Hamburger"
import "./Nav.css"

export const Nav = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (

  <header>
    <nav className="navigation" role="navigation" aria-label="Main menu" >
      <ul>        
        <li>Tech</li>
        <li>Features Projects</li>
        <li>Skills</li>
        <li>My Words</li>
        <li>Lets Talk</li>
      </ul>

      <div className="hamburger" onClick={toggleHamburger}>
      <Hamburger isOpen={hamburgerOpen}/>          
      </div> 
    </nav>  

    
  </header>  
)
}