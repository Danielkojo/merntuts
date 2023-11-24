import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {   useNavigate } from 'react-router-dom'


const Login = () => {
axios.defaults.withCredentials=true;
  const nav =useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/login ',{email,password})
  
        .then(res=>{ if (res.data.role === "Success"){
          if(res.data.role === "admin"){
            nav('/dashboard')
          }
        }
    
    
    }).catch(err=>console.log(err))
    }
  return (
    <div>
      {/**/}


<div className ="d-flex justify-content-center align-items-center bg-secondary vh-100"                                           
>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>

<div className='mb-3'>
<label htmlFor='email'>
    <strong>Email</strong></label>
    <input type='text'
    placeholder='Enter Email'
    autoComplete='off'
    className='form-control rounded-0'
    
    onChange={(e)=> setEmail(e.target.value)}/>

</div>
<div className='mb-3'>
<label htmlFor='email'>
    <strong>password</strong></label>
    <input type='password'
    placeholder='Enter password'
    autoComplete='off'
    className='form-control rounded-0'
    
    onChange={(e)=> setPassword(e.target.value)}/>


</div>

<button>Submit</button>
</form> 
    </div>
</div>

    </div>
  )
}

export default Login;
