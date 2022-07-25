import React, { Component } from "react";
import imsImage from "../../src/assets/imsImage.jpg";
import weatherImage from "../../src/assets/weatherApp.jpg";
import foodImage from "../../src/assets/Food Dictionary Landing.png";
import jateImage from "../../src/assets/jateImage.jpg";
import employeeTracker from "../../src/assets/employeeTracker.jpg";
import workDayPlanner from "../../src/assets/workDayPlanner.jpg";
import "../../src/Images.css"
//import Header from "./Header";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: "",
      imagesArray: [
        imsImage,
        weatherImage,
        foodImage,
        jateImage,
        employeeTracker,
        workDayPlanner,
      ],
      showModal: false,
      popImages: "",
    };
  }
  render() {
    let imagesArray = this.state.imagesArray;
    const images = imagesArray.map((images, index) => {
      return <img className="singleImage" src={images} key={index} />;
    });
    return <div className="Portfolio">
    <div className="imageGallery">{images}</div>
    </div>;
  }
}

export default Portfolio;
