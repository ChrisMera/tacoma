import React, { Component } from "react";
import { Col } from "../Grid";
import API from "../../utils/API";
import "./ProposeQuote.css";

class ProposeQoute extends Component {
  state = {
    quote: ""
  };
ß
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    API.updateQuote({
      quote: this.state.quote
    })
    console.log(this.state.quote)
  };

  render() {
    return(
      <div className="row propose-row">
          <Col size="md-4">
            <form>
              <div className="form-group">
                <label htmlFor="proposeQuote">Propose Quote:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={this.state.quote}
                  onChange={this.handleInputChange}
                  // id="proposeQuote" 
                  placeholder="Quote" 
                />
              </div>
              <button type="submit" onClick={this.handleSubmit} className="main-dash-btn">Submit</button>
            </form>
          </Col>
          <Col size="md-8">
          <form>
            <div className="form-group">
              <label htmlFor="requestMoreMessage">Request More Info:</label>
              <textarea 
                className="form-control" 
                id="requestMoreMessage" 
                
                onChange={this.handleInputChange}
                rows="4"
              >
                </textarea>
            </div>
            <button type="submit" onClick={this.handleSubmit} className="main-dash-btn">Submit</button>
          </form>
          </Col>
      </div>
    )
  }

};

export default ProposeQoute;