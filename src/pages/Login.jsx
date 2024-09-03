import React, { useState } from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const navigate= useNavigate()
  
    const[username,setName]=useState('')
    const[password,setPassword]=useState('')

    const handleLogin=()=>{
        // alert("Thank you... Login Successfull");
        navigate('/home')
      }
  return (
    
        <div className='wrapper justify-content-center align-items-center'>
           <div className='form-box login'>
           <form action="">
            <h1>LOGIN</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' onChange={event=>setName(event.target.value)} />
                    <FaUser  className='icon'/>
                    
                </div>
                <div className='input-box'>
                    <input type="Password" placeholder='password' onChange={event=>setPassword(event.target.value)} />
                    <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                <label htmlFor="Remember Me">
                <input type="checkbox" name="" id="" />
                Remember Me  </label>
                <a>Forgot password?</a>
                </div>
                    
                <button type="submit" disabled={!username ||!password} onClick={handleLogin}>Login</button>
                <div className='register-link'>
                    New Here?<span><Link to={'/registration'}>Create an Account</Link></span>
                </div>
                
            </form>
           </div>
            
        </div>
   
  )
}

export default Login