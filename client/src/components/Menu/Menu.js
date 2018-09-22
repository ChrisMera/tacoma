import React from "react";
import "./Menu.css";

export const Menu = ({ children }) => {
  return (
    <div className="menu-overflow-container">
      <h5 className="menu-heading">Menu</h5>
      <ul className="menu-group">
        {children}
      </ul>
    </div>
  );
};