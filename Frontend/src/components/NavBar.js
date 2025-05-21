
import React from 'react';
import './../styles/style.css';
import NavLinks from './NavLinks';

function NavBar() {
  


  return (
    <nav className="nav_bar">
      <div className="nav_content">
      <h2><span className="highlight">|</span> Amina Sally</h2>

        <ul className= 'nav_links'>
            <NavLinks/>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;


