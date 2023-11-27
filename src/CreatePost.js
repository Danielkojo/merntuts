import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
const nav = useNavigate()
    const[title,setTitle]= useState()
    const[description,setDesc]= useState()
    const[file,setFile]= useState()

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:4000/create',{title,description,file})


        .then(res=>{
   
    if(res.data === "Success"){ 
      if(res.data.role === "Success"){
        nav('/dashboard') 
      }
   
    } 
    }).catch(err=>console.log(err))
        
    }

  return (
    
    <div>
<NavBar/>
      <form onSubmit={handleSubmit}>
<input type="text" onChange={e=> setTitle(e.target.value)}/>
<textarea name='desc' id='' cols="30" rows="10"  onChange={e=> setDesc(e.target.value)}></textarea>
<input type='file' name="" id=""  onChange={e=> setFile(e.target.files[0])}/>
<button>Post </button>
      </form>
    </div>
  )
}

export default CreatePost
