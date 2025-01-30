import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="social-media">
          <a href="https://web.facebook.com/addissport1299/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com/addissport/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.youtube.com/@addissport" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Addis Media. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;