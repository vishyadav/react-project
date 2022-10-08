import React from 'react'
import Category from './CategoryData';

const SubCategory = (props) => {
  return (
    <React.Fragment>
   
    <li className={props.name}>{props.name}</li>
    
    </React.Fragment>
  )

}

export default SubCategory