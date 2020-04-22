import React from "react";
import "../../styles/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="info">
        <h3 className="inverse">Contact Us</h3>
        <p className="location">Chicago</p>

        <p className="message-text">
          <span className="bold">Message us</span>
        </p>
        <p className="message-text">Veronica Aguilar</p>
        <p className="message-text">veronica@hubmilpa.com</p>
        <div className="socials">
          <a
            style={{ color: "#fafafa" }}
            className="igIcon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/veronica-aguilar-b01288140/"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
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
        </div>
      </div>
      <div
        className="calendly calendly-inline-widget"
        data-url="https://calendly.com/veronica-milpa/free-consultation"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
      ></script>
    </div>
  );
};

export default Contact;
