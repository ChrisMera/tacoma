import React from "react";
import DashMenu from "../../components/DashMenu";

export const MenuItem = props => (
  <div>
    <li className="menu-group-item">
      <button type="button" class="menu-btn" data-toggle="modal" data-target="#newQuotesModal">
        New Quote Requests
      </button>
    </li>
    <li className="menu-group-item">
      <a className="menu-item" href="#">All Quote Requests</a>
    </li>
    <li className="menu-group-item">
      <a className="menu-item" href="#">Messages</a>
    </li>
    <li className="menu-group-item">
      <a className="menu-item" href="#">Quote Responses</a>
    </li>
    <li className="menu-group-item">
      <a className="menu-item" href="#">Update Users</a>
    </li>
  </div>

);