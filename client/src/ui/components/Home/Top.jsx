import React from "react";
import logoblack from "../../../assets/logos/logo-black.png";
import Sidebar from "../../components/Sidebar";

const Top = () => {
  return (
    <>
      <img className="home-logo" src={logoblack} alt="milpa" />
      <Sidebar />

      <div className="topbox">
        <p>
          <span className="bold">Strategy Consulting Firm</span> dedicated to
          scaling Latinx businesses in addition to supporting nonprofits and
          government agencies working to promote upward economic mobility for
          diverse entrepreneurs and communities.
        </p>
      </div>
    </>
  );
};

export default Top;
