import Banner from "../../components/Banner/banner"
import bannerAPropos from "../../assets/banner_a-propos.png"
import { AProposItems } from "../../datas/a_propos_items"
import DropDown from "../../components/DropDown/dropdown"
import "../A-Propos/a-propos.css"
import "../Home/home.css"

function APropos() {
  return (
    <div className="main-container">
      <div id="content">
        <Banner picture={bannerAPropos} />
        <div className="a-propos">
          <div className="a-propos-list">
            {AProposItems.map(({ name, comment }) => (
              <div key={name} className="a-propos-item">
                <DropDown
                  name={name}
                  comment={comment}
                  fontSize="12"
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
