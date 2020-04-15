import React from "react";

const Community = () => {
  return (
    <div className="partners-section">
      <h3>Community</h3>
      <p>
        Are you an entrepreneur looking to connect with other diverse founders?
      </p>
      <div className="content">
        <div className="partner">
          <p className="inverse">An entrepreneur dinner series</p>
          <p className="inverse">Join our Dinner Series. </p>
        </div>
        <div className="partner">
          <p className="inverse">
            Join our Private Facebook Group to share your ideas, ask for
            community input and simply see others hustling like you
          </p>
          <a
            href="https://www.facebook.com/groups/453436198776062/"
            target="_blank"
          >
            <button className="btn-primary">Join Here</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;
