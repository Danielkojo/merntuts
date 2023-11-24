import Signup from './Signup';
import Login from './Login';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes></BrowserRouter>
  );
}

export default App;