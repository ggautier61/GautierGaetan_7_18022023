import { useParams } from "react-router"
import Carousel from "../../components/Carousel"
import Header from "../../components/Header"
import { LogementsList } from "../../datas/logements"

function FicheLogement() {
  const { id } = useParams()

  //Recherche le logement dans la liste des logements
  const logement = LogementsList.find((l) => l.id === id)

  console.log(`le logement est ${logement.title}`)

  return (
    <div className="main-container">
      <Header />
      <div>
        <Carousel images={logement.pictures} />
      </div>
    </div>
  )
}

export default FicheLogement
