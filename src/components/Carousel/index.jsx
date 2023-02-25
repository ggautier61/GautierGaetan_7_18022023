import React, { useState } from "react"
import "./Carousel.css"
import vector from "../../assets/Vector.png"

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  //   const images = [
  //     "https://picsum.photos/id/1015/400/300",
  //     "https://picsum.photos/id/1016/400/300",
  //     "https://picsum.photos/id/1018/400/300",
  //     "https://picsum.photos/id/1021/400/300",
  //     "https://picsum.photos/id/1022/400/300",
  //   ]

  const handleClickPrevious = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    )
  }

  const handleClickNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
  }

  return (
    <div className="carousel">
      <div className="carousel-index">
        {currentImageIndex + 1}/{images.length}
      </div>
      <img
        src={images[currentImageIndex]}
        alt={`Logement ${currentImageIndex + 1}`}
        className="carousel-img"
      />

      <img
        src={vector}
        alt="Flèche précédente"
        onClick={handleClickPrevious}
        className="prev"
      ></img>
      <img
        src={vector}
        alt="Flèche suivante"
        onClick={handleClickNext}
        className="next"
      ></img>

      {/* <div className="prev" onClick={handleClickPrevious}>
        &#10094;
      </div>
      <div className="next" onClick={handleClickNext}>
        &#10095;
      </div> */}

      {/* <button
        className="carousel-button previous"
        onClick={handleClickPrevious}
      >
        &#8249;
      </button>

      <button className="carousel-button next" onClick={handleClickNext}>
        &#8250;
      </button> */}
    </div>
  )
}

export default Carousel
