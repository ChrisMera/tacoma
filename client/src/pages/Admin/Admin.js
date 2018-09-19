import React, { Component } from "react";
import "./Admin.css";
// import { Col, Row, Container } from "../../components/Grid";

class Admin extends Component {
  state = {

  };

  render() {
    return (
      <div> 
        <div className="container">
          <div className="row">
            <div className="col-md-2 menu">
            Menu
            </div>
            <div className="col-6">
            Info Dash
            </div>
            <div className="col">
            API
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Admin;