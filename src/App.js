import React from "react";
// import logo from "./logo.svg";
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import NavBar from "./components/NavBar/NavBar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import githublogo from "./";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route to="/" component={Home} />
        {/* <Route to="/about" component={About} /> */}
      </Router>
    </div>
  );
}

export default App;
