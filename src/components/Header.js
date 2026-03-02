import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <h1>TMG GROUP OF COMPANY LTD</h1>
            <span className="tagline">Specialist Export & Logistics</span>
          </Link>
        </div>
        <div className="nav-right">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/tracking" className="tracking-link">Track Shipment</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;