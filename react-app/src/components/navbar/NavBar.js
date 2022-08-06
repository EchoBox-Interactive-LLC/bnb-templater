import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import { login } from "../../store/session";
import { ReactComponent as Hamburger } from "../../images/hamburger.svg"
import "./navBar.css"

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const demoLogIn = () => {
    dispatch(login("demo@aa.io", "password"));
  };

  return (
    <nav>
      {!user && (
        <div className="nav-bar">
          <p className="nav-item">
          <NavLink to="/" exact={true} activeClassName="active">
            CloneBnB
          </NavLink>
        </p>
          <button className="nav-item" onClick={demoLogIn}>
          Demo User
        </button>
        <div>
          <Hamburger />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&usqp=CAU" alt="default avatar" />
        </div>
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
        </div>
      )}
    {user && (
      <div className="nav-bar">
        <p className="nav-item">
          <NavLink to="/" exact={true} activeClassName="active">
            CloneBnB
          </NavLink>
        </p>
        <div>
          <Hamburger />
          {user && (<img src={user.avatar} alt="user avatar" />)}
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
    </nav>
  );
    };

export default NavBar;
