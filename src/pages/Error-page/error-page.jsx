import { useRouteError } from 'react-router-dom'
import Header from '../../components/Header'
import '../Error-page/index.css'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div>
      <Header />
      <div id="error-page">
        <h1 id="error">404</h1>
        <div className="oups">
          Oups! La page que vous demandez n'existe pas.
        </div>
        {/* <div> */}
        <Link className="back-to-home" to="/">
          Retourner à l'écran d'accueil
        </Link>
        {/* </div> */}
      </div>
    </div>
  )
}
