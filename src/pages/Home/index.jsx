import Thumb from '../../components/Thumb'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import bannerHome from '../../assets/banner_home.png'
import { LogementsList } from '../../datas/logements'
import '../Home/home.css'

function Home() {
  return (
    <div className="home">
      <Header />
      <div id="content">
        <Banner picture={bannerHome} texte="Chez vous, partout et ailleurs" />
        <div className="home-logements-list">
          {LogementsList.map(({ id, title, cover }) => (
            <div key={id} className="home-logement-item">
              <Thumb title={title} cover={cover}></Thumb>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
