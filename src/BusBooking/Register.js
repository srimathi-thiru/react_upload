import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import'./Register.css';
// import { Button } from "react-bootstrap";
const Sign=()=>
{

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const navigate=useNavigate();
    const navigate1=useNavigate();
    const handleClick=(event)=>
    {
            navigate('/');


    }
    const handless=()=>
    {
        navigate1('/');
    }
    return(
        <>
        
<div className="styy">
      <form onSubmit={handleClick}>
        <div className='sty11'>
          <center><h2>REGISTER</h2></center>
          <br></br>
          <center>
            <h5 className='hhhh'>Email:</h5>
            <br></br>
            <input 
              type="Email"
              id="in1"
              className='form-control'
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required style={{backgroundColor:'white' ,color:'black', width:'250px'}}
            />
            <br /><br />
            <h5 className='hhh'>PASSWORD:</h5>
            <br />
            <input  className="form-control"
              type="password"
              id="in2"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required style={{backgroundColor:'white' ,color:'black', width:'250px',height:'30px'}}
            />
            <h5 className='hh'>CONFIRM PASSWORD:</h5>
            <br />
            <input  className="form-control"
              type="password"
              id="in2"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required style={{backgroundColor:'white' ,color:'black', width:'250px',height:'30px'}}
            />
            <br /><br />
            <button className="btn btn-warning">Submit</button>
            <br></br>
            <h5>Already have an account?</h5>
            <button style={{color:'blue'}} onClick={handless}>login here</button>

          </center>
        </div>
      </form>
    </div>
    </>
  );
};

export default Sign;