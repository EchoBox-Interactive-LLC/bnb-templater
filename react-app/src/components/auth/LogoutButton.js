import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./logoutButton.css";

const LogoutButton = () => {
  return (
    <div className="user-menu-div-two">
      <div className="user-menu-item">
        <button id="logout-button">Log out</button>
      </div>
    </div>
  );
};

export default LogoutButton;
