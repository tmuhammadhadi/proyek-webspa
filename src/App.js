import React, { Component } from "react";
import { Routes, NavLink, HashRouter, } from "react-router-dom";
import './style.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>

        <div>
          <h1 className="title">Single Page Application </h1>
          <ul className="header">
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li> <NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes exact path="/" component={Home}/>
            <Routes exact path="/about" component={About}/>
            <Routes exact path="/contact" component={Contact}/>
          </div>

        </div>
      </HashRouter>
    );
  }

}

export default Main;