import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import "./header.css"

function Header() {
  return (
    <header>
      <img id="logo" src={logo} alt="logo" />
      <nav id="header-nav">
        <ul className="nav-list">
          <li id="accueil" className="w-auto">
            <NavLink exact="true" to="/" className="nav-link">
              Accueil
            </NavLink>
          </li>
          <li id="apropos" className="w-auto">
            <NavLink to="/a-propos" className="nav-link">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
