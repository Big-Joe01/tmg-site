import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // These IDs come from your EmailJS dashboard and .env file
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        subject: 'New Contact Form Submission'
      };

      // Send email
      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      // Success!
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const leftColumnVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const rightColumnVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const infoItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5
      }
    })
  };

  const formGroupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="page-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Get in touch with our logistics experts
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column - Contact Info */}
        <motion.div 
          className="contact-info"
          variants={leftColumnVariants}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            TMG GROUP OF COMPANY LTD
          </motion.h2>
          
          <motion.div 
            className="info-item"
            variants={infoItemVariants}
            custom={0}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            <motion.span 
              className="icon"
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              📍
            </motion.span>
            <div>
              <h3>Address</h3>
              <p>107 Industrial Zone, 11835 New Cairo, P.O. 319</p>
            </div>
          </motion.div>

          <motion.div 
            className="info-item"
            variants={infoItemVariants}
            custom={1}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            <motion.span 
              className="icon"
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -15, 15, -15, 0],
                transition: { duration: 0.5 }
              }}
            >
              📞
            </motion.span>
            <div>
              <h3>Phone</h3>
              <p>+370 699-76900</p>
            </div>
          </motion.div>

          <motion.div 
            className="info-item"
            variants={infoItemVariants}
            custom={2}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            <motion.span 
              className="icon"
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              ✉️
            </motion.span>
            <div>
              <h3>Email</h3>
              <p>info@tmg-groups.com</p>
            </div>
          </motion.div>

          <motion.div 
            className="info-item"
            variants={infoItemVariants}
            custom={3}
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
          >
            <motion.span 
              className="icon"
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              🕒
            </motion.span>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
            </div>
          </motion.div>

          {/* Quick Contact Tips */}
          <motion.div 
            className="contact-tips"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              📋 Before You Contact Us
            </motion.h3>
            <motion.ul
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.7 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {[
                'Have your shipment details ready',
                'Include your preferred contact method',
                'Mention any urgent delivery requirements',
                'For tracking, please use our '
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 5, color: '#003366' }}
                >
                  {item}
                  {index === 3 && (
                    <motion.a 
                      href="/tracking"
                      whileHover={{ scale: 1.05, color: '#ffd700' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      tracking page
                    </motion.a>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div 
          className="contact-form"
          variants={rightColumnVariants}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Send us a message
          </motion.h2>
          
          {/* Status Messages */}
          <AnimatePresence mode="wait">
            {submitStatus === 'success' && (
              <motion.div 
                className="alert success"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  ✅
                </motion.span>
                Thank you! Your message has been sent successfully. We'll respond within 24 hours.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                className="alert error"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  ❌
                </motion.span>
                Sorry, something went wrong. Please try again or call us directly.
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit}>
            {/* Form Fields with Animations */}
            <motion.div 
              className="form-group"
              variants={formGroupVariants}
              custom={0}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <label>Name *</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="John Doe"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 0 3px rgba(255, 215, 0, 0.3)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={formGroupVariants}
              custom={1}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <label>Email *</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="john@example.com"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 0 3px rgba(255, 215, 0, 0.3)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={formGroupVariants}
              custom={2}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <label>Phone</label>
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="+370 699 76900"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 0 3px rgba(255, 215, 0, 0.3)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={formGroupVariants}
              custom={3}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <label>Message *</label>
              <motion.textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Tell us about your shipping needs..."
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 0 3px rgba(255, 215, 0, 0.3)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>

            <motion.button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
              variants={formGroupVariants}
              custom={4}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#1a4d80',
                boxShadow: "0 5px 15px rgba(0, 51, 102, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <motion.span 
                    className="spinner"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </motion.span>
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Send Message
                </motion.span>
              )}
            </motion.button>
          </form>

          <motion.p 
            className="form-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            * Required fields. We'll never share your information.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;