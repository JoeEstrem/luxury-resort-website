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
      { threshold: 0.75 }
    );
    images.forEach((image) => observer.observe(image));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="highlight-master-container">
      <div className="highlight-container">
        <img
          src={require('../imgs/Interior-pexels-roman-odintsov-7539892.jpg')}
          alt="Highlight - World-class "
          className="highlight-image"
        />
        <h3>World-class</h3>
        <p>Not only meeting but exceeding world-class expectations for luxury and comfort.</p>
      </div>
      <div className="highlight-container">
        <img
          src={require('../imgs/Onsen-pexels-yaroslav-shuraev-7041568.jpg')}
          alt="Highlight - World-class "
          className="highlight-image"
        />
        <h3>Wonderland</h3>
        <p>World-famous powdered snow perfect for skiing.</p>
      </div>
      <div className="highlight-container">
        <img
          src={require('../imgs/forest-ciprian-boiciuc-kKadFByUqEo-unsplash.jpg')}
          alt="Highlight - World-class "
          className="highlight-image"
        />
        <h3>Wellness</h3>
        <p>Recover with tranquil massages & warming onsens.</p>
      </div>
    </div>
  )
}

export default ThreeHighlights;
