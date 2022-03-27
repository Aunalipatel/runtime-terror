import React from "react";
import '../styles/styles.css';
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
function WorkerDashboard(){
    // var ctx = document.getElementById('chart1').getContext('2d');
    //         var ctx2 = document.getElementById('chart2').getContext('2d');
    //         var ctx3 = document.getElementById('chart3').getContext('2d');
    //         var ctx4 = document.getElementById('chart4').getContext('2d');
    //         var ctx5 = document.getElementById('chart5').getContext('2d');
    //         var myChart = new Chart(ctx, {
    //             type: 'bar',
    //             data: {
    //                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    //                 datasets: [{
    //                     label: 'Number of sales',
    //                     data: [1, 2, 3, 4, 5, 6],
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     y: {
    //                         beginAtZero: true
    //                     }
    //                 }
    //             }
    //         });
    
    
    //         var myChart2 = new Chart(ctx2, {
    //             type: 'line',
    //             data: {
    //                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    //                 datasets: [{
    //                     label: 'Number of sales',
    //                     data: [11, 22, 13, 74, 105, 6],
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     y: {
    //                         beginAtZero: true
    //                     }
    //                 }
    //             }
    //         });
    
    
    //         var myChart3 = new Chart(ctx3, {
    //             type: 'doughnut',
    //             data: {
    //                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    //                 datasets: [{
    //                     label: 'Number of sales',
    //                     data: [1, 2, 3, 4, 5, 6],
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     y: {
    //                         beginAtZero: true
    //                     }
    //                 }
    //             }
    //         });
    
    
    //         var myChart4 = new Chart(ctx4, {
    //             type: 'radar',
    //             data: {
    //                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    //                 datasets: [{
    //                     label: 'Number of sales',
    //                     data: [1, 2, 3, 4, 5, 6],
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    //                     y: {
    //                         beginAtZero: true
    //                     }
    //                 }
    //             }
    //         });
    
    
    //         var myChart5 = new Chart(ctx5, {
    //             type: 'doughnut',
    //             data: {
    //                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    //                 datasets: [{
    //                     label: 'Number of sales',
    //                     data: [1, 2, 3, 4, 5, 6],
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 1)',
    //                         'rgba(153, 102, 255, 1)',
    //                         'rgba(255, 159, 64, 1)'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 scales: {
    
    //                 }
    //             }
    //         });
    return(
     <div className="bg-gray-200">
        <div className="flex">
            <div className="bg-yellow-400 w-64 ">
                <div className=" bg-yellow-500">
                    <div className="p-5 text-xl text-gray-200 uppercase font-bold">super corp</div>
                </div>
                <div>
                    <div className="p-5 text-xs text-gray-200 uppercase font-bold">Pages</div>
                </div>
    
                <div className="flex m-5 mt-2">
                    <div>
                        <img className="w-5 h-5" src={dashboard} alt=""/>
                    </div>
                    <div className="mx-3 text-sm text-gray-100"><Link to="/">Home</Link></div>
                </div>
    
    
                <div className="flex m-5 mt-2">
                    <div>
                        <img className="w-5 h-5" src={customers} alt=""/>
                    </div>
                    <div className="mx-3 text-sm text-gray-100"><Link to="/worker">Workers</Link></div>
                </div>
    
    
                <div className="flex m-5 mt-2">
                    <div>
                        <img className="w-5 h-5" src={orders} alt=""/>
                    </div>
                    <div className="mx-3 text-sm text-gray-100"><Link to="/attendance">Attendance List Of Workers</Link></div>
                </div>
    
    
                <div className="flex m-5 mt-2">
                    <div>
                        <img className="w-5 h-5" src={campaign} alt=""/>
                    </div>
                    <div className="mx-3 text-sm text-gray-100"><Link to="/employee_details">Add Worker</Link></div>
                </div>
    
    
                <div className="flex m-5 mt-2">
                    <div>
                        <img className="w-5 h-5" src={messages} alt=""/>
                    </div>
                    <div className="mx-3 text-sm text-gray-100">Messages</div>
                </div>
    
                <div className="flex m-5 mt-2">
                    <div>
                        <img className="w-5 h-5" src={apps} alt=""/>
                    </div>
                    <div className="mx-3 text-sm text-gray-100">Apps</div>
                </div>
    
                <div className="flex m-5 mt-2">
                    <div>
                        <img className="w-5 h-5" src={settings} alt=""/>
                    </div>
                    <div className="mx-3 text-sm text-gray-100">Settings</div>
                </div>
            </div>
    
            <div className="flex-1">
                <div>
    
                    <div className="bg-white px-2 py-0.5 h-18 flex">
                        <div className="left md:w-3/4 sm:w-1/3 flex p-3">
                            <img src={person} className="w-10 h-10" alt=""/>
                            <span className="block p-2">Worker</span>
                        </div>
                        <div className="right md:w-1/4 sm:w-2/3 flex ">
                            <img src={search} className="w-7 h-7 bg-gray-100 rounded-full p-1 mx-2 my-4" alt=""/>
                            <img src={message} className="w-7 h-7 bg-gray-100 rounded-full p-1 mx-2 my-4" alt=""/>
                            <img src={warning} className="w-7 h-7 bg-gray-100 rounded-full p-1 mx-2 my-4" alt=""/>
                            <a href="#" className="mt-4 mx-2 text-indigo-500">Logout</a>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-200 m-7 p-6">
                    <div className="text-4xl text-gray-800 font-medium">Good Morning, Worker👋</div>
                    <div className="mt-4">These are the stats for today, have a good day.</div>
                </div>
    
                <div className="card-container flex m-7 space-x-6 ">
                    <div className="card w-1/2 bg-white p-4">
                        <div><img src={wallet} className="w-10 h-10" alt=""/></div>
                        <div className="font-bold text-xl text-gray-700">Super plus</div>
                        <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">Sales</div>
                        <span className="font-bold text-3xl">$25,647</span>
                        <span className="bg-green-500 text-white p-1 rounded-full text-sm font-bold align-text-top">+58%</span>
                        <canvas id="chart1"></canvas>
                    </div>
                    <div className="card w-1/2 bg-white p-4">
                        <div><img src={wallet} className="w-10 h-10" alt=""/></div>
                        <div className="font-bold text-xl text-gray-700">Super plus</div>
                        <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">Sales</div>
                        <span className="font-bold text-3xl">$25,647</span>
                        <span className="bg-red-500 text-white p-1 rounded-full text-sm font-bold align-text-top">-9%</span>
                        <canvas id="chart2"></canvas>
    
                    </div>
                </div>
    
    
                <div className="card-container flex m-7 space-x-6 ">
                    <div className="card w-1/2 bg-white p-4">
                        <div><img src={wallet} className="w-10 h-10" alt=""/></div>
                        <div className="font-bold text-xl text-gray-700">Super plus</div>
                        <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">Sales</div>
                        <span className="font-bold text-3xl">$25,647</span>
                        <span className="bg-green-500 text-white p-1 rounded-full text-sm font-bold align-text-top">+58%</span>
                        <canvas id="chart3"></canvas>
                    </div>
                    <div className="card w-1/2 bg-white p-4">
                        <div><img src={wallet} className="w-10 h-10" alt=""/></div>
                        <div className="font-bold text-xl text-gray-700">Super plus</div>
                        <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">Sales</div>
                        <span className="font-bold text-3xl">$25,647</span>
                        <span className="bg-red-500 text-white p-1 rounded-full text-sm font-bold align-text-top">-9%</span>
                        <canvas id="chart4"></canvas>
    
                    </div>
                </div>
    
                <div className="card-container flex m-7 space-x-6 ">
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
                                                <img src={github} className="w-8 h-8" alt=""/>
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
                                                <img src={github} className="w-8 h-8" alt=""/>
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
                                                <img src={github} className="w-8 h-8" alt=""/>
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
                                                <img src={github} className="w-8 h-8" alt=""/>
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
                                                <img src={github} className="w-8 h-8" alt=""/>
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
                                                <img src={github} className="w-8 h-8" alt=""/>
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
                </div>
    
            </div>
        </div>
    </div>
    );
}
export default WorkerDashboard;