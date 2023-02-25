import { useParams } from "react-router"
import Carousel from "../../components/Carousel"
import Header from "../../components/Header"
import { LogementsList } from "../../datas/logements"
import "../Fiche-Logement/fiche-logement.css"

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
      <div className="flex justify-space-between mt-30">
        <div className="flex flex-column">
          <h2 className="font-color m-0">{logement.title}</h2>
          <p className="font-color m-0 weight500">{logement.location}</p>
        </div>
        <div className="flex">
          <div className="flex flex-column justify-center mr-10">
            {logement.host.name.split(" ").map((item) => (
              <p className="flex justify-flex-end font-color m-0 weight500">
                {item}
              </p>
            ))}
          </div>
          <img
            className="image-avatar"
            src={logement.host.picture}
            alt={logement.host.name}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default FicheLogement
