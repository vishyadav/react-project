import React from 'react'
import { Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import {ButtonGroup} from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { border } from '@mui/system';
import IncrementDecrement from './IncrementDecrement';
const Cart = () => {
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
                     <h4 className='text-muted'>My Cart (3 items)</h4> 
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
                        <section className='rounded p-3 bg-white'>

                          <div className='d-flex justify-content-between'>
                            <h4>Groceries Basket <small className='_text-muted'>(2 items)</small></h4>
                            <h4>₹333.00</h4>
                          </div>

                          <div className='d-flex _bg-light-success rounded p-2'>
                            <small className='align-self-center pe-2 _text-success'><LocalOfferOutlinedIcon/></small>
                            <small>
                             Shop groceries worth ₹499 & get free delivery of your orders from TR MART.
                            </small>
                          </div>

{/* cart item  */}
                        <section style={itemlist}>
                          <div className='d-flex'>
                            <div className='align-self-center'>
                              <img src='https://cdn.dmart.in/images/rwd/misc/NoImage_P.jpg' />
                            </div>
                            <div className='align-self-center'>
                                <div className='col-12 my-1'><label className='fw-bold'>Colgate Strong Teeth Dental Cream Toothpaste 500 g Saver Pack</label></div>
                                <div className='col-12 my-1'><label className='fw-bold pe-2 fs-5'>₹188.00</label>
                                <strike className='_text-muted pe-2'>₹253.00</strike>
                                <span className='_text-success fw-light'>You Save ₹65.00</span>
                                </div>
                                <div className='col-12 my-1'><small>Sold By <NavLink className="text-decoration-none" to='/'>TR Mart</NavLink></small></div>
                            </div>
                          </div>

                          <div className='d-flex justify-content-end'>
                          <IncrementDecrement/>
                          </div>
                        </section>
{/* cart item  */}

{/* cart item  */}
                        <section style={itemlist}>
                          <div className='d-flex'>
                            <div className='align-self-center'>
                              <img src='https://cdn.dmart.in/images/rwd/misc/NoImage_P.jpg' />
                            </div>
                            <div className='align-self-center'>
                                <div className='col-12 my-1'><label className='fw-bold'>Colgate Strong Teeth Dental Cream Toothpaste 500 g Saver Pack</label></div>
                                <div className='col-12 my-1'><label className='fw-bold pe-2 fs-5'>₹188.00</label>
                                <strike className='_text-muted pe-2'>₹253.00</strike>
                                <span className='_text-success fw-light'>You Save ₹65.00</span>
                                </div>
                                <div className='col-12 my-1'><small>Sold By <NavLink className="text-decoration-none" to='/'>TR Mart</NavLink></small></div>
                            </div>
                          </div>

                          <div className='d-flex justify-content-end'>
                          <IncrementDecrement/>
                          </div>
                        </section>
{/* cart item  */}

                        </section>
                    </div>

                    <div className='col-md-4 mt-3'>
                      <section className='rounded p-3 bg-white'>
                        <label className='fs-4 fw-bold'>Payment Details</label>
                        <div className='d-flex justify-content-between py-2'>
                          <span className='_text-muted'>MRP Total</span>
                          <span>Rs 543.00</span>
                        </div>
                        <div className='d-flex justify-content-between py-2 border-top border-bottom'>
                          <span className='_text-muted'>Product Discount</span>
                          <span>- Rs 210.00</span>
                        </div>
                        <div className='d-flex justify-content-between mt-2'>
                          <span>Total Amount</span>
                          <span>Rs 333.00</span>
                        </div>
                        <div className='d-flex text-end mt-2'>
                          <div className='col-12 _text-success'><small>You Save Rs 210.00</small></div>
                        </div>
                      </section>

                      <section className='d-flex justify-content-end my-3'>
                      <button className='_btn _btn-info _btn-rounded w-100 px-5 text-white fw-bold'>Place Order</button>
                      </section>
                      
                    </div>
                </div>
    </div>
    </>
  )
}

const itemlist = {
  paddingBottom:'10px',
  borderBottom:'1px solid #f0f0f0',
 }


export default Cart