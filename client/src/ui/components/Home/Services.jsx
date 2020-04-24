import React from "react";

const Services = () => {
  return (
    <div className="services-section">
      <div className="top-bg">
        <div className="content">
          <h2 className="inverse h1 pl">Our Services</h2>

          <div style={{ marginBottom: 2 }}>
            <p className="inverse">
              We believe everyone should have the basic knowledge and resources
              necessary to build and run a{" "}
              <span className="bold">scalable business</span> that is
              revenue-driven. These financial fundamentals are not typically
              taught to us in the traditional school system which perpetuates
              systemic socioeconomic inequity.{" "}
            </p>
          </div>

          <br />

          <p className="inverse">
            <em>This is especially clear for Latinx-owned businesses.</em>
          </p>

          <div className="quotecontainer">
            <p className="inverse">
              <em>
                <span className="quote">
                  “Over the past 10 years, the number of Latin[x]-owned
                  businesses grew 34% compared to 1% for all business owners in
                  the U.S. However, Latin[x]-owned companies tend to remain
                  smaller than white-owned firms, with average revenues of $1.2
                  million per year for Latin[x]-owned firms compared to $2.3
                  million for non-Latin[x]-owned firms” <br />- 2019 STATE OF
                  LATINO ENTREPRENEURSHIP REPORT by Stanford Latino
                  Entrepreneurship Initiative
                </span>
              </em>
            </p>
          </div>

          <h3 className="inverse">Scaling Your Business</h3>
          <p className="inverse">
            Our strategic advising is aimed to scale your business whether
            you’re interested in revenue growth, corporate connections and/or
            financial investments. <br />
            We believe everyone should have a basic understanding of what you
            need to build a sustainable business. This is typically not taught
            to us in traditional school systems which perpetuates systemic
            socioeconomic inequity.
          </p>

          <p>
            We aim to provide the knowledge and resources necessary to achieve
            your full financial potential. Our strategic advising is aimed to
            scale your business whether you’re interested in revenue growth,
            corporate connections and/or financial investments.{" "}
          </p>
        </div>
      </div>
      <div className="content">
        <div className="price-section">
          <div className="price-box">
            <div className="header">
              <img src="https://i.ibb.co/rsZVmkf/1.png" />
              <p>Basic</p>
              <p className="top-line">Community Resources</p>
            </div>
            <div className="price-content">
              <p className="details">
                INTRO package giving your business basic business materials to
                get you started
              </p>
              <div className="items">
                <p className="list-item">Business Model Template</p>
              </div>
              <div className="items">
                <p className="list-item">Financial FAQs</p>
              </div>
              <div className="items">
                <p className="list-item">One Pager Template</p>
              </div>
            </div>
          </div>
          <div className="price-box">
            <div className="header">
              <img src="https://i.ibb.co/9yqDzG6/3.png" />
              <p>Mid Level</p>
              <p className="top-line">Refine Your Model</p>
            </div>
            <div className="price-content">
              <p className="details">
                UPGRADED package provides templates to further develop your
                business structure and begin to create digital assets you can
                share with prospective growth partners.
              </p>
              <div className="items">
                <p className="list-item">Elevated Business Model</p>
              </div>
              <div className="items">
                <p className="list-item">Template One Pager</p>
              </div>
              <div className="items">
                <p className="list-item">Template Pitch Deck</p>
              </div>
              <div className="items">
                <p className="list-item">Operating Agreement Template</p>
              </div>
              <div className="items">
                <p className="list-item">Financial FAQ’s</p>
              </div>
              <div className="items">
                <p className="list-item">Business Assessment</p>
              </div>
            </div>
          </div>
          <div className="price-box">
            <div className="header">
              <img src="https://i.ibb.co/tpJNK06/4.png" />
              <p>Next Level</p>
              <p className="top-line">Specialized Consulting </p>
            </div>
            <div className="price-content">
              <p className="details">
                When you are ready to scale up - we provide specialized
                consulting where we become part of your team and we don’t stop
                until you reach your dreams.
              </p>
            </div>
          </div>
        </div>
        <p className="bestfit-text">
          To determine how we can best work with you
        </p>
        <div className="center">
          <a
            href="https://calendly.com/veronica-milpa/free-consultation?month=2020-04"
            target="_blank"
          >
            <button className="btn-primary">Schedule Free Consultation</button>
          </a>
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
