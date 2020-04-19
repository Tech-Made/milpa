import React, { useState } from "react";

const Principles = () => {
  const [r1, setR1] = useState(false);
  const [r2, setR2] = useState(false);
  const [r3, setR3] = useState(false);

  return (
    <div className="principles-section">
      {/* <em> */}
      <p className="header">
        everything we do is <span>rooted</span> in these <span>principles</span>
      </p>
      {/* </em> */}
      <div className="line"></div>
      <div className="content">
        <div
          onClick={() => setR1(!r1)}
          onMouseEnter={() => setR1(true)}
          onMouseLeave={() => setR1(false)}
          className={r1 && "content-border"}
        >
          <h2 className="h2">reimagined 💡</h2>
          <p style={{ visibility: r1 ? "initial" : "hidden" }}>
            In order to disrupt systematic inequalities - we need to reimagine
            the path forward with unconventional yet straightforward solutions.
          </p>
        </div>
        <div
          onClick={() => setR2(!r2)}
          onMouseEnter={() => setR2(true)}
          onMouseLeave={() => setR2(false)}
          className={r2 && "content-border"}
        >
          <h2 className="h2">relevant 🎯</h2>
          <p style={{ visibility: r2 ? "initial" : "hidden" }}>
            We seek to solve issues that are immediate to our community through
            culturally relevant strategies.
          </p>
        </div>
        <div
          onClick={() => setR3(!r3)}
          onMouseEnter={() => setR3(true)}
          onMouseLeave={() => setR3(false)}
          className={r3 && "content-border"}
        >
          <h2 className="h2">reliable 🤝</h2>
          <p style={{ visibility: r3 ? "initial" : "hidden" }}>
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
