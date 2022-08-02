import React from "react";
import homeImage from "../../src/assets/homePagePic.jpg";
import Container from "react-bootstrap/Container";
import graffiti from "../../src/assets/graffiti.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../src/App.css";
import "../../src/Home.css";
import navagation from "./Navigation";
import Fader from "./Fader";



function Home(){
  return (
  
    
    <div className="home-comtainer">
    <p>Hello World</p>
    <div className="graffiti-picture">
    <img src={graffiti} />
    </div>
  </div>

  
  )
}


export default Home