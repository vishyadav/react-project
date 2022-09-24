import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {ButtonGroup} from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { border } from '@mui/system';
import '../styles/Cart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { DLT,REMOVE,ADD } from '../redux/actions/action';
import ProductCard from './ProductCard';

const Cart = () => {
  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const dlt = (id) => {
    dispatch(DLT(id))
  }


  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price
    });
    setPrice(price.toFixed(2));
  };
  

  // const quantity = () => {
  //   let qty = 0;
  //   getdata.map((ele, k) => {
  //     qty = ele.qnty
  //   });
  // };

  
  const send = (e)=>{
    // console.log(e);
   dispatch(ADD(e));
  }

  const _remove = (e)=>{
    // console.log(e);
   dispatch(REMOVE(e));
  }



  useEffect(() => {
    total();
  }, [total])

  return (
    <>
    <div className='container my-5 d-none'>
      <div className='row justify-content-center'>
          <div className='col-md-10 py-5 mb-5'>
              <div className='row'>
                  <div className='col-12 text-center'>
                      <img src='./images/empty-cart.svg'/>
                  </div>
                  <div className='col-12 text-center mt-3'>
                    <h2>There are no items in your cart.</h2>
                    <Button className='btn btn-primary'>Start Shopping Now</Button>
                  </div>
              </div>
          </div>
      </div>
    </div>  

    <div className='container my-3 p-0'>
      <div className='row'>
          <div className='col-md-8'>
            <h4 className='text-muted'>My Cart (0 items)</h4> 
          </div>
          <div className='col-md-4 d-none d-lg-block'>
            <div className='fs-6 fw-light d-flex justify-content-between'>
            <span><ShoppingCartIcon className='_text-primary'/> <small>Your cart</small></span>
            <span><InventoryOutlinedIcon className='_text-light'/> <small>Order Summary</small></span>
            <span><PaymentOutlinedIcon className='_text-light'/> <small>Payment</small></span>
            </div>
          </div>
      </div>

      <div className='row'>
          <div className='col-md-8 mt-3'>
              <div className='_rounded _shadow p-3 bg-white'>

                <div className='d-flex justify-content-between'>
                  <h4>Groceries Basket <small className='_text-muted'>(0 items)</small></h4>
                  <h4>₹{price}</h4>
                </div>

                <div className='d-flex _bg-light-success rounded p-2'>
                  <small className='align-self-center pe-2 _text-success'><LocalOfferOutlinedIcon/></small>
                  <small>
                    Shop groceries worth ₹499 & get free delivery of your orders from TR MART.
                  </small>
                </div>

              <div id='cartitems'>
              {
      getdata.map((element) => {
        return (
        
              <section className='itemlist'>
                <div className='d-flex'>
                  <div className='align-self-center' style={{width:'50px',height:'50px',marginRight:'15px'}}>
                    <img style={{width:'100%',height:'100%'}} src={element.image} />
                  </div>
                  <div className='align-self-center'>
                      <div className='col-12 my-1'><label className='fw-bold'>{element.title}</label></div>
                      <div className='col-12 my-1'><label className='fw-bold pe-2 fs-5'>₹{element.price}</label>
                      <strike className='_text-muted pe-2'>₹253.00</strike>
                      <span className='_text-success fw-light'>You Save ₹65.00</span>
                      </div>
                      <div className='col-12 my-1'><small>Sold By <NavLink className="text-decoration-none" to='/'>TR Mart</NavLink></small></div>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                <div class="input-group" style={{width:'150px'}}>
                      <div class="input-group-prepend">
                      <button class="rounded-circle text-white _btn _btn-primary p-1" style={{fontSize:'14px'}} onClick={()=>_remove(element)} type="button" > <RemoveIcon/> </button>
                      </div>
                      <input type="text" class="text-center fs-5 p-0 fw-normal bg-transparent border-0 form-control" value={element.qnty} />
                      <div class="input-group-prepend">
                      <button class="rounded-circle text-white _btn _btn-primary p-1" style={{fontSize:'14px'}} type="button" onClick={()=>send(element)} > <AddIcon/> </button>
                      </div>
                      <div class="input-group-prepend">
                      &nbsp;<button class="rounded-circle text-white _btn _btn-primary p-1" style={{fontSize:'14px'}} type="button" onClick={()=>dlt(element.id)} > <DeleteOutlineIcon/> </button>
                      </div>
                </div>
                </div>
              </section>
              
              )})}
              </div>
              </div>
          </div>

          <div className='col-md-4 mt-3' id="totalcart">
            <section className='_rounded _shadow p-3 bg-white'>
              <label className='fs-4 fw-bold'>Payment Details</label>
              <div className='d-flex justify-content-between py-2'>
                <span className='_text-muted'>MRP Total</span>
                <span>Rs {price}</span>
              </div>
              <div className='d-flex justify-content-between py-2 border-top border-bottom'>
                <span className='_text-muted'>Product Discount</span>
                <span>- Rs 0.00</span>
              </div>
              <div className='d-flex justify-content-between mt-2'>
                <span>Total Amount</span>
                <span>Rs {price}</span>
              </div>
              <div className='d-flex text-end mt-2'>
                <div className='col-12 _text-success'><small>You Save Rs 0.00</small></div>
              </div>
            </section>
            <section className='d-flex justify-content-end my-3'>
            <button className='_btn _btn-primary _btn-rounded w-100 px-5 text-white fw-bold'><span>Place Order</span><span>₹{price}</span></button>
            </section>
          </div>
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'><h4>Similar Products You May Like</h4></div>
        <ProductCard/>
      </div>
    </div>
    </>
  )
}


export default Cart