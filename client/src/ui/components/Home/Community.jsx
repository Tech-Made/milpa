import React from "react";

const Community = () => {
  return (
    <div className="partners-section">
      <h3>Community</h3>
      <p style={{ textAlign: "center" }}>
        Are you an entrepreneur looking to connect with other diverse founders?
      </p>
      <div className="content">
        <a href="https://forms.gle/CecRfwEFcZdNMUeTA" target="_blank">
          <div className="partner">
            <p className="inverse title">Comida Familiar</p>
            <img src="https://i.ibb.co/D4r87ZH/dinner.png" />
            <div className="bottom">
              <p className="text">An entrepreneur dinner series </p>
              <p className="title">Join Here</p>
            </div>
          </div>
        </a>
        <a
          href="https://www.facebook.com/groups/453436198776062/"
          target="_blank"
        >
          <div className="partner">
            <p className="inverse title">Facebook Group</p>
            <img src="https://i.ibb.co/LZrDrSX/facebookbg.png" />
            <div className="bottom">
              <p className="text">
                Join our Private Facebook Group to share your ideas, ask for
                community input and simply see others hustling like you.
              </p>
              <p className="title">Join Here</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Community;

{
  /* <p className="inverse">An entrepreneur dinner series</p>
          <p className="inverse">Join our Dinner Series. </p> */
}

{
  /* 
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
        </div> */
}
