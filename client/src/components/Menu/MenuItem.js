import React from "react";
import "./Menu.css";


export const MenuItem = props => (
  <div>
    <li className="menu-group-item">
      <button type="button" className="menu-btn" data-toggle="modal" data-target="#newQuotesModal">
        New Quote Requests
      </button>
    </li>
    <li className="menu-group-item">
      <a className="menu-item">All Quote Requests</a>
    </li>
    <li className="menu-group-item">
      <a className="menu-item">Messages</a>
    </li>
    <li className="menu-group-item">
      <a className="menu-item">Quote Responses</a>
    </li>
    <li className="menu-group-item">
      <a className="menu-item">Update Users</a>
    </li>
  </div>
);