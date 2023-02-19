import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './index.css'

function Header() {
  return (
    <header>
      {/* <div> */}
        <img id="logo" src={logo} alt='logo' />
        <nav>
          <ul className="nav-list">
            <li id='accueil'>
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li id="apropos">
              <Link className="nav-link" to="/survey">A Propos</Link>
            </li>
          </ul>
          
        </nav>

      {/* </div> */}
    </header>
  )
}

export default Header
