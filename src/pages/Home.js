import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <About />
    </div>
  );
}

export default Home;