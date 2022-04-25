//import React from React
import React from 'react';
import {Link, Outlet,useNavigate} from "react-router-dom"
const Navbar = ()=>{
  const navigate = useNavigate()
  const login=()=>{
    navigate('login')

  }
  const  register=()=>{
    navigate('register')
  }
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div className="container-fluid">
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/about" tabindex="-1" aria-disabled="true">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services" tabindex="-1" aria-disabled="true">Services
          </Link>
        </li>
 
        <li className="nav-item">
          <Link className="nav-link" to="/contact" tabindex="-1" aria-disabled="true">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="*" tabindex="-1" aria-disabled="true"></Link>
        </li>
      </ul>
      <a className="navbar-brand fw-bold fs-2 mx-auto" href="#">Navbar</a>
      <button className='ms-auto btn btn-outline-primary rounded-pill' onClick={login}><i className="fa fa-sign-in me-2 text-danger" aria-hidden="true"></i>Login</button>
      <button className='ms-2 btn btn-outline-primary rounded-pill ' onClick={register}><i className="fa fa-registered me-2 text-danger"> </i>Register</button>
    </div>
  </div>
</nav>
<Outlet></Outlet>
</>

    )
}
export default Navbar