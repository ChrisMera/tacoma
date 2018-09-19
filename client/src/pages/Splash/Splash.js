import React, { Component } from "react";
import Carousel from "../../components/Carousel";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import "./Splash.css";

class Splash extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  render() {
    return (
      <Carousel>

      </Carousel>
    )
  }
};

export default Splash;