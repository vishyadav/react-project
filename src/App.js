import React,{useState} from 'react'
import { Routes ,Route, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import './App.css';
import Home from './components/Home';
import Signin from './components/Signin'
import Register from './components/Register'
import Location from './components/Location'
import Cart from './components/Cart';
import Card from './components/Card';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/Category';
import Account from './components/Account';
import SideMenu from './components/Drawer';
import Gmap from './components/Gmap';

import AdminIndex from './Admin/AdminIndex';
import Sidebar from './Admin/Sidebar';
import Dashboard from './Admin/Dashboard';
import Products from './components/Products';



// import { useSelector, useDispatch } from "react-redux";
const App = () => {
  
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');  
  };

  const [Cat,setUser]=useState("hello");
  
  return (
    <div className='container-fluid'>  
    <Header/>     
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/home' element={<Home/>} />
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/location' element={<Location/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Card' element={<Card/>}/>
      <Route path='/ProductDetail' element={<ProductDetail/>}/>
      <Route path='/Products' element={<Products title={Cat}/>}/>
      <Route path='/Category' element={<Category/>}/>
      <Route path='/Account' element={<Account/>}/>
      <Route path='/SideMenu' element={<SideMenu/>}/>
      <Route path='/Gmap' element={<Gmap/>}/>
   
      <Route path='/AdminIndex' element={<AdminIndex/>}/>
      <Route path='/Sidebar' element={<Sidebar/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App