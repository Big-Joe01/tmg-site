import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>About TMG GROUP</h1>
          <p className="subtitle">Your Trusted Logistics Partner Since 2005</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2>Who We Are</h2>
            <p>
              TMG GROUP OF COMPANY LTD is a premier provider of export and logistics solutions, 
              serving businesses worldwide with excellence and reliability. Our team of experienced 
              professionals understands the complexities of international trade and works tirelessly 
              to ensure your shipments arrive safely and on time.
            </p>
            
            <h2>Our Expertise</h2>
            <p>
              With over 15 years of experience in the logistics industry, we have developed 
              specialized expertise in handling complex shipping requirements across various 
              industries. From small parcels to oversized cargo, we have the knowledge and 
              resources to handle it all.
            </p>
            
            <h2>Why Choose Us</h2>
            <motion.ul
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {[
                'Global network of trusted partners',
                'Real-time shipment tracking',
                'Competitive pricing without hidden fees',
                '24/7 customer support',
                'Customs clearance expertise',
                'Insurance coverage options'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10, color: '#003366' }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="image-placeholder">
              <motion.span
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                🚢
              </motion.span>
              <h3>Global Logistics Experts</h3>
              <p>Connecting businesses worldwide</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mission-vision"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div 
            className="mission"
            whileHover={{ scale: 1.02, backgroundColor: '#f0f0f0' }}
          >
            <h3>Our Mission</h3>
            <p>
              To provide seamless, reliable, and innovative logistics solutions that empower 
              businesses to expand globally. We strive to exceed expectations through 
              exceptional service, integrity, and continuous improvement.
            </p>
          </motion.div>
          <motion.div 
            className="vision"
            whileHover={{ scale: 1.02, backgroundColor: '#f0f0f0' }}
          >
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and preferred logistics partner worldwide, known for 
              our commitment to excellence, sustainable practices, and customer-centric 
              approach in everything we do.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;