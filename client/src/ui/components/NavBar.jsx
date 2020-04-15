import React from "react";
import "../../styles/navbar.scss";
import logoblack from "../../assets/logos/logo-black.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar">
      <input type="checkbox" id="nav" class="hidden" />
      <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
      </label>
      {/* {{!-- <div class="logo hidden">
    </div> --}} */}
      <div class="nav-wrapper">
        <ul>
          <li>
            <img
              className="nav-logo"
              target="_blank"
              rel="noopener noreferrer"
              alt="milpa"
              src={logoblack}
            />
          </li>
          <div>
            <li>
              <a class="header-text hover" href="/">
                home
              </a>
            </li>
            <li>
              <a class="header-text hover" target="_onblank" href="">
                about
              </a>
            </li>
            <li>
              <a class="header-text hover" href="#projects-section">
                community
              </a>
            </li>
            <li>
              <Link to="/founder" class="header-text hover">
                founder
              </Link>
            </li>
            <li>
              <a class="header-text hover" href="#projects-section">
                services
              </a>
            </li>
            <li>
              <a class="header-text hover" href="#projects-section">
                contact
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
