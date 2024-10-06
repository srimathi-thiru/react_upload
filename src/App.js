import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Newrouter from './routes/Newrouter';
import Navbar from './BusBooking/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Newrouter/>
      
    </BrowserRouter>
  );
};

export default App
