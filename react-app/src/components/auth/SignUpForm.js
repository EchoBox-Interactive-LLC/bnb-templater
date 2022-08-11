import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

import adveturer from "../../images/avatars/Urbnb-Adventurer.png";
import avatarStandard from "../../images/avatars/Urbnb-Avatar.png";
import couchPotatoe from "../../images/avatars/Urbnb-Couchpotatoe.png";
import explorer from "../../images/avatars/Urbnb-Explorer.png";
import traveler from "../../images/avatars/Urbnb-Traveler.png";
import voyager from "../../images/avatars/Urbnb-Voyager.png";
import wanderer from "../../images/avatars/Urbnb-Wanderer.png";


const SignUpForm = ({ setShowSignUpModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(avatarStandard);
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    } else {
      setErrors(["Password: The passwords entered do not match"]);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateAvatar = (e) => {
    setAvatar(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  const cancelSignUp = () => {
    setShowSignUpModal(false);
  };

  return (
    <form onSubmit={onSignUp}>
      <div className="modal-top">
        <button className="modal-cancel" onClick={cancelSignUp} type="button">
          X
        </button>
        <h3 className="modal-title">Sign up</h3>
      </div>
      <div>
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <input
          className="input-field"
          placeholder="Email"
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <select className="input-field" id="select-avatar" type="text" name="avatar" onChange={updateAvatar} value={avatar}>
          <option value={adveturer}>Adventurer</option>
          <option value={avatarStandard}>Standard Avatar</option>
          <option value={couchPotatoe}>Couch Potatoe</option>
          <option value={explorer}>Explorer</option>
          <option value={traveler}>Traveler</option>
          <option value={voyager}>Voyager</option>
          <option value={wanderer}>Wanderer</option>
        </select>
        <div className="avatar-container">
          <img id="avatar-img" src={avatar} alt="User Avatar"/>
        </div>
      </div>
      <div>
        <input
          className="input-field"
          placeholder="Password"
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <input
          className="input-field"
          placeholder="Confirm Password"
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className="error-container">
        {errors.map((error, ind) => (
          <div className="errors" key={ind}>
            {error}
          </div>
        ))}
      </div>
      <div className="submit-flex">
        <button className="submit-button" id="sign-up-button" type="submit">
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
