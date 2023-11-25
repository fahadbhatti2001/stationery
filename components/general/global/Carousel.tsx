import React from "react"
import Slider from "react-slick"

export const Carousel = () => {
  const items = [
    {
      id: 1,
      image: "/images/banner (1).jpg",
      title: "",
      price: "",
    },
    {
      id: 2,
      image: "/images/banner (2).jpg",
      title: "",
      price: "",
    },
    {
      id: 3,
      image: "/images/banner (3).jpg",
      title: "",
      price: "",
    },
    {
      id: 4,
      image: "/images/banner (4).jpg",
      title: "",
      price: "",
    },
    {
      id: 5,
      image: "/images/banner (5).jpg",
      title: "",
      price: "",
    },
    {
      id: 6,
      image: "/images/banner (6).jpg",
      title: "",
      price: "",
    },
    {
      id: 7,
      image: "/images/banner (1).jpg",
      title: "",
      price: "",
    },
    {
      id: 8,
      image: "/images/banner (2).jpg",
      title: "",
      price: "",
    },
    {
      id: 9,
      image: "/images/banner (3).jpg",
      title: "",
      price: "",
    },
    {
      id: 10,
      image: "/images/banner (4).jpg",
      title: "",
      price: "",
    },
    {
      id: 11,
      image: "/images/banner (5).jpg",
      title: "",
      price: "",
    },
    {
      id: 12,
      image: "/images/banner (6).jpg",
      title: "",
      price: "",
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    className: "center",
    centerMode: true,
    arrows: false,
  }
  return (
    <Slider {...settings}>
      {items.map((e, i) => (
        <div key={i} className="outline-none flex flex-col">
          <img className="w-60 h-60 object-cover rounded-md" src={e.image} />
          <p className="text-center text-teal-600 mt-2 font-thin">Lorem ipsum dolor sit.</p>
          <p className="text-center">Rs. 350.00</p>
        </div>
      ))}
    </Slider>
  )
}
