import { Navigate, useParams } from "react-router"
import Carousel from "../../components/Carousel/Carousel"
import Rate from "../../components/Rate/rate"
import Tag from "../../components/Tag/tag"
import DropDown from "../../components/DropDown/dropdown"
import logements from "../../datas/logements"
import "../Fiche-Logement/fiche-logement.css"

function FicheLogement() {
  const { id } = useParams()

  //Recherche le logement dans la liste des logements
  const logement = logements.find((l) => l.id === id)

  if (logement == null) {
    return <Navigate to="/error-page" replace={true} />
  } else {
    return (
      <div className="main-container">
        <div className="w-100">
          <Carousel images={logement.pictures} />
        </div>

        <div className="w-100">
          <div className="logement-details">
            {/* ----- Ligne Titre + Tag ----- */}
            <div className="flex flex-column mt-30 mb-10">
              <div className="flex flex-column">
                <h2 className="color-main m-0">{logement.title}</h2>
                <p className="logement-place color-main weight500">
                  {logement.location}
                </p>
              </div>
              {/* ----- Tag ----- */}
              <div className="flex flex-wrap w-auto gap-10">
                {logement.tags.map((tag) => (
                  <div key={tag}>
                    <Tag title={tag} />
                  </div>
                ))}
              </div>
            </div>

            {/* ----- Ligne Avatar + Notations ----- */}
            <div className="logement-host mt-20 flex justify-space-between">
              {/* ----- Notation -----*/}
              <div className="w-auto flex align-center">
                <Rate numberRate={parseInt(logement.rating)} />
              </div>
              {/* ----- Avatar -----*/}
              <div className="logement-host-avatar flex">
                <div className="flex flex-column justify-center mr-10">
                  {logement.host.name.split(" ").map((item) => (
                    <p
                      key={item}
                      className="flex justify-flex-end color-main m-0 weight500 font-size-12"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div className="image-avatar-blank">
                  <img
                    className="image-avatar"
                    src={logement.host.picture}
                    alt={logement.host.name}
                  ></img>
                </div>
              </div>
            </div>
          </div>

          {/* ----- Dropdown elements ----- */}
          <div className="logement-dropdown-list">
            <div className="logement-dropdown-item flex justify-space-between mb-20">
              <DropDown
                name="Description"
                comment={logement.description}
                fontSize="12"
              />
            </div>
            <div className="logement-dropdown-item flex justify-space-between mb-20">
              <DropDown
                name="Equipements"
                comment={logement.equipments}
                fontSize="12"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FicheLogement
