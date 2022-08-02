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
    <div className="col-12">
    <div class="input-group">
        <div class="input-group-prepend">
            <button class="btn btn-outline-danger" type="button" onClick={decNum}><RemoveIcon/></button>
        </div>
        <input type="text" class="form-control text-center fs-4 text-muted p-0 fw-bold" value={num} onChange={handleChange}/>
        <div class="input-group-prepend">
            <button class="btn btn-outline-success" type="button" onClick={incNum}><AddIcon/></button>
        </div>
    </div>

    </div>
    </>
  )
}

export default IncrementDecrement