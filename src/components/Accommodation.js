import "./Accommodation.css"

import React, { useEffect } from 'react';

function Accomodation() {
  useEffect(() => {
    const images = document.querySelectorAll('.accommodation-container');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        });
      },
      { threshold: 0.75 }
    );
    images.forEach((image) => observer.observe(image));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="accommodation-container">
      <div className="accommodation-image-container">
        <img
          src={require('../imgs/Interior-pexels-roman-odintsov-7539892.jpg')}
          alt="Setsuka accommodation"
          className="side-image"
        />
        <img
          src={require('../imgs/Interior-pexels-roman-odintsov-7539892.jpg')}
          alt="Setsuka accommodation"
          className="center-image"
        />
        <img
          src={require('../imgs/Interior-pexels-roman-odintsov-7539892.jpg')}
          alt="Setsuka accommodation"
          className="side-image"
        />

      </div>
      <div className="text-container">
        <h3>World-class Accommodation</h3>
        <p>Escape to unparalleled luxury in Japan’s premier ski resort, where world-class comfort meets the serenity of pristine alpine beauty. Immerse yourself in wellness, with private onsens and tranquil spaces designed to rejuvenate mind and body. Embrace the wonder of endless powder slopes and breathtaking mountain vistas, all from the comfort of your exclusive retreat.</p>
      </div>
    </div>
  )
}

export default Accomodation;
