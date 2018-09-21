import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import DashHead from "../DashHead";
import DashMenu from "../DashMenu";
import "./Maindash.css";

class Maindash extends Component {
  state = {

  };

  render() {
    return(
      <div>
      <DashHead />
        <div className="col-md-2 dash-menu">
          <DashMenu>

          </DashMenu>
        </div>
      </div>
    )
  }
}

export default Maindash;