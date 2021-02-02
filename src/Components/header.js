import React from 'react';
import pavani from '../assets/pavani.jpg';
function Header() {
  return (
      <div className="header">
        
        <img className="image-style" src={pavani} alt="Pavani"/>
        <div className="center">
        <h3>Hi there, I am Pavani. I design and develop User Interfaces.</h3>
        </div>
        
      </div>
  );
}

export default Header;
