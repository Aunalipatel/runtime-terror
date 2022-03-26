import React, { Component } from "react";

export default class E_details extends Component {
    render() {
        return (
            <div id="login-form employee-form" className="outer">
                    <form className="inner">
                        <h3 className="h3">Employee Details</h3>
                        <div className="form-group" >
                            <label>FullName:</label>
                            <input type="text" className="form-control" placeholder="Enter fullname" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" className="form-control" placeholder="Enter phone" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" className="form-control" placeholder="Enter Age" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Adhar number:</label>
                            <input type="text" className="form-control" placeholder="Enter Adhar number" />
                        </div>
                        <br />

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Done</button>
                        <br />
                    </form>
            </div>
        );
    }
}