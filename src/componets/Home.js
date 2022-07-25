import React from "react";
import homeImage from "../../src/assets/homePagePic.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../src/App.css";
import navagation from "./Navigation";
import Fader from './Fader'

export default function Home() {
  return <img className="home-pic" src={homeImage} alt="home-graffiti" />;
}
