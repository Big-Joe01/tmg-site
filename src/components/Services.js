import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Freight Forwarding',
      description: 'Air, sea, and land freight solutions tailored to your needs. Global coverage with real-time tracking.',
      icon: '🚢'
    },
    {
      title: 'Customs Clearance',
      description: 'Expert handling of documentation and customs regulations. Hassle-free clearance for all shipments.',
      icon: '📋'
    },
    {
      title: 'Warehousing',
      description: 'Secure storage facilities with inventory management. 24/7 monitoring and climate-controlled options.',
      icon: '🏭'
    },
    {
      title: 'Supply Chain Solutions',
      description: 'End-to-end logistics optimization. Reduce costs and improve efficiency with our expertise.',
      icon: '⚓'
    },
    {
      title: 'Project Cargo',
      description: 'Specialized handling for oversized and heavy-lift projects. Engineering solutions for complex logistics.',
      icon: '🏗️'
    },
    {
      title: 'Insurance Services',
      description: 'Comprehensive cargo insurance coverage. Peace of mind for your valuable shipments.',
      icon: '🛡️'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Comprehensive logistics solutions tailored to your business needs
        </motion.p>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 30px rgba(0, 51, 102, 0.2)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="service-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;