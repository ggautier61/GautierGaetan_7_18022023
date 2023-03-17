import { Link } from "react-router-dom"
import Thumb from "../../components/Thumb/thumb"
import Banner from "../../components/Banner/banner"
import bannerHome from "../../assets/banner_home.png"
import logements from "../../datas/logements"
import "../Home/home.css"

function Home() {
  return (
    <div className="main-container">
      <div id="content">
        <Banner picture={bannerHome} texte="Chez vous, partout et ailleurs" />

        <div className="home-logements-list">
          {/* <div className="home-logementflex justify-center wrap"> */}
          {logements.map(({ id, title, cover }) => (
            <Link
              key={id}
              className="home-logement-item"
              to={`/logement/${id}`}
            >
              <Thumb id={id} title={title} cover={cover}></Thumb>
            </Link>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
