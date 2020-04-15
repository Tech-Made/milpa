import React from "react";
import logoblack from "../../../assets/logos/logo-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Top = () => {
  return (
    <>
      <img className="home-logo" src={logoblack} alt="milpa" />
      <p className="slogan">
        Socioeconomic movement in the continuous pursuit of knowledge-driven
        action
      </p>
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

      <div className="topbox">
        <p>
          <strong>Strategy consulting firm</strong> dedicated to scaling diverse
          ventures in addition to supporting nonprofits and government agencies
          working with diverse entrepreneurs and communities
        </p>
      </div>
    </>
  );
};

export default Top;
