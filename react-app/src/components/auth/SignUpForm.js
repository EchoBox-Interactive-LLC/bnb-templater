import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

// import adveturer from "../../images/avatars/Urbnb-Adventurer.png";
// import avatarStandard from "../../images/avatars/Urbnb-Avatar.png";
// import couchPotatoe from "../../images/avatars/Urbnb-Couchpotatoe.png";
// import explorer from "../../images/avatars/Urbnb-Explorer.png";
// import traveler from "../../images/avatars/Urbnb-Traveler.png";
// import voyager from "../../images/avatars/Urbnb-Voyager.png";
// import wanderer from "../../images/avatars/Urbnb-Wanderer.png";

const SignUpForm = ({ setShowSignUpModal }) => {
  const [errors, setErrors] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Setting error messages
    if (errors.length > 0) {
      if (errors.length > 0) {
        let errorMsgs = errors.map((error) => {
          return error.split(":");
        });
        errorMsgs = errorMsgs.map((error) => {
          return error[1];
        });
        setErrorMessages(errorMsgs);

        // Adding CSS to input fields that have errors
        let errorTitles = errors.map((error) => {
          return error.split(":");
        });
        errorTitles = errorTitles.map((error) => {
          return error[0];
        });
        for (const errorTitle of errorTitles) {
          if (errorTitle === "Username") {
            let usernameClassAdd =
              document.getElementById("username-error-box");
            usernameClassAdd.classList.add("input-field-error");
            let usernameLabelClassAdd =
              document.getElementById("username-label-signup");
            usernameLabelClassAdd.classList.add("input-label-error");
          } else if (errorTitle === "Email") {
            let emailClassAdd = document.getElementById("email-error-box");
            emailClassAdd.classList.add("input-field-error");
            let emailLabelClassAdd =
              document.getElementById("email-label-signup");
            emailLabelClassAdd.classList.add("input-label-error");
          } else if (errorTitle === "Password") {
            let passwordClassAdd =
              document.getElementById("password-error-box");
            passwordClassAdd.classList.add("input-field-error");
            let confirmPasswordClassAdd = document.getElementById(
              "confirm-password-error-box"
            );
            confirmPasswordClassAdd.classList.add("input-field-error");
            let passwordLabelClassAdd =
              document.getElementById("password-label-signup");
            passwordLabelClassAdd.classList.add("input-label-error");
            let confirmPasswordLabelClassAdd =
              document.getElementById("confirm-password-label-signup");
            confirmPasswordLabelClassAdd.classList.add("input-label-error");
          }
        }
      }
    }
  }, [errors]);

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
        <div className="input-label">
          <label id="username-label-signup">Username (Required)</label>
        </div>
        <input
          id="username-error-box"
          className="input-field"
          type="text"
          placeholder="Username"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <div className="input-label">
          <label id="email-label-signup">Email (Required)</label>
        </div>
        <input
          id="email-error-box"
          className="input-field"
          placeholder="Email"
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <div className="input-label">
          <label id="password-label-signup">Password (Required)</label>
        </div>
        <input
          id="password-error-box"
          className="input-field"
          placeholder="Password"
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <div className="input-label">
          <label id="confirm-password-label-signup">Confirm Password (Required)</label>
        </div>
        <input
          id="confirm-password-error-box"
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
        {errorMessages.map((error, ind) => (
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
