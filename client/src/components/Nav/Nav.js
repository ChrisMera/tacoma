import React from "react";
import "./Nav.css";
import Login from "../Login";
// import Logout from "../Logout";

const Nav = () => (
  <nav className="navbar sticky-top navbar-expand-lg" id="custom-navbar">
    <p className="navbar-brand">Tacoma Transport</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon">Menu</span> */}
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button type="button" className="quote-btn" data-toggle="modal" data-target="#requestQuote">
            Request Quote
          </button>
        </li>
        <li className="nav-item">
            <Login />
            {/* <Logout /> */}
        </li>
          {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Options
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/add-job"><i class="fas fa-plus fa-xs"></i> Add Job</a>
                  <a className="dropdown-item" href="/add-ref"><i class="fas fa-plus fa-xs"></i> Add Reference</a>
                  <a className="dropdown-item" href="/add-edu"><i class="fas fa-plus fa-xs"></i> Add Education</a>
              </div>
          </li>
          <li className="nav-item active">
              <a className="nav-link" href="/searchjob">Search</a>
          </li>
          <li className="nav-item active">
              <a className="nav-link" href="/logout">Sign Out</a>
          </li> */}
      </ul>
    </div>
  </nav>
);

export default Nav;