import React, { useCallback } from "react";
import "./Navbar.css";
import logoImg from '../../images/logo_white.png'

function Navbar(props) {
  const {
    scrollToSlide,
  } = props;

  const handleScroll = useCallback((index) => () => {
    scrollToSlide(index);
  }, []);

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-bar-top">
            <a onClick={handleScroll(0)} className="navbar-logo">
              <img src={logoImg} alt="Cuuva Logo Image"/>
            </a>
          </div>

          <div className="navbar-box">
            <ul className="nav-menu">
              <li className="nav-item">
                <a onClick={handleScroll(0)} className="nav-links">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a onClick={handleScroll(1)} className="nav-links">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a onClick={handleScroll(2)} className="nav-links">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a onClick={handleScroll(3)} className="nav-links">
                  Core Values
                </a>
              </li>
              <li className="nav-item">
                <a onClick={handleScroll(4)} className="nav-links">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
