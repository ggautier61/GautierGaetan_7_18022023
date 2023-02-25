import React, { useState } from "react"
import "./Carousel.css"
import vector from "../../assets/Vector_Slide.png"

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  console.log(images.length)
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
      {images.length > 1 && (
        <div className="carousel-index">
          {currentImageIndex + 1}/{images.length}
        </div>
      )}

      {images.length > 1 && (
        <img
          src={vector}
          alt="Flèche précédente"
          onClick={handleClickPrevious}
          className="prev"
        ></img>
      )}
      {images.length > 1 && (
        <img
          src={vector}
          alt="Flèche suivante"
          onClick={handleClickNext}
          className="next"
        ></img>
      )}

      <img
        src={images[currentImageIndex]}
        alt={`Logement ${currentImageIndex + 1}`}
        className="carousel-img"
      />
    </div>
  )
}

export default Carousel
