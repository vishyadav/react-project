import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const CarouselBanner = () => {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide><img
          className="d-block w-100"
          src="../images/Ganesh-Festival_1680.jpg"
          alt="First slide"
        /></SwiperSlide>
        <SwiperSlide><img
          className="d-block w-100"
          src="../images/Carousel-Banner-23_08_2022.jpg"
          alt="Second slide"
        /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default CarouselBanner