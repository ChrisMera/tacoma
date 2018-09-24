import React, { Component } from "react";
import { Container } from "../Grid";
import API from"../../utils/API";
import "./DashMenu.css";

class DashMenu extends Component {
  state = {
    quote: [],
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
          quote: res.data
          // companyName: res.data[0].company,
          // name: res.data[0].name,
          // phone: res.data[0].phone,
          // email: res.data[0].email,
          // origin: res.data[0].origin,
          // destination: res.data[0].destination,
          // freightType: res.data[0].freightType,
          // weight: res.data[0].estWeight,
          // frequency: res.data[0].frequency
        })
        // console.log(this.state.quote)
      })
      .catch(err => console.log(err));
  }

  loadQuote = () => {
    API.getQuote()
      .then(res => {
        // console.log(res);
        this.setState({
          quote: res.data
        })
        console.log(this.state.quote)
      })
  }


  render() {
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

        <div className="modal" id="newQuotesModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">New Request From:</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.state.quote.map(companyName => (
                  <a key={companyName._id} href={companyName._id} onClick={() => this.loadQuote(companyName._id)} className="modal-btn" data-dismiss="modal">{companyName.company}</a>
                ))}

              </div>
              <div className="modal-footer">
                <button type="button" className="modal-btn" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
     </Container>
    )
  }
}

// class ModalButton extends Component {
//   render() {
//     return(
//       this.props.text.map(company => {
//         <button type="button" className="modal-btn">company.company</button>}
//         )
//     )
//   }
// }

export default DashMenu;