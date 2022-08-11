import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import { Modal } from "../modal/modal";
import { login } from "../../store/session";
import { ReactComponent as Hamburger } from "../../images/hamburger.svg";
import CreateListingForm from "../listings/forms/CreateListingForm";
import UserMenu from "./UserMenu";
import "./navBar.css";
import logo from "../../images/Urbnb-Logo.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showCreateListingModal, setShowCreateListingModal] = useState(false);

  const demoLogIn = () => {
    dispatch(login("demo@aa.io", "password"));
    history.push("/")
  };

  const createNewListing = () => {
    setShowCreateListingModal(true)
  };

  const closeUserMenu = (e) => {
    if (e.target.innerHTML === "Log in") {
      setShowLoginModal(true);
      return setShowUserMenu(false);
    }

    if (e.target.innerHTML === "Sign up") {
      setShowSignUpModal(true);
      return setShowUserMenu(false);
    }

    if (e.target.innerHTML === "Log out") {
      dispatch(logout());
      setShowSignUpModal(false);
      setShowLoginModal(false);
      history.push("/")
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
              <img id="logo-image" src={logo} alt="Urbnb Logo" />
            </NavLink>
          </p>
          <div className="nav-bar-right">
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
          </div>
          {showLoginModal && (
            <Modal onClose={() => setShowLoginModal(false)}>
              <LoginForm setShowLoginModal={setShowLoginModal}/>
            </Modal>
          )}
          {showSignUpModal && (
            <Modal onClose={() => setShowSignUpModal(false)}>
              <SignUpForm setShowSignUpModal={setShowSignUpModal}/>
            </Modal>
          )}
        </div>
      )}

      {/* Logged IN user menu */}
      {user && (
        <div className="nav-bar">
          <p className="nav-item">
            <NavLink to="/" exact={true} activeClassName="active">
              <img id="logo-image" src={logo} alt="Urbnb Logo" />
            </NavLink>
          </p>
          <div className="nav-bar-right">
            <button
              className="nav-item"
              id="demo-user"
              onClick={createNewListing}
            >
              New Listing
            </button>
            {showCreateListingModal && (
            <Modal onClose={() => setShowCreateListingModal(false)}>
              <CreateListingForm user={user} setShowCreateListingModal={setShowCreateListingModal}/>
            </Modal> )}
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
          </div>
        </div>
      )}
      {showUserMenu && <UserMenu user={user} />}
    </nav>
  );
};

export default NavBar;
