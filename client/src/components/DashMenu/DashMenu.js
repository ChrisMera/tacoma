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
    this.loadQuotes()
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
          email: res.data[0].email,
          origin: res.data[0].origin,
          destination: res.data[0].destination,
          freightType: res.data[0].freightType,
          weight: res.data[0].estWeight,
          frequency: res.data[0].frequency
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
          <p className="quote-title">Company Name:</p>
          <p className="quote-item">{this.state.companyName}</p>
        </li>
        <li>
          <p className="quote-title">Name:</p>
          <p className="quote-item">{this.state.name}</p>
        </li>
        <li>
          <p className="quote-title">Phone:</p>
          <p className="quote-item">{this.state.phone}</p>
        </li>
        <li>
          <p className="quote-title">Email:</p>
          <p className="quote-item">{this.state.email}</p>
        </li>
        <li>
          <p className="quote-title">Origin:</p>
          <p className="quote-item">{this.state.origin}</p>
        </li>
        <li>
          <p className="quote-title">Destination:</p>
          <p className="quote-item">{this.state.destination}</p>
        </li>
        <li>
          <p className="quote-title">Freight Type:</p>
          <p className="quote-item">{this.state.freightType}</p>
        </li>
          <li>
            <p className="quote-title">Weight:</p>
            <p className="quote-item">{this.state.weight}</p>
          </li>
        <li>
          <p className="quote-title">Frequency:</p>
          <p className="quote-item">{this.state.frequency}</p>
        </li>
      </ul>

        <AdminModal modalTitle={this.state.companyName} />
     </Container>
    )
  }
}

export default DashMenu;