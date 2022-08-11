import React from 'react'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
const Location = () => {

    function checklocation(event){
         let cityname = 'Noida';
         let lblmsg = document.getElementById('lblmsg');

        if(event.target.value === cityname){
            Response.redirect('/Home');
            lblmsg.innerHTML = '';
            console.log(event.target.value);
        }
        else{
            lblmsg.innerHTML = 'Sorry, We currently do not serve at this location. Our services are available in Delhi, Noida, Gaziabad and Gurugram';
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
                        <input className='_form-control' onChange={checklocation} style={{width:'calc(100% - 7rem)'}} placeholder='Enter your city, area Or pincode'/>
                        <div><small id='lblmsg' className='text-danger'></small></div>
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