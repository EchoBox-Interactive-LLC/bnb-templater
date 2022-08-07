import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import { login } from "../../store/session";
import { ReactComponent as Hamburger } from "../../images/hamburger.svg";
import UserMenu from "./UserMenu";
import "./navBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [showUserMenu, setShowUserMenu] = useState(false);

  const demoLogIn = () => {
    dispatch(login("demo@aa.io", "password"));
  };

  const openUserMenu = () => {
    if (!showUserMenu) return setShowUserMenu(true);
  };

  const closeUserMenu = (e) => {
    if (
      e.target.classList.contains("user-menu") ||
      e.target.classList.contains("hamburger-icon") ||
      e.target.classList.contains("avatar-icon")
    )
      return;
    setShowUserMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeUserMenu);
    return () => document.removeEventListener("mousedown", closeUserMenu);
  }, [showUserMenu]);

  return (
    <nav>
      {/* Logged OUT user menu */}
      {!user && (
        <div className="nav-bar">
          <p className="nav-item">
            <NavLink to="/" exact={true} activeClassName="active">
              CloneBnB
            </NavLink>
          </p>
          <p className="nav-item">
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </p>
          <p className="nav-item">
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </p>
          <button className="nav-item" id="demo-user" onClick={demoLogIn}>
            Demo User
          </button>
          <div onClick={openUserMenu} className="user-menu">
            <div className="hamburger-icon">
              <Hamburger />
            </div>
            <div>
              <img
                className="avatar-icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&usqp=CAU"
                alt="default avatar"
              />
            </div>
          </div>
        </div>
      )}

      {/* Logged IN user menu */}
      {user && (
        <div className="nav-bar">
          <p className="nav-item">
            <NavLink to="/" exact={true} activeClassName="active">
              CloneBnB
            </NavLink>
          </p>
          <div onClick={openUserMenu} className="user-menu">
            <div className="hamburger-icon">
              <Hamburger />
            </div>
            {user && (
              <div>
                <img
                  className="avatar-icon"
                  src={user.avatar}
                  alt="user avatar"
                />
              </div>
            )}
          </div>
          <p className="nav-item">
            <NavLink to="/create" exact={true} activeClassName="active">
              New Listing
            </NavLink>
          </p>
          <p className="nav-item">
            <LogoutButton />
          </p>
        </div>
      )}
      {showUserMenu && <UserMenu user={user} />}
    </nav>
  );
};

export default NavBar;
