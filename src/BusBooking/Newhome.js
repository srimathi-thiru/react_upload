import React from 'react';
import './Newhome.css';

function Newhome() {
  return (
    <div className='home'>
      <img 
        alt='A scenic view for travel inspiration' 
        src='https://wallpapercave.com/wp/wp5563912.jpg' 
      />
      <div className='home-text'>
        <h1>Your Journey, Your Story</h1>
        <p>Choose Your Destination</p>
        <a href='/' className='btn'>Travel Plan</a>
      </div>
    </div>
  );
}

export default Newhome;
