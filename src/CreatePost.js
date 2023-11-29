import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
const nav = useNavigate()
    const[title,setTitle]= useState()
    const[description,setDescription]= useState()
    const[file,setFile]= useState()

    const handleSubmit =(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('title',title)
        formData.append('description',description)
        formData.append('file',file)
        axios.post('http://localhost:4000/create',formData)


        .then(res=>{
   
    if(res.data === "Success"){ 
      if(res.data.role === "Success"){
       window.location.href='/'
      }
   
    } 
    }).catch(err=>console.log(err))
        
    }

  return (
    
    <div>
<NavBar/>
<br></br>
<br></br>
<br></br>
      <form onSubmit={handleSubmit}>
<input type="text" placeholder='enter title' name='title' onChange={e=> setTitle(e.target.value)}/>
<textarea
 name='description'
  id=''
   cols="30"
    rows="10"  
    placeholder='describe'
    onChange={e=> setDescription(e.target.value)}></textarea>
<input type='file' name="file" id=""  onChange={e=> setFile(e.target.files[0])}/>
<button>Post </button>
      </form>
    </div>
  )
}

export default CreatePost
