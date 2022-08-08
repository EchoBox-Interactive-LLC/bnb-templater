import React, { useState } from "react";
import "./userMenu.css";

const UserMenu = ({ user }) => {
  return (
    <div className="user-menu-container">
      <button type="button" className="user-menu-item">
        Login
      </button>
      <button type="button" className="user-menu-item">
        Sign Up
      </button>
    </div>
  );
};

export default UserMenu;
