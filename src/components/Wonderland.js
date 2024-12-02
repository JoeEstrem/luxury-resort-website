import "./Wonderland.css"

import React, { useEffect } from 'react';

function Wonderland() {
  useEffect(() => {
    const images = document.querySelectorAll('.wonderland-container');

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
    <div className="wonderland-container">
      <div className="wonderland-image-container">
        <img
          src={require('../imgs/Ski-pexels-melvinwahlin-2433353.jpg')}
          alt="Wonderland - Skiing at Setsuka"
          className="wonderland-img-large"
        />
        <img
          src={require('../imgs/mountain-alessio-soggetti-x8GFIajIq6M-unsplash.jpg')}
          alt="Wonderland - Skiing at Setsuka"
          className="wonderland-img-small"
        />
      </div>
      <div className="wonderland-text">
        <h3>Wonderland</h3>
        <p>Experience the thrill of skiing on slopes blanketed in Japan’s world-famous powder snow, celebrated for its unparalleled softness and quality. The snow’s unique texture and consistency create perfect conditions for skiers of all levels. Whether you're a seasoned skier or a beginner, every run promises an unforgettable journey through pristine, snow-covered wonderland.</p>
      </div>
    </div>
  )
}

export default Wonderland;
