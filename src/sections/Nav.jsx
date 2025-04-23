import { useState } from "react"
import { Hamburger } from "../components/Hamburger"
import styled from "styled-components"
import { HamburgerCss } from "../components/Hamburger"

export const NavCss = styled.header `
  .navigation ul{
  display: none;
}  

.hamburger{
  position: static;  
  padding-top: 10px;
  margin-left: 10px;
  z-index: 10;
  }

.navigation ul{
  display: ${(props) => (props.$hamburgerOpen ? "inline" : "none")};
  background: #191919;
  color: white;
  /* height: 100vh;
  width: 50vw;         */
  margin-top: 50px;
  position: absolute;
  } 


/* Desktop Widescreen*/
@media (min-width: 769px){  

  .navigation{
    display: block;
    width: 100%;
    height: 50px;
    background-color: #191919;
    color: white;
   }

   .navigation ul{
    display: flex;
    flex-wrap: wrap;
    float: right;
    margin: 20px 0px;
    padding: 0px 25px;
  } 
  
  .navigation ul li{
    list-style: none;
    padding-right: 10px;
  }

  .hamburger{
    display: none;
  }  
}
`

export const Nav = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (

  <NavCss>
    <nav className="navigation" role="navigation" aria-label="Main menu" >
      <ul>        
        <li>Tech</li>
        <li>Features Projects</li>
        <li>Skills</li>
        <li>My Words</li>
        <li>Lets Talk</li>
      </ul>

     
        <HamburgerCss className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen}/>          
        </HamburgerCss> 
     
      
    </nav>  

    
  </NavCss>  
)
}