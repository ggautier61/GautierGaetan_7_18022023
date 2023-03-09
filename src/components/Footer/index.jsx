import "../Footer/footer.css"
import Logo_White from "../../assets/Logo_White.png"

function Footer() {
  return (
    <div className="footer">
      <img className="footer_image" src={Logo_White} alt="logo footer"></img>
      <div className="footer_text">© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
