import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../src/App.css";
import aboutPic from "../../src/assets/aboutPic.jpg"
import Header from "./Header"

export default function About() {
  return (
    <Container className="grid">
      <Row>
        <Col lg={2} sm={12}>
            <img className="about-pic"src={aboutPic} alt="myPic" />
            </Col>
        <Col lg={5} className="about-paragraph">
          Hello-
          <p>
            My name is Katy. Thanks for taking a look at my work and I
            appreciate your time!
          </p>
          <p>
            Software Engineer bringing over 10 years of merchandising
            experience and a service-oriented mindset to a career in technology.
          
            I am creative, hard-working and ingenuitive. I am excited about 
            building applications that are UI and UX focused as well as efficient.
            <br />
            <br />
            Through my years of professional experience, I have acquired several
            transferable skills that I will bring to your organization. I will
            apply time management, organization, teamwork and communication to
            all future endeavors.
            <br />
            <br />
            In addition to professional experience, I have held several
            volunteer roles with schools for five plus years. I have had the
            privilege of assisting teachers in the classroom, planning
            school-wide fundraising events, being a member of a parent and
            teacher committee and assisting with administrative duties
            <br />
            <br />I look forward to putting my tech skills and previous
            experiences to work.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
