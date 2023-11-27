import Signup from './Signup';
import Login from './Login';
import NavBar from './NavBar';
// import Admin from './Admin';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import CreatePost from './CreatePost';



import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const UserContext = createContext();
function App() { 
  const[user,setUser]= useState({})
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:4000/ ')
    .then(user =>{setUser(user.data)})
    .catch(err => console.log((err)))
  },[])
  return (
  <UserContext.Provider value={user  }>
      <BrowserRouter>
   
    <Routes>
      <Route path="/register" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/" element={< Home/>}></Route>
      <Route path="/create" element={< CreatePost/>}></Route>
  

      </Routes></BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;