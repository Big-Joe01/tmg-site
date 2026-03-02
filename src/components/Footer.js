import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TMG GROUP OF COMPANY LTD</h3>
            <p>Specialist Export & Logistics</p>
            <p className="footer-description">
              Providing reliable logistics solutions for businesses worldwide. 
              Your trusted partner in global trade.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📍 107 Industrial Zone, 11835 New Cairo, P.O. 319</li>
              <li>📞 +370 699-76900</li>
              <li>✉️ info@tmg-groups.com</li>
              <li>🕒 Mon-Fri: 9:00 - 18:00</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                📘
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                🐦
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                📷
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                💼
              </a>
            </div>
            <div className="newsletter">
              <h4>Subscribe to our newsletter</h4>
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 TMG GROUP OF COMPANY LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;