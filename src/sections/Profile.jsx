
import { H1, H3, Body } from "../components/Typography"
import styled from "styled-components"
import { Media } from "../components/Media"

const ProfileImg = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 144px;
  height: 154px;
  /* flex-shrink: 0; */
  border-radius: 12px;

/* Tablet */
@media ${Media.tablet}{  
    width: 260px;
    height: 277px;
}

/* Desktop Widescreen */
@media ${Media.desktop}{  
    width: 418px;
    height: 418px;
}
  `

const ImgContainer = styled.div`
  display: flex;  
  justify-content: center; 
  align-items: center;
  margin: 0 auto;
  width: 315px;
  height: 171px;
  position: relative;
`

const PopImage = styled.div`
  transform: ${props => (props.$iscenter ? "scale(5)" : "scale(1)")};
  z-index: ${props => (props.$iscenter ? "2" : "1")};
  margin: 0 -20px;
  position: relative;
  transition: transform 0.3s ease;
`;     

export const Profile = () => {
  return (
    <section id="main-content">
      <H3>Hi there I´m</H3> 
      <H1>Sofia Lennbom</H1>
      <ImgContainer>  
        <PopImage>     
          <ProfileImg 
          src="assets/screen.svg"
          alt="An image of a screen and a plant"
          />
        </PopImage> 
        <PopImage iscenter="true"> 
          <ProfileImg
          src="assets/sofia_lennbom_black_white.svg"
          alt="Black and white portrait of Sofia Lennbom, a web developer"
          />
        </PopImage> 
        <PopImage> 
          <ProfileImg 
          src="assets/laptop.svg"
          alt="An image of a laptop and a plant"      
          />
        </PopImage> 
      </ImgContainer>
      <H3>Web Developer with a Background in Quality Assurance, Technical documentation and Training</H3>
      <Body>I’m a developer with a curious mindset, eager to learn and build thoughtful digital experiences. I value quality—not just in code, but in the impact it creates.</Body>
      <Body>Loyal and hands-on, I’m a team player who takes initiative and enjoys tackling challenges to deliver meaningful, well-crafted solutions.</Body>
    </section>
  )
  
}