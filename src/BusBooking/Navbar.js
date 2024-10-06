// import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='NavbarItems'>
      <h1 className='Navbar-logo'>Bus4U</h1>
      <ul className='Navbar-menus'>
        <li>
          <Link to='/' className='Nav-links'>
            <i className="fa-sharp fa-solid fa-house-user"></i> Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='Nav-links'>
            <i className="fa-sharp fa-solid fa-circle-info"></i> About
          </Link>
        </li>
        <li>
          <Link to='/services' className='Nav-links'>
            <i className="fa-sharp fa-solid fa-briefcase"></i> Service
          </Link>
        </li>
        <li>
          <Link to='/contact' className='Nav-links'>
            <i className="fa-sharp fa-solid fa-address-book"></i> Contact
          </Link>
        </li>
        <li>
          <Link to='/login' className='Nav-links'>
            <i className="fa-sharp fa-solid fa-sign-in-alt"></i> Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
