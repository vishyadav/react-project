import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import ProductCarousel from './ProductCarousel';
import CarouselBanner from './CarouselBanner';
import list from './ProductData';
import Card from './Card';
import ProductCard from './ProductCard';
import '../App.css';

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
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg"/>
      </div>
</div>


{/* Productcarousel */}
  <div className='row my-3'>
      <div className='col-12 py-3 bg-white'>
      <div className='d-flex justify-content-between'>
        <h5 className='fw-bold'>This Week’s Savers</h5>
        <a href="#">View All</a>
      </div>
      <ProductCarousel/>
      </div>
  </div>

{/* Banner  */}
  <div className='row my-3'>
      <div className='col-12 py-3 bg-white'>
        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1659285902_Staple-Store-1680-325.jpg"/>
      </div>
</div>


 {/* category row */}
<div className='row my-3'>
    <div className='d-flex justify-content-between'>
      <h5 className='fw-bold'>Cloth Store</h5>
      <a href="#">View All</a>
    </div>
    
</div>

</div>

);
}

export default home;