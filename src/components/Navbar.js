//Joe DePoyster
//cosc 4210 final project

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`slide-out-menu ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleMenu} className="toggle-button">
        Toggle menu 
      </button>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Careers</li>
      </ul>
    </div>
  )
}