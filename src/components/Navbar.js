//Joe DePoyster
//cosc 4210 final project

import React, { useState } from 'react';
import {GrCaretNext} from 'react-icons/gr';
import {GrCaretPrevious} from 'react-icons/gr';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let arrowIcon = <GrCaretNext/>;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  isOpen ? arrowIcon = <GrCaretPrevious/> : arrowIcon = <GrCaretNext/>;
  
  return (
    <div className={`slide-out-menu ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleMenu} className="toggle-button">
        {arrowIcon}
      </button>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Careers</li>
      </ul>
    </div>
  )
}