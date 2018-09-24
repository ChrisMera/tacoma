import React, { Component } from "react";
import { Col } from "../Grid";
import API from "../../utils/API";
import "./ProposeQuote.css";

class ProposeQoute extends Component {
  state = {
    quote: "",
    message: ""
  };
  
  handleInputChange = event => {
    // const { name, value } = event.target;
    this.setState({
      quote: event.target.value,
      message: event.target.value
    });
  };

  updateQuote = id => {
    API.updateQuote(id)
      
  }

  handleSubmit = event => {
    event.preventDefault();
    this.updateQuote();
    console.log(this.state.quote);
  };

  render() {
    return (
      <div className="row propose-row">
        <Col size="md-4">
          <form>
            <div className="form-group">
              <label htmlFor="proposeQuote">Propose Quote:</label>
              <input
                // type="text"
                className="form-control"
                value={this.state.quote}
                onChange={this.handleInputChange.bind(this)}
                // id="proposeQuote" 
                placeholder="Quote"
              />
            </div>
            <button type="submit" onClick={this.handleSubmit} className="modal-btn">Submit</button>
          </form>
        </Col>
        <Col size="md-8">
          <form>
            <div className="form-group">
              <label htmlFor="requestMoreMessage">Request More Info:</label>
              <textarea
                className="form-control"
                id="requestMoreMessage"
                // value={this.state.message}
                // onChange={this.handleInputChange}
                rows="4"
              >
              </textarea>
            </div>
            <button type="submit" onClick={this.handleSubmit} className="modal-btn">Submit</button>
          </form>
        </Col>
      </div>
    )
  }

};

export default ProposeQoute;