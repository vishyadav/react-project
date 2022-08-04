import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import './App.css';
import Home from './components/Home';
import Signin from './components/Signin'
import Register from './components/Register'
import Location from './components/Location'
import Cart from './components/Cart';
import Search from './components/Search';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import { Link } from '@mui/material';

const App = () => {
  return (
    <div className='container-fluid'>
        <div className="row p-2 border-bottom bg-info fw-bold d-flex justify-content-between">

            <div className='col-md-2 col-5 align-self-center d-flex px-0'>
                <span className='fs-4 fw-light pe-3 d-block d-md-none'>☰</span>
                <NavLink to='/Home' className='fs-4 fw-bold text-white'>TR MART</NavLink>
            </div>
            <div className='col-md-2 d-none d-md-block align-self-center'>
                <NavLink className={"d-flex text-white"} to="/Location">
                  <LocationOnIcon className='align-self-center me-3'/> 
                  <label className='align-self-center' style={{cursor:'pointer'}}>Gautam Budh Nagar.. 500004 </label>
                </NavLink>
            </div>
            <div className='col-md-4 d-none d-md-block align-self-center'>
                <input className='_form-control' type="{text}" placeholder="What are you looking for?"/>
            </div>

            <div className='col-2 align-self-center fs-4 fw-bold d-block d-md-none'><NavLink to='/Search' className={"text-decoration-none text-muted"}><SearchOutlinedIcon/></NavLink></div>

            <div className='col-md-3 col-1 align-self-center'>
                <NavLink className={"d-flex justify-content-center text-white"} to='/Signin'>
                <PersonOutlineIcon/>
                <span className='d-none d-md-block'>SignIn/Register</span>
                </NavLink>
            </div>
            <div className='col-md-1 col-3 px-0 align-self-center'>
            <NavLink className={"text-white"} to="/Cart">
            <Badge badgeContent={1} overlap="circular"  color='success'>
              <ShoppingCartIcon />
            </Badge>
            &nbsp;&nbsp;
              ₹100
            </NavLink>
            </div>
        </div>

        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/home' element={<Home/>} />
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/ProductDetail' element={<ProductDetail/>}/>
        </Routes>
        
    <div className="row pt-5 border-top bg-white"> 
        <div className='col-md-3 col-6'>
        <ul className='list-unstyled'>
          <li><NavLink to='' className="text-dark">FAQs</NavLink></li>
          <li><NavLink to='' className="text-dark">Privacy Policy</NavLink></li>
          <li><NavLink to='' className="text-dark">Pricing, Delivery, Return and Refund Policy</NavLink></li>
          <li><NavLink to='' className="text-dark">Terms and Conditions</NavLink></li>
        </ul>
        </div>
        <div className='col-md-3 col-6'>
        <ul className='list-unstyled'>
          <li><NavLink to='' className="text-dark">Contact Us</NavLink></li>
          <li><NavLink to='' className="text-dark">About Us</NavLink></li>
          <li><NavLink to='' className="text-dark">Pickup Points</NavLink></li>
        </ul>
        </div>
        <div className='col-md-6 align-self-center text-center text-md-start order-md-first'>
        <span>Download DMart Ready Mobile App Now!!</span>
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
       <div className='col-12 text-center border-top py-3'><label>Copyright © 2022 TR Technologies.com. All Rights Reserved.</label></div>
    </div>

    </div>
  )
}

export default App