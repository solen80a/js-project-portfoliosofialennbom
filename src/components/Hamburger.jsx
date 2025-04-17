import "./Hamburger.css"

export const Hamburger = ({ isOpen }) => {
  return (
    <>    
    <div className={`hamburger ${isOpen ? "open" : ""}`}>
      <div className="burger burger1"></div> 
      <div className="burger burger2"></div> 
      <div className="burger burger3"></div>      
    </div>    
    </>
  )
} 