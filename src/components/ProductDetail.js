import React from 'react'
import IncrementDecrement from './IncrementDecrement'
const ProductDetail = () => {


  const detailedbox = {
       boxShadow: 'rgba(99, 99, 99, 0.2)0px 2px 8px 0px',
       minHeight:'200px'
  };

  return (
   <>
   <div className='container bg-white rounded p-3 my-5' style={detailedbox}>
<div className='row'>
  <div className='col-md-6 d-flex justify-content-center'>
    <section>
    <img className='img-fluid border p-1' style={{maxWidth:'400px',height:'100%'}} src='./images/handtowel.jpg'/>
    </section>
  </div>
  <div className='col-md-6 align-self-center'>
  <h5>Glass Cloth Towel White 220 GSM - 58x58 cm: 3 Units</h5>
  <div><span>Athom Trendz</span></div>
  <div><span className='text-muted'>Variant</span></div>
 <div className='my-3'>
    <select className='rounded border p-1'>
      <option>Pack of 3</option>
      <option>Pack of 6</option>
    </select>
 </div>


  <div className='d-flex justify-content-start my-3'>
    <section className='me-3 fs-5'>You Pay <span className='fw-bold'>₹ 85</span></section>
    <section><span className='p-2 rounded' style={{background:'lightgreen',color:'forestgreen'}}>You Save ₹ 65</span></section>
  </div>

  

  <div className='my-3 d-flex justify-content-end'>
    <div style={{width:'150px'}}><IncrementDecrement/></div>
  </div>
  </div>
</div>

<div className='row'>
  <div className='col-12'>
    
  </div>
</div>

   </div>
   </>
  )
}

export default ProductDetail