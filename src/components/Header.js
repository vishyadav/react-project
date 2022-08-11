import React from 'react'
import { NavLink } from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import { Link } from '@mui/material';
const Header = () => {
  return (
    <>
        <div className="row p-2 _bg-primary border-bottom fw-bold d-flex justify-content-between">

            <div className='col-md-2 col-5 align-self-center d-flex px-0'>
                <span className='fs-2 align-self-center fw-light pe-3 d-block d-md-none text-white'>☰</span>
                <NavLink to='/Home' className='fs-4 fw-bold text-white'><img src="./images/tr_mart_white.png" className='img-fluid'/></NavLink>
            </div>
            <div className='col-md-2 d-none d-md-block align-self-center'>
                <NavLink className={"d-flex text-white"} to="/Location">
                  <LocationOnIcon className='align-self-center me-3'/> 
                  <label className='align-self-center' style={{cursor:'pointer'}}>Gautam Budh Nagar.. 500004 </label>
                </NavLink>
            </div>
            <div className='col-md-5 d-none d-md-block align-self-center'>
                <input className='_form-control' type="{text}" placeholder="What are you looking for?"/>
            </div>

            <div className='col-2 align-self-center text-end fs-4 fw-bold d-block d-md-none'><NavLink to='/Search' className={"text-decoration-none text-white"}><SearchOutlinedIcon/></NavLink></div>

            <div className='col-md-2 col-1 align-self-center'>
                <NavLink className={"d-flex justify-content-center text-white"} to='/Signin'>
                <PersonOutlineIcon/>
                <span className='d-none d-md-block'>SignIn/Register</span>
                </NavLink>
            </div>
            <div className='col-md-1 col-3 pe-2 text-center text-md-end align-self-center'>
            <NavLink className={"text-white"} to="/Cart">
            <Badge badgeContent={1} overlap="circular"  color='success'>
              <ShoppingCartIcon />
            </Badge>
            &nbsp;&nbsp;
              ₹100
            </NavLink>
            </div>
        </div>
    </>
  )
}

export default Header