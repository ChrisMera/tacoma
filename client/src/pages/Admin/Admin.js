import React, { Component } from "react";
import { Menu, MenuItem } from "../../components/Menu";
import "./Admin.css";
// import { Col, Row, Container } from "../../components/Grid";

class Admin extends Component {
  state = {

  };

  render() {
    return (
      
        <div className="container">
          <div className="row">
            <div className="col-md-2 menu">
            <Menu>
              <MenuItem></MenuItem>
            </Menu>
            </div>
            <div className="col-md-8 info-dash">
            Info Dash
            </div>
          </div>
        </div>
     
    )
  }

}

export default Admin;