import React, { Component } from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
// import Chart from 'react-chartjs-2';
import { useState,useEffect } from "react";
import axios from "axios";
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
class Profile extends Component{
  constructor(props){
    super(props);
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
      Rating: null,
      id:null
    }
}
componentDidMount()
{
  fetch("http://localhost:9000/admin/"+this.props.match.params.id).then((resp)=>{
      resp.json().then((result)=>{
          this.setState({
            Emp_ID: result.Emp_ID,
            Emp_name: result.Emp_name,
            Title: result.Title,
            Text_block: result.Text_block,
            email: result.email,
            number: result.number,
            age: result.age,
            Project_Loc: result.Project_Loc,
            aadhar: result.aadhar,
            Hour_W: result.Hour_W,
            Rating: result.Rating,
            id:result.id
          })
      })
  })
}
render(){

  return (
    <>
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
              <div className="mx-3 text-sm text-gray-100">Add Worker</div>
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
              <div
                className="bg-white w-8/8 p-4"
                style={{ height: "1048px", width: "1200px" }}
              >
                {/* <div className="bg-white w-1/3 p-4 divide-y divide-gray-200">
                        <div className="font-bold text-l pb-4">Top Countries</div>
                        <canvas className="pt-4" id="chart5"></canvas>
                    </div>
                <div className="font-bold text-l pb-4">Top Channels</div>
                        <div className="flex bg-gray-100 text-gray-500 p-2 uppercase font-bold text-xs">
                            <div className="w-1/3">
                                <div>Employee Name</div>
                            </div>
                            <div className="w-3/4 flex space-x-20">
                                <div>Employee ID</div>
                                <div>Hours Worked This Month</div>
                                <div>Rating(By 5)</div>
                                <div>Project Location</div>
                            </div>
                        </div>
    
                        <div className="multi-channel-container divide-y divide-gray-200">
                            <div className="single-channel pt-2 pb-2">
                                <div className="flex">
                                    <div className="w-1/3">
                                        <div className="image-text flex">
                                            <div>
                                                <img src={github} className="w-8 h-8" alt=""/>
                                            </div>
                                            <div className="pl-2 pt-1">YouTube</div>
                                        </div>
                                    </div>
                                    <div className="w-3/4 flex space-x-20">
                                        <div style={{marginLeft: "1.5rem"}}>2.4k</div>
                                        <div className="text-green-500" style={{marginLeft: "200px"}}>$16,000</div>
                                        <div style={{marginLeft: "150px"}}>340</div>
                                        <div className="text-blue-500" style={{marginLeft: "150px"}}>4.9%</div>
                                    </div>
                                </div>
    
                            </div>
    
                            <div className="single-channel pt-2 pb-2">
                                <div className="flex">
                                    <div className="w-1/3">
                                        <div className="image-text flex">
                                            <div>
                                                <img src={github} className="w-8 h-8" alt=""/>
                                            </div>
                                            <div className="pl-2 pt-1">Facebook</div>
                                        </div>
                                    </div>
                                    <div className="w-3/4 flex space-x-20">
                                    <div style={{marginLeft: "1.5rem"}}>2.4k</div>
                                        <div className="text-green-500" style={{marginLeft: "200px"}}>$16,000</div>
                                        <div style={{marginLeft: "150px"}}>340</div>
                                        <div className="text-blue-500" style={{marginLeft: "150px"}}>4.9%</div>
                                    </div>
                                </div>
    
                            </div>
    
                            <div className="single-channel pt-2 pb-2">
                                <div className="flex">
                                    <div className="w-1/3">
                                        <div className="image-text flex">
                                            <div>
                                                <img src={github} className="w-8 h-8" alt=""/>
                                            </div>
                                            <div className="pl-2 pt-1">Github</div>
                                        </div>
                                    </div>
                                    <div className="w-3/4 flex space-x-20">
                                    <div style={{marginLeft: "1.5rem"}}>2.4k</div>
                                        <div className="text-green-500" style={{marginLeft: "200px"}}>$16,000</div>
                                        <div style={{marginLeft: "150px"}}>340</div>
                                        <div className="text-blue-500" style={{marginLeft: "150px"}}>4.9%</div>
                                    </div>
                                </div>
    
                            </div>
    
                            <div className="single-channel pt-2 pb-2">
                                <div className="flex">
                                    <div className="w-1/3">
                                        <div className="image-text flex">
                                            <div>
                                                <img src={github} className="w-8 h-8" alt=""/>
                                            </div>
                                            <div className="pl-2 pt-1">Instagram</div>
                                        </div>
                                    </div>
                                    <div className="w-3/4 flex space-x-20">
                                    <div style={{marginLeft: "1.5rem"}}>2.4k</div>
                                        <div className="text-green-500" style={{marginLeft: "200px"}}>$16,000</div>
                                        <div style={{marginLeft: "150px"}}>340</div>
                                        <div className="text-blue-500" style={{marginLeft: "150px"}}>4.9%</div>
                                    </div>
                                </div>
    
                            </div>
    
                            <div className="single-channel pt-2 pb-2">
                                <div className="flex">
                                    <div className="w-1/3">
                                        <div className="image-text flex">
                                            <div>
                                                <img src={github} className="w-8 h-8" alt=""/>
                                            </div>
                                            <div className="pl-2 pt-1">Facebook</div>
                                        </div>
                                    </div>
                                    <div className="w-3/4 flex space-x-20">
                                    <div style={{marginLeft: "1.5rem"}}>2.4k</div>
                                        <div className="text-green-500" style={{marginLeft: "200px"}}>$16,000</div>
                                        <div style={{marginLeft: "150px"}}>340</div>
                                        <div className="text-blue-500" style={{marginLeft: "150px"}}>4.9%</div>
                                    </div>
                                </div>
    
                            </div>
    
                            <div className="single-channel pt-2 pb-2">
                                <div className="flex">
                                    <div className="w-1/3">
                                        <div className="image-text flex">
                                            <div>
                                                <img src={github} className="w-8 h-8" alt=""/>
                                            </div>
                                            <div className="pl-2 pt-1">Github</div>
                                        </div>
                                    </div>
                                    <div className="w-3/4 flex space-x-20">
                                    <div style={{marginLeft: "1.5rem"}}>2.4k</div>
                                        <div className="text-green-500" style={{marginLeft: "200px"}}>$16,000</div>
                                        <div style={{marginLeft: "150px"}}>340</div>
                                        <div className="text-blue-500" style={{marginLeft: "150px"}}>4.9%</div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">
                        Premium Properties
                      </span>
                      <span
                        className="block text-green-500 xl:inline"
                        style={{ margin: "16px" }}
                      >
                        Non-premium Prices
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      At prime properties, we ensure that our clients get the
                      best properties at affordable prices. Luxury is our
                      priority and budget is our constrain. Pick and choose from
                      1000+ properties across the globe.
                    </p>
                  </div>
                </main> */}
              
              <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
                <div className="rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{this.state.Emp_name}</div>
                    <p className="text-gray-700 text-base">
                       {this.state.Emp_ID}
                    <br />
                       {this.state.Text_block}
                    <br />
                       {this.state.Project_Loc}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-bold text-green-300 mr-2 mb-2">
                     
                    </span>
                  </div>
                </div>
                  {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Beds
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              9 Baths
            </span>
          </div> */}
                  <div className="px-6 pt-4 pb-10 ">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full"
                    >
                      <Link to="/worker">Back to Workers</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      {/* <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Premium Properties</span>
            <span className="block text-green-500 xl:inline" style={{margin:"16px"}}>
              Non-premium Prices
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            At prime properties, we ensure that our clients get the best
            properties at affordable prices. Luxury is our priority and budget
            is our constrain. Pick and choose from 1000+ properties across the
            globe.
          </p>
        </div>
      </main> */}
    </>
  );
}
}
export default Profile;
