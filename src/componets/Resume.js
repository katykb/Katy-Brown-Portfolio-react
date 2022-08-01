import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../src/App.css";
import resumePic from "../../src/assets/resume.svg"
import Header from "./Header"

export default function Resume() {
    return (
      <Container>
        <Row>
          <Col lg={2} sm={12}>
              <img className="resume-pic"src={resumePic} alt="resume" />
              </Col>
          <Col lg={5} className="resume-image">
          
          </Col>
        </Row>
      </Container>
    );
  }