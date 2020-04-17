import React from "react";
import logoblack from "../../../assets/logos/logo-black.png";
import Sidebar from "../../components/Sidebar";

const Top = () => {
  return (
    <>
      <img className="home-logo" src={logoblack} alt="milpa" />
      <p className="slogan">
        socioeconomic movement in the continuous pursuit of knowledge-driven
        action
      </p>
      <Sidebar />

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
