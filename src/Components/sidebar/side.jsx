import React from 'react';
import '../sidebar/sidebar.css';
import {
  FaHome, FaHistory, FaUser, FaClock,
  FaThumbsUp, FaFire, FaMusic,
  FaGamepad, FaNewspaper, FaTrophy
} from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: <FaHome />, label: 'Home', active: true },
  ];

  const libraryItems = [
    { icon: <FaUser />, label: 'Your channel' },
    { icon: <FaHistory />, label: 'History' },
    { icon: <FaClock />, label: 'Watch later' },
    { icon: <FaThumbsUp />, label: 'Liked videos' },
  ];

  const exploreItems = [
    { icon: <FaFire />, label: 'Trending' },
    { icon: <FaMusic />, label: 'Music' },
    { icon: <FaGamepad />, label: 'Gaming' },
    { icon: <FaNewspaper />, label: 'News' },
    { icon: <FaTrophy />, label: 'Sports' },
  ];

  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose}></div>}
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="menu-section">
          {menuItems.map((item, index) => (
            <div key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}

          <hr />

          <div>
            <h3 className="section-title">Library</h3>
            {libraryItems.map((item, index) => (
              <div key={index} className="menu-item">
                <span className="menu-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <hr />

          <div className="signin-box">
            <p className="signin-text">Sign in to like videos, comment, and subscribe.</p>
            <button className="signin-btn">
              <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Sign in
            </button>
          </div>

          <hr />

          <div>
            <h3 className="section-title">Explore</h3>
            {exploreItems.map((item, index) => (
              <div key={index} className="menu-item">
                <span className="menu-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
