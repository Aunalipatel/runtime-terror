import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage.js";
// import Navbarcustom from "./components/navbar";
import AdminDashboard from "./components/AdminDashboard.js";
import Login from "./components/login.components";
import SignUp from "./components/signup.components";
import Navbarcustom from "./components/navbar";
import E_details from "./components/employees_detais";
// import AdminDashboard from "./components/AdminDashboard.js";
// C:\Users\adity\Documents\GitHub\codeshastra_unof\frontend\src\App.js
// import Login from "./components/Login.js";
// this is a demo change
function App() {
  return (
    <div className="App">
      <Router>
        <Navbarcustom />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/sign-in" component={Login} />
          <Route path="/admin-signin" component={SignUp} />
          {/* <Route path="/login" exact component={Login} /> */}
          <Route path="/admin" exact component={AdminDashboard} />
          <Route path="/employee_details" component={E_details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
