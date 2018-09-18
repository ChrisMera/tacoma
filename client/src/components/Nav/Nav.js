import React from "react";
import "./Nav.css";

const Nav = () => (
    <nav className="navbar sticky-top navbar-expand-lg" id="custom-navbar">
        <a className="navbar-brand" href="/"><i class="fas fa-truck-moving"></i> Tacoma Transport</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon">Menu</span> */}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
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