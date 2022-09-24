import React from 'react';
import IncrementDecrement from './IncrementDecrement';
import '../App.css';
import '../styles/Card.css'
import { NavLink } from 'react-router-dom';
import { lineHeight } from '@mui/system';
import { Button } from 'react-bootstrap';

const Card = ({item}) => {
 
    const {id,name,description,price,img} = item;

  return(
      
    <div className='card my-2'>  
        <div className='cat-img' >
            <img className='product-image-photo' src={img}  alt=''/>
        </div>
        <div className='card-body'>
            <div className="text_wrap fw-bold mb-2" style={{lineHeight:'1.2rem', fontSize:'0.9rem',minHeight:'39px'}}>{name}</div>
            <strong>₹{price}.00 </strong>
            <small className='border-start ps-1'>MRP : <strike>₹399.00</strike></small><br/>
            <small className='_text-success'>You Save : ₹30.00</small>  
             
            <div className='d-flex justify-content-between'>
            <div className='me-1'>
                <select className='w-100 border text-muted p-1 fs-6'>
                    <option>2 Ltr</option>
                    <option>3 Ltr</option>
                    <option>4 Ltr</option>
                </select>
            </div>  
            <div>
                {/* <Button className="_btn _btn-primary">ADD</Button> */}
                <IncrementDecrement />
            </div>   
            </div>       
        </div>
    </div>

  );
 
} 

export default Card