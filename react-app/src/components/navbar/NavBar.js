import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import { Modal } from "../modal/modal";
import { login } from "../../store/session";
import { ReactComponent as Hamburger } from "../../images/hamburger.svg";
import UserMenu from "./UserMenu";
import "./navBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const LoginModalFunc = () => {
    setShowLoginModal(true);
  };

  const SignUpModalFunc = () => {
    setShowSignUpModal(true);
  };

  const demoLogIn = () => {
    dispatch(login("demo@aa.io", "password"));
  };

  const closeUserMenu = (e) => {
    if (e.target.innerHTML === "Log in") {
      setShowLoginModal(true)
      return setShowUserMenu(false);
    }

    if (e.target.innerHTML === "Sign up") {
      setShowSignUpModal(true)
      return setShowUserMenu(false);
    }

    if (
      e.target.classList.contains("user-menu") ||
      e.target.classList.contains("hamburger-icon") ||
      e.target.classList.contains("avatar-icon") ||
      e.target.classList.contains("div-avatar-icon") ||
      e.target.classList.contains("user-menu-options") ||
      e.target.tagName === "svg" ||
      e.target.tagName === "path"
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
          <div
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="user-menu"
          >
            <div className="hamburger-icon">
              <Hamburger />
            </div>
            <div className="div-avatar-icon">
              <img
                className="avatar-icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&usqp=CAU"
                alt="default avatar"
              />
            </div>
          </div>
          {showLoginModal && (
            <Modal onClose={() => setShowLoginModal(false)}>
              <LoginForm />
            </Modal>
          )}
          {showSignUpModal && (
            <Modal onClose={() => setShowSignUpModal(false)}>
              <SignUpForm />
            </Modal>
          )}
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
          <div
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="user-menu"
          >
            <div className="hamburger-icon">
              <Hamburger />
            </div>
            {user && (
              <div className="div-avatar-icon">
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
