import React, { Component } from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
// import Chart from 'react-chartjs-2';
import apps from "./images1/images/apps.png";
import campaign from "./images1/images/campaign.png";
import customers from "./images1/images/customers.png";
import dashboard from "./images1/images/dashboard.png";
import github from "./images1/images/github.png";
// import home from "./images1/images/home.png";
import message from "./images1/images/message.png";
import messages from "./images1/images/messages.png";
import orders from "./images1/images/orders.png";
import person from "./images1/images/person.png";
import search from "./images1/images/search.png";
import settings from "./images1/images/settings.png";
import tasks from "./images1/images/tasks.png";
import time from "./images1/images/time.png";
import wallet from "./images1/images/wallet.png";
import warning from "./images1/images/warning.png";
export default class E_details extends Component {
  render() {
    // const [list, setList] = useState([]);
    // const changeStatus = async (e) =>{
    //   let id = e.target.id;
    //   await axios.post("http://localhost:8080/admin/addWorker", { id: id })
    //             .then(async (res) => {
    //                 if (res.data) {
    //                     await axios.get("http://localhost:8080/workers")
    //                         .then(res => {
    //                             console.log(res.data)
    //                             setList(res.data);
    //                         })
    //                         .catch(err => { console.log(err) })
    // }
    return (
      <div className="bg-gray-200">
        <div className="flex">
          <div className="bg-indigo-900 w-64 ">
            <div className=" bg-indigo-800">
              <div className="p-5 text-xl text-gray-200 uppercase font-bold">
                super corp
              </div>
            </div>
            <div>
              <div className="p-5 text-xs text-gray-200 uppercase font-bold">
                Pages
              </div>
            </div>

            <div className="flex m-5 mt-2">
              <div>
                <img className="w-5 h-5" src={dashboard} alt="" />
              </div>
              <div className="mx-3 text-sm text-gray-100">
                <Link to="/">Home</Link>
              </div>
            </div>

            <div className="flex m-5 mt-2">
              <div>
                <img className="w-5 h-5" src={customers} alt="" />
              </div>
              <div className="mx-3 text-sm text-gray-100">
                <Link to="/worker">Workers</Link>
              </div>
            </div>

            <div className="flex m-5 mt-2">
              <div>
                <img className="w-5 h-5" src={orders} alt="" />
              </div>
              <div className="mx-3 text-sm text-gray-100">
                <Link to="/attendance">Attendance List Of Workers</Link>
              </div>
            </div>

            <div className="flex m-5 mt-2">
              <div>
                <img className="w-5 h-5" src={campaign} alt="" />
              </div>
              <div className="mx-3 text-sm text-gray-100">
                <Link to="/employee_details">Add Worker</Link>
              </div>
            </div>

            <div className="flex m-5 mt-2">
              <div>
                <img className="w-5 h-5" src={messages} alt="" />
              </div>
              <div className="mx-3 text-sm text-gray-100">Messages</div>
            </div>

            <div className="flex m-5 mt-2">
              <div>
                <img className="w-5 h-5" src={apps} alt="" />
              </div>
              <div className="mx-3 text-sm text-gray-100">Apps</div>
            </div>

            <div className="flex m-5 mt-2">
              <div>
                <img className="w-5 h-5" src={settings} alt="" />
              </div>
              <div className="mx-3 text-sm text-gray-100">Settings</div>
            </div>
          </div>

          <div className="flex-1">
            <div>
              <div className="bg-white px-2 py-0.5 h-18 flex">
                <div className="left md:w-3/4 sm:w-1/3 flex p-3">
                  <img src={person} className="w-10 h-10" alt="" />
                  <span className="block p-2">Admin</span>
                </div>
                <div className="right md:w-1/4 sm:w-2/3 flex ">
                  <img
                    src={search}
                    className="w-7 h-7 bg-gray-100 rounded-full p-1 mx-2 my-4"
                    alt=""
                  />
                  <img
                    src={message}
                    className="w-7 h-7 bg-gray-100 rounded-full p-1 mx-2 my-4"
                    alt=""
                  />
                  <img
                    src={warning}
                    className="w-7 h-7 bg-gray-100 rounded-full p-1 mx-2 my-4"
                    alt=""
                  />
                  <a href="#" className="mt-4 mx-2 text-indigo-500">
                    Logout
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="bg-indigo-200 m-7 p-6">
              <div className="text-4xl text-gray-800 font-medium">
                Good Morning, Super Inc.👋
              </div>
              <div className="mt-4">
                These are the stats for today, have a good day
              </div>
            </div> */}

            <div className="card-container flex m-7 space-x-6 ">
              {/* <div className="bg-white w-1/3 p-4 divide-y divide-gray-200">
                        <div className="font-bold text-l pb-4">Top Countries</div>
                        <canvas className="pt-4" id="chart5"></canvas>
                    </div> */}
              <div
                className="bg-white w-8/8 p-4"
                style={{ height: "1048px", width: "1200px" }}
              >
                <div id="login-form employee-form" className="outer">
                  <form className="inner">
                    <h3 className="h3">Employee Details</h3>
                    <div className="form-group">
                      <label>Emp_name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter fullname"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Title:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter fullname"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Text_block:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter fullname"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Email_ID:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Mobile Number:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Age:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Age"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Project_Loc:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter fullname"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label>Aadhar Card Number:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Adhar number"
                      />
                    </div>
                    <br />

                    <button
                      type="submit"
                      className="btn btn-dark btn-lg btn-block"
                      // onClick={changeStatus}
                    >
                      Done
                    </button>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
