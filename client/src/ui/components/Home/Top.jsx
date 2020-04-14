import React from "react";
import logoblack from "../../../assets/logos/logo-black.png";

const Top = () => {
  return (
    <>
      <img className="home-logo" src={logoblack} alt="milpa" />
      <p className="slogan">
        Socioeconomic movement in the continuous pursuit of knowledge-driven
        action
      </p>
      <div className="sidebar"></div>

      <div className="topbox">
        <p>
          <strong>Strategy consulting firm</strong> dedicated to scaling diverse
          ventures in addition to supporting nonprofits and government agencies
          working with diverse entrepreneurs and communities
        </p>
      </div>
    </>
  );
};

export default Top;
