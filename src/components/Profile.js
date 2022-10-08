import React from 'react'
import { Button } from 'react-bootstrap'
import '../styles/Account.css'
import EditIcon from '@mui/icons-material/Edit';
import SideNav from './SideNav';
import AddIcon from '@mui/icons-material/Add';

const Profile = () => {
  return (
    <React.Fragment>        
        {/* profile section */}
        <section>
        <div><h4 className='fw-bold'>Profile</h4></div>
        <small className='_text-muted'>Mobile Number</small>
        <section className='d-flex justify-content-between my-2'>
            <label>+91 | 9506280968</label>
            <a href="#" className='_text-success'><small><EditIcon className='fs-6'/>Change Mobile Number</small></a>
        </section>
        <section className='d-flex row justify-content-between'>
        <span className='col-md-6 pe-3 my-2'>
            <label className='_text-muted'>First Name*</label>
            <input className='_form-control' placeholder='Enter First Name'/>
        </span>
        <span className='col-md-6 my-2'>
            <label className='_text-muted'>Last Name*</label>
            <input className='_form-control' placeholder='Enter Last Name'/>
        </span>
        </section>
        <section className='row my-2'>
        <span>
            <label className='_text-muted'>Email (Optional)</label>
            <input className='_form-control w-100' placeholder='Enter Email Address'/>
        </span>
        </section>
        <div className='mt-3'><Button className="_btn _btn-primary _btn-rounded w-100 my-3 fw-bold">Save Changes</Button></div>
        <div className='text-center'><a href='javascript:void(0)' className='_text-danger'><h5>DELETE MY ACCOUNT</h5></a></div>
        </section>
    </React.Fragment>
  )
}

export default Profile