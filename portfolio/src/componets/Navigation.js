import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../src/index.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function navagation() {
  return (
    <Navbar bg="dark" expand="lg" text="light">
      <Container>
        <Navbar.Brand href="#home" bg="dark" text="light">
          Katy Brown
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto color-nav" text="light">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navagation;
