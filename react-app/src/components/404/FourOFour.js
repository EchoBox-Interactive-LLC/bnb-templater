import React from "react";
import { NavLink } from "react-router-dom";
import oopsRobot from "../../images/404.webp";
import "./fourOFour.css";

function FourOFour() {
  return (
    <main>
      <div className="page-not-found-container">
        <h1 className="page-not-found-title">Page Not Found!</h1>
        <img id="four-o-four-img" src={oopsRobot} alt="404 Robot"></img>
        <NavLink to="/">
          <h3 className="page-not-found-home-link">Back to exploring</h3>
        </NavLink>
      </div>
    </main>
  );
}

export default FourOFour;
