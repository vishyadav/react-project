import React from 'react'

const search = () => {
  return (
    <>
    <div className='container my-5'>
        <div className='row justify-content-center'>
            <div className='col-md-6 rounded shadow bg-white p-3 py-5 mb-5'>
                <div className='row'>
                    
                    <div className='col-12 text-center'>
                        <input className='form-control' placeholder='What are you looking for?'/>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default search