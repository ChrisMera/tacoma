import React, { Component } from "react";
import "./FuelAPI.css";

class FuelAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://api.eia.gov/category/?api_key=08ca6dd2b9ba373857ac6df3d614673a&category_id=20081201")
      .then(res => res.json())
      .then( 
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          // console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <div className="Api-wrapper">test</div>
          {/* {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))} */}
        </ul>
      );
    }
  }
}


export default FuelAPI;