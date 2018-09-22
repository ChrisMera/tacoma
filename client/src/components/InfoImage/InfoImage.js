import React from "react";
import "./InfoImage.css";

const InfoImage = props => (
  <div className="col-md-4">
    <img className="info-photo" src={props.image} alt={props.alt} />
  </div>
);


export default InfoImage;