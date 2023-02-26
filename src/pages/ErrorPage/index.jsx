import { Link } from "react-router-dom"

function ErrorPage2() {
  //   const location = useLocation()

  return (
    // <div>
    //   <h2>Page introuvable</h2>
    //   <p>La page {location.pathname} n'existe pas.</p>
    // </div>
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

export default ErrorPage2
