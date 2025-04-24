import { H2, Body } from "../components/Typography"
import styled from "styled-components"
import { Media } from "../components/Media"

const FooterImg = styled.img`
 width: 164px;
  height: 164px;
  border-radius: 164px;
  
  `
    

export const Footer = () => {
  return(
    <footer>
      <H2>Let´s talk</H2>
      <div>
        <FooterImg  
          className="footer-img"
          src="assets/sofia_lennbom_black_white.jpg"
          alt="Profile image of the developer"
       />
      </div>
      <div>      
        <Body>Sofia Lennbom</Body>
        <div>
          <a href= "+46705623461">+46(0)705 62 34 61</a>
        </div>
        <div>
          <a href="sofialennbom@gmail.com">sofialennbom@gmail.com</a>
        </div>
      </div>

    </footer>
  )
}