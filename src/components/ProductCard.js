import React , { useEffect, useState } from 'react';
import IncrementDecrement from './IncrementDecrement';
import '../App.css';
import '../styles/Card.css'
import { NavLink } from 'react-router-dom';
import { lineHeight } from '@mui/system';
import { useSelector, useDispatch } from "react-redux";
import { ADD, DLT } from '../redux/actions/action';
import { Button } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCard = () => {
    const getdata = useSelector((state)=> state.cartreducer.carts);
    const dispatch = useDispatch();
    
    const send = (e)=>{
        // console.log(e);
        dispatch(ADD(e));
      }

      const Remove = (e)=>{
        dispatch(DLT(e))
      }

      
      const Remove2 = (e)=>{
        dispatch(DLT(e))
      }
    
    const [Data,setUser]=useState([]);
    const [Data2,setUser2]=useState([]);

    const getUser= async()=>{
            const response=await fetch('https://fakestoreapi.com/products');
        setUser(await response.json());
        }
    useEffect(()=>{
        getUser();
    },[])


    const filterProduct=(Cat)=>{
        const UpdatedList=Data.filter((x)=>x.category===Cat);
        setUser2(UpdatedList);
    }

  return (
    
<>


<button onClick={()=>{filterProduct("men's clothing")}}>Man</button>




<button onClick={()=>{filterProduct("women's clothing")}}>Women</button>




<button onClick={()=>{filterProduct("jewelery")}}>jewelery</button>



{/* <p onClick={()=>{setUser}}>men's clothing</p> */}
    {
        
Data2.map((element, id)=>{
        return(
        <div className='col-md-3 col-lg-2 col-sm-4 col-6 gx-3 gy-0'>
        <div className='card my-2'>
            <div className='cat-img' >
                <img className='product-image-photo' src={element.image} alt=''/>
            </div>
            
            <div className='card-body'>
                <div className="text_wrap fw-normal mb-2" style={{lineHeight:'1.2rem', fontSize:'0.9rem',minHeight:'39px'}}>{element.title}</div>
                <strong>₹{element.price} </strong>
                <small className='border-start ps-1'>MRP : <strike>₹399.00</strike></small><br/>
                <small className='_text-success'>You Save : ₹30.00</small>  
                    
            <div className="col-12 d-flex justify-content-between">
                <div>
                    <select className='w-100 border text-muted p-1 fs-6'>
                        <option>2 Ltr</option>
                        <option>3 Ltr</option>
                        <option>4 Ltr</option>
                    </select>
                </div>
                <div class="input-group d-flex justify-content-end" style={{width:'100px'}}>
                    <div class="input-group-prepend">
                    <button class="rounded-circle text-white _btn _btn-primary p-1" style={{fontSize:'14px'}} onClick={()=> Remove(element.id)} type="button" > <RemoveIcon/> </button>
                    </div>
                    <input type="text" class="text-center fs-5 p-0 fw-normal bg-transparent border-0 form-control" value="0" />
                    <div class="input-group-prepend">
                    <button class="rounded-circle text-white _btn _btn-primary p-1" style={{fontSize:'14px'}} type="button" onClick={()=> send(element)} > <AddIcon/> </button>
                    </div>
                </div>
            </div>          
            </div>
        </div>
        </div>
        )})
    }
   </>  
  )
}

export default ProductCard