import React from 'react'
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Order = () => {
  return (
    <React.Fragment>
      <div className='my-5'><h4 className='fw-bold'>Order</h4></div>

      <div className='d-flex justify-content-between border-bottom py-2'>
        <div className='d-flex'>
          <section className='pe-3 align-self-center'>
            <CheckCircleIcon/>
          </section>
          <section className='align-self-center'>
            <div className="d-flex fw-bold"><label>ORD343814316</label>&nbsp; &nbsp;<label>₹442</label></div>
            <div className='d-flex text-secondary'><small>Placed on thu, 23 June 2022, 2:58 pm</small> 
            <label className="ms-1 ms-md-5" style={{background:"rgb(153 153 153)",fontSize:"10px",marginTop:"4px",fontWeight:"700",wordSpacing:"2px",letterSpacing:"0.5px",color:"rgb(255 255 255)",padding:'2px 8px',borderRadius:'44px'}}>delivered</label>
            </div>
          </section>
        </div>

        <div className='d-flex justify-content-end align-self-center'>
        <Button variant="outlined"><small>View Details</small></Button>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Order