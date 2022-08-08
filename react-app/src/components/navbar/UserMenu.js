import React from "react";
import LogoutButton from "../auth/LogoutButton";
import "./userMenu.css";

const UserMenu = ({ user }) => {
  return (
    <div>
      {/* Logged OUT user menu buttons */}
      {!user && (
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
      )}

      {/* Logged IN user menu buttons */}
      {user && (
        <div className="user-menu-container-two">
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
