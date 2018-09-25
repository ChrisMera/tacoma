import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Menu, MenuItem } from "../../components/Menu";
import Maindash from "../../components/Maindash";
import FuelAPI from "../../components/FuelAPI";
import "./Admin.css";

class Admin extends Component {
  state = {

  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2">
            <Menu>
              <MenuItem></MenuItem>
            </Menu>
          </Col>
          <Col size="md-8">
            <Maindash />
          </Col>
          <Col size="md-2 api-info">
            <FuelAPI />
          </Col>
        </Row>
      </Container>
    )
  }

}

export default Admin;