import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const IncrementDecrement = () => {
        let [num, setNum]= useState(0);
        let incNum =()=>{
          if(num<10)
          {
          setNum(Number(num)+1);
          }
        };
        let decNum = () => {
           if(num>0)
           {
            setNum(num - 1);
           }
        }
       let handleChange = (e)=>{
         setNum(e.target.value);
        }
  return (
    <>
    <div className="col-12 d-flex justify-content-end">
    <div class="input-group" style={{width:'130px'}}>
        <div class="input-group-prepend">
            <button class="rounded-circle text-white _btn _btn-primary p-2" style={{fontSize:'14px'}} type="button" onClick={decNum}><RemoveIcon/></button>
        </div>
        <input type="text" class="text-center fs-4 p-0 fw-light bg-transparent border-0 form-control" value={num} onChange={handleChange}/>
        <div class="input-group-prepend">
            <button class="rounded-circle text-white _btn _btn-primary p-2" style={{fontSize:'14px'}} type="button" onClick={incNum}><AddIcon/></button>
        </div>
    </div>
    </div>
    </>
  )
}

export default IncrementDecrement