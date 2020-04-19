import React, { useState } from "react";

const Mid = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mid-section">
      <div className="content">
        <h2 className="h1 inverse pl">our mission</h2>
        <p className="inverse short">
          At <strong>milpa</strong>, our mission is to honor our culture by
          rooting our principals in tradition while driving the next wave of
          innovative ideas built by diverse founders. We do this by creating a{" "}
          <span className="bold">comprehensive economic ecosystem</span> that
          brings our community together and provides the resources necessary to
          scale.
        </p>
        {!open && (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
            className="readmore inverse"
          >
            read more
          </p>
        )}
        {open && (
          <>
            <p className="inverse">
              In doing so, we can <span className="bold">catalyze</span> a{" "}
              <span className="bold">movement</span> toward{" "}
              <span className="bold">upward economic and social</span> mobility
              for those traditionally underrepresented in the innovation
              economy.
            </p>

            <p className="inverse">
              In this process we can build the next wave of innovative and
              socially conscious businesses led by diverse talent.
            </p>
          </>
        )}
      </div>
      <div className="quote">
        <p>
          <em>
            “milpa is a socioeconomic movement in the continuous pursuit of
            knowledge-driven action” - Veronica Aguilar, Founder
          </em>
        </p>
      </div>
    </div>
  );
};

export default Mid;
