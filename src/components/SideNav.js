import React from 'react';
import '../styles/SideNav.css';
import Category from './CategoryData';
import SubCategory from './SubCategory';
const SideNav = () => {

  const uniqueNames1 = Array.from(new Set(Category));

  const uniqueNames = [...new Map(Category.map((Category) => [Category.name, Category])).values()];

  return (
   <>
    <ul id="_categorylist"  className="list-unstyled">
    {uniqueNames.map((uniqueNames)=>(
        <li><span>{uniqueNames.name}</span>
        <ul className="list-unstyled text-capitalize">
        <SubCategory name={uniqueNames.name} />         
        </ul>
        </li>
    ))}
    </ul>
    </>  )
}

export default SideNav