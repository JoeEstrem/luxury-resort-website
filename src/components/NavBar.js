import "./NavBar.css"

import React from 'react';

function NavBar() {
  return (
    <div className="navbar-container">
      <p className="setsuka">Setsuka</p>
      <div className="navbar-menu-items">
        <button className="menu-item">Introduction</button>
        <button className="menu-item">Accomodation</button>
        <button className="menu-item">Inquire</button>
      </div>
    </div>
  )
}

export default NavBar;
