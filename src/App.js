import Signup from './Signup';
import Login from './Login';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';

function App() { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/" element={<Home/>}></Route>

      </Routes></BrowserRouter>
  );
}

export default App;