import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import '../styles/Account.css'
import EditIcon from '@mui/icons-material/Edit';
import SideNav from './SideNav';
import AddIcon from '@mui/icons-material/Add';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const Address = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mystyle = {
    padding: "0 14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    height: "45px",
    width: "100%"
  };


  const halfwidth = {
    width: "100px",
    padding: "0 14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    height: "45px",
  }

  return (
    <React.Fragment>
        {/* Address section */}
        <section>
            <div className='my-5'><h4 className='fw-bold'>Address</h4></div>

{/* add new address */}
            <a href="javascript:void(0)" variant="primary" onClick={handleShow}>
            <div className='border p-3 rounded bg-light d-flex'>
            <span className='text-primary'><AddIcon/></span>&nbsp; Add New Address
            </div>
            </a>
        
{/* address list */}
            <div className='border p-3 my-2 rounded bg-light d-flex'>

                <span className='p-3'><FmdGoodIcon/></span>
                <section>
                   <h6>Office</h6>
                   <p>Vishal - Div International Technology & Services Opposite to Mamta mesh , besides sai kiran hospital, P & T Officers Colony, Khairtabad, Hyderabad,</p>
                </section>
                <section className='text-end d-flex justify-content-between align-self-center ps-3 ps-md-3'>
                    <a href="#">Edit</a>&nbsp; &nbsp; <a href="#">Delete</a>
                </section>
            </div>

        </section>


        {/* add new address modal */}
      

        <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        size="lg"
        centered ="boolean"
      >
        
        <Modal.Body>
            <div className="row">
                <div className='col-6 bg-light align-self-center'>
                    Integrate maps API Pickup Location
                </div>
                <div className='col-6 py-3'>
                    <a href="javascript:void(0)" onClick={handleClose} style={{position:"absolute",right:"0",top:"0"}}>
                    <HighlightOffIcon className='fs-1 text-dark'/>
                    </a>
    
                <h5 className='fw-bold'>Enter Complete Address</h5>
                <span style={{lineHeight:"18px",fontSize: "14px",color: "rgb(130, 130, 130)",fontWeight: 400,margin:"10px 0"}}>This allow us to find you easily and give you timely delivery experience</span>
                <section className='d-flex my-2'>
                    <select style={halfwidth} className="me-2">
                        <option>TItle</option>
                        <option>Miss</option>
                        <option>Mrs</option>
                        <option>Mr</option>
                    </select>
                    <input type="text" placeholder="Receiver's Name" style={mystyle}/>
                </section>
                <section className='my-2'>
                    <input type="text" placeholder="House No. / Flat / Office No." style={mystyle}/>
                </section>
                <section className='my-2'>
                    <input type="text" placeholder="Street / Society / Office Name" style={mystyle}/>
                </section>
                <section className='d-flex'>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Save address as</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group">
                        <FormControlLabel value="Home" control={<Radio />} label="Home" />
                        <FormControlLabel value="Work" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FormControl>
                </section>
                <section className='my-2'>
                <Button variant="contained" className='w-100'>Save Address</Button>
                </section>
                </div>
            </div>
         
        </Modal.Body>
        
      </Modal>
    </React.Fragment>
  )
}




export default Address