import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About TMG GROUP</h2>
            <h3>Your Trusted Logistics Partner Since 2005</h3>
            <p>
              TMG GROUP OF COMPANY LTD is a premier provider of export and logistics solutions, 
              serving businesses worldwide with excellence and reliability. Our team of experienced 
              professionals understands the complexities of international trade and works tirelessly 
              to ensure your shipments arrive safely and on time.
            </p>
            <p>
              We pride ourselves on our customer-centric approach, offering personalized solutions 
              that meet the unique needs of each client. From documentation to delivery, we handle 
              every detail with precision and care.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h4>5000+</h4>
                <p>Shipments Delivered</p>
              </div>
              <div className="stat-item">
                <h4>50+</h4>
                <p>Countries Served</p>
              </div>
              <div className="stat-item">
                <h4>1000+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              {/* You can replace this with an actual image later */}
              <div className="placeholder-content">
                <span>🚢</span>
                <p>Global Logistics Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;