import React from 'react';
import './Services.css';

function ServicesPage() {
  const services = [
    // ... your services data (copy from Services component)
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive logistics solutions for every need</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card detailed" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="learn-more">Learn More →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;