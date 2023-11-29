import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'



const NavBar = () => {
  const nav = useNavigate()
  const handleLogout=()=>{
    axios.get('http://localhost:4000/logout')
.then(res=>{
  if(res.data === "Success")
  nav('/login')
}).catch(err=> console.log(err))
  }
  return (
    
    <div className='navbar-header'>
      <div> <h3>Blog  App</h3></div>
      <div>
      <Link to="/" className='link'>Home</Link>
<Link to="/create" className='link'>Create</Link>
<a href="" className='link'>Contact</a>

      </div> 
     <input type='button' onClick={handleLogout} value="logout"/>
    </div>
  )
}

export default NavBar
 