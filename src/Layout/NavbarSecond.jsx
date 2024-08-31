import { NavLink } from "react-router-dom"
import  "../Layout/Router.css"

function NavbarSecond() {
    const getNavLinkStyle = ({isActive}) =>{
        return {
             color : isActive ? "green" : "pink",
        };
    }


  return (
    <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item">
          <NavLink className={({isActive}) => {
            return isActive ? "nav-link acitve-link" : "nav-link"
          }} to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/about" style={(isActive) => {
            return {
                color : isActive ? "blue" : "pink"
            }
          }}>About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/services" style={getNavLinkStyle}>Services</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/movies">Movies</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavbarSecond
