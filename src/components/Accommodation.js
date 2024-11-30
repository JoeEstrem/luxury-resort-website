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
      { threshold: 0.33 }
    );
    images.forEach((image) => observer.observe(image));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
    <div className="accommodation-container">
      <div className="accommodation-image-container">
        <img
          src={require('../imgs/Bed-3-pexels-chich-choe-design-328303649-13813465.jpg')}
          alt="Setsuka accommodation"
          className="side-image"
        />
        <img
          src={require('../imgs/Kitchen-pexels-ansar-muhammad-380085065-27562206.jpg')}
          alt="Setsuka accommodation"
          className="center-image"
        />
        <img
          src={require('../imgs/Bath--4.png')}
          alt="Setsuka accommodation"
          className="side-image"
        />

      </div>
      <div className="text-container">
        <h3>World-class Accommodation</h3>
        <p>Escape to unparalleled luxury in Japan’s premier ski resort, where world-class comfort meets the serenity of pristine alpine beauty. Immerse yourself in wellness, with private onsens and tranquil spaces designed to rejuvenate mind and body. Embrace the wonder of endless powder slopes and breathtaking mountain vistas, all from the comfort of your exclusive retreat.</p>
      </div>
    </div>

    <div className="room-types-container">
    <h3 className="white">Available Lodge Types</h3>
      <div className="room-type">
        <p className="p-room-type">One Bedroom</p>
        <p className="p-room-info">50sqm</p>
        <p className="p-room-info">1 bath</p>
        <p className="p-room-info">JPY 350,000,000~</p>
      </div>
      <div className="room-type">
        <p className="p-room-type">Two Bedroom</p>
        <p className="p-room-info">70sqm</p>
        <p className="p-room-info">2 bath</p>
        <p className="p-room-info">JPY 450,000,000~</p>
      </div>
      <div className="room-type">
        <p className="p-room-type">Three Bedroom</p>
        <p className="p-room-info">90sqm</p>
        <p className="p-room-info">2 bath</p>
        <p className="p-room-info">JPY 550,000,000~</p>
      </div>
      <div className="room-type">
        <p className="p-room-type">Four Bedroom</p>
        <p className="p-room-info">150sqm</p>
        <p className="p-room-info">5 bath</p>
        <p className="p-room-info">JPY 850,000,000~</p>
      </div>
      <button className="inquire-button">Inquire</button>
    </div>
  </div>
  )
}

export default Accomodation;
