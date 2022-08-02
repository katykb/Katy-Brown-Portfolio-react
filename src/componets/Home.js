import React from "react";
import homeImage from "../../src/assets/homePagePic.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../src/App.css";
import "../../src/Home.css"
import navagation from "./Navigation";
import Fader from "./Fader";

export default function Home() {
  return (
    <Container>
      <img src={homeImage} className="home-pic"></img>
       
      <h1>katyBrown</h1>
  
    </Container>
  );
}
