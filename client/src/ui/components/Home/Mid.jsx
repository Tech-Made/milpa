import React, { useState } from "react";

const Mid = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mid-section">
      <div className="content">
        <h2 className="h1 inverse pl">what is milpa</h2>
        {open ? (
          <p className="inverse short">
            Our mission at milpa is to pay homage to our culture by rooting our
            principals in tradition while creating a comprehensive economic
            ecosystem that brings our community together to transcend the
            status-quo and build generational wealth. In doing so, we can
            catalyze a movement toward upward economic and social mobility for
            those traditionally underrepresented in the innovation economy. In
            this process we can build the next generation of socially conscious
            companies led by diverse talent.
          </p>
        ) : (
          <p className="inverse short">
            Our mission at milpa is to pay homage to our culture by rooting our
            principals in tradition while creating a comprehensive economic
            ecosystem that brings our community together to transcend the
            status-quo and build generational wealth.
          </p>
        )}

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
            <h3 className="inverse pl">history</h3>
            <p className="inverse">
              Traditionally, milpa is a crop-growing system used throughout
              Mesoamerica. The word milpa is derived from the natural word
              phrase mil-pa, which translates into “maize field”.
            </p>

            <h3 className="inverse pl">evolution</h3>
            <p className="inverse">
              It has been noted that “the making of milpa is the central, most
              sacred act, one which binds together the family, the community,
              the universe…[it] forms the core institution of Indian society in
              Mesoamerica and its religious and social importance often appear
              to exceed its nutritional and economic importance.” (Erinn Gilson,
              Sarah Kenehan)
            </p>
          </>
        )}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Mid;
