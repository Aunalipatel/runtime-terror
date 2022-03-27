import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import Chart from 'react-chartjs-2';
import apps from "./images1/images/apps.png";
import campaign from "./images1/images/campaign.png";
import customers from "./images1/images/customers.png";
import dashboard from "./images1/images/dashboard.png";
import github from "./images1/images/github.png";
import Aunali from "./images1/images/Aunali.jpeg";
import Aditya from "./images1/images/Aditya.jpg";
import Mayank from "./images1/images/Mayank.jpg";
import Jatin from "./images1/images/Jatin.jpg";
import Harsh from "./images1/images/Harsh.jpg";
import Kunal from "./images1/images/Kunal.jpg";
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
function Worker() {
  const [list, setList] = useState([])
  
    useEffect(() => {
      axios.get('http://localhost:9000/admin')
          .then(res => {
              console.log(res);
              setList(res.data);
              console.log(list);
              // setdisplayOrders(res.data.orders)
          })
          .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex">
          <div className="bg-indigo-900 w-64 ">
            <div className=" bg-indigo-800">
              <div className="p-5 text-xl text-gray-200 uppercase font-bold">
                MAAJ CORP
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
                  <span className="block p-2">Workers</span>
                </div>
                <div className="right md:w-1/4 sm:w-2/3 flex ">
                  {/* <img
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
                  /> */}
                  {/* <a href="#" className="mt-4 mx-2 text-indigo-500">
                    Logout
                  </a> */}
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

            {/* <div className="card-container flex m-7 space-x-6 "> */}
              {
               list.map((ord, idx) => {
                return (
                  <>
                <div className="card-container flex flex-row m-10 space-x-6 ">
                  <div className="card w-1/3 bg-white p-4">
                    <div
                      className="font-bold text-xl text-gray-700"
                      style={{ display: "flex" }}
                    >
                      {ord.Emp_name}{" "}
                      <span style={{ marginLeft: "190px" }}>
                        {/* <img src={ord.img} className="w-30 h-30" alt="" /> */}
                      </span>
                    </div>
                    <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">
                      {ord.Title}
                    </div>
                    <div className="font-bold text-xl mb-2">{ord._id}</div>
                    <p className="text-gray-700 text-base">{ord.Text_block}</p>
                    <div
                      className="px-6 pt-4 pb-10 "
                      style={{ marginLeft: "-1.5rem" }}
                    >
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full">
                        <Link to="/worker/profile/:id">View Profile</Link>
                      </button>
                     </div>
                    </div>
                   </div>
                  </>
                );
              })
            }
              {/* <div className="card w-1/2 bg-white p-4">
                <span className="font-bold text-xl text-gray-700" style={{display: "flex"}}>
                  Aditya Ganji <span style={{marginLeft: "190px"}}><img src={Aditya} className="w-30 h-30" alt="" /></span>
                </span>
                <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">
                  Worker 1
                </div>
                <div className="font-bold text-xl mb-2">60004190007</div>
                <p className="text-gray-700 text-base">
                  Working at Andheri Railway Station(W)
                </p>
                <div className="px-6 pt-4 pb-10 " style={{marginLeft: "-1.5rem"}}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full">
                  <Link to="/worker/profile">View Profile</Link>
                  </button>
                </div>
              </div>
              <div className="card w-1/2 bg-white p-4">
                <span className="font-bold text-xl text-gray-700" style={{display: "flex"}}>
                  Aunali Patel <span style={{marginLeft: "190px"}}><img src={Aunali} className="w-30 h-30" alt="" /></span>
                </span>
                <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">
                  Worker 2
                </div>
                <div className="font-bold text-xl mb-2">60004190016</div>
                <p className="text-gray-700 text-base">
                  Working at Lokhandwala, Andheri(W)
                </p>
                <div className="px-6 pt-4 pb-10 " style={{marginLeft: "-1.5rem"}}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full">
                  <Link to="/worker/profile">View Profile</Link>
                  </button>
                </div>
              </div>
              <div className="card w-1/2 bg-white p-4">
              <span className="font-bold text-xl text-gray-700" style={{display: "flex"}}>
                  Mayank Gohil <span style={{marginLeft: "190px"}}><img src={Mayank} className="w-30 h-30" alt="" /></span>
                </span>
                <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">
                  Worker 3
                </div>
                <div className="font-bold text-xl mb-2">60004190065</div>
                <p className="text-gray-700 text-base">
                  Working at Malad Railway Station(W)
                </p>
                <div className="px-6 pt-4 pb-10" style={{marginLeft: "-1.5rem"}}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full">
                  <Link to="/worker/profile">View Profile</Link>
                  </button>
                </div>
              </div> */}
            {/* </div> */}

            {/* <div className="card-container flex m-7 space-x-6 ">
              <div className="card w-1/2 bg-white p-4">
              <span className="font-bold text-xl text-gray-700" style={{display: "flex"}}>
                Harsh Mengi <span style={{marginLeft: "190px"}}><img src={Harsh} className="w-30 h-30" alt="" /></span>
                </span>
                <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">
                  Worker 4
                </div>
                <div className="font-bold text-xl mb-2">60004190040</div>
                <p className="text-gray-700 text-base">
                  Working at Reasi Railway Station(W)
                </p>
                <div className="px-6 pt-4 pb-10 " style={{marginLeft: "-1.5rem"}}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full">
                  <Link to="/worker/profile">View Profile</Link>
                  </button>
                </div>
              </div>
              <div className="card w-1/2 bg-white p-4">
              <span className="font-bold text-xl text-gray-700" style={{display: "flex"}}>
                  Jatin Abrol <span style={{marginLeft: "190px"}}><img src={Jatin} className="w-30 h-30" alt="" /></span>
                </span>
                <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">
                  Worker 5
                </div>
                <div className="font-bold text-xl mb-2">60004190049</div>
                <p className="text-gray-700 text-base">
                Working at Reasi Railway Station(W)
                </p>
                <div className="px-6 pt-4 pb-10 " style={{marginLeft: "-1.5rem"}}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full">
                  <Link to="/worker/profile">View Profile</Link>
                  </button>
                </div>
              </div>
              <div className="card w-1/2 bg-white p-4">
              <span className="font-bold text-xl text-gray-700" style={{display: "flex"}}>
                  Kunal Razdan <span style={{marginLeft: "190px"}}><img src={Kunal} className="w-30 h-30" alt="" /></span>
                </span>
                <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">
                  Worker 6
                </div>
                <div className="font-bold text-xl mb-2">60002190057</div>
                <p className="text-gray-700 text-base">
                Working at Jammu Railway Station(W)
                </p>
                <div className="px-6 pt-4 pb-10 " style={{marginLeft: "-1.5rem"}}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full">
                  <Link to="/worker/profile">View Profile</Link>
                  </button>
                </div>
              </div>
            </div> */}

            {/* <div className="card-container flex m-7 space-x-6 ">
              <div className="bg-white w-1/3 p-4 divide-y divide-gray-200">
                <div className="font-bold text-l pb-4">Top Countries</div>
                <canvas className="pt-4" id="chart5"></canvas>
              </div>
              <div className="bg-white w-2/3 p-4">
                <div className="font-bold text-l pb-4">Top Channels</div>
                <div className="flex bg-gray-100 text-gray-500 p-2 uppercase font-bold text-xs">
                  <div className="w-1/3">
                    <div>Source</div>
                  </div>
                  <div className="w-3/4 flex space-x-14">
                    <div>Visitors</div>
                    <div>Revenues</div>
                    <div>Sales</div>
                    <div>Conversion</div>
                  </div>
                </div>

                <div className="multi-channel-container divide-y divide-gray-200">
                  <div className="single-channel pt-2 pb-2">
                    <div className="flex">
                      <div className="w-1/3">
                        <div className="image-text flex">
                          <div>
                            <img src={github} className="w-8 h-8" alt="" />
                          </div>
                          <div className="pl-2 pt-1">YouTube</div>
                        </div>
                      </div>
                      <div className="w-3/4 flex space-x-16">
                        <div>2.4k</div>
                        <div className="text-green-500">$16,000</div>
                        <div>340</div>
                        <div className="text-blue-500">4.9%</div>
                      </div>
                    </div>
                  </div>

                  <div className="single-channel pt-2 pb-2">
                    <div className="flex">
                      <div className="w-1/3">
                        <div className="image-text flex">
                          <div>
                            <img src={github} className="w-8 h-8" alt="" />
                          </div>
                          <div className="pl-2 pt-1">Facebook</div>
                        </div>
                      </div>
                      <div className="w-3/4 flex space-x-16">
                        <div>2.4k</div>
                        <div className="text-green-500">$16,000</div>
                        <div>340</div>
                        <div className="text-blue-500">4.9%</div>
                      </div>
                    </div>
                  </div>

                  <div className="single-channel pt-2 pb-2">
                    <div className="flex">
                      <div className="w-1/3">
                        <div className="image-text flex">
                          <div>
                            <img src={github} className="w-8 h-8" alt="" />
                          </div>
                          <div className="pl-2 pt-1">Github</div>
                        </div>
                      </div>
                      <div className="w-3/4 flex space-x-16">
                        <div>2.4k</div>
                        <div className="text-green-500">$16,000</div>
                        <div>340</div>
                        <div className="text-blue-500">4.9%</div>
                      </div>
                    </div>
                  </div>

                  <div className="single-channel pt-2 pb-2">
                    <div className="flex">
                      <div className="w-1/3">
                        <div className="image-text flex">
                          <div>
                            <img src={github} className="w-8 h-8" alt="" />
                          </div>
                          <div className="pl-2 pt-1">Instagram</div>
                        </div>
                      </div>
                      <div className="w-3/4 flex space-x-16">
                        <div>2.4k</div>
                        <div className="text-green-500">$16,000</div>
                        <div>340</div>
                        <div className="text-blue-500">4.9%</div>
                      </div>
                    </div>
                  </div>

                  <div className="single-channel pt-2 pb-2">
                    <div className="flex">
                      <div className="w-1/3">
                        <div className="image-text flex">
                          <div>
                            <img src={github} className="w-8 h-8" alt="" />
                          </div>
                          <div className="pl-2 pt-1">Facebook</div>
                        </div>
                      </div>
                      <div className="w-3/4 flex space-x-16">
                        <div>2.4k</div>
                        <div className="text-green-500">$16,000</div>
                        <div>340</div>
                        <div className="text-blue-500">4.9%</div>
                      </div>
                    </div>
                  </div>

                  <div className="single-channel pt-2 pb-2">
                    <div className="flex">
                      <div className="w-1/3">
                        <div className="image-text flex">
                          <div>
                            <img src={github} className="w-8 h-8" alt="" />
                          </div>
                          <div className="pl-2 pt-1">Github</div>
                        </div>
                      </div>
                      <div className="w-3/4 flex space-x-16">
                        <div>2.4k</div>
                        <div className="text-green-500">$16,000</div>
                        <div>340</div>
                        <div className="text-blue-500">4.9%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Worker;
