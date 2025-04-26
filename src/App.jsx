import "./index.css"


import { Profile } from "./sections/Profile"
import { Tech } from "./sections/Tech"
import { ProjCard } from "./components/ProjCard"
import { Proj } from "./sections/Proj"
import { Footer } from "./sections/Footer"
import { GlobalStyle } from "./components/GlobalStyle"
import { SkipToMainContent } from "./sections/SkipToMain"
import { Skills } from "./sections/Skills"
import { MyWords } from "./sections/MyWords"
import mywords from "./data/mywords.json";
import projects from "./data/projects.json"
import { Button } from "./components/Button"



export const App = () => {
  return (
    <>
    
    <GlobalStyle />
      <SkipToMainContent />
      <Profile />
      <Tech />      
      <Proj />
      <Skills />
      <MyWords />    
      <Footer />
    </>
  )
}
