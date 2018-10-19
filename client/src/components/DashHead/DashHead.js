import React, { Component } from "react";
import "./DashHead.css";

class DashHead extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <p className="user">
        Welcome
      </p>
    );
  }
}

export default DashHead;
