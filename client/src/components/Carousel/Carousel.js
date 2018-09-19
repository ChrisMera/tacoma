import React from "react";
import "./Carousel.css"

const Carousel = () => (
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://img2.cgtrader.com/items/828394/158105ca14/tesla-semi-truck-3d-model-max-obj-3ds-fbx.jpg" alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://fsmedia.imgix.net/84/b3/27/d4/f228/405f/b85f/e124a49cf748/the-tesla-semi-and-nikola-one.jpeg" alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://cdllife.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-16-at-2.46.30-PM.png" alt="Third slide" />
      </div>
    </div>
  </div>
);

export default Carousel;