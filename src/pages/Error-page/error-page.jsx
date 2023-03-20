import { Link } from "react-router-dom"
import "../Error-page/error-page.css"

function ErrorPage() {
  return (
    <div className="main-container h-100 justify-center">
      <div id="error-page">
        <div className="error-title">
          <h1 id="error">404</h1>
        </div>
        <div>
          <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
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
