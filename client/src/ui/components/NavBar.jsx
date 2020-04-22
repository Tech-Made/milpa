import React from "react";
import "../../styles/navbar.scss";
import logoblack from "../../assets/logos/logo-black.png";
import provideScrollPosition from "react-provide-scroll-position";
import { Link } from "react-router-dom";

const NavBar = ({ scrollTop, scrollLeft }) => {
  console.log("visibility: scrollTop < 200:", scrollTop < 200);

  const dontShow =
    window.location.pathname.includes("founder") ||
    window.location.pathname.includes("contact") ||
    window.innerWidth < 400;

  return (
    <nav class="navbar">
      <input type="checkbox" id="nav" class="hidden" />
      <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
      </label>
      <div class="nav-wrapper">
        <ul>
          <li>
            <img
              // style={{
              //   visibility: scrollTop < 200 ? "hidden" : "initial"
              // }}
              className={`nav-logo ${scrollTop < 200 ? "navHide" : "navShow"}`}
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
            {!dontShow && (
              <>
                <li>
                  <a class="header-text hover" href="#about">
                    about
                  </a>
                </li>
                <li>
                  <a class="header-text hover" href="#services">
                    services
                  </a>
                </li>
              </>
            )}

            <li>
              <a href="/founder" class="header-text hover">
                founder
              </a>
            </li>
            {!dontShow && (
              <li>
                <a class="header-text hover" href="#community">
                  community
                </a>
              </li>
            )}
            <li>
              <a class="header-text hover" href="/contact">
                contact
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default provideScrollPosition(NavBar);
