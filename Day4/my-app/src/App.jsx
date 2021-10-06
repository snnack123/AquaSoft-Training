import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Employees from "./Employee_Components/Employee";
import Projects from "./Project_Components/Project";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Employee" component={Employees}></Route>
        <Route path="/Project" component={Projects}></Route>
      </Switch>
    </Router>
  );
}

export default App;
