import React from 'react';
import {  FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';

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
                    
                    <a href="#"><FaGithub/></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaBehance /></a>
                </div>
            </div>

            {/* Column 2 */}
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
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
