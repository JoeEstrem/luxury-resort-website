import "./ThreeHighlights.css"

import React, { useEffect } from 'react';

function ThreeHighlights() {
  useEffect(() => {
    const images = document.querySelectorAll('.highlight-container');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        });
      },
      { threshold: 0.25 }
    );
    images.forEach((image) => observer.observe(image));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="highlight-master-container">
      <div className="highlight-container">
        <img
          src={require('../imgs/Interior-pexels-roman-odintsov-7539892.jpg')}
          alt="Highlight - World-class"
          className="highlight-image"
        />
        <h3>World-class</h3>
        <p>Built with sophistication, every detail reflects elegance and Japanese beauty. Enjoy bespoke services that set a new standard in luxury.</p>
      </div>
      <div className="highlight-container">
        <img
          src={require('../imgs/forest-ciprian-boiciuc-kKadFByUqEo-unsplash.jpg')}
          alt="Highlight - Wonder"
          className="highlight-image"
        />
        <h3>Wonderland</h3>
        <p>Surrounded by breathtaking scenery, this destination boasts Japan’s famous powdered snow. Experience this enchanting escape.</p>
      </div>
      <div className="highlight-container">
        <img
          src={require('../imgs/Onsen-pexels-yaroslav-shuraev-7041568.jpg')}
          alt="Highlight - Wellness"
          className="highlight-image"
        />
        <h3>Wellness</h3>
        <p>Rejuvenate your senses with traditional Japanese Onsen and holistic spa treatments. Wellness here is elevated to an art of pure serenity.</p>
      </div>
    </div>
  )
}

export default ThreeHighlights;
