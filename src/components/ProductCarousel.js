import React from 'react'
import Product from './Product';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';



export default () => {
    return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={4}
      navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
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
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
        <SwiperSlide><Product/></SwiperSlide>
      </Swiper>
    );
  };