import "./index.css"

import { Nav } from "./sections/Nav"
import { Profile } from "./sections/Profile"
import { Tech } from "./sections/Tech"
import { ProjCard } from "./components/ProjCard"
import { Proj } from "./sections/Proj"
import { Footer } from "./sections/Footer"
import { NavCss } from "./sections/Nav"
import { GlobalStyle } from "./components/GlobalStyle"



export const App = () => {
  return (
    <>
    <GlobalStyle />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <Profile />
      <Tech />
      <ProjCard /> 
      <Proj />
      <Footer />
    </>
  )
}
