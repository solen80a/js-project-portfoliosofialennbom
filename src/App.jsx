import "./index.css"

import { Nav } from "./sections/Nav"
import { Profile } from "./sections/Profile"
import { Tech } from "./sections/Tech"
import { ProjCard } from "./components/ProjCard"
import { Proj } from "./sections/Proj"
import { Footer } from "./sections/Footer"
import { NavCss } from "./sections/Nav"
import { GlobalStyle } from "./components/GlobalStyle"
import { SkipToMainContent } from "./sections/SkipToMain"



export const App = () => {
  return (
    <>
    
    <GlobalStyle />
    <SkipToMainContent />
      <Profile />
      <Tech />
      <ProjCard /> 
      <Proj />
      <Footer />
    </>
  )
}
