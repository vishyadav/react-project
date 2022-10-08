import React from 'react'
import { Button } from 'react-bootstrap'
import '../styles/Account.css'
import EditIcon from '@mui/icons-material/Edit';
import SideNav from './SideNav';
import AddIcon from '@mui/icons-material/Add';

import Profile from './Profile';
import Address from './Address';
import Order from './Order';

const Account = () => {
  return (
    <React.Fragment>        
    <div className='row bg-white'>
        <div id="profile_section" className='col-md-2 col-2 border-end vh-100'>
            <ul>
                <li>Account Details</li>
                <ul>
                <li><a href="javascript:void(0)">Profile</a></li>
                <li><a href="javascript:void(0)">My Address</a></li>
                <li><a href="javascript:void(0)">My Orders</a></li>
                <li><a href="javascript:void(0)">Logout</a></li>
                </ul>
            </ul>
            {/* <SideNav/> */}
        </div>


      <div className='col-md-6 col-10 ps-md-5 bg-white'>
          <Profile/>
          <Address/>
          <Order/>
      </div>

    </div> 
</React.Fragment>
  )
}

export default Account