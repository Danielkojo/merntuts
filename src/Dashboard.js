import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
const Dashboard = () => {

  const nav = useNavigate()
const[suc,setSuc]= useState()
axios.default.withCredentials = true;
  useEffect(()=>{

      axios.get('http://localhost:4000/dashboard ')


        .then(res=>{
   
  if(res.data === "Success"){
    setSuc("success")
  }else{
    nav('/login')
  }

     
    }).catch(err=>console.log(err))
},[])
  return (
    <div>
       <NavBar/>
      <h2>Dashboard</h2>
      <p>{suc}</p>
    </div>
  )
}

export default Dashboard
;