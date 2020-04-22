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
            <p className="inverse short">
              In doing so, we can <span className="bold">catalyze</span> a{" "}
              <span className="bold">movement</span> toward{" "}
              <span className="bold">upward economic and social</span> mobility
              for those traditionally underrepresented in the innovation
              economy.
            </p>

            <p className="inverse  short">
              In this process we can build the next wave of innovative and
              socially conscious businesses led by diverse talent.
            </p>

            <h3 className="h1 inverse pl">The origins of “milpa”</h3>

            <p className="inverse short" className="inverse short">
              Traditionally, <span className="bold">milpa</span> is a
              crop-growing system used throughout Mesoamerica. The word milpa is
              derived from the Nahuatl word phrase mil-pa, which translates into
              “maize field”.
            </p>

            <p className="inverse short">
              However, the concept of milpa transcends a system of agriculture.
              It is a{" "}
              <span className="bold">
                sociocultural construct that involves a deep community
                relationship.
              </span>
            </p>
            <p className="inverse short">
              It has been noted that “the making of milpa is the central, most
              sacred act, one which binds together the family, the community,
              the universe…[it] forms the core institution of Indian society in
              Mesoamerica and its religious and social importance often appear
              to exceed its nutritional and economic importance.”{" "}
              <em>
                <span className="bold">(Erinn Gilson, Sarah Kenehan)</span>
              </em>
            </p>

            <p className="inverse short">
              <span className="bold">
                This is why milpa perfectly embodies our work. It is rooted in
                history, tradition and pays tribute to the sacrifices made by
                our families as we aim to build generational wealth together -
                through scaling the businesses that sustain our livelihood, our
                communities, this country and our future.
              </span>
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
