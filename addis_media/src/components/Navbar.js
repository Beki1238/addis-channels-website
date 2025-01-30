import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <i className="bx bxs-movie"></i>Addis Media
      </Link>
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="home-active">Home</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/upcoming">Upcoming</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </nav>
      <Link to="/signin" className="btn">Sign In</Link>
    </header>
  );
};

export default Navbar;