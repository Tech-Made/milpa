import React from "react";

const Services = () => {
  return (
    <div className="services-section">
      <div className="top-bg">
        <div className="content">
          <h2 className="inverse h1">For scaling your business</h2>

          <h3 className="inverse">For Ventures</h3>
          <p className="inverse">
            Our strategic advising is aimed to scale your business whether
            you’re interested in revenue growth, corporate connections and/or
            financial investments. <br />
            We believe everyone should have a basic understanding of what you
            need to build a sustainable business. This is typically not taught
            to us in traditional school systems which perpetuates systemic
            socioeconomic inequity.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="price-section">
          <div className="price-box">
            <div className="header">
              <p>Basic</p>
              <p className="top-line">Community Resources</p>
            </div>
            <div className="price-content">
              <p className="details">
                Download your INTRO package for building a revenue driven
                business.
              </p>
              <div className="items">
                <p className="list-item">Business Model Template</p>
              </div>
              <div className="items">
                <p className="list-item">One Pager Template</p>
              </div>
              <div className="items">
                <p className="list-item">Tax FAQ</p>
              </div>
            </div>
          </div>
          <div className="price-box">
            <div className="header">
              <p>Mid Level</p>
              <p className="top-line">Refine Your Model</p>
            </div>
            <div className="price-content">
              <p className="details">
                Download your UPGRADED package for building a revenue driven
                business.
              </p>
              <div className="items">
                <p className="list-item">Business Model</p>
              </div>
              <div className="items">
                <p className="list-item">One Pager Pitch Deck</p>
              </div>
              <div className="items">
                <p className="list-item">Operating Agreement Template</p>
              </div>
              <div className="items">
                <p className="list-item">Tax FAQ + Check-List</p>
              </div>
              <div className="items">
                <p className="list-item">15 minute call</p>
              </div>
            </div>
          </div>
          <div className="price-box">
            <div className="header">
              <p>Next Level</p>
              <p className="top-line">Specialized Consulting </p>
            </div>
            <div className="price-content">
              <p className="details">
                Do you have the basics? Are you ready to scale your business?
                <strong>Schedule a FREE 1:1 business evaluation.</strong>
              </p>
              <div className="items">
                <p className="list-item">
                  Build & understand your business model
                </p>
              </div>
              <div className="items">
                <p className="list-item">Evaluate your Market</p>
              </div>
              <div className="items">
                <p className="list-item">
                  Sales Optimization: Generate Predictive Revenue
                </p>
              </div>
              <div className="items">
                <p className="list-item">
                  Connect to the greater business ecosystem
                </p>
              </div>
              <div className="items">
                <p className="list-item">Tax review with leading CPA</p>
              </div>
              <div className="items">
                <p className="list-item">
                  Curate Pitch Deck for future investments and partnership
                  proposals
                </p>
              </div>
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
