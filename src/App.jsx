import "./index.css"

import { Nav } from "./sections/Nav"
import { Profile } from "./sections/Profile"
import { Tech } from "./sections/Tech"
import { ProjCard } from "./components/ProjCard"
import { Proj } from "./sections/Proj"
import { Footer } from "./sections/Footer"



export const App = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav /> 
      <Profile />
      <Tech />
      <ProjCard /> 
      <Proj />
      <Footer />
    </>
  )
}
