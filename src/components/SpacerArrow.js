import "./SpacerArrow.css"

import React from 'react';

function SpacerArrow() {
  return (
    <div className="arrow-container">
      <img
          src={require('../imgs/down-arrow.png')}
          alt="Arrow Down"
          className="arrow"
        />
    </div>
  )
}

export default SpacerArrow;
