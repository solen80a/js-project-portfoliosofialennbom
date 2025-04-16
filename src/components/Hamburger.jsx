import "./Hamburger.css"

export const Hamburger = ({ isOpen }) => {
  return (
    <>
    <div className="hamburger">
      <div className="burger burger1"></div> 
      <div className="burger burger2"></div> 
      <div className="burger burger3"></div>      
    </div>

    <style jsx>{

      .burger1{
        transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'}
      }

      .burger2{
        transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'}
      }

      .burger3{
        transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'}
      }


      }</style>
    </>
  )
} 