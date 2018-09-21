import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Menu, MenuItem } from "../../components/Menu";
import Maindash from "../../components/Maindash";
import "./Admin.css";

class Admin extends Component {
  state = {

  };

  render() {
    return (
      <Container fluid>
        <Row className="info-dash">
          <Col size="md-2" className="menu">
            <Menu>
              <MenuItem></MenuItem>
            </Menu>
          </Col>
          <Col size="md-8">
            <Maindash />
          </Col>
          <Col size="md-2">
          api
          </Col>
        </Row>
      </Container>
    )
  }

}

export default Admin;