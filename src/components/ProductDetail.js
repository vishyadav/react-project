import React from 'react'
import ReactDOM from "react-dom";
import IncrementDecrement from './IncrementDecrement'
import ProductCard from './ProductCard';
import '../App.css';
import '../styles/Card.css'
import ProductCarousel from './ProductCarousel';
import '../styles/ProductDetails.css';

import { ImagesProvider, ProductImages } from "react-product-image";
const ProductDetail = () => {

  return (
   <>
   <div className='row bg-white p-3'>
<div className='row'>
  
    <section className='d-flex justify-content-center order-1 col-md-6 col-12' id="imgbox">
    <ImagesProvider
      thumbUrls={[
        "https://www.near-by.in/media/a1.jpeg?w=50&q=70",
        "https://www.near-by.in/static/images/ayurvedic.webp?w=50&q=70"
      ]}

      imageUrls={[
        "https://www.near-by.in/media/a1.jpeg?w=1358&q=80",
        "https://www.near-by.in/static/images/ayurvedic.webp?w=1358&q=80"
      ]}
    >
      <div className="image-container">
        <ProductImages />
      </div>
    </ImagesProvider>
    </section>

    <section id='productinfo_section' className='border-top my-3 py-3 order-3 col-md-6 col-12'>
      <h4 className='fw-bold'>ProductDetails</h4>
      <ul className='list-unstyled'>
        <li>
          <h6>Self Life</h6>
          <small>72 Months</small>
        </li>
        <li>
          <h6>Manufacturer Details</h6>
          <small>--</small>
        </li>
        <li>
          <h6>Marketed By</h6>
          <small>--</small>
        </li>
        <li>
          <h6>Country Of Origin</h6>
          <small>--</small>
        </li>
        <li>
          <h6>Customer Care Details</h6>
          <small>Email:</small><small></small><br/>
          <small>Phone:</small><small></small>
        </li>
        <li>
          <h6>Product Class</h6>
          <small>--</small>
        </li>
        <li>
          <h6>Seller</h6>
          <small>--</small>
        </li>
        <li>
          <h6>Expiry Date</h6>
          <small>--</small>
        </li>
        <li>
          <h6>Key Features</h6>
          <small>--</small>
        </li>
        <li>
          <h6>Units</h6>
          <small>--</small>
        </li>
        <li>
          <h6>Disclaimer</h6>
          <small>--</small>
        </li>
        <li>
          <h6>Description</h6>
          <small>--</small>
        </li>
      </ul>
    </section>
  

  
   <section className='order-2 col-12 col-md-6'>
    <div className='pb-3'><small>Home/Kitchen & Dining/handtowel/handtowel set of 3</small></div>
  <h5>Glass Cloth Towel White 220 GSM - 58x58 cm: 3 Units</h5>
  <div><strong>Athom Trendz</strong></div>
  
 <div className='my-3'>
 <div><span className='text-muted'>Select Variant</span></div>
    <select className='rounded border p-1'>
      <option>Pack of 3</option>
      <option>Pack of 6</option>
    </select>
 </div>

  <div className='d-flex justify-content-start mt-3'>
      <h2>₹299.00 </h2> &nbsp;&nbsp;
      <h4 className='_text-muted align-self-center'>MRP: <strike>₹349.00</strike></h4><br/>
  </div>
  <h6 className='_text-success'>You Save : ₹50.00</h6>
  <div className='my-3 d-flex justify-content-end'>
    <div style={{width:'150px'}}><IncrementDecrement/></div>
  </div>
   </section>

  <section id='whyshop_section' className='col-12 col-md-6 mt-3 pt-3 order-4'>
    <h4>Why Shop from TR Mart?</h4>
    <ul className='list-unstyled'>
      <li className='d-flex'>
        <img src="./images/delivery.png"/>
        <section className='align-self-center'>
      <small className='align-self-center'>Superfast Delivery</small><br/>
      <span>Get your order delivered to your doorstep at the earliest from dark stores near you.</span>
      </section>
      </li>
      <li className='d-flex'>
        <img src="./images/gift.png"/>
        <section className='align-self-center'>
        <small>Best Prices & Offers</small><br/>
        <span>Cheaper prices than your local supermarket, great cashback offers to top it off.</span>
        </section>
      </li>
      <li className='d-flex'>
        <img src="./images/grocery.png" />
        <section className='align-self-center'>
        <small>Wide Assortments</small><br/>
        <span>Choose from 5000+ products across food, personal care, household & other categories.</span>
        </section>
        </li>
      <li className='d-flex'>
        <img src="./images/easy-return.png"/>
        <section className='align-self-center'>
        <small>Easy Returns</small><br/>
        <span>Not satisfied with a product? Return it at the doorstep & get a refund within hours.</span>
        </section>
        </li>
    </ul>
  </section>


</div>

<div className='row my-3'>
 <div className='col-12 py-3 border-top'>
  <h4 className='fw-bold'>Similar Products</h4>
   <ProductCarousel/>
 </div>

 <div className='col-12 py-3'>
  <h4 className='fw-bold'>You may also like</h4>
   <ProductCarousel/>
 </div>
</div> 
   </div>
   </>
  )
}

export default ProductDetail