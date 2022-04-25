//import logo from './logo.svg';
import './App.css';
//import Timer from './Count';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Nopage from './components/Nopage';
import Services from './components/Services'; 
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter, Route, Routes} from "react-router-dom"
//import Services from './components/services';
function App() {
  return (
    <>
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar></Navbar>}>
                  <Route index element={<Home></Home>}></Route>
                  <Route path="about" element={<About></About>}></Route>
                  <Route path="services" element={<Services></Services>}></Route>
                  <Route path="contact" element={<Contact></Contact>}></Route>
                  <Route path="login" element={<Login></Login>}></Route>
                  <Route path='register' element={<Register></Register>}></Route>
                  <Route path="*" element={<Nopage></Nopage>}></Route>
                  
              </Route>

            </Routes>
         
         </BrowserRouter>
    </>
    
    )
}

export default App;
