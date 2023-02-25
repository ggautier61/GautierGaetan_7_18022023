import Banner from "../../components/Banner"
import Header from "../../components/Header"
import bannerAPropos from "../../assets/banner_a-propos.png"
import { AProposItems } from "../../datas/a_propos_items"
import DropDown from "../../components/DropDown"
import "../A-Propos/a-propos.css"
import "../Home/home.css"

function APropos() {
  return (
    <div className="main-container">
      <Header />
      <div id="content">
        <Banner picture={bannerAPropos} />
        <div className="a-propos">
          <div className="a-propos-list">
            {AProposItems.map(({ name, comment }) => (
              <div key={name} className="a-propos-item">
                <DropDown
                  name={name}
                  comment={comment}
                  fontSize="18"
                ></DropDown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default APropos
