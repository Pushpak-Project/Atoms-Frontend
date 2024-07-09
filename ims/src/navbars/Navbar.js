import React from 'react';
import {  } from 'react-router-dom';
import './Navbar.css';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="logo">
//                     <h1>Atoms</h1>
//                 </div>
//                 <div className="nav-links">
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/register">Register</Link></li>
//                         <li><Link to="/login">Login</Link></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;






import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'
import './Navbar.css'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    useEffect(() => {
        toast.success('Welcome to the Atoms !', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce });
      }, []);
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom fixed-top">
     <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" width="45" height="45" className="d-inline-block align-top mr-2 " />
        <span>Atoms</span>
      </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/link" activeClassName="active">
          Service
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/another-link" activeClassName="active">
          About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/link2" activeClassName="active">
         Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register" activeClassName="active">
          Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login" activeClassName="active">
          Login
          </NavLink>
        </li>
      </ul>
    </div>
    <ToastContainer />
  </nav>
  );
};

export default Navbar;