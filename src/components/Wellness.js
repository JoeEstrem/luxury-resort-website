import "./Wellness.css"

import React, { useEffect } from 'react';

function Wellness() {
  useEffect(() => {
    const images = document.querySelectorAll('.wellness-container');

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
    <div className="wellness-container">
      <div className="wellness-image-container">
        <img
          src={require('../imgs/spa-bath-pexels-gabby-k-6620948.jpg')}
          alt="Wellness at Setsuka"
          className="wellness-img-small"
        />
        <img
          src={require('../imgs/Spa-facility.png')}
          alt="Wellness at Setsuka"
          className="wellness-img-large"
        />
      </div>
      <div className="wellness-text">
        <h3>Wellness</h3>
        <p>Indulge in the ultimate spa experience, where serenity meets sophistication. From soothing aromatherapy treatments to expertly tailored massages, each service is designed to rejuvenate your body and calm your mind. Set in an oasis of tranquility, you’ll be surrounded by elegant décor, soft lighting, and the gentle sounds of nature, ensuring a truly unforgettable escape.</p>
      </div>
    </div>
  )
}

export default Wellness;
