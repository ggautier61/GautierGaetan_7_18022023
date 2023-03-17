import "../Banner/banner.css"

function Banner({ picture, texte }) {
  return (
    <div className="banner">
      <img src={picture} alt="banner_picture" className="banner-picture"></img>
      <div className="banner-title">
        <div>{texte}</div>
      </div>
    </div>
  )
}

export default Banner
