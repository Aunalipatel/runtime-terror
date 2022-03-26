import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import "./1.css"; C:\Users\adity\Documents\GitHub\runtime-terror\frontend\src\components\login.components.js

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailLogin = () => {
    if (email.length >= 5 && email.includes("@") && password.length >= 5) {
      axios
        .post("/auth/workerLogin", {
          email,
          password,
        })
        .then((response) => {
          // console.log(response.data.data);
          if (response.data.success) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
            localStorage.setItem("name", JSON.stringify(response.data.name));
            console.log("logged in");
          } else {
            alert("error");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="login-form" className="outer">
      <form className="inner">
        {/* style={{ marginLeft: "43%", marginTop: "10%" }} */}
        <h3 className="h3">Employee Login</h3>
        <div className="form-group ">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br />
        <div className="form-group ">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <br />
        <Link to="/#">
          <button
            onClick={emailLogin}
            // type="submit"
            className="btn btn-dark btn-lg btn-block"
          >
            Login
          </button>
        </Link>
        <p className="forgot-password text-right">
          Are you an <a href="/admin-signin">Admin?</a>
        </p>
        <br />
      </form>
    </div>
  );
}
