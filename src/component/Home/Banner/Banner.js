import React from "react";
import { Carousel } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-500"
            src="https://images.unsplash.com/photo-1495822892661-2ead864e1c7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Best Bangladesh Travel agency</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-500"
            src="https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Best Bangladesh Travel agency</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-500"
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Best Bangladesh Travel agency</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
