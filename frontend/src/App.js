import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Homepage from "./components/homepage.js";
// import Navbarcustom from "./components/navbar";
import AdminDashboard from "./components/AdminDashboard.js";
import Login from "./components/login.components";
import SignUp from "./components/signup.components";
import Navbarcustom from "./components/navbar";
import E_details from "./components/employees_detais";
import Worker from "./components/Worker";
import Attendance from "./components/Attendance";
import Profile from "./components/Profile";
import WorkerDashboard from "./components/WorkersDashboard";
// import AdminDashboard from "./components/AdminDashboard.js";
// C:\Users\adity\Documents\GitHub\codeshastra_unof\frontend\src\App.js
// import Login from "./components/Login.js";
// this is a demo change
export const Context = createContext();
function App() {
  const [usernav, setUsernav] = useState(null);
  return (
    <Context.Provider value={{ usernav, setUsernav }}>
      <div className="App">
        <Router>
          <Navbarcustom />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/admin-signin" component={SignUp} />
            {/* <Route path="/login" exact component={Login} /> */}
            <Route path="/admin" exact component={AdminDashboard} />
            <Route path="/worker" exact component={Worker} />
            <Route path="/employee_details" component={E_details} />
            <Route path="/attendance" exact component={Attendance} />
            <Route path="/worker/profile/:id" exact component={Profile} />
            <Route path="/workerd" exact component={WorkerDashboard} />
          </Switch>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
