import React from "react";
import "./InfoText.css";

const InfoText = props => (
  <div className="col-md-8">
  <h1 className="info-headings">{props.heading}</h1>
  <p className="info-text">{props.text}</p>
  </div>
);


export default InfoText;