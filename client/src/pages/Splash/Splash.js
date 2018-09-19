import React, { Component } from "react";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import "./Splash.css";

class Splash extends Component {
  state = {
    quotes: [],
    name: "",
    company: "",
    origin: "",
    destination: "",
    freightType: "",
    estWeight: "",
    frequency: "",
    phone: "",
    email: "",
    message: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmitInitial = event => {
    // event.preventDefault();
    if (this.state.origin && this.state.destination) {
      // API.saveBook({
      //   title: this.state.title,
      //   author: this.state.author,
      //   synopsis: this.state.synopsis
      // })
      //   .then(res => this.loadBooks())
      //   .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Carousel />
        <div className="splash-container">
          <div className="splash-row">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#requestQuote">
              Request A Quote
            </button>
          </div>
        </div>

        <div className="modal" id="requestQuote" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Request a Quote</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="quoteName">Name</label>
                    <input type="text" 
                    value={this.state.name} 
                    onChange={this.handleInputChange} 
                    name="name" 
                    className="form-control" 
                    id="quoteName" 
                    aria-describedby="nameHelp" 
                    placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label for="companyName">Company Name</label>
                    <input type="text" 
                    value={this.state.company} 
                    onChange={this.handleInputChange} 
                    name="company" 
                    className="form-control" 
                    id="companyName" 
                    placeholder="" />
                  </div>
                  <div className="form-group">
                    <label for="originCity">Pick Up City (Required)</label>
                    <input type="text" 
                    value={this.state.origin} 
                    onChange={this.handleInputChange} 
                    name="origin" 
                    className="form-control" 
                    id="originCity" 
                    placeholder="" />
                  </div>
                  <div className="form-group">
                    <label for="deliveryCity">Delivery City (Required)</label>
                    <input type="text" 
                    value={this.state.destination} 
                    onChange={this.handleInputChange} 
                    name="destination" 
                    className="form-control" 
                    id="deliveryCity" 
                    placeholder="" />
                  </div>
                    <button type="button" 
                    className="btn btn-primary"
                    data-dismiss="modal"
                    data-toggle="modal" 
                    data-target="#requestQuoteContd"
                    disabled={!(this.state.origin && this.state.destination)}
                    // onClick={this.handleFormSubmitInitial}
                    >
                      Submit
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal" id="requestQuoteContd" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Just a Few More Details...</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="freightSelect">Type of Freight (Required)</label>
                    <select 
                      value={this.state.freightType}
                      onChange={this.handleInputChange}
                      name="freightType"
                      className="form-control" 
                      id="freightSelect"
                    >
                        <option>Select One</option>
                        <option>Refrigerated</option>
                        <option>Dry Van</option>
                        <option>Flatbed</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="estWeight">Estimated Weight (lbs)</label>
                    <input type="text"
                      value={this.state.estWeight}
                      onChange={this.handleInputChange}
                      name="estWeight"
                      className="form-control"
                      id="estWeight"
                      placeholder="" />
                  </div>
                  <div className="form-group">
                    <label for="frequency">Frequency</label>
                    <input type="text"
                      value={this.state.frequency}
                      onChange={this.handleInputChange}
                      name="frequency"
                      className="form-control"
                      id="frequency"
                      placeholder="" />
                  </div>
                  <div className="form-group">
                    <label for="phone">Phone</label>
                    <input type="text"
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="" />
                  </div>
                  <div className="form-group">
                    <label for="email">Email (Required)</label>
                    <input type="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="" />
                  </div>
                  <div className="form-group">
                    <label for="message">Message</label>
                    <input type="text"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      name="message"
                      className="form-control"
                      id="message"
                      placeholder="Any additional details?" />
                  </div>
                  <button type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#createAccount"
                    disabled={!(this.state.freightType && this.state.email)}
                    // onClick={this.handleFormSubmitInitial}
                  >
                    Submit
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal" id="createAccount" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Create Account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="quoteName">Create</label>
                    <input type="text"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      name="name"
                      className="form-control"
                      id="quoteName"
                      aria-describedby="nameHelp"
                      placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label for="companyName">Company Name</label>
                    <input type="text"
                      value={this.state.company}
                      onChange={this.handleInputChange}
                      name="company"
                      className="form-control"
                      id="companyName"
                      placeholder="" />
                  </div>
                  <div className="form-group">
                    <label for="originCity">Pick Up City</label>
                    <input type="text"
                      value={this.state.origin}
                      onChange={this.handleInputChange}
                      name="origin"
                      className="form-control"
                      id="originCity"
                      placeholder="" />
                  </div>
                  <div className="form-group">
                    <label for="deliveryCity">Delivery City</label>
                    <input type="text"
                      value={this.state.destination}
                      onChange={this.handleInputChange}
                      name="destination"
                      className="form-control"
                      id="deliveryCity"
                      placeholder="" />
                  </div>
                  <button type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    disabled={!(this.state.origin && this.state.destination)}
                    onClick={this.handleFormSubmitInitial}
                  >
                    Submit
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default Splash;