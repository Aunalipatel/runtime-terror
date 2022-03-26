import React, { Component } from "react";
import "./1.css";
export default class SignUp extends Component {
  render() {
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
            />
          </div>
          <br />
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <br />
          <div className="d-flex flex-row justify-content-center">
            <button type="submit" className="btn btn-dark btn-lg btn-block ">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
