import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employees from "./Employee_Components/Employee";
import Projects from "./Project_Components/Project";
import Register from "./RegisterAndLogin/Register";
import Login from "./RegisterAndLogin/Login";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home" component={Home}></Route>
        <Route path="/Employee" component={Employees}></Route>
        <Route path="/Project" component={Projects}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route path="/Login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

//Switch: este unic prin faptul că redă un traseu exclusiv. În schimb, fiecare <Rută> care se potrivește cu locația se afișează inclusiv

export default App;
