import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="subscribe">
          <h2>Subscribe Now</h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          <input type="email" className="email-input" placeholder="Enter your email" />
          <button type="button" className="subscribe-button">Subscribe</button>
        </div>
        <div className="info-links">
          <div className="info">
            <h3>Information</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className="helpful-links">
            <h3>Helpful Links</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className="investments">
            <h3>Investments</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 ParkUp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
