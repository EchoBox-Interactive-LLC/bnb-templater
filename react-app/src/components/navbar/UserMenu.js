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
          <div className="user-menu-div">
            <button type="button" className="user-menu-item">
              Trips
            </button>
          </div>
          <div className="user-menu-div" id="manage-listings-container">
            <button id="manage-listings" type="button" className="user-menu-item">
              Manage listings
            </button>
          </div>
          <div className="user-menu-div">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
