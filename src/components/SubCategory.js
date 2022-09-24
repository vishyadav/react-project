import React from 'react'
import Category from './CategoryData';

const SubCategory = (props) => {
  return (
    <React.Fragment>
    {Category.map((Category)=>(
    <li className={Category.name!=props.name?'d-none':''}><a href='javascript:void(0)' onClick={()=>{alert(Category.SubCat)}}>{Category.name==props.name?Category.SubCat:''}</a></li>
    ))}
    </React.Fragment>
  )

}

export default SubCategory