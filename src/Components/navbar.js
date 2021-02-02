import React from 'react';
import favicon from '../assets/favicon.png';

function Navbar() {
  return (
      <div className="navbar" >
        <nav >
            <ul>
            <li><img className="fav" src={favicon}/></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#news">Projects</a></li>
            </ul>
        </nav>
     
      </div>
  );
}

export default Navbar;