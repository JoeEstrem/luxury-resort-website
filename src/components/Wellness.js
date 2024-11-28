import "./Wellness.css"

import React from 'react';

function Wellness() {
  return (
    <div className="wellness-container">
      <img
        src={require('../imgs/Onsen-pexels-yaroslav-shuraev-7041568.jpg')}
        alt="Wellness at Setsuka"
        className="wellness-img"
      />
      <div className="wellness-text">
        <h3>Wellness</h3>
        <p>Recover with tranquil massages & warming onsens.</p>
      </div>
    </div>
  )
}

export default Wellness;
