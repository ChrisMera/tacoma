import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import InfoText from "../../components/InfoText";
import InfoImage from "../../components/InfoImage";
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
    password: "",
    quote: ""
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
      quote: this.state.quote
    })
      .then(res => console.log("Working" + res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
          <Container fluid>
            <Col size="md-9">
              <Row>
              <InfoText heading="Who We Are" text="Tacoma Transport, Inc. began operations in 2011 transporting dedicated van goods up and down the east coast from Florida to Massachusetts. Arcenio Mera, founder, began with the same entrepreneurial, enthusiastic spirit that is one of Tacoma's core values today. In 2013 Tacoma expanded operations when, in addition to it's dedicated van services, began transporting temperature controlled shipments throughout the southeast and northeast. We have extensive experience in doing business with freight brokers and shippers alike. Our objective is to operate truckload businesses that are industry leading while providing cost-effective solutions for our customers."/>
              <InfoImage image="https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=756f069c98c96a701453b1e27630e961&auto=format&fit=crop&w=2250&q=80" alt="bright office"/>
              </Row>
              <Row>
              <InfoImage image="https://images.unsplash.com/photo-1512217536414-d92543c79ca1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=daaaff038337c93168d2b5c78313e21d&auto=format&fit=crop&w=3240&q=80" alt="highway interchange at night" />
              <InfoText heading="We'll Deliver for You" text="Tacoma Transport, Inc. is a provider of dry van and refrigerated truckload transportation services committed to safety, service, and damage-free delivery. The main commodities of freight transported are retail store merchandise, consumer products, manufactured products and grocery products. We are committed to transparency throughout the transportation of your freight to effectively track your loads with unmatched visibility. To get started you can simply request a transportation quote by clicking on the link above or by reaching out to us by phone!"/>
              </Row>
              <Row>
              <InfoText heading="World Class Customer Service" text="Tacoma Transport, Inc. handles every load as if it were our own, and we are constantly finding new ways to better serve our customers. Our attentive management style emphasizes communication, transperancy, and respect. We are honest and ethical in all our business dealings, starting with how we treat one another. At Tacoma we do what is right for our customers and our employees. We provide outstanding service throughout the US with an unparalleled capacity to meet your seasonal demands and surges."/>
              <InfoImage image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9144d03989599996b0108a4fa2f32dca&auto=format&fit=crop&w=2250&q=80" alt="city skyline and interchange view"/>
              </Row>
            </Col>
            <Footer />
          </Container>

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
                    className="modal-btn"
                    data-dismiss="modal"
                    data-toggle="modal" 
                    data-target="#requestQuoteContd"
                    disabled={!(this.state.origin && this.state.destination)}
                    >
                    Next <i class="fas fa-arrow-right"></i>
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
                    className="modal-btn"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#createAccount"
                    disabled={!(this.state.email)}
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
                    <input type="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      className="form-control"
                      id="password"
                      aria-describedby="passwordHelp"
                      placeholder="Password" />
                  </div>
                  <button type="submit"
                    className="modal-btn"
                    data-dismiss="modal"
                    disabled={!(this.state.password)}
                    onClick={this.handleFormSubmitQuote}
                  >
                    Create Account
                    </button>
                  <button type="sumbit"
                    className="modal-btn"
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