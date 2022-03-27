import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import i1 from "./images/house.png";
import i11 from "./images/home1.jpg";
import i12 from "./images/home2.jpg";
import i13 from "./images/home3.jpg";
// import ny from "./images/luxury.jpg";
import ny1 from "./images/newyork.jpg";
import ny2 from "./images/california.jpg";
import ny3 from "./images/chicago.jpg";
// import ny4 from "./images/ny.jpg";
import av from "./images/avatar.png";
function Homepage() {
  return (
    // <div className="Homepage">
    <>
      {/* <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="#" className="flex items-center py-4 px-2" style={{marginLeft:"-72px"}}>
                  <img
                    src={i1}
                    alt="Logo"
                    className="h-8 w-8 mr-1"
                  />
                  <span className="font-semibold text-gray-500 text-lg">
                    Prime Builders
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 font-semibold "
                >
                  Home
                </Link>
                <Link
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Services
                </Link>
                <Link
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  About
                </Link>
                <Link
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">BUILD A BETTER WAY</span>
            <span
              className="block text-green-300 xl:inline"
              style={{ margin: "16px" }}
            >
              Architecturally Designed, Innovative and Custom build
            </span>
          </h1>
          <p className="mt-5 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            At prime properties, we ensure that our clients get the best
            properties at affordable prices. Luxury is our priority and budget
            is our constrain. Pick and choose from 1000+ properties across the
            globe.
          </p>
          <br />
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            At prime properties, we ensure that our employees get the best
            opportunities and are compensated very well.
          </p>
          mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start
          rounded-md shadow
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div>
              <Link
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10"
                style={{marginTop:"16px"}}
              >
                View properties
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
              >
                Explore Locations
              </Link>
            </div>
          </div>
        </div>
      </main> 

      <div className="flex mt-5 p-10 justify-center" id="ongoing">
        <h2 className="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-500">
          Ongoing Projects
        </h2>
        <section id="ongoing"></section>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={i11} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Orchid Villa</div>
            <p className="text-gray-700 text-base">
              Located in california
              <br />
              Orchid villa offers luxury with a modern touch and is cuurently
              halfway under construction.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-bold text-green-300 mr-2 mb-2">
              $ 12/hr
            </span>
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
              href="/work-here"
              className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full"
            >
              Work Here!
            </button>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={i12} alt="River" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">577 Gracia</div>
            <p className="text-gray-700 text-base">
              Located in Mumbai.
              <br /> 577 Gracia offers luxury with a modern touch and is 25%
              complete
              <br /> Equipped with a rainwater harvesting system, this property
              is eco-friendly.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-bold text-green-300 mr-2 mb-2">
              $ 15/hr
            </span>
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
              href="/work-here"
              className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full"
            >
              Work Here!
            </button>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={i13} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nexa Epitome</div>
            <p className="text-gray-700 text-base">
              Located in Pune
              <br />
              Nexa Epitome is equipped with beautiful lighting and is 80%
              complete.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-bold text-green-300 mr-2 mb-2">
              $ 13.5/hr
            </span>
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
              href="/work-here"
              className="bg-green-500 hover:bg-green-700 text-white font-bold  py-1 px-4 rounded-full"
            >
              Work Here!
            </button>
          </div>
        </div>
      </div>

      {/* <div
        className="py-20 h-screen bg-gray-500 "
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))",
        }}
      >
        <div className="container mx-auto px-6 mt-40">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Experience Luxury Like Never Before
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            50+ Exotic locations across the globe.
          </h3>

          <button className="bg-transparent text-white border-2 font-bold rounded-1xl py-4 px-8 shadow-lg uppercase tracking-wider">
            See Completed Projects
          </button>
        </div>
      </div> */}
      {/* <div className="flex justify-center mt-5 p-10">
        <h2 className="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-500">
          Locations
        </h2>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={ny1}
            alt=""
            style={{ height: "671.6px" }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">New York</div>
            <p className="text-gray-700 text-base">
              New York City comprises 5 boroughs sitting where the Hudson River
              meets the Atlantic Ocean. At its core is Manhattan, a densely
              populated borough that’s among the world’s major commercial,
              financial and cultural centers. Its iconic sites include
              skyscrapers such as the Empire State Building and sprawling
              Central Park.
            </p>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={ny2} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">San Fransisco</div>
            <p className="text-gray-700 text-base">
              San Francisco, officially the City and County of San Francisco, is
              a cultural, commercial, and financial center in the U.S. state of
              California{" "}
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={ny3} alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">New York</div>
            <p className="text-gray-700 text-base">
              New York City comprises 5 boroughs sitting where the Hudson River
              meets the Atlantic Ocean. At its core is Manhattan, a densely
              populated borough that’s among the world’s major commercial,
              financial and cultural centers. Its iconic sites include
              skyscrapers such as the Empire State Building and sprawling
              Central Park.
            </p>
          </div>
        </div>
      </div> */}

      <div
        className="py-20"
        // style="background: linear-gradient(315deg, #D1FAE5 0%, #10B981 74%)"
        style={{ backgroundColor: "mediumaquamarine" }}
      >
        {/* <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Save upto 50% on broker commisions
          </h2>
          <h3
            className="text-2xl mb-8 text-gray-200"
            style={{ color: "white" }}
          >
            Lowest brokerage fees
          </h3>

          <button className="bg-white font-bold rounded-2xl py-4 px-8 shadow-lg uppercase tracking-wider">
            Enquire
          </button>
        </div> */}
      </div>

      {/* <div className="flex mt-5 p-10 justify-center">
        <h2 className="text-3xl font-medium text-gray-500">
          What clients say about us ?
        </h2>
      </div> */}
      {/* <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p className="text-gray-600 dark:text-white">
            <span className="font-bold text-green-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-green-500 text-lg">”</span>
          </p>
          <div className="flex flex-grow items-center mt-4 bg-green-100 rounded-full">
            <Link href="#" className="block relative">
              <img
                alt="profil"
                src={av}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </Link>
            <div className="flex flex-col ml-2 justify-between ">
              <span className="font-semibold text-green-500 text-sm">
                Jean Miguel
              </span>
              <span className="dark:text-gray-400 text-xs flex items-center">
                User of Tail-Kit
                <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p className="text-gray-600 dark:text-white">
            <span className="font-bold text-green-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-green-500 text-lg">”</span>
          </p>
          <div className="flex flex-grow items-center mt-4 bg-green-100 rounded-full">
            <Link href="#" className="block relative">
              <img
                alt="profil"
                src={av}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </Link>
            <div className="flex flex-col ml-2 justify-between ">
              <span className="font-semibold text-green-500 text-sm">
                Jean Miguel
              </span>
              <span className="dark:text-gray-400 text-xs flex items-center">
                User of Tail-Kit
                <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
          <p className="text-gray-600 dark:text-white">
            <span className="font-bold text-green-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-green-500 text-lg">”</span>
          </p>
          <div className="flex flex-grow items-center mt-4 bg-green-100 rounded-full">
            <Link href="#" className="block relative">
              <img
                alt="profil"
                src={av}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </Link>
            <div className="flex flex-col ml-2 justify-between ">
              <span className="font-semibold text-green-500 text-sm">
                Jean Miguel
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="flex mt-5 p-10 md:justify-center ">
        <h2 className="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-500">
          Contact us
        </h2>
      </div> */}

      {/* <div className="mt-5 flex p-10 justify-center items-center bg-green-300 ">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-white-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p className="text-green-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
              <p className="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
              <p className="text-gray-600 text-xs italic">
                Re-size can be disabled by set by resize-none / resize-y /
                resize-x / resize
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-green-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                style={{ marginLeft: "220px" }}
                type="button"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div> */}
      <footer className="pt-40 px-4 divide-y bg-coolGray-100 text-coolGray-800 ">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Link
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
                <img src={i1} alt="Logo" className="h-8 w-8 mr-2" />
              </div>
              <span className="self-center text-2xl font-semibold text-gray-500">
                Prime properties
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-green-500">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#">Features</Link>
                </li>
                <li>
                  <Link href="#">Integrations</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-green-500">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#">Privacy</Link>
                </li>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-green-500">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#">Public API</Link>
                </li>
                <li>
                  <Link href="#">Documentation</Link>
                </li>
                <li>
                  <Link href="#">Guides</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div
                className="uppercase text-green-500"
                style={{ marginLeft: "70px" }}
              >
                Social media
              </div>
              <div
                className="flex justify-start space-x-3"
                style={{ marginLeft: "65px" }}
              >
                <Link
                  href="#"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-green-500">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </>
    // </div>
  );
}

export default Homepage;
