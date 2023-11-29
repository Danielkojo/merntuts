import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import './style.css'
const Home = () => {

  const[posts,setPosts]= useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/getposts')
    .then(posts => {setPosts(posts.data)})
    .catch(err => console.log(err))
  },[])
  return (

   
    <div>
      <NavBar/>
      <br></br>
      <br></br>
      <br></br>
   <div>

    {
      posts.map(post=>   (
<div>
<img src={`http://localhost:4000/Images/${post.file}`} alt='' className='image' />
<div>

<h3>{post.title}</h3>
<p>{post.description}</p>
</div>
</div>
    
      ))
    }
   </div>
    </div>
  )
}

export default Home
