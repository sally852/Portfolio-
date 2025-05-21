import  { useState  } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';


function NavLinks({ styleVariant = '' }) {
    const [isMobile, setIsMobile] = useState(false); 
  
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMobile(false); 
      }
    };


  return (
   

    <ul className={`nav_links ${styleVariant}`}>
        <li>
            <NavLink to="/" >Home</NavLink>
        </li>
        <li>
            <button onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
        </li>
        <li>
            <button onClick={() => scrollToSection('contact')} className='contact_button'>Contact</button>
        </li>

    </ul>
   
  );
}

export default NavLinks;


