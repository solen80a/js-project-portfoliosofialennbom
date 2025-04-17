import "./Footer.css"

export const Footer = () => {
  return(
    <footer>
      <h2>Let´s talk</h2>
      <div>
        <img  
          className="footer-img"
          src="assets/sofia_lennbom_black_white.jpg"
          alt="Profile image of the developer"
       />
      </div>
    <div>      
      <p>Sofia Lennbom</p>
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