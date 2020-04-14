import React from "react";
import "../../styles/home.scss";
import Top from "../components/Home/Top";
import Mid from "../components/Home/Mid";
import Services from "../components/Home/Services";
import Partners from "../components/Home/Partners";
import Community from "../components/Home/Community";

const Home = () => {
  return (
    <div className="home">
      <Top />
      <Mid />
      <Services />
      <Partners />
      <Community />
    </div>
  );
};

export default Home;
