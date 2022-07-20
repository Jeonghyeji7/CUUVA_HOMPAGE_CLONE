import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logimg from '../../images/logo_white.png'

function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* 로고 */}
          <div className="nav-bar-top">
            <Link to="/" className="navbar-logo">
              <img src={logimg} alt="no image"></img>
            </Link>
          </div>

          <div className="navbar-box">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-links">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-links">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/core-values" className="nav-links">
                  Core Values
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-footer" className="nav-links">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
