import React, { Component } from "react";
import { Col } from "../Grid";
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
                <label htmlFor="proposeQuote">Propose Quote:</label>
                <input type="text" className="form-control" id="proposeQuote" placeholder="Quote" />
              </div>
              <button type="submit" onClick={this.handleSubmit} className="main-dash-btn">Submit</button>
            </form>
          </Col>
          <Col size="md-8">
          <form>
            <div className="form-group">
              <label htmlFor="requestMoreMessage">Request More Info:</label>
              <textarea className="form-control" id="requestMoreMessage" rows="4"></textarea>
            </div>
            <button type="submit" onClick={this.handleSubmit} className="main-dash-btn">Submit</button>
          </form>
          </Col>
      </div>
    )
  }

};

export default ProposeQoute;