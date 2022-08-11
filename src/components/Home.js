import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import ProductCarousel from './ProductCarousel';
import CarouselBanner from './CarouselBanner';

function home() {
  return (
<div className="container-fluid p-0">


{/* carousel */}
<div className='row'>
  <div className='col-12 p-0'>
   <CarouselBanner/>
  </div>
</div>

<div className='row my-3'>
      <div className='col-12 py-3 bg-white'>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1659285902_Staple-Store-1680-325.jpg"/>
      </div>
</div>


{/* Productcarousel */}
  <div className='row my-3'>
      <div className='col-12 py-3 bg-white'>
      <div><h5>This Week’s Savers</h5></div>
      <ProductCarousel/>
      </div>
  </div>


  <div className='row my-3'>
      <div className='col-12 py-3 bg-white'>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1659285902_Staple-Store-1680-325.jpg"/>
      </div>
</div>

  </div>
  );
}

export default home;