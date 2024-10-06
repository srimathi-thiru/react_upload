import React, { useState } from 'react';
import Navbar from '../BusBooking/Navbar'; 
import './Home.css';
import Newhome from '../BusBooking/Newhome'; 

import Login from '../BusBooking/Login';



function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Newhome />
      
      <Navbar />
      {showLogin && <Login />} 
      
    </div>
  );
}

export default Home;
