import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";

const LoginForm = ({ setShowLoginModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
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
        <input
          className="input-field"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <input
          className="input-field"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <div className="error-container">
          {errors.map((error, ind) => (
            <div className="errors" key={ind}>{error}</div>
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
