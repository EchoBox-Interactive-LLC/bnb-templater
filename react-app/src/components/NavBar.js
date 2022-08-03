import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "./auth/LogoutButton";
import { login } from "../store/session";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const demoLogIn = () => {
    dispatch(login("demo@aa.io", "password"));
  };

  return (
    <nav>
      {!user && (
        <div>
          <h3>CloneBnB</h3>
          <p>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </p>
          <button onClick={demoLogIn}>
          Demo User
        </button>
          <p>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </p>
          <p>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </p>
        </div>
      )}
    {user && (
      <div>
        <h3>CloneBnB</h3>
        <p>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </p>
        <p>
          <LogoutButton />
        </p>
      </div>
    )}
    </nav>
  );
    };

export default NavBar;
