import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../src/App.css";


function Navagation({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="dark" expand="lg" text="light" fixed="top" id="nav">
      <Container>
      <Navbar.Brand href="#home" bg="dark" text="light" onClick={() => handlePageChange('Home')}>
          Katy Brown
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto color-nav" text="light">
          
            <Nav.Link id="about-link" href="#About" onClick={() => handlePageChange('About')}>About</Nav.Link>
            <Nav.Link id="portfolio-link" href="#Portfolio" onClick={() => handlePageChange('Portfolio')} >Portfolio</Nav.Link>
            <Nav.Link id="portfolio-link" href="#Resume" onClick={() => handlePageChange('Resume')} >Resume</Nav.Link>
            <Nav.Link id="contact-link" href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navagation;
