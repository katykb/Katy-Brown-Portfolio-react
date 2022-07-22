import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imsImage from "../../src/imsImage.jpg"
import weatherImage from "../../src/weatherApp.jpg"
import foodImage from "../../src/Food Dictionary Landing.png"

export default function projectExamples() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={imsImage}
          alt="First slide"
          id="ims-image"
        />
        <Carousel.Caption>
          <h3>Inventory Management System</h3>
          <p>Technology Used: JavaScript, Handlebars, SQL, MySQL2, CSS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={weatherImage}
          alt="Second slide"
          id="weather-image"
        />
        <Carousel.Caption>
          <h3>Weather Search</h3>
          <p>Technology Used: HTML, CSS, JavaScript</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foodImage}
          alt="Third slide"
          id="food-image"
        />
        <Carousel.Caption>
          <h3>Food Dictionary</h3>
          <p>
          Technology Used: HTML, CSS, JavaScript, Materialize CSS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
