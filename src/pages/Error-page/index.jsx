import { Link } from "react-router-dom"
import "../Error-page/error-page.css"

function ErrorPage() {
  return (
    <div className="main-container">
      <div id="error-page">
        <h1 id="error">404</h1>
        <div className="oups">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <div>
          <Link className="back-to-home" to="/">
            Retourner à la page d'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
