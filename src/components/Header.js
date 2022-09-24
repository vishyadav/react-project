import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import { Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import '../styles/Header.css';
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const [price,setPrice] = useState(0);



  const [TxtSearch,setSearch] = useState("");

  // console.log(price);


  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);


  const searchData=(txt)=>{
    setSearch(txt);
    alert(txt);
  }

  return (
    <React.Fragment>
      
        <div className="row headernav border-bottom fw-bold d-flex justify-content-between py-0">

            <div className='col-md-2 col-lg-2 col-6 align-self-center d-flex'>
                <NavLink to='/Home' style={{height:'60px'}}><img src="./images/logo.png" className='align-self-center'/></NavLink>
            </div>

            <div className='col-md-2 col-lg-2 col-12 align-self-center'>
                <NavLink className={"d-flex text-white"} to="/Location">
                  <LocationOnIcon className='align-self-center me-0'/> 
                  <label className='align-self-center' style={{cursor:'pointer'}}>Gautam Budh Naga.. 505</label>
                </NavLink>
            </div>

            <div className='col-md-4 col-lg-4 col-12 align-self-center px-md-2 pb-1 py-md-0'>
                <input className='_form-control' type="{text}"  onChange={e => searchData(e.target.value)} placeholder="What are you looking for?"/>
          
            </div>

            <div className='col-md-2 col-lg-2 col-3 d-flex align-self-center justify-content-end'>
                <NavLink className={"d-flex justify-content-center text-white"} to='/Signin'>
                <PersonOutlineIcon/>
                <span className='d-none d-md-block'>SignIn/Register</span>
                </NavLink>
            </div>

            <div className='col-md-2 col-lg-2 col-3 text-center text-md-end align-self-center'>
              <NavLink className={"text-white"} to="/Cart">
              <Badge badgeContent={ getdata.length} overlap="circular" color='success'>
                <ShoppingCartIcon />
              </Badge>
              &nbsp;&nbsp;
                ₹100
              </NavLink>
            </div>

        </div>
        <section>
          <div class="row" id='featured_categorylist'>
            <div className='col-md-2 col-2 border-md-end d-flex'>
            <span className='align-self-center fw-light d-block d-md-none'>
              <IconButton size="large" edge="start" color="inherit" aria-label="open sidemenu">
                <MenuIcon />
              </IconButton>
            </span>
            <div className='d-none d-md-block align-self-center fw-light'>
              <a href="/Category" class='text-decoration-none text-dark'>
                <span className='fw-light'><MenuIcon /></span>
                <span className='align-self-center'> All Categories</span>
              </a>
            </div>
          </div>

            <div className='col-10 col-md-10'>
              <ul>
              <li>Household & Kitchen</li>
              <li>Beauty & Jwellery</li>
              <li>Health & Wellness</li>
              <li>Fashion</li>
              <li>Electronics</li>
              </ul>
            </div>
          </div>
        </section>
    </React.Fragment>
  )
}

export default Header