import React from 'react';
import IncrementDecrement from './IncrementDecrement';
import '../App.css';

const Product = () => {
 
    const productbox = {
        minWidth: '300px',
        maxWidth: '300px',
        color: "#000",
        backgroundColor: "white",
        padding: "5px",
        boxShadow: 'rgba(99, 99, 99, 0.2)0px 2px 8px 0px',
      };
       
  return(
    
    <div className='card my-2' style={productbox}>

        <div className='d-flex p-2 justify-content-center'>
            <img src='https://cdn.dmart.in/images/rwd/misc/NoImage_P.jpg' alt=''/>
        </div>

        <div className='card-body'>
            <h6>Lizol Disinfectant Surface Cleaner - Citrus : 2 Litres</h6>
            <span className='text-muted'>MRP : <strike>₹399.00</strike></span> 
            &nbsp;<span>TRMart : ₹369.00</span> &nbsp; 
            <div>
            <span className='text-success'>You Save : ₹30.00</span>  
            </div> 
            <div className='mt-3'>
                <select className='form-control w-100'>
                    <option>2 Litre</option>
                    <option>3 Litre</option>
                    <option>4 Litre</option>
                </select>
            </div>  
            <div className='mt-3'>
            <IncrementDecrement />
            </div>          
        </div>

    </div>
   
  );
 
} 




export default Product