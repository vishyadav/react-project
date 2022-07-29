import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-md-8 p-3'>
      
    <div className='row rounded shadow'>
      <div className='col-lg-6 bg-white' style={{background:'url(./images/cartimg.jpg)',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
      </div>
      <div className='col-lg-6 py-5 px-5 justify-content-center bg-light'>
        <h5 className='mb-5'>Let's Get you Logged In!</h5>
        
        <small className='text-muted'>Enter Your 10 digit mobile number.</small><br/>
        <input type="{text}"  className='form-control' placeholder={'Mobile Number'}/>

        <label className='text-muted my-3'>By continuing you are agree to our <a href='#'>Terms</a>, <a href='#'>Refunds</a> and <a href='#'>Privacy Policy</a>.</label>
        <button className='btn btn-dark w-100 my-5'>Continue</button>
      </div>
    </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default Login