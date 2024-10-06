import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../BusBooking/Navbar';
import Home from './Home';
import Login from '../BusBooking/Login';
import Sign from '../BusBooking/Register';

const Newrouter = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Sign/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Newrouter;
