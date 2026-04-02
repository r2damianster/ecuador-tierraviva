'use client';
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/intro-scientist-studies-rainforest.jpg", // Jungle
    "/images/intro-casa-buho.jpg",                    // Work with children
    "/images/festiartes3.jpg"                         // Festiartes
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      {/* Background Images Slider */}
      {images.map((src, index) => (
        <img 
          key={src}
          src={src} 
          alt={`Slider image ${index + 1}`} 
          className={`hero-bg-media ${index === currentSlide ? 'active' : ''}`} 
        />
      ))}
      
      {/* Dark overlay specifically for the hero background to ensure text reads well over the bright images */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.3)", zIndex: 1 }}></div>

      <div className="container hero-content" style={{ zIndex: 10 }}>
        <h1 className="hero-title">
          Protecting Nature, <br />
          <span className="text-gradient">Elevating Culture.</span>
        </h1>
        <p className="hero-desc">
          Ecuador Tierra Viva Foundation builds sustainable communities and fosters 
          cultural development. Join us as a partner to drive meaningful change.
        </p>
        <div className="hero-actions">
          <a href="#partners" className="btn-primary">Become a Partner</a>
          <a href="#festiartes" className="btn-secondary" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>Explore Festiartes</a>
        </div>
      </div>
    </section>
  );
}
