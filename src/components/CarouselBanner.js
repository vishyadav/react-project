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
          src="https://cdn.dmart.in/images/rwd/banners/hmpg/15july22-crsl-halfprice-hyd1.jpg"
          alt="First slide"
        /></SwiperSlide>
        <SwiperSlide><img
          className="d-block w-100"
          src="https://cdn.dmart.in/images/rwd/banners/hmpg/15july22-crsl-ds-hyd1.jpg"
          alt="Second slide"
        /></SwiperSlide>
        <SwiperSlide><img
          className="d-block w-100"
          src="https://cdn.dmart.in/images/rwd/banners/hmpg/26may22-crsl-workndplay.jpg"
          alt="Third slide"
        /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default CarouselBanner