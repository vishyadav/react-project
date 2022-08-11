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
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
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
          <Route path='/search' element={<Search/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/ProductDetail' element={<ProductDetail/>}/>
        </Routes>
   <Footer/>
    </div>
  )
}

export default App