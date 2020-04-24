import React from "react";
import logo from "../../assets/logos/logo-white.png";
import "../../styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <img alt="Milpa" className="footer-logo" src={logo} />
      <p>
        <a style={{ color: "#f1f1f1" }} href="/contact">
          Contact
        </a>{" "}
        - veronica@milpaservices.com
      </p>
      {/* <a
          className="igIcon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/the_groveaurora"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a> */}
    </footer>
  );
};

export default Footer;
