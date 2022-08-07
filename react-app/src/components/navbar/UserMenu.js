import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import { Modal } from "../modal/modal";
import "./userMenu.css";

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="user-menu-container">
      <p className="user-menu-item">
        <NavLink to="/login" exact={true} activeClassName="active">
          Login
        </NavLink>
      </p>
      <p className="user-menu-item">
        <NavLink to="/sign-up" exact={true} activeClassName="active">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default UserMenu;
