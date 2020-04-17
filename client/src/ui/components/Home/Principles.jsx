import React from "react";

const Principles = () => {
  return (
    <div className="principles-section">
      {/* <em> */}
      <p className="header">
        everything we do is <span>rooted</span> in these <span>principles</span>
      </p>
      {/* </em> */}
      <div className="line"></div>
      <div className="content">
        <div>
          <h2 className="h2">reimagined 💡</h2>
          <p>
            In order to disrupt systematic inequalities - we need to reimagine
            the path forward with unconventional yet straightforward solutions.
          </p>
        </div>
        <div>
          <h2 className="h2">relevant 🎯</h2>
          <p>
            We seek to solve issues that are immediate to our community through
            culturally relevant strategies.
          </p>
        </div>
        <div>
          <h2 className="h2">reliable 🤝</h2>
          <p>
            Trust is the base of our movement. As we solve big problems we want
            you to pursue even BIGGER dreams with us.{" "}
          </p>
        </div>
      </div>
      {/* <h3 className="inverse pl">reimagined</h3>
        <p className="inverse">
          In order to disrupt systematic inequalities - we need to reimagine the
          path forward with unconventional yet straightforward solutions.
        </p>

        <h3 className="inverse pl">relevant</h3>
        <p className="inverse">
          We seek to solve issues that are immediate to our community through
          culturally relevant strategies.
        </p>

        <h3 className="inverse pl">reliable</h3>
        <p className="inverse">
          Trust is the base of our movement. As we solve big problems we want
          you to pursue even BIGGER dreams with us.
        </p> */}
    </div>
  );
};

export default Principles;
