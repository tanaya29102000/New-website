import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import search icon
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="title">ParkUp</div> {/* Left-side title */}
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>
            <FontAwesomeIcon icon={faSearch} className="search-icon" /> {/* Search Icon */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
