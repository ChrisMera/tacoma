import React from "react";
import "./Carousel.css"

const Carousel = () => (
  <div id="carouselControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://insideevs.com/wp-content/uploads/2016/07/2015-Freightliner-Cascadia-Autonomous-Truck-24.jpg" alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://img2.cgtrader.com/items/828394/158105ca14/tesla-semi-truck-3d-model-max-obj-3ds-fbx.jpg" alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://res.cloudinary.com/firstpost/image/upload/q_auto,f_auto,fl_lossy/nw18-firstpost/2017/11/Tesla-Semi-truck-768.png" alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

);

export default Carousel;