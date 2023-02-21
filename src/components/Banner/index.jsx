function Banner({ picture, texte }) {
  return (
    <div className="banner">
      <img src={picture} alt="banner_picture" className="banner-picture"></img>
      <div className="banner-title">
        <h1>{texte}</h1>
      </div>
    </div>
  )
}

export default Banner
