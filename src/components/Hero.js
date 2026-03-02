import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Global Logistics Solutions
        </motion.h2>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Specialist in Export & Logistics
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Connecting businesses worldwide with reliable shipping solutions
        </motion.p>
        
        <motion.button 
          className="cta-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.1, backgroundColor: '#ffed4a' }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;