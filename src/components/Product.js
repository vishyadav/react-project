import React from 'react';
import IncrementDecrement from './IncrementDecrement';
import '../App.css';
import { NavLink } from 'react-router-dom';
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
    <>
    
    <div className='card my-2' style={productbox}>
        <NavLink to='/ProductDetail'>
        <div className='d-flex p-2 justify-content-center' style={{height:'200px'}}>
            <img src='./images/handtowel.jpg'  style={{height:'100%',width:'100%'}} alt=''/>
        </div>
        </NavLink>
        <div className='card-body'>
            <h6>Lizol Disinfectant Surface Cleaner - Citrus : 2 Litres</h6>
            <span className='text-muted'>MRP : <strike>₹399.00</strike></span> 
            &nbsp;<span>TRMart : ₹369.00</span> &nbsp; 
            <div>
               <span className='text-success'>You Save : ₹30.00</span>  
            </div> 

            <div className='mt-3'>
                <select className='form-control w-100'>
                    <option>2 Ltr</option>
                    <option>3 Ltr</option>
                    <option>4 Ltr</option>
                </select>
            </div>  
            <div className='mt-3'>
            <IncrementDecrement />
            </div>          
        </div>

    </div>
    
    </>
  );
 
} 

export default Product