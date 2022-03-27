import "../styles/styles.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, Component } from "react";
import axios from "axios";
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
export default class E_details extends Component{
  // const formRef = useRef(null);
  // const [name, setName] = useState();
  // const [title, setTitle] = useState();
  // const [text_b, setTextBlock] = useState();
  // const [email_i, setEmail] = useState();
  // const [age, setAge] = useState();
  // const [loc, setLoc] = useState();
  // const [aad, setAad] = useState();
  // const [no, setNumber] = useState();
  // const [rate, setRate] = useState();
  // const [hour, setHour] = useState();

  // const changeHandler = (event) => {
  //   if (event.target.id === "name") {
  //     setName(event.target.value);
  //   } else if (event.target.id === "title") {
  //     setTitle(event.target.value);
  //   } else if (event.target.id === "text_block") {
  //     setTextBlock(event.target.value);
  //   } else if (event.target.id === "email") {
  //     setEmail(event.target.value);
  //   } else if (event.target.id === "number") {
  //     setNumber(event.target.value);
  //   } else if (event.target.id === "age") {
  //     setAge(event.target.value);
  //   } else if (event.target.id === "loc") {
  //     setLoc(event.target.value);
  //   } else if (event.target.id === "aadhaar_number") {
  //     setAad(event.target.value);
  //   } else if (event.target.id === "hour_w") {
  //     setHour(event.target.value);
  //   } else if (event.target.id === "rating") {
  //     setRate(event.target.value);
  //   }
  // };
  constructor(){
    super();
    this.state={
      Emp_ID: null,
      Emp_name: null,
      Title: null,
      Text_block: null,
      email: null,
      number: null,
      age: null,
      Project_Loc: null,
      aadhar: null,
      Hour_W: null,
      Rating: null
    }
 }
 
  submitHandler(){
    // ("Emp_name", name)
    // ("Title", title)
    // ("Text_block", text_b)
    // ("email", email_i)
    // ("number", no)
    // ("age", age)
    // ("Project_Loc", loc)
    // ("aadhar", aad)
    // ("Hour_W",hour)
    // ("Rating", rate)
    // (formdata);
    fetch("http://localhost:9000/admin",{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Worker has been added.")
            })
        })
   }  
 render()
 {
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
                <div className="inner">
                  <h3 className="h3">Employee Details</h3>
                  <div className="form-group">
                    <label>Emp_name:</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter fullname"
                      onChange={(e)=>{
                        this.setState({Emp_name:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      id="title"
                      type="text"
                      className="form-control"
                      placeholder="Enter fullname"
                      onChange={(e)=>{
                        this.setState({Title:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Text_block:</label>
                    <input
                      id="text_block"
                      type="text"
                      className="form-control"
                      placeholder="Enter fullname"
                      onChange={(e)=>{
                        this.setState({Text_block:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Email_ID:</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      onChange={(e)=>{
                        this.setState({email:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Mobile Number:</label>
                    <input
                      id="number"
                      type="text"
                      className="form-control"
                      placeholder="Enter phone"
                      onChange={(e)=>{
                        this.setState({number:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Age:</label>
                    <input
                      id="age"
                      type="text"
                      className="form-control"
                      placeholder="Enter Age"
                      onChange={(e)=>{
                        this.setState({age:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Project_Loc:</label>
                    <input
                      id="loc"
                      type="text"
                      className="form-control"
                      placeholder="Enter fullname"
                      onChange={(e)=>{
                        this.setState({Project_Loc:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Aadhar Card Number:</label>
                    <input
                      id="aadhar_number"
                      type="text"
                      className="form-control"
                      placeholder="Enter Adhar number"
                      onChange={(e)=>{
                        this.setState({aadhar:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Hours Worked:</label>
                    <input
                      id="hour_w"
                      type="text"
                      className="form-control"
                      placeholder="Enter Adhar number"
                      onChange={(e)=>{
                        this.setState({Hour_W:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Rating:</label>
                    <input
                      id="rating"
                      type="text"
                      className="form-control"
                      placeholder="Enter Adhar number"
                      onChange={(e)=>{
                        this.setState({Rating:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Emp_ID(To be Alloted):</label>
                    <input
                      id="rating"
                      type="text"
                      className="form-control"
                      placeholder="Enter Adhar number"
                      onChange={(e)=>{
                        this.setState({Emp_ID:e.target.value})
                      }}
                    />
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                    onClick={()=>this.submitHandler()}
                  >
                    Done
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
}
