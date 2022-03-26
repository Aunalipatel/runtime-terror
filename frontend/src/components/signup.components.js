// import React, { Component } from "react";
import "./1.css";
import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import "./1.css";
import { Context } from "../App";

export default function SignUp() {
  const { usernav, setUsernav } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailLogin = async () => {
    console.log("Inside SignUp");
    console.log(password);
    if (true) {
      const config = { headers: { "Content-Type": "application/json" } };
      // console.log("Inside SignUp");
      // console.log(email);
      // console.log(password);
      console.log("email", email);
      console.log("pwd", password);
      const { data } = await axios.post(
        "http://localhost:8080/auth/adminLogin",
        {
          email,
          password,
        },
        config
      );

      // axios
      //   .post(
      //     "http://localhost:8080/auth/adminLogin",
      //     {
      //       email,
      //       password,
      //     },
      //     config
      //   )

      //   .then((response) => {
      //     console.log(response.data.success);
      //     if (response.data.success) {
      //       localStorage.setItem("user", JSON.stringify(response.data.data));
      //       localStorage.setItem("name", JSON.stringify(response.data.name));
      //       console.log("logged in");
      //       window.location.href = "/admin";
      //     } else {
      //       alert("error");
      //     }
      //   })
      //   .catch((err) => console.log(err));
      if (data.success === true) {
        console.log("Success");
        console.log(data.info[0].name);
        localStorage.setItem("username", JSON.stringify(data.info[0].name));
        setUsernav(JSON.stringify(data.info[0].name));
        localStorage.setItem("loggedin", JSON.stringify(true));
        window.location.href = "/admin";
      } else {
        console.log("Failed");
        alert("WRONG PASSWORDD!!!!!!");
      }
      // console.log(data);
    } else {
      console.log("else me gaya bc");
    }
  };
  return (
    <div id="login-form" className="outer">
      <form className="inner">
        <h3 className="h3">Admin Login</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <br />
        <div className="d-flex flex-row justify-content-center">
          <Link to="#">
            <button
              onClick={emailLogin}
              type="submit"
              className="btn btn-dark btn-lg btn-block "
            >
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
