import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import MainDash from "../Maindash";
import "./ProposeQuote.css";

class ProposeQoute extends Component {
  state = {

  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return(
      <div className="row propose-row">
          <Col size="md-4">
            <form>
              <div className="form-group">
                <label for="proposeQuote">Propose Quote:</label>
                <input type="text" className="form-control" id="proposeQuote" placeholder="Quote" />
              </div>
              <button type="submit" onClick={this.handleSubmit} className="main-dash-btn">Submit</button>
            </form>
          </Col>
          <Col size="md-8">
          <form>
            <div className="form-group">
              <label for="requestMoreMessage">Request More Info:</label>
              <textarea class="form-control" id="requestMoreMessage" rows="4"></textarea>
            </div>
            <button type="submit" onClick={this.handleSubmit} className="main-dash-btn">Submit</button>
          </form>
          </Col>
      </div>
    )
  }

};

export default ProposeQoute;