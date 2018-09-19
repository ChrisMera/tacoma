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
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmitQuote = event => {
    event.preventDefault();

    API.saveQuote({
      name: this.state.name,
      company: this.state.company,
      origin: this.state.origin,
      destination: this.state.destination,
      freightType: this.state.freightType,
      estWeight: this.state.estWeight,
      frequency: this.state.frequency,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
      password: this.state.password,
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    
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
                    <label for="freightSelect">Type of Freight</label>
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
                    <textarea type="text"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      name="message"
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Any additional details?" ></textarea>
                  </div>
                  <button type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#createAccount"
                    disabled={!(this.state.email)}
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
                <p>Creating an account has several benefits:</p>
                <ul>
                  <li>Check the status of your quote</li>
                  <li>See who your CSR is</li>
                  <li>Accept your quote offer</li>
                </ul>
                <p>Otherwise, we will contact you at the email you have provided.</p>
                <form>
                  <div className="form-group">
                    <label for="password">Create a password for your account:</label>
                    <input type="text"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      className="form-control"
                      id="password"
                      aria-describedby="passwordHelp"
                      placeholder="Password" />
                  </div>
                  <button type="submit"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    disabled={!(this.state.password)}
                    onClick={this.handleFormSubmitQuote}
                  >
                    Submit Quote
                    </button>
                  <button type="sumbit"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={this.handleFormSubmitQuote}
                  >
                    No Thanks
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