import Thumb from '../../components/Thumb'
import Header from '../../components/Header'
import banner from '../../assets/banner.png'
import { LogementsList } from '../../datas/logements'
import '../Home/home.css'

function Home() {
  return (
    <div className="home">
      <Header />
      <content id="content">
        <banner className="banner">
          <img
            src={banner}
            alt="banner_picture"
            className="banner-picture"
          ></img>
          <div className="banner-title">
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        </banner>
        <div className="home-logements-list">
          {LogementsList.map(({ title, cover }) => (
            <div className="home-logement-item">
              <Thumb title={title} cover={cover}></Thumb>
            </div>
          ))}
        </div>
      </content>
    </div>
  )
}

export default Home
