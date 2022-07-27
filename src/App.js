import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
import Location from './components/Location'
import Cart from './components/Cart';
import Search from './components/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Badge from '@mui/material/Badge';

const App = () => {
  return (
    <div className='container-fluid'>
        <div className="row bg-light border-bottom p-2">

            <div className='col-md-2 col-6 align-self-center d-flex'>
                <span className='fs-4 fw-light pe-3 d-block d-md-none'>☰</span>
                
                <NavLink to='/Home' className='fs-4 fw-bold text-decoration-none text-dark'>TR MART</NavLink>
            </div>
            <div className='col-md-2 d-none d-md-block align-self-center'>
                <NavLink className={"text-decoration-none d-flex text-muted"} to="/Location">
                  <LocationOnIcon className='align-self-center me-3'/> 
                  <label className='align-self-center'>Gautam Budh Nagar.. 500004 </label>
                </NavLink>
            </div>
            <div className='col-md-4 align-self-center d-none d-md-block'>
                <div className='input-group'>
                <input className='form-control' type="{text}" placeholder="What are you looking for?"/>
                <Button className='btn btn-primary'>SEARCH</Button>
                </div>
            </div>

            <div className='col-1 align-self-center fs-4 fw-bold d-block d-md-none'><NavLink to='/Search' className={"text-decoration-none text-muted"}>⌕</NavLink></div>

            <div className='col-md-3 col-1 align-self-center '>
                <NavLink className={"d-flex justify-content-center text-decoration-none text-muted"} to='/Login'>
                <PersonOutlineIcon/>
                <span className='d-none d-md-block'>SignIn/Register</span>
                </NavLink>
            </div>
            <div className='col-md-1 col-4 align-self-center text-end'>
            <NavLink className={"text-decoration-none text-muted"} to="/Cart">
            <Badge badgeContent={1} overlap="circular" color="success">
              <ShoppingCartIcon />
            </Badge>
            &nbsp;&nbsp;
              ₹100</NavLink>
            </div>
        </div>

        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>

    </div>
  )
}

export default App