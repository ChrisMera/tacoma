import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import AdminModal from "../AdminModal";
import API from"../../utils/API";
import "./DashMenu.css";

class DashMenu extends Component {
  state = {
    quote: {},
    companyName: "",
    name: "",
    phone: "",
    email: "",
    origin: "",
    destination: "",
    freightType: "",
    weight: "",
    frequency: ""
  };

  componentDidMount() {
    this.loadQuotes();
  }

  loadQuotes = () => {
    API.getNewQuotes()
      .then(res => {
        console.log(res);
        this.setState({
          quote: res.data[0],
          companyName: res.data[0].company,
          name: res.data[0].name,
          phone: res.data[0].phone,
          email: "",
          origin: "",
          destination: "",
          freightType: "",
          weight: "",
          frequency: ""
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.quote);
    return (
    <Container fluid>
      <ul className="menu-list">
        <li>
          <p className="menu-item">Company Name:</p>
          <p className="db-item">{this.state.companyName}</p>
        </li>
        <li>
          <p className="menu-item">Name:</p>
          <p className="db-item">{this.state.name}</p>
        </li>
        <li>
          <p className="menu-item">Phone:</p>
          <p className="db-item">{this.state.phone}</p>
        </li>
      </ul>

        <AdminModal modalTitle={this.state.companyName} />
     </Container>
    )
  }
}

export default DashMenu;