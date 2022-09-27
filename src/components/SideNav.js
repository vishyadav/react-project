import React, { useEffect, useState } from 'react';
import '../styles/SideNav.css';
import Category from './CategoryData';
import SubCategory from './SubCategory';
const SideNav = () => {

    const [Categray, setCategory] = useState([]);

    const getUser = async () => {
        const response = await fetch('https://app.trmartindia.com/api/Category');
        // setUser(await response.json());
        setCategory(await response.json());
    }

    useEffect(() => {
        getUser();
    }, [])


    //  const uniqueNames1 = Array.from(new Set(Category));

    //const uniqueNames = [...new Map(Category.map((Category) => [Category.name, Category])).values()];

    return (
        <>
            <ul id="_categorylist" className="list-unstyled">
                {Categray.map((Categray) => (
                    <li><span>{Categray.Cname}</span>
                        <ul className="list-unstyled text-capitalize">
                            <li><SubCategory name={Categray.SubCategary} /></li>
                        </ul>
                    </li>
                ))}
            </ul>
        </>)
}

export default SideNav