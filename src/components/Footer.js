import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className="row pt-5 border-top bg-white"> 
          <div className='col-md-3 col-6'>
          <ul className='list-unstyled'>
            <li><NavLink to='/' className="text-dark">FAQs</NavLink></li>
            <li><NavLink to='/' className="text-dark">Privacy Policy</NavLink></li>
            <li><NavLink to='/' className="text-dark">Pricing, Delivery, Return and Refund Policy</NavLink></li>
            <li><NavLink to='/' className="text-dark">Terms and Conditions</NavLink></li>
          </ul>
          </div>
          <div className='col-md-3 col-6'>
          <ul className='list-unstyled'>
            <li><NavLink to='/' className="text-dark">Contact Us</NavLink></li>
            <li><NavLink to='/' className="text-dark">About Us</NavLink></li>
            <li><NavLink to='/' className="text-dark">Pickup Points</NavLink></li>
          </ul>
          </div>
          <div className='col-md-6 align-self-center text-center text-md-start order-md-first'>
          <span>Download TR Mart Mobile App Now!!</span>
          <section className='mt-md-5 mt-3'>
            <img src='./images/google-play.svg' style={{height:'40px',width:'150px',border:'none'}} alt=''/>
            <img src='./images/app-store.svg' style={{height:'40px',width:'150px',border:'none'}} alt=''/>
          </section>
          <section className='mt-2 mb-5'>
            <img src='./images/visa.svg' style={{height:'20px',width:'39px',marginRight:'4px'}} alt=''/>
            <img src='./images/mastercard.svg' style={{height:'20px',width:'39px',marginRight:'4px'}} alt=''/>
            <img src='./images/american.svg' style={{height:'20px',width:'39px',marginRight:'4px'}} alt=''/>
            <img src='./images/rupay.svg' style={{height:'20px',width:'39px',marginRight:'4px'}} alt=''/>
            <img src='./images/cash_outlined.svg' style={{height:'20px',width:'39px',marginRight:'4px'}} alt=''/>
          </section>
          </div>
      </div>
      <div className='row bg-white'>
        <div className='col-12 text-center border-top py-3'><label>Copyright &copy; 2022 TR Technologies.com. All Rights Reserved.</label></div>
      </div>
    </>
  )
}

export default Footer