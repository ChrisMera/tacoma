import React, { Component } from "react";
import "./Nav.css";
import Login from "../Login";
// import Logout from "../Logout";

class Nav extends Component {

  state = {
    isLoggedIn: false
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return(
    <nav className="navbar sticky-top navbar-expand-lg" id="custom-navbar">
      <p className="navbar-brand">Tacoma Transport</p>
          { !isLoggedIn ? (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button type="button" className="quote-btn" data-toggle="modal" data-target="#requestQuote">
                    Request Quote
                  </button>
                </li>
                <li className="nav-item">
                    <Login />
                </li>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                  Logout
                </li>
              </ul>
            </div>
          )}
    </nav>
    );
  }
}

export default Nav;