import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 30.455109,
      lng: -84.253419 },
      zoom: 6
  }
  render() {
    return (
      <div className="map-image">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={40.7473310}
            lng={-73.8517440}
            // text="{'Where's Waldo?' }"
        />
        </GoogleMapReact>
      </div>
    )
  }
}