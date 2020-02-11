import React from "react";
// import logo from "./logo.svg";
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import NavBar from "./components/NavBar/NavBar";
import { HashRouter as Router, Route, } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
