import React, { useState } from 'react';
import './navbar.css';
import { FaBars, FaYoutube, FaSearch, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ onMenuClick, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <button onClick={onMenuClick} className="menu-btn" aria-label="Open menu">
          <FaBars className="icon" />
        </button>
        <div className="logo">
          <FaYoutube className="logo-icon" />
          <span className="logo-text">YouTube</span>
        </div>
      </div>
      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search YouTube URL"
          />
          <button className="search-button" onClick={handleSearchClick} aria-label="Search">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="right-section">
        <button className="signin-btn" aria-label="Sign in">
          <FaUserCircle className="icon" />
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
