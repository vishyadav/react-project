import React from 'react'
import Card from './Card';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import '../styles/ProductCarousel.css'
import { Navigation } from "swiper";
import list from './ProductData';

const ProductCarousel = () => {

    return (
     <> 
    <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {list.map((item)=>(
          <SwiperSlide>
          <Card className="cardbox" key={item.id} item={item}/>
          </SwiperSlide>
       ))}
      </Swiper> 
    </>
    );
  };
  export default ProductCarousel;