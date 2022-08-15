import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";

const LoginForm = ({ setShowLoginModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    // Setting error messages
    if (errors.length > 0) {
      let errorMsgs = errors.map((error) => {
        return error.split(":");
      });
      errorMsgs = errorMsgs.map((error) => {
        return error[1];
      });
      setErrorMessages(errorMsgs);

      // Parsing out error titles
      let errorTitles = errors.map((error) => {
        return error.split(":");
      });
      errorTitles = errorTitles.map((error) => {
        return error[0];
      });

      // Clear all CSS errors styles on each submit
      let emailClassRemove = document.getElementById("email-error-box");
      emailClassRemove.classList.remove("input-field-error");
      let emailLabelClassRemove = document.getElementById("email-label-login");
      emailLabelClassRemove.classList.remove("input-label-error");
      let passwordClassRemove = document.getElementById("password-error-box");
      passwordClassRemove.classList.remove("input-field-error");
      let passwordLabelClassRemove = document.getElementById(
        "password-label-login"
      );
      passwordLabelClassRemove.classList.remove("input-label-error");

      // Set and/or Reset error CSS styles
      for (const errorTitle of errorTitles) {
        if (errorTitle === "Email") {
          let emailClassAdd = document.getElementById("email-error-box");
          emailClassAdd.classList.add("input-field-error");
          let emailLabelClassAdd = document.getElementById("email-label-login");
          emailLabelClassAdd.classList.add("input-label-error");
        } else if (errorTitle === "Password") {
          let passwordClassAdd = document.getElementById("password-error-box");
          passwordClassAdd.classList.add("input-field-error");
          let passwordLabelClassAdd = document.getElementById(
            "password-label-login"
          );
          passwordLabelClassAdd.classList.add("input-label-error");
        }
      }
    }
  }, [errors]);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    history.push("/");
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  const cancelLogin = () => {
    setShowLoginModal(false);
  };

  return (
    <form onSubmit={onLogin}>
      <div className="modal-top">
        <button className="modal-cancel" onClick={cancelLogin} type="button">
          X
        </button>
        <h3 className="modal-title">Log in</h3>
      </div>
      <div>
        <div className="input-label">
          <label id="email-label-login">Email (Required)</label>
        </div>
        <input
          id="email-error-box"
          className="input-field"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <div className="input-label">
          <label id="password-label-login">Password (Required)</label>
        </div>
        <input
          id="password-error-box"
          className="input-field"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <div className="error-container">
          {errorMessages.map((error, ind) => (
            <div className="errors" key={ind}>
              {error}
            </div>
          ))}
        </div>
        <div className="submit-flex">
          <button className="submit-button" type="submit">
            Log in
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
