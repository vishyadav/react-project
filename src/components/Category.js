import React from 'react'
import ProductCard from './ProductCard'
import '../App.css';
import '../styles/Category.css';
import SideNav from '../components/SideNav';
const Category = (props) => {

const active = () =>{
  let activetag = document.getElementsByTagName('a')
  if(activetag.className == 'active'){
  console.log("hide active")
  }
}





  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-2 100vh p-0'>
          <SideNav/>
        </div>

        <div className='col-10'>
            <div className='my-3'>
              <small className='_text-muted'>Home / Grocery / Personal Care</small>
              <h4 className='fw-bold'>Personal Care</h4>
              {props.title}
              </div>
            
            <div className='row' id='product_list'>
            <ProductCard/>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Category