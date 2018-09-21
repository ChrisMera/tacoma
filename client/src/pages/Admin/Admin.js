import React, { Component } from "react";
import { Menu, MenuItem } from "../../components/Menu";
import "./Admin.css";
import { Col, Row, Container } from "../../components/Grid";

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
          test
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