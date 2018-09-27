import React, { Component } from "react";
import "./FuelAPI.css";

class FuelAPI extends Component {
  state = {
    items: [],
    description: ""
  }

  componentDidMount() {
    fetch("http://api.eia.gov/series/?api_key=" + process.env.key_one + "&series_id=PET.EMD_EPD2D_PTE_NUS_DPG.W")
      .then(res => res.json())
      .then( 
        (result) => {
          this.setState({
            items: result.series[0].data[0],
          });
          console.log(result.series[0]);
        }
      )
  }

  render() {
      return (
          <div className="Api-wrapper">
           <h6 className="api-heading">Weekly National Diesel Prices</h6>
           <p className="api-text">${this.state.items[1]}</p>
          </div>
      );
    }
}


export default FuelAPI;