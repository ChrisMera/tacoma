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

      <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="/">Tacoma Transport</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <button type="button" className="quote-btn" data-toggle="modal" data-target="#requestQuote">
                Request Quote
              </button>
            </li>
            <li class="nav-item">
              <Login />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;