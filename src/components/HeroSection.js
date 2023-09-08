import React from "react";
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted />
      <h1 style={{ color: 'white' }}>ADVENTURE AWAITS</h1>
      <h3 style={{ color: 'white' }}>What are you waiting for?</h3>
    <Link to="/login">  
      <button>Let`s Start</button>
    </Link >
    </div>
  );
}
export default HeroSection;
