import React, { Component } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./1.css";

export default class Login extends Component {
  render() {
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
              //   id="login-form"
            />
          </div>
          <br />
          <div className="form-group ">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <br />
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>
          <p className="forgot-password text-right">
            Are you an{" "}
            <a href="/admin-signin" target="blank">
              Admin?
            </a>
          </p>
          <br />
        </form>
      </div>
    );
  }
}
