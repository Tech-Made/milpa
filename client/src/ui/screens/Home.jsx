import React from "react";
import "../../styles/home.scss";
import Top from "../components/Home/Top";
import Mid from "../components/Home/Mid";
import Principles from "../components/Home/Principles";
import Services from "../components/Home/Services";
import Partners from "../components/Home/Partners";
import Community from "../components/Home/Community";
import Origins from "../components/Home/Origins";

const Home = () => {
  return (
    <div className="home">
      <Top />
      <div id="about">
        <Mid />
      </div>
      <Principles />
      <div id="services">
        <Services />
      </div>
      <Partners />
      <div id="community">
        <Community />
      </div>
      <div id="origins">
        <Origins />
      </div>
    </div>
  );
};

export default Home;
