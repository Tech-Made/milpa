import React from "react";

const Services = () => {
  return (
    <div className="services-section">
      <div className="content">
        <h2 className="h1">Our Services</h2>

        <h3>For Ventures</h3>
        <p>
          Our strategic advising is aimed to scale your business whether you’re
          interested in revenue growth, corporate connections and/or financial
          investments. <br />
          We believe everyone should have a basic understanding of what you need
          to build a sustainable business. This is typically not taught to us in
          traditional school systems which perpetuates systemic socioeconomic
          inequity.
        </p>
        <div className="price-section">
          <div className="price-box">
            <div className="header">
              <p>BASIC: Community Resources</p>
            </div>
            <div className="content">
              <p className="inverse details">
                Download your INTRO package for building a revenue driven
                business.
              </p>
              <ul>
                <li>Business Model</li>
                <li>Template</li>
              </ul>
            </div>
          </div>
          <div className="price-box">
            <div className="header">
              <p>MID LEVEL: Refine Your Model</p>
            </div>
            <div className="content">
              <p className="inverse details">
                Download your UPGRADED package for building a revenue driven
                business.
              </p>
              <ul>
                <li>Business Model</li>
                <li>One Pager</li>
                <li>Pitch Deck</li>
                <li>Operating Agreement Template</li>
                <li>Tax FAQ + Check-List</li>
                <li>15 minute call </li>
              </ul>
            </div>
          </div>
          <div className="price-box">
            <div className="header">
              <p>NEXT LEVEL: Specialized Consulting </p>
            </div>
            <div className="content">
              <p className="inverse details">
                Do you have the basics? Are you ready to scale your business?{" "}
                <strong>Schedule a FREE 1:1 business evaluation.</strong>
              </p>
              <ul>
                <li>Business Model</li>
                <li>One Pager</li>
                <li>Pitch Deck</li>
                <li>Operating Agreement Template</li>
                <li>Tax FAQ + Check-List</li>
                <li>15 minute call </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="bestfit-text">
          If we are not the best fit for you - we will connect you to our
          ecosystem partners to ensure you have the best support available to
          you.
        </p>
        <div className="center">
          <button className="btn-primary">Schedule Free Consultation</button>
        </div>

        <div className="npo">
          <h3>For Nonprofits + Government Agencies </h3>
          <p>
            Our strategic advising is aimed to scale your diverse business
            programs to attract and engage your target community while
            connecting to your larger ecosystem partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
