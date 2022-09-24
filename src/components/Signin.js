import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../styles/Signin.css'
import { $CombinedState } from 'redux';
import {useNavigate } from 'react-router-dom';

const Signin = () => {

  const navigate = useNavigate();

// verify mobile number digits
function textboxvalidate(event){
  lbl_msg = document.getElementById('lbl_msg');
  if(event.target.value.length === 10){
    // console.log(event.target.value);
    lbl_msg.innerHTML = '';

  }else{
    lbl_msg.style.color = 'red';
    lbl_msg.innerHTML = 'Please enter 10 digit mobile number';
  }
}

// validate signin/register
let mobile_number = '';
let txtmobile = "";
let txt_firstname = '';
let txt_lastname = '';
let continuebtn = '';
let mobilesection = '';
let mobilebtn = '';
let namesection = '';
let otpsection = '';
let otp_number = '';
let txt_otp = '';
let lbl_otpmsg = '';
let lbl_msg = '';


function btn_continue(){
  mobile_number = '9506280968';
  txtmobile = document.getElementById("txt_mobile").value;
  let mobilebox = document.getElementById('mobilebox');
  namesection = document.getElementById('namefield');
  continuebtn = document.getElementById('btn_continue');
  mobilesection = document.getElementById('mobilebox');
  mobilebtn = document.getElementById('mobilebtn');
  otpsection = document.getElementById('otpbox');
  lbl_msg = document.getElementById('lbl_msg');
 
  // condition 1
  if(txtmobile === '' || txtmobile.length !== 10){
    lbl_msg.innerHTML = 'Please enter 10 digit mobile number';
    lbl_msg.style.color = 'red';
  }
  // condition 2
  else if(txtmobile !== mobile_number){
    // console.log(txtmobile + " " + mobile_number,'not matched');
    mobilebox.style.display="none";
    namesection.style.display = "block";
  }
// condition 3
  else{
    lbl_msg.innerHTML = '';
    let mobileno_id = document.getElementById("txt_mobile")
    // console.log(txtmobile + " " + mobile_number,'matched');
    namesection.style.display = "none";
    otpsection.style.display = 'block';
    mobilebtn.style.display="none";
    sendOTP();
    countdown();
    mobileno_id.classList.add('disable_inputfield');
    document.getElementById('changebtn').style.display = 'block';
  }
}

function save_namefield(){
  txt_firstname = document.getElementById('txt_firstname').value;
  txt_lastname = document.getElementById('txt_lastname').value;
  let firstname = document.querySelector('#txt_firstname');
  let lastname = document.querySelector('#txt_lastname');
  // let prevSiblings_first_txt = firstname.previousElementSibling;
  // let prevSiblings_last_txt = lastname.previousElementSibling;
  let btn_savecontinue = document.getElementById('btn_savecontinue');
  namesection = document.getElementById('namefield');
  otpsection = document.getElementById('otpbox');
  let lbl_namemsg = document.getElementById('lbl_namemsg');

  if(txt_firstname === '' || txt_lastname === ''){
    lbl_namemsg.innerHTML = 'Mandatory fields';
    lbl_namemsg.style.color = 'red';
  }
  else{
    console.log(txt_firstname + " " + txt_lastname);
    lbl_namemsg.innerHTML = '';
    namesection.style.display = 'none';
    otpsection.style.display = 'block';
    otp_number =  String(Math.floor(100000 + Math.random() * 900000));
    alert(otp_number);
  }
}


function btn_verify_continue(){
   txt_otp = document.getElementById('txt_otp').value;
   lbl_otpmsg = document.getElementById('lbl_otpmsg');
  if(txt_otp === otp_number){
    lbl_otpmsg.innerHTML = '(OTP Verified)';
    lbl_otpmsg.style.color = '#00a100';
    alert(txtmobile +" "+txt_firstname+' '+txt_lastname+' '+ 'Your account created successfully.')
    navigate('/');
  }
  else{
    lbl_otpmsg.innerHTML='(Wrong OTP entered.)';
    lbl_otpmsg.style.color = 'red';
  }
}

// changemobnumber
function changemobnumber(){
  otpsection = document.getElementById('otpbox');
  mobilebtn = document.getElementById('mobilebtn');
  txtmobile.classList.remove('disable_inputfield');
  otpsection.style.display = 'none';
  mobilebtn.style.display = 'block';
  document.getElementById('changebtn').style.display = 'none';
  
}

// send otp
function sendOTP(){
  otp_number =  String(Math.floor(100000 + Math.random() * 900000));
  // send otp via sms
  alert(otp_number);
  return otp_number;
}
// otp timer for resend button enable after 59 sec
function countdown() {
  var seconds = 59;
  function tick() {
    var counter = document.getElementById("counter");
    seconds--;
    counter.innerHTML = 'Waiting for OTP...'+ " " + "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      document.getElementById("resendotpbtn").style.display = 'block';
      document.getElementById("counter").innerHTML = "";
    }
  }

  tick();
}



function resendotp(){
  let resendotp = document.getElementById('resendotpbtn');
  resendotp.style.display = 'none';
  btn_continue();

}




  return (
    <>
      <div className='container-fluid' >
        <div className='row justify-content-center'>
          <div className='col-md-11 col-sm-8 col-lg-8 my-5' id='signinbox'>
          
        <div className='row' >
          <div className='col-md-6' style={{background:'url(./images/login_banner.jpg)',borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          </div>
          <div className='col-md-6 py-5 px-md-5 px-5 justify-content-center' style={{minHeight:'380px'}}>
            
          {/* first step mobile number*/}
          <section id="mobilebox">
            <h4 className='fw-bold'>Sign in</h4>
            <p className='fs-6 fw-light _text-muted'>Sign in to access your Orders, Offers and Wishlist.</p>
            
            <div className='my-3 input_group'>
              <div><small id="lbl_msg"></small></div>
              <span className='input_group_prepend'>+91</span>
              <input id='txt_mobile' type="{text}" maxLength={10} onChange={textboxvalidate}  className='_form-control' placeholder={'Mobile Number'} autoComplete="off"/>
              <a href='javascript:void(0)' onClick={changemobnumber} className='input_group_append text-danger'><small id="changebtn">Change</small></a>
            </div>
            
            <div id='mobilebtn'>
              <small className='_text-muted mt-5'>By continuing you are agree to our <a href='#'>Terms</a>, <a href='#'>Refunds</a> and <a href='#'>Privacy Policy</a>.</small>
              <button id='btn_continue' onClick={btn_continue} className='_btn _btn-primary _btn-rounded w-100 my-3'>Continue</button>
            </div>
          </section>

          {/* 2nd step full name - if new user*/}

          <section id='namefield'>
            <div className='col-12'>
              <h4 class="fw-bold">Personal Details</h4>
              <p>Hey, you seem to be new here. Please provide your name details.</p></div>
            <div><small id="lbl_namemsg"></small></div>
            <div>
              <small className='_text-muted'>First Name*</small>
              <input id='txt_firstname' className='_form-control' autoComplete="off"/>
            </div>
            <div>
              <small className='_text-muted'>Last Name*</small>
              <input id='txt_lastname' className='_form-control' autoComplete="off"/>
            </div>
            <div className='col-12 text-center'>
            <button id='btn_savecontinue' onClick={save_namefield} className='_btn _btn-primary _btn-rounded w-100 my-3'>Save & Continue</button>
            {/* <small onClick={back_step_name} className='_text-success'><a href="#">Go Back</a></small> */}
            </div>
          </section>

          {/* final step verify otp - if existing user*/}
          <section id="otpbox">
            <div className='mb-3'><h4 class="fw-bold">Verify OTP</h4></div>
            <small className='_text-muted'>Enter OTP*</small> &nbsp;&nbsp; <small id='lbl_otpmsg'></small>
            <input id="txt_otp" type="{text}" maxLength={6}  className='_form-control' autoComplete="off"/>
            <section className='d-flex justify-content-between mb-3'>
              <small id='counter' className='_text-muted'></small>
              <a href='javascript:void(0)' onClick={resendotp} id='resendotpbtn' style={{display:'none'}} className='text-danger'><small>Resend OTP</small></a>
            </section>
            <div id="otpbox_btn" className='col-12 text-center'>
            <button onClick={btn_verify_continue} className='_btn _btn-primary _btn-rounded w-100 my-3'>Continue</button>
            {/* <small onClick={back_step_mob} className='_text-success'><a href="#">Go Back</a></small> */}
            </div>
          </section>

          </div>
        </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Signin