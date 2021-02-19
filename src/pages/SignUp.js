import React from "react";
import "./SignUp.css";

import InfoIcon from "@material-ui/icons/Info";
import { useState } from "react";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import server from "../mongodb";
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    if (password === repassword && password.length >= 6) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            // console.log("the >>>>>>", firebase.auth().currentUser);

            firebase
              .auth()
              .currentUser.updateProfile({
                displayName: username,
              })
              .then()
              .catch((error) => alert(error.message));

            firebase
              .auth()
              .currentUser.sendEmailVerification()
              .then(history.push("/pf_2607"));

            const article = {
              name: username,
              email: auth.user.email,
            };
            server
              .post("/users/data", article)
              .catch((err) => alert(err.message));
          }
        })
        .catch((error) => alert(error.message));
    } else {
      alert("please enter valid password or email");
    }
  };

  return (
    <div className="signUp">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login-logo"
        />
      </Link>

      <div className="signUp-content">
        <h2>Create account</h2>

        <div className="user-name">
          <p className="label"> Your name</p>
          <input
            className="userInput"
            type="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* dhruval */}
        </div>

        <div className="user-email">
          <p className="label">Email</p>
          <input
            className="userInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="user-password">
          <p className="label">Password</p>
          <input
            className="userInput userPassword"
            type="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <p className="info">
          <InfoIcon className="info-icon" />
          Passwords must be at least 6 characters.{" "}
        </p>

        <div className="user-repassword userPassword">
          <p className="label">Re-enter password</p>
          <input
            className="userInput"
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            required
          />
        </div>

        <button onClick={register} className="CreateButton">
          Create your Amazon account
        </button>

        <p className="condition">
          By continuing, you agree to Amazon's <span>Conditions of Use</span>
          &nbsp;and &nbsp;
          <span>Privacy Notice.</span>
        </p>

        <p className="account-signIn">
          Already have an account?{" "}
          <Link className="link-SignUp" to="/login">
            <span>Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
