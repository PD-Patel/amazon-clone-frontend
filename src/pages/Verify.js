import React from "react";
import { Link } from "react-router-dom";
import "./Verify.css";
function Verify() {
  return (
    <div className="verify-page">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login-logo"
        />
      </Link>

      <div className="verify-content">
        <h1>Thanks For Creating Amazon Account...</h1>
        <p>
          Please verified your Amazon account from your email account and then
          Login...
        </p>
      </div>
    </div>
  );
}

export default Verify;
