
import { Profile } from "./sections/Profile"
import { Tech } from "./sections/Tech"
import { Proj } from "./sections/Proj"
import { Footer } from "./sections/Footer"
import { GlobalStyle } from "./components/GlobalStyle"
import { SkipToMainContent } from "./sections/SkipToMain"
import { Skills } from "./sections/Skills"
import { MyWords } from "./sections/MyWords"




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
