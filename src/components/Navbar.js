import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
<div className="row bg-light border-bottom p-2">

    <div className='col-md-2 col-7 align-self-center d-flex'>
        <span className='fs-4 fw-light pe-3 d-block d-md-none'>☰</span>
        <label className='fs-4 fw-bold'>TR MART</label>
    </div>
    <div className='col-md-2 d-none d-md-block align-self-center'>
        <span>🚏 Gautam Budh Nagar.. 500004 ❯</span>
    </div>
    <div className='col-md-4 align-self-center d-none d-md-block'>
        <div className='input-group'>
        <input className='form-control' type="{text}" placeholder="What are you looking for?"/>
        <a href='#' className='btn btn-primary'>SEARCH</a>
        </div>
    </div>

    <div className='col-1 align-self-center fs-4 fw-bold d-block d-md-none'><span>⌕</span></div>

    <div className='col-md-3 col-1 justify-content-center d-flex align-self-center'>
        <span>👤</span>
        <span className='d-none d-md-block'>SignIn/Register ❯</span>
    </div>
    <div className='col-md-1 col-3 align-self-center'>
        <span><i className=''></i>Cart ₹0</span>
    </div>
    </div>

    </>
  )
}

export default Navbar