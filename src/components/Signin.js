import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Signin.css'

const Signin = () => {

function textboxvailidate(event){
  let lbl_msg = document.getElementById('lbl_msg');
  if(event.target.value.length == 10){
    console.log(event.target.value);
    lbl_msg.innerHTML = '';
  }else{
    lbl_msg.style.color = 'red';
    lbl_msg.innerHTML = 'Please Enter Valid Mobile Number.';
  }
}

  return (
    <>
  <div className='container-fluid' >
    <div className='row justify-content-center'>
      <div className='col-md-11 col-sm-8 col-lg-8 my-5' id='signinbox'>
      
    <div className='row' >
      <div className='col-md-6' style={{background:'url(./images/login_banner.jpg)',borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      </div>
      <div className='col-md-6 py-5 px-md-5 px-5 justify-content-center'>
        <h4 className='fw-bold'>Sign in</h4>
        <p className='fs-6 fw-light _text-muted'>Sign in to access your Orders, Offers and Wishlist.</p>
        
        
         <div className='my-3 input-icons'>
         <div><small id="lbl_msg"></small></div>
        <span className='icon'>+91</span>
        <input type="{text}" onChange={textboxvailidate}  className='_form-control' placeholder={'Mobile Number'}/>
         </div>
        

        <small className='_text-muted mt-5'>By continuing you are agree to our <a href='#'>Terms</a>, <a href='#'>Refunds</a> and <a href='#'>Privacy Policy</a>.</small>
        <button className='_btn _btn-dark _btn-rounded w-100 my-3'>Continue</button>
      </div>
    </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default Signin