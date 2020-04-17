import React from "react";
import Sidebar from "../../components/Sidebar";

const Top = () => {
  return (
    <div className="top">
      <h2 className="founder">founder</h2>
      <div className="roles">
        <div className="role">
          <em>
            <p>latina in tech</p>
          </em>
        </div>
        <div className="role">
          <em>
            <p>chicago native</p>
          </em>
        </div>
        <div className="role">
          <em>
            <p>unconventional strategist</p>
          </em>
        </div>
      </div>
      <Sidebar />
      <div className="me">
        <div className="veronica">
          <h2>Veronica Aguilar</h2>
          <p>
            Experienced technology insider with experience in developing
            startups and connecting industry leaders to emerging entrepreneurs.
          </p>
          <a href="#readSection">
            <button className="btn-primary">Read More</button>
          </a>
        </div>
        <div>
          <img
            className="avatar"
            src="https://i.ibb.co/xJjnq59/Screen-Shot-2020-04-16-at-10-05-54-PM.png"
            alt="Veronica"
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
