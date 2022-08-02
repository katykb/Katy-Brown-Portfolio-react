import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../src/App.css";
import resumePic from "../../src/assets/resume.svg";
import katyResume from "../../src/assets/katy-resume.jpg";

export default function Resume() {
  return (
    <Container>
      <Row>
        <Col lg={2} sm={12}>
          <img
            
            className="resume-pic"
            src={resumePic}
            alt="resume"
          />
        </Col>
        <Col lg={5} className="resume-image">
          <a href="https://docs.google.com/document/d/1Tb4SNxR1EodbOQlBrYYDV4OqxZwLbArJjiXich2_iv0/edit?usp=sharing">
            <img  className="katy-resume-pic" src={katyResume} alt="resume" />
            </a>
        </Col>
      </Row>
    </Container>
  );
}
