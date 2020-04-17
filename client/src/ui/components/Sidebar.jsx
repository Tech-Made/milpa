import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a
        style={{ color: "#fafafa" }}
        className="igIcon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/startinginhermosa/?hl=en"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        style={{ color: "#fafafa" }}
        className="igIcon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/groups/453436198776062/"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        style={{ color: "#fafafa" }}
        className="igIcon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/veronica-aguilar-b01288140/"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default Sidebar;
