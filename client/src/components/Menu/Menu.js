import React from "react";
import "./Menu.css";

export const Menu = ({ children }) => {
  return (
    <div className="menu-overflow-container">
      <p className="menu-heading">Menu</p>
      <ul className="menu-group">
        {children}
      </ul>
    </div>
  );
};