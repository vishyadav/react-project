import React from 'react'
import Product from './Product';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import './ProductCarousel.css'
import { Navigation } from "swiper";

export default () => {

    return (
     <>
    <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
      </Swiper>
    </>
    );
  };