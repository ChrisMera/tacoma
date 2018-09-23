import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import Footer from "../../components/Footer";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
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
      password: this.state.password
    })
      .then(res => console.log("Working" + res))
      .catch(err => console.log(err));
    
  };

  render() {
    return (
      <div>
        <Jumbotron />
          <Container fluid>
            <Col size="md-9">
              <Row>
              <InfoText heading="Who We Are" text="The ship's all yours. If the scanners pick up anything, report it immediately. All right, let's go. Hey down there, could you give us a hand with this? TX-four-one-two. Why aren't you at your post? TX-four-one-two, do you copy? Take over. We've got a bad transmitter. I'll see what I can do. You know, between his howling and your blasting everything in sight, it's a wonder the whole station doesn't know we're here. Bring them on! I prefer a straight fight to all this sneaking around. We found the computer outlet, sir. Plug in. He should be able to interpret the entire Imperial computer network."/>
              <InfoImage image="https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=756f069c98c96a701453b1e27630e961&auto=format&fit=crop&w=2250&q=80" alt="highway interchange at night"/>
              </Row>
              <Row>
              <InfoImage image="https://images.unsplash.com/photo-1512217536414-d92543c79ca1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=daaaff038337c93168d2b5c78313e21d&auto=format&fit=crop&w=3240&q=80" alt="highway interchange at night" />
              <InfoText heading="We'll Deliver for You" text="We count thirty Rebel ships, Lord Vader. But they're so small they're evading our turbo-lasers! We'll have to destroy them ship to ship. Get the crews to their fighters. Luke, let me know when you're going in. I'm on my way in now... Watch yourself! There's a lot of fire coming from the right side of that deflection tower. I'm on it. Squad leaders, we've picked up a new group of signals. Enemy fighters coming your way."/>
              </Row>
              <Row>
              <InfoText heading="World Class Customer Service" text="The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. Were on a diplomatic mission. If this is a consular ship...were is the Ambassador? Commander, tear this ship apart until you've found those plans and bring me the Ambassador. I want her alive! There she is! Set for stun! She'll be all right. Inform Lord Vader we have a prisoner."/>
              <InfoImage image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9144d03989599996b0108a4fa2f32dca&auto=format&fit=crop&w=2250&q=80" alt="highway interchange at night"/>
              </Row>
            </Col>
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
                    // onClick={this.handleFormSubmitInitial}
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