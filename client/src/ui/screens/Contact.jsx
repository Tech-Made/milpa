import React from "react";
import "../../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="info">
        <h3 className="inverse">Contact Us</h3>
        <p className="location">Chicago</p>

        <p className="message-text">Message us</p>
        <p className="message-text">Veronica Aguilar</p>
        <p className="message-text">veronica@hubmilpa.com</p>
        <div className="socials">
          <a
            href="https://www.instagram.com/startinginhermosa/?hl=en"
            target="_blank"
          >
            Insta
          </a>
          <a
            href="https://www.facebook.com/groups/453436198776062/"
            target="_blank"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/veronica-aguilar-b01288140/"
            target="_blank"
          >
            LinkedIn
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
