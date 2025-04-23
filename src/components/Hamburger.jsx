import styled from "styled-components"


export const HamburgerCss = styled.div `
  .hamburger{
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10; 
 
}

.burger{
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: #191919;
  transform-origin: 1px;
  transition: all 0.3s linear;
 
}

/* Animation when open */
.hamburger.open .burger1 {
  transform: rotate(45deg);
  width: 1.35rem;
}

.hamburger.open .burger2 {
  transform: translateX(100%);
  opacity: 0;
}

.hamburger.open .burger3 {
  transform: rotate(-45deg);
  width: 1.35rem;
}


`

export const Hamburger = ({ isOpen }) => {
  return (
    <> 
    <HamburgerCss className={`hamburger ${isOpen ? "open" : ""}`}>
      
      <div className="burger burger1"></div> 
      <div className="burger burger2"></div> 
      <div className="burger burger3"></div>      
          
    </HamburgerCss>   
    
    </>
  )
} 