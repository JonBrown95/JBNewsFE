import React from 'react';
import bg from '../assets/bg.svg'

function Homepage() {
  return (
    <div className="homepage">
      <div className="background-svg">
      <img src={bg} alt="Background SVG" />
      </div>
      <div className="overlay-text">
        <h1>JB News</h1>
        
      </div>
    </div>
  );
}

export default Homepage;
