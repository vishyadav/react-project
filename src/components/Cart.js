import React from 'react'
import { Button } from 'react-bootstrap'

const Cart = () => {
  return (
    <>
      <div className='container my-5'>
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

                <div className='row'>
                    <div className='col-12 mt-3'>
                     <h4 className='text-muted'>My Cart (3 items)</h4> 
                    </div>
                    <div className='col-12 mt-3 border rounded d-flex'>
                      <section className='align-self-center'>
                        <img src='https://cdn.dmart.in/images/rwd/misc/NoImage_P.jpg' />
                      </section>
                     <section className='align-self-center'>
                        <div className='col-12'><label>Beezy Stainless Steel Push Chopper : 1 Unit</label></div>
                        <div className='col-12'><label>You Pay ₹ 597</label></div>
                        <div className='col-12'><label>Variant: 1U</label></div>
                     </section>
                    </div>
                </div>

            </div>
        </div>
    </div>  
    </>
  )
}

export default Cart