import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">TotalNomad</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Explore</Link>
        <Link to="/booking">Bookings</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;