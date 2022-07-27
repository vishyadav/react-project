import React from 'react'
const Location = () => {
  return (
    <>
    <div className='container my-5'>
        <div className='row justify-content-center'>
            <div className='col-md-6 rounded shadow bg-white p-3 pt-5 mb-5' style={{minheight: "400px"}}>
                <div className='row'>
                    <div className='col-12 text-center'>
                     <h4 className='text-muted'>Where Should We Deliver Your Order?</h4>
                    </div>

                    <div className='col-12 text-center'>
                        <input className='form-control' placeholder='Enter your city, area Or pincode'/>
                    </div>

                    <div className='col-12 mt-5 text-center'>
                        <img src='./images/city.jpg' className='img-fluid' style={{maxHeight:'200px'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Location