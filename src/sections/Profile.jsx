
import { H1, Body } from "../components/Typography"
import styled from "styled-components"
import { Media } from "../components/Media"

const ProfileWrapper = styled.section`
max-width: 1200px;


@media desktop {
  padding: 100px;
  margin: 100px;
}
`

const ImgContainer = styled.div`
  display: flex;  
  justify-content: center; 
  align-items: center;
  position: relative;  
  width: 80%;   
  height: 200px;

  /* Tablet */
@media ${Media.tablet}{      
    height: 277px;
}

/* Desktop Widescreen */
@media ${Media.desktop}{     
    height: 418px;
 
}
`

const ProfileImg = styled.img` 
align-items: center;
min-width: 144px;
height: 154px;

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

const ProfileImg1 = styled(ProfileImg)`
  top: 0%;
  right: 50%;  
  margin: 0 auto;
  width: 144px;
  height: 154px;  
  border-radius: 12px;
  position: absolute;
  z-index: 1;  
  
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

const ProfileImg2 = styled(ProfileImg)`
  top: 0%;
  margin: 0 auto;
  width: 144px;
  height: 154px;  
  border-radius: 12px;
  position: absolute;
  z-index: 2;  
  
    /* Tablet */
  @media ${Media.tablet}{      
      /* left: 25%; */
      width: 260px;
      height: 277px;
  }

  /* Desktop Widescreen */
  @media ${Media.desktop}{  
      left: 25%;
      width: 418px;
      height: 418px;
  
  }
`

const ProfileImg3 = styled(ProfileImg)`
  top: 0%;
  left: 50%;
  margin: 0 auto;
  width: 144px;
  height: 154px;  
  border-radius: 12px;
  position: absolute;
  z-index: 1;  
  
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
const Hello = styled.p`
  font-size: 24px; 
  font-style: normal;
  font-weight: 500;
  line-height: normal;   
`

export const Profile = () => {
  return (
    <section id="main-content">
      <ProfileWrapper>
      <Hello>Hi there I´m</Hello> 
      <H1>Sofia Lennbom</H1>      
      <ImgContainer>  
            
          <ProfileImg1 
          src="assets/screen.svg"
          alt="An image of a screen and a plant"
          />
       
          <ProfileImg2 
          src="assets/sofia_lennbom_black_white.svg"
          alt="Black and white portrait of Sofia Lennbom, a web developer"
          />
       
          <ProfileImg3 
          src="assets/laptop.svg"
          alt="An image of a laptop and a plant"      
          />
        
      </ImgContainer>
      <Hello>Frontend Developer with a Background in Quality Assurance, </Hello>
      <Hello>Technical documentation and Training</Hello>
      <Body>
        I’m a developer with a curious mindset, eager to learn and build thoughtful digital experiences. I value quality—not just in code, but in the impact it creates.
        Loyal and hands-on, I’m a team player who takes initiative and enjoys tackling challenges to deliver meaningful, well-crafted solutions.
      </Body>
      </ProfileWrapper>
    </section>
  )  
}