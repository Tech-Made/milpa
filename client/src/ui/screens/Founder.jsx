import React from "react";
import "../../styles/founder.scss";
import Top from "../components/Founder/Top";
import Content from "../components/Founder/Content";

const Founder = () => {
  return (
    <div className="founder-page">
      <Top />
      <div className="line"></div>
      <div id="readSection">
        <Content />
      </div>
    </div>
  );
};

export default Founder;
