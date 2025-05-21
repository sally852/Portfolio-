import React from 'react';
import {  FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import NavLinks from './NavLinks';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
        {/* Column 1 */}
            <div className="footer-about">
                <h2><span className="highlight">|</span> Amina Sally</h2>
                <p>
                    Creating beautiful, functional designs and digital experiences that elevate
                    brands and engage audiences.
                </p>
                <div className="social-icons">
                    <a href="https://github.com/sally852" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.behance.net/your-username" target="_blank" rel="noopener noreferrer">
                        <FaBehance />
                    </a>
                </div>

            </div>

            {/* Column 2 */}
            <div className="footer-links">
                <h3>Quick Links</h3>
                <NavLinks styleVariant="footer-style" />
            </div>
       </div>

      <hr />

      <p className="footer-bottom">
        © 2025 • All rights reserved • Designed with passion
      </p>
    </footer>
  );
}

export default Footer;
