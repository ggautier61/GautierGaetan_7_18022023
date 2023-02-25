import { useParams } from "react-router"
import Carousel from "../../components/Carousel"
import Header from "../../components/Header"
import Rate from "../../components/Rate"
import Tag from "../../components/Tag"
import DropDown from "../../components/DropDown"
import { LogementsList } from "../../datas/logements"
import "../Fiche-Logement/fiche-logement.css"

function FicheLogement() {
  const { id } = useParams()

  //Recherche le logement dans la liste des logements
  const logement = LogementsList.find((l) => l.id === id)
  console.log(parseInt(logement.rating))

  return (
    <div className="main-container">
      <Header />
      <div>
        <Carousel images={logement.pictures} />
      </div>

      {/* ----- Ligne Titre + Avatar ----- */}
      <div className="flex justify-space-between mt-30">
        <div className="flex flex-column">
          <h2 className="font-main m-0">{logement.title}</h2>
          <p className="font-main m-0 weight500">{logement.location}</p>
        </div>
        <div className="flex">
          <div className="flex flex-column justify-center mr-10">
            {logement.host.name.split(" ").map((item) => (
              <p
                key={item}
                className="flex justify-flex-end font-main m-0 weight500"
              >
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

      {/* ----- Ligne Tags + Notations ----- */}
      <div className="mt-20 flex justify-space-between">
        {/* ----- Tags ----- */}
        <div className="flex">
          {logement.tags.map((tag) => (
            <div key={tag} className="mr-10">
              <Tag title={tag} />
            </div>
          ))}
        </div>
        {/* ----- Notation -----*/}
        <div>
          <Rate numberRate={parseInt(logement.rating)} />
        </div>
      </div>

      {/* ----- Dropdown elemen ----- */}
      <div className="logement-dropdown-list flex">
        <div className="logement-dropdown-item flex justify-space-between">
          <DropDown name="Description" comment={logement.description} />
        </div>
        <div className="logement-dropdown-item flex justify-space-between">
          <DropDown name="Equipements" comment={logement.equipments} />
        </div>
      </div>
    </div>
  )
}

export default FicheLogement
