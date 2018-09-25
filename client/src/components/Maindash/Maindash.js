import React, { Component } from "react";
import { Col, Row } from "../Grid";
import DashHead from "../DashHead";
import DashMenu from "../DashMenu";
import GoogleMap from "../GoogleMap";
import ProposeQuote from "../ProposeQuote";
import "./Maindash.css";

class Maindash extends Component {
  state = {

  };

  render() {
    return(
      <div className="dash-wrapper">
      <DashHead />
      <div className="row dash-row">
        <Col size="md-2 quote-menu">
          <DashMenu>

          </DashMenu>
        </Col>
        <Col size="md-10 map">
          <Row>
            <GoogleMap />
          </Row>
        
            <ProposeQuote />
         
        </Col>
      </div>
      </div>
    )
  }
}

export default Maindash;