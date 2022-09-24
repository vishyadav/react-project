import React from 'react'
import '../App.css'
import '../styles/Location.css'
import SearchIcon from '@mui/icons-material/Search';
const Location = () => {

    function checklocation(event){
         const cityname = "Noida";
         let lblmsg = document.getElementById('lblmsg');

        if(event.target.value === cityname){
            Response.redirect('/Home');
            lblmsg.innerHTML = 'Hoorey! You will get the service at your location.';
            lblmsg.style.color = 'green';
            console.log(event.target.value);
        }
        else{
            lblmsg.innerHTML = 'Sorry, We currently do not serve at this location. Our services are available in Delhi and Noida at specific Postal Area.';
            lblmsg.style.color =  'red';
        }
    }
  return (
    <>
    <div className='container my-5'>
        <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-8 col-sm-11 col-12 _rounded _shadow bg-white p-3 pt-5 mb-5' style={{minheight: "400px"}}>
                <div className='row'>
                    <div className='col-12 text-center'>
                     <h4 className='_text-muted'>Where Should We Deliver Your Order?</h4>
                    </div>

                    <div className='col-12 text-center mt-3 input-icons'>
                        <span className='icon'><SearchIcon /></span>
                        <input className='_form-control' onChange={checklocation} style={{width:'calc(100% - 1rem)'}} placeholder='Enter your city, area Or pincode'/>
                        <div><small id='lblmsg'></small></div>
                    </div>
                    <div className='d-flex justify-content-center mt-5 d-none'>
                        <div className='locwrapper'>
                            <button className='_btn _btn-light rounded-circle locbox'>Noida</button>
                        </div>
                        <div className='locwrapper'>
                            <button className='_btn _btn-light rounded-circle locbox'>Gaziabad</button>
                        </div>
                        <div className='locwrapper'>
                            <button className='_btn _btn-light rounded-circle locbox'>Gurugram</button>
                        </div>
                    </div>
                    <div className='col-12 mt-5 text-center'>
                        <img src='./images/city.jpg' className='img-fluid' alt="" style={{maxHeight:'200px'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Location