import React from 'react';
import { motion } from 'framer-motion';

// Reusable animation variants
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Reusable components
export const FadeInUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    variants={fadeInUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    variants={fadeIn}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = '' }) => (
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HoverScale = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={className}
  >
    {children}
  </motion.div>
);

export const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);