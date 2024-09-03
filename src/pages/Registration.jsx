import React, { useState } from 'react'
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
    const navigate= useNavigate()
    const [email,setEmail]=useState('')
    const[username,setName]=useState('')
    const[password,setPassword]=useState('')
    const[checkbox,setCheckbox]=useState('')
    

    
    const handleRegistration=()=>{
        alert("Thank you... Registration Successfull");
        navigate('/')
      }
      
  return (
    <div className='wrapper'>
           <div className='form-box register'>
           <form action="">
            <h1>REGISTRATION</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username'  onChange={event=>setName(event.target.value)} />
                    <FaUser  className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="email" placeholder='Email' onChange={event=>setEmail(event.target.value)} autocomplete="off" />
                    <FaEnvelope className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='password' onChange={event=>setPassword(event.target.value)} />
                    <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                <label htmlFor="Remember Me">
                <input type="checkbox" name="" id=""  onChange={event=>setCheckbox(event.target.value)}/>I agree to the terms and condition</label>
                
                </div>
                    
                <button type="submit"  disabled={!email ||!username ||!password||!checkbox} onClick={handleRegistration}>Register</button>
                <div className='register-link'>
                    Already have an account?<span><Link to={'/'}>Login</Link></span>
                </div>
            </form>
           </div>
            
        </div>
  )
}

export default Registration