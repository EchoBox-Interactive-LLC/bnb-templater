import React from "react";
import { NavLink } from "react-router-dom";
import "./fourOFour.css";

function FourOFour() {
  return (
    <main>
      <div className="page-not-found-container">
        <h1 className="page-not-found-title">404: Page Not Found!</h1>
        <NavLink to="/">
          <h3 className="page-not-found-home-link">Back to exploring</h3>
        </NavLink>
      </div>
    </main>
  );
}

export default FourOFour;
