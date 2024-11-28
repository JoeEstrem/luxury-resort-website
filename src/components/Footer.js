import "./Footer.css"

import React from 'react';

function Footer() {
  return (
  <div className="footer-master-container">
    <div className="footer-container">
      <p className="footer-text">Setsuka is a concept of a luxury resort and is not an actual development.</p>
      <div className="footer-icon-container">
        <a href="https://joeestrem.me" target="_blank" rel="noopener noreferrer">
          <img
              src={require('../svgs/circle-user-FCFCFC.svg').default}
              alt="Joe Estrem - Portfolio Website"
              className="footer-icon"
            />
          </a>
          <a href="https://github.com/JoeEstrem" target="_blank" rel="noopener noreferrer">
            <img
              src={require('../svgs/github-FCFCFC.svg').default}
              alt="Joe Estrem - GitHub"
              className="footer-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/joeestrem/" target="_blank" rel="noopener noreferrer">
            <img
              src={require('../svgs/linkedin-FCFCFC.svg').default}
              alt="Joe Estrem - LinkedIn"
              className="footer-icon"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
