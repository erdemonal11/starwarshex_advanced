import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectError } from "../components/userSlice";
import { Link, Navigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(loginUser({ email, password }));
      if (response.payload && response.payload.token) {
        setLoginSuccess(true);
      }
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  if (loginSuccess) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="text">
      <div className="login">
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="login-column">
            <img src="/assets/log.png" alt="" />
            <br /><br />
            <div>
              <input
                className="login_form"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                className="login_form"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div>
              <button type="submit" className="but">
                Login
              </button>
             <br /><br /><br />
              Recognized User by API:
              <br /> <br /> email:eve.holt@reqres.in
              <br /> password:cityslicka
            </div>
          </div>
        </form>
      </div>
      <br /><br /><br /><br /><br /><br />
  <a href="https://www.linkedin.com/in/erdem-%C3%B6nal-354413224/" target="_blank" className="erdem">Erdem Önal</a> </div>
   
  );
};

export default Login;