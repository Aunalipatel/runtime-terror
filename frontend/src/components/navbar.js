import "../styles/styles.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import i1 from "./images/house.png";
import { Context } from "../App";
function Navbarcustom() {
  const { usernav, setUsernav } = useContext(Context);
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("username"));
    const loggedIn = JSON.parse(localStorage.getItem("loggedin"));
    if (loggedIn) {
      // console.log("navname");
      setUsernav(loggedInUser);
      // setFullName(loggedInName);
    }
  }, [usernav]);

  const logout = () => {
    setUsernav(null);
    console.log("cfguhvhjbn");
    localStorage.setItem("loggedin", JSON.stringify(false));
  };
  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link
                  href="#"
                  className="flex items-center py-4 px-2"
                  style={{ marginLeft: "-72px" }}
                >
                  <img src={i1} alt="Logo" className="h-8 w-8 mr-3" />
                  <span className="font-semibold text-gray-500 text-lg">
                    MAAJ
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 font-semibold "
                >
                  Home
                </Link>
                <Link
                  to="/admin"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 font-semibold "
                >
                  Services
                </Link>
                {usernav ? (
                  <Link
                    to="/worker"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >
                    Admin
                  </Link>
                ) : (
                  ""
                )}

                {usernav ? (
                  <div>
                    <Link
                      to="/sign-in"
                      className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                      style={{ marginLeft: "750px" }}
                    >
                      {usernav}
                    </Link>
                    <Link
                      to="/"
                      onClick={logout}
                      className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                      // style={{ marginLeft: "750px" }}
                    >
                      Logout
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/sign-in"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                    style={{ marginLeft: "750px" }}
                  >
                    Login
                  </Link>
                )}

                {/* <Link
                  to="/sign-up"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  SignUp
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbarcustom;
