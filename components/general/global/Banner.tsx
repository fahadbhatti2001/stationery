import React from "react"
import Slider from "react-slick"

export const Banner = () => {
  const images = [
    "/images/banner (1).jpg",
    "/images/banner (2).jpg",
    "/images/banner (3).jpg",
    "/images/banner (4).jpg",
    "/images/banner (5).jpg",
    "/images/banner (6).jpg",
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <Slider {...settings}>
      {images.map((e, i) => (
        <div key={i} className="outline-none">
          <img className="w-full h-[1000px] object-cover" src={e} />
        </div>
      ))}
    </Slider>
  )
}
