import React from 'react'
import './Navbar.css' 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="/" className="navbar-link">Home</a></li>
        <li><a href="/about" className="navbar-link">About</a></li>
        <li><a href="/training" className="navbar-link">Training</a></li>
        <li><a href="/analytics" className="navbar-link">Analytics</a></li>
        <li><a href="/community" className="navbar-link">Community</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
