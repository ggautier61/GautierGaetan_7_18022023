import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import "./index.css"

function Header() {
  return (
    <header>
      {/* <div> */}
      <img id="logo" src={logo} alt="logo" />
      <nav id="header-nav">
        <ul className="nav-list">
          <li id="accueil" className="w-auto">
            <Link className="nav-link" to="/">
              Accueil
            </Link>
          </li>
          <li id="apropos" className="w-auto">
            <Link className="nav-link" to="/a-propos">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>

      {/* </div> */}
    </header>
  )
}

export default Header
