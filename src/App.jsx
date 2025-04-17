import "./index.css"

import { Nav } from "./components/Nav"
import { Profile } from "./components/Profile"
import { Tech } from "./components/Tech"
import { ProjCard } from "./components/ProjCard"
import { Proj } from "./components/Proj"
import { Footer } from "./components/Footer"



export const App = () => {
  return (
    <>
      <Nav /> 
      <Profile />
      <Tech />
      <ProjCard /> 
      <Proj />
      <Footer />
    </>
  )
}
