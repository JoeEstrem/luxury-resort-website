import "./NavBar.css"

import React from 'react';

function NavBar() {
  return (
    <div className="navbar-master-container">
      <div className="navbar-container">
        <p className="setsuka">Setsuka</p>
        <div className="navbar-menu-items">
          <button className="menu-item">Introduction</button>
          <button className="menu-item">Accommodation</button>
          <button className="menu-item">Inquire</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
