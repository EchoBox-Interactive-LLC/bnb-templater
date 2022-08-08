import React from "react";
import "./userMenu.css";

const UserMenu = () => {
  return (
    <div className="user-menu-container">
      <div className="user-menu-div">
        <button id="log-in" type="button" className="user-menu-item">
          Log in
        </button>
      </div>
      <div className="user-menu-div">
        <button id="sign-up" type="button" className="user-menu-item">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
