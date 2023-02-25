import { Link } from "react-router-dom"
import Thumb from "../../components/Thumb"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import bannerHome from "../../assets/banner_home.png"
import { LogementsList } from "../../datas/logements"
import "../Home/home.css"

function Home() {
  return (
    <div className="main-container">
      <Header />
      <div id="content">
        <Banner picture={bannerHome} texte="Chez vous, partout et ailleurs" />

        <div className="home-logements-list">
          <div className="flex justify-center justify-space-evenly wrap">
            {LogementsList.map(({ id, title, cover }) => (
              <Link
                key={id}
                className="home-logement-item"
                to={`/logement/${id}`}
              >
                <Thumb id={id} title={title} cover={cover}></Thumb>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
