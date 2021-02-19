import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user.emailVerified) {
          firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
              dispatch({
                type: "SET_USER",
                user: authUser,
              });
            }
          });
          history.push("/");
        } else {
          alert("Please Verify Your acoount");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login-logo"
        />
      </Link>

      <div className="login-content">
        <h2>Sign-In</h2>
        <form action="">
          <div className="email">
            <p className="label">Email</p>
            <input
              className="emailInput"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password">
            <p className="label">Password</p>
            <input
              className="passwordInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <button onClick={login}>Login</button>

        <p>
          By continuing, you agree to Amazon's <span>Conditions of Use</span>
          &nbsp;and &nbsp;
          <span>Privacy Notice.</span>
        </p>
      </div>

      <p className="line-break">
        <span>------------------------------</span>
        &nbsp; &nbsp;New to Amazon? &nbsp; &nbsp;
        <span>------------------------------</span>
      </p>

      <button
        onClick={() => {
          history.push("/signup");
        }}
        className="registerButton"
      >
        Create your Amazon account
      </button>
    </div>
  );
}

export default Login;
