import React from "react";
import Sidebar from "../../components/Sidebar";

const Top = () => {
  return (
    <div className="top">
      <div className="row">
        <div className="blackbar" />
        <h2 className="founder">founder</h2>
        <div className="blackbar" />
      </div>

      <div className="roles">
        <div className="role">
          <em>
            <p>Latina in Tech</p>
          </em>
        </div>
        <div className="role">
          <em>
            <p>Chicago Native</p>
          </em>
        </div>
        <div className="role">
          <em>
            <p>Unconventional Strategist</p>
          </em>
        </div>
      </div>
      <Sidebar />
      <div className="me">
        <div>
          <img
            className="avatar"
            src="https://i.ibb.co/xJjnq59/Screen-Shot-2020-04-16-at-10-05-54-PM.png"
            alt="Veronica"
          />
        </div>
        <div className="veronica">
          <h2>Veronica Aguilar</h2>
          <p>
            Experienced technology insider with experience in developing
            startups and connecting industry leaders to emerging entrepreneurs.
          </p>
          <a href="#readSection">
            <div style={{ marginTop: "12px" }}>
              <button className="btn-primary">Read More</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
