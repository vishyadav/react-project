import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import ProductCarousel from './ProductCarousel';
function home() {
  return (
<div className="container-fluid p-0">

{/* carousel */}
<div className='row'>
  <div className='col-12 p-0'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dmart.in/images/rwd/banners/hmpg/15july22-crsl-halfprice-hyd1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dmart.in/images/rwd/banners/hmpg/15july22-crsl-ds-hyd1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.dmart.in/images/rwd/banners/hmpg/26may22-crsl-workndplay.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
</div>

{/* Productcarousel */}


  {/* Product */}
  <div className='row my-3'>
      <div className='col-12'>
      <ProductCarousel/>
      </div>
  </div>

  </div>
  );
}

export default home;